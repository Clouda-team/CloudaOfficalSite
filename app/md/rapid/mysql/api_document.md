# rapid-mysql API文档

## 概述

rapid-mysql是用于rapid框架的mysql插件，对mysql库的重新封装，针对公有集群化云数据库优化了连接管理、接口复用、读写分离等。

使用方法如下：

	var db = require('rapid-mysql').getAgent('mysql://user:password@host_or_ip:port/dbname');

	db.query('SELECT * from tbl where id=?', [id], function(err, rows){
				...
			});

	db.query('SELECT * from tbl').then(function(rows){
				...
			}, function(err){
				...
				}
			);

## API

<h3 class="api"> getAgent </h3>

	Static function getAgent(url:string | options:object)

创建新的连接上下文/获取已有连接上下文，返回`Agent`对象。

url与options格式请参照[felixge/node-mysql](https://github.com/felixge/node-mysql#establishing-connections)

rapid-mysql根据`hostname:port+user:password+dbname`来查找已创建的Agent对象

其它选项：

  * maxAgents
  
	最大同时连接数（默认：30）
		
  * keepAliveTimeout
	
	连接复用的超时等待时间（单位：ms，默认：5000ms）。连接被释放后，超过该时间没有请求时则连接断开
	
  * keepAliveMaxLife
  	
  	连接复用的最长生命周期（单位：ms，默认：30000ms）。连接被建立后，超过该时间后不再被复用
  	
  * retryTimeout
  	
  	连接失败的重试间隔（默认: 400ms）
  	
  * maxRetries
  	
  	连接失败最大重试次数（默认：3）

实例：
	
	var db = require('rapid-mysql').getAgent('mysql://root:root@localhost/test?maxRetries=1');

#### 使用集群

通过配置clusters选项来使用集群。

clusters接受三种数据类型：对象、字符串数组、字符串。

- 对于含字符串的数组（如：`['192.168.0.1:3306','192.168.1.2:3306']`），我们将每个字符串中抽取host/port/username/password/database等信息并转换为对象，按照对象数组处理

 - 对于字符串类型，字符串将被以`|`切割为字符串列表后按字符串数组类型处理

实例：
	
	var db = require('rapid-mysql').getAgent('mysql://root:root@localhost/test?clusters=192.168.0.1%7C192.168.0.2');
	var db = require('rapid-mysql').getAgent({
    	port: 3306,
    	username: 'root',
    	password: 'root',
    	cluster: [{host:'192.168.0.1'}, '192.168.0.2']
	});

> 温馨提示：

>  - 使用cluster不会影响`getAgent`函数的hash过程。如果两次调用`getAgent`传入的参数的hash结果相同，则以首次调用`getAgent`传入的参数
为准
>  - 每个cluster对象的属性将覆盖上层对象的对应属性。此外cluster接受额外的属性：
>   - slave: 是否为从库，从库的连接不会被insert/select/update/delete等语句选中。默认为false。
>   - forbidCount: 连接失败时屏蔽次数，如果当前库连接失败，在接下来的若干次请求中不会尝试连接此地址。默认为10
>  - cluster无法覆盖maxAgents等上文提到的其它选项
>  - 非slave连接被释放时，当有写操作在排队申请连接时将优先处理。

<h3 class="api">QueryContext::query</h3>

	function QueryContext::query(query:string, optional data:array, optional cb:function)

从当前上下文获取连接并执行查询，返回`Promise`对象。

关于Promise的使用请参考[kriskowal/q](https://github.com/kriskowal/q)

实例：

	db.query('SELECT 1+1 as result').then(function(results){...});

> 温馨提示：
> Agent/Transaction等类派生于QueryContext，所以它们的实例可使用query/findOne等方法。

<h3 class="api">QueryContext::find</h3>

	function QueryContext::find(tableName:string, optional condition:object, optional options:object, optional cb:function)

执行一次查询，从`tableName`指定的表中找到满足`condition`指定条件的行，并返回`options.fields`指定的列。

实例：

	db.find('user',{
    	'id' : { $lt : 12345}
	}, {
    	fields: ['id','name'],
    	orderBy: 'id',
    	desc: true,
    	groupBy: 'gid'
	})

options接受以下字段：

  - fields: 返回的字段列表，字符串或数组
  - orderBy: 排序字段，默认为null
  - desc: 是否降序排序，默认为null
  - groupBy: 分组
  - distinct: 是否返回值去重，默认为false,
  - limit: 限制返回条数，默认为null：返回全部
  - progress: 是否逐条返回结果，默认为false

> 温馨提示：options.progress为true时，cb将被忽略

#### 查询条件对象

`find`接受的查询条件对象为`{key: rule}`形式。一个对象的多个key，以`and`连接。

例如：

	{id:123,password:'456'} 
	
	将被编译为 
	
	(id=123) and (password='456')
	
rule接受以下类型的数据：

  - 数字
  - 字符串
  - 查询条件表达式对象
  
find支持以下查询条件表达式：

  - $or: 接受一个数组，数组的每一项以or进行连接。如：`{$or:[{id:123}, {password:'456'}]}` 对应 `(id=123) or (password='456')`
  $or不能作为某个key对应的规则(如：`{id: {$or: [...]}}`是不允许的)。
  - $gt: 某个key大于某个值
  - $gte: 某个key大于等于某个值
  - $lt: 某个key小于某个值
  - $lte: 某个key小于等于某个值
  - $in: 某个key在某个集合内。集合接受数组或子查询。
  - $nin: 某个key不在某个集合内。
  - $ne: 某个key不等于某个值
  - $like: 某个key符合mysql的like表达式
  - $nlike: 某个key不符合mysql的like表达式
  - $regex: 某个key符合mysql的正则表达式
  - $nregex: 某个key不符合mysql的正则表达式
 
同一个查询条件表达式可以指定多个操作符，如：`{id: {$gt:100, $lt:200}}`

子查询接受字符串(如: `SELECT id from user`)或对象类型。对象类型子查询包含`tableName`,`condition`,`fields`,`orderBy`等字段。

<h3 class="api">QueryContext::findOne</h3>

	function QueryContext::findOne(tableName:string, optional condition:object, optional options:object, optional cb:function)

尝试获取一个值，如果找不到，则返回ERR_NOT_FOUND

<h3 class="api">Agent::prepareStatement</h3>

	function Agent::prepareStatement(query:string, optional options:object)

创建一个查询语句。查询语句可以被稍后执行，并允许对请求进行合并、缓存，返回`Statement对象`

可选参数有：

  * useCache 
  		
  	使用查询cache。相同的查询参数的查询将被合并为一次请求。（默认：true）
  	
  * cacheTime
  
  	cache有效期。从查询完成开始计算，查询结果在有效期内将一直有效，不再发送新的请求（默认：0）
  	
  * keyHasher
  
  	将value进行hash的函数。默认：Array.join
  
> 温馨提示：使用update类语句时请务必禁用cache

实例：

	var stmt = db.prepareStatement('SELECT * from user where id=?');
	

<h3 class="api">Statement::query</h3>

	function Statement::query(optional data:array, optional cb:function, optional noCache:boolean)

执行Statement。如果statement启用了cache，且之前有命中的请求未到期或未完成，且noCache不为true，则返回之前缓存的结果，返回`Promise对象`

实例：

	stmt.query([userid]).then(function(results){...});

<h3 class="api">Agent::begin</h3>

	function Agent::begin(optional cb:function)

使用事务。begin将申请一个非slave连接，并发送`begin`命令，当连接成功后，将一个Transaction对象传递到回调，返回`Promise对象`。

Transaction继承于QueryContext，所以可以在Transaction对象上使用query/findOne等方法。

实例：

	db.begin().then(function(trans){
    	return trans.query('UPDATE user set score=score+1 where id=?',[12345]).then(function(){
        	return trans.commit();
    	});
	});
	

<h3 class="api">Transaction::commit</h3>

	function Transaction::commit(optional cb:function)

发送commit并结束事务，返回`Promise对象`。

<h3 class="api">Transaction::rollback</h3>

	function Transaction::rollback(optional cb:function)

发送rollback并结束事务


