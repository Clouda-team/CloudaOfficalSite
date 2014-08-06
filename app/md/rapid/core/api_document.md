# rapid-core API文档

## 全局属性

<h3 class="全局属性">ROOT_DIR</h3> 

指向启动文件所在的目录， 一般这个目录是应用的根目录。

<h3 class="全局属性">USER_DIR</h3>

用户文件的目录， 默认为: ROOT_DIR/app/

<h3 class="全局属性">CONF_DIR</h3>

存放配置文件的目录，默认为: ROOT_DIR/conf/，系统将自动监测这个目录并载入下面的js文件


## 对象

<h3 class="对象">watcher</h3>

一个可监测自身改变的名称空间对象， 提供define、watch、remove、unwatch四个方法。

#### define(name,value)

用于定义或改变当前空间的下属资源。

	var base = new Watcher();
	base.define("a",1);
	
#### watch(name,handle,once)

用于监视一资源的变化,无论对应资源是否存在。

	var base = new Watcher();
		
		base.watch("a",function(){
			console.log("a is %s",a);
		});
		
		base.define("a",1);
		
console会打印出：

	a is 1

#### use(name,[handle]);
取得name所指的资源, 当提供handle时,相当于watch once = true. 未提供时将直接同步返回,如果资源不存在,将返回undefined

#### remove(name)

用于删除一个已定义的资源

	var base = new Watcher();
		
	base.remove("a");


#### unwatch(name,handle)

删除对一个资源的一个监视方法。

	var base = new Watcher();
		
	base.unwatch("a"，function(){
		console.log("Stop watch!");
	});

## rapid-core属性

<h3 class="rapid-core属性">rapid.resource</h3>

一个watcher对像，用于存放在全局范围内运行时会改变的一类资源。

<h3 class="rapid-core属性">rapid.config</h3>

一个watcher对像，用于存放在全局范围内运行时不会改变或很少改变的一类配置资源

<h3 class="rapid-core属性">rapid.plugin</h3>

一个watcher对像，用于存放在在全局范内被公开访问的可执行的插件资源
	
## rapid-core方法

<h3 class="rapid-core方法">rapid.define(obj);</h3>

提供一个简单的方式来定义多个资源。方法接收一个map，其key为使用"."分隔的资源名称的表示，前半部份应该为resource、config、plugin三者之一。

实例：

	rapid.define({
    	"config.rapid-httpserver":{
           	autoStart : true ,
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
    	}
	});
	
<h3 class="rapid-core方法">rapid.watch(key1,key2,key3...keyN,callback);</h3>

提供一个简单的方式同时监测多个资源是否存在，当所有资源都存在时，执行一个回调并以相同的顺序将所需的资源传入callback中。其key应为使用"."分隔的资源名称的表示，前半部份应该为resource、config、plugin三者之一。

实例：

 	rapid.watch("plugin.talker",function(talker){
     	talker.say();
 	})

<h3 class="rapid-core方法">rapid.requireDir(path,limit,isAbsPath);</h3>

用于载入一个目录下的js文件。

参数说明：

* path 

	目标路径，类型：string。

* limit
	
	用于限制载入文件的一个正则对像，只载入名称相配置的文件，而忽略其它的。类型：{RegExp}

* isAbsPath 
	
	用于标识path所表示的是否为绝对路径。当isAbsPath不为true且path以 "/" 开头时，将会自动在前面补充 `ROOT_DIR + path`进行访问，类型：Boolean，默认为`false`。
	
实例：

	//载入目录下以include开头的js文件
	rapid.requireDir("./",/include.*\.js/);


<h3 class="rapid-core方法">rapid.createWatcher();</h3>

取得一个watcher对像的工厂方法



<h3 class="rapid-core方法">rapid.use(module);</h3>

同步返回module所表示的资源内容，如果不存在则返回undefined。

***当使用requireDIR()载入文件时, 框架将检测rapid.use()方法的使用,直到所需资源存在,才对相应文件进行require操作,并同步返回.***

>温馨提示: 

>当文件中存在循环依赖时,可能导至一个或多个文件永远不能被载入,所以使用时应当小心这种情况