# rapid-mysql API文档

## 概述

rapid-mysql是用于rapid框架的mysql插件，对mysql库的重新封装，针对公有集群化云数据库优化了连接管理、接口复用、读写分离等。

使用方法如下：

	var db = require('rapid-mysql').db('mysql://user:password@host_or_ip:port/dbname');

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

<h3 class="api"> db </h3>

	Static function db(url:string | options:object)

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
	
	var db = require('rapid-mysql').db('mysql://root:root@localhost/test?maxRetries=1');

#### 使用集群

通过配置clusters选项来使用集群。

clusters接受三种数据类型：对象、字符串数组、字符串。

- 对于含字符串的数组（如：`['192.168.0.1:3306','192.168.1.2:3306']`），我们将每个字符串中抽取host/port/username/password/database等信息并转换为对象，按照对象数组处理

 - 对于字符串类型，字符串将被以`|`切割为字符串列表后按字符串数组类型处理

实例：
	
	var db = require('rapid-mysql').db('mysql://root:root@localhost/test?clusters=192.168.0.1%7C192.168.0.2');
	var db = require('rapid-mysql').db({
    	port: 3306,
    	username: 'root',
    	password: 'root',
    	cluster: [{host:'192.168.0.1'}, '192.168.0.2']
	});

> 温馨提示：

>  - 使用cluster不会影响`db`函数的hash过程。如果两次调用`db`传入的参数的hash结果相同，则以首次调用`db`传入的参数
为准
>  - 每个cluster对象的属性将覆盖上层对象的对应属性。此外cluster接受额外的属性：
>   - slave: 是否为从库，从库的连接不会被insert/select/update/delete等语句选中。默认为false。
>   - forbidCount: 连接失败时屏蔽次数，如果当前库连接失败，在接下来的若干次请求中不会尝试连接此地址。默认为10
>  - cluster无法覆盖maxAgents等上文提到的其它选项
>  - 非slave连接被释放时，当有写操作在排队申请连接时将优先处理。

<h3 class="api">QueryContext::query</h3>

	function QueryContext::query(query:string, optional data:array, optional cb:function)

从当前上下文获取连接并执行查询，返回`Promise`对象。

`QueryContext` 是对Agent/Transaction等类的抽象，封装了数据操作相关的函数，具体的连接建立过程由派生类实现

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

  - fields: 查询返回结果包含的字段列表，接受字符串或数组
  - orderBy: 排序字段，接受字符串或数组，默认为null
  - desc: 是否降序排序，默认为false
  - groupBy: 分组字段，接受字符串或数组，默认为null
  - distinct: 是否返回值去重，默认为false,
  - limit: 限制返回条数，接受数字或数组，默认为null：返回全部
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

尝试获取一个值，如果找不到，则返回ERR_NOT_FOUND，返回：Promise对象

实例：

	db.findOne('test',{id:1}).then(function(obj){
 		// obj.id===1
	});

<h3 class="api">QueryContext::insert</h3>

    function QueryContext::insert(tableName:string, values:object|array, optional options:object, optional cb:function)

插入记录到数据库。其中values为插入的值、值列表、子查询表达式，options为选项。

options接受以下字段：

 - ignore: 当PK|UK冲突时，忽略该记录，默认为false
 - onDuplicate: 当ignore为false且PK|UK冲突时，执行update
 - fields: 插入的字段名称。确定插入字段的方式为：
   - 如果指定了fields，则以指定的fields执行`INSERT INTO tableName (fields) values (...)`
   - 如果未指定fields，且values为对象数组，则以values[0]的keys作为fields
   - 否则，如果values为对象，则执行`INSERT INTO tableName set ...`
   - 否则，执行`INSERT into tableName values (...)`，
   - 如果values为二维数组/对象数组，则执行多条插入
 - subQuery: values类型为subQuery对象,执行`INSERT INTO tableName (fields) select xxx`形式插入。默认为false
 具体的subQuery格式参考`find`

实例：

     // INSERT into `test` set `name` = 'John'
    db.insert('test', {name:'John'}).then(function(ret){
       console.log(ret.insertId);
    });
    
     // INSERT into test(name) values ('Tom')
    db.insert('test', 'Tom', {fields:'name'}};
    
     // INSERT into test values (null,'Jack',123)
    db.insert('test', [null, 'Jack',123]};
    
    // INSERT into test(name,gid) values('Jack',123)
    db.insert('test', ['Jack',123], {fields:['name', 'gid']};
    
    // 这个例子和上一个等同（不在fields列表内的字段将被忽略）
    db.insert('test', {name: 'Jack', gid: 123, fid: 789}, {fields:['name', 'gid']};
    
    // INSERT into test(name,gid) values('Tom',124),('Jerry',124)
    db.insert('test', [['Tom',124], ['Jerry', 124]], {fields:['name', 'gid']};
    
    // 这个例子和上一个等同（以第一个对象的keys为准）
    db.insert('test', [
        {name: 'Tom', gid: 124},
        {name: 'Jerry', gid: 125, fid: 789}
    ]);
    
    // 这个例子和上一个等同
    db.insert('test', [
        {name: 'Tom', gid: 124, fid:789},
        {name: 'Jerry', gid: 125, fid: 789}
    ], {fields:['name', 'gid']});
    
    // 使用String对象代表函数、表达式
    db.insert('test', {name: 'Tom', gid: Object('rand()*1000')});

    // 子查询
    db.insert('test', {
        tableName: 'old_test',
        fields: ['id', 'name', 'gid'],
        where : {id : {$gt: 100}}
    }, {
        ignore: true,
        subQuery: true,
        fields: ['id', 'name', 'gid']
    }
    
    // key冲突时，执行特定update
    // INSERT into test set id=100,count=1 ON DUPLICATE KEY UPDATE count=values(count)+1
    db.insert('test', {id: 100, count: 1}, {
        onDuplicate: 'count=values(count)+1'
    });

返回：Promise对象

<h3 class="api">QueryContext::update</h3>

    function update(tableName:string, values:object|array, optional options:object, optional cb:function)

执行update语句，其中values为更新的值，options为选项。

update支持的选项有：

  - fields: 更新的字段名称。
  - where: 查询条件
  

实例：

    db.update('test', 'Jerry', {
        fields:['name'], where: {id: 1}
    });
    
    db.update('test', {name:'Jerry', gid:1000}, {
        where: {id: 1}
    });
    
    db.update('test', ['Jerry', 1000], {
        fields:['name', 'gid'], where: {id: 1}
    });
    
    // 这个例子和上一个等同（不在fields列表内的字段将被忽略）
    db.update('test', {name:'Jerry', gid:1000, fid:0}, {
        fields:['name', 'gid'], where: {id: 1}
    });


返回：Promise对象

<h3 class="api">Agent::prepare</h3>

	function Agent::prepare(query:string, optional options:object)

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

	var stmt = db.prepare('SELECT * from user where id=?');
	

<h3 class="api">Statement</h3>

	function Statement(optional data:array, optional cb:function, optional noCache:boolean)

执行Statement。如果statement启用了cache，且之前有命中的请求未到期或未完成，且noCache不为true，则返回之前缓存的结果，返回`Promise对象`

实例：

	stmt([userid]).then(function(results){...});

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


