# clouda-core

> clouda-core，是用于Clouda+ Framework中进行资源管理与载入控制的核心部份。

## 概述

Clouda将一个系统的各种资源进行划分后抽像为三类资源，即Connfig(配置信息)，Resource(运行时可变资源)，Plugin(可运行的提供功能的内容)，三类资源通过相互间的交叉引用构成整个系统的运行时架构。 所有开发过程中都需要解决资源的管控，clouda-core将主要用于提供这三类资源管理及载入方案。

* clouda.plugin 

	提供可执行功能的部分被定义为插件。每个插件都将实现一种特定的能力(如包装数据源访问，提供httpServer或socketServer的包装能力等。)

* clouda.config 

	系统启动前被载入的并且一般在运行时不会产生变化的配置信息被归为config。

* clouda.resource 

	在系统运行时产生的，整个运行过程中会产生变化的数据被归类为resource。

其中config与resource在运行时并没有差异，只是在名称上做了区分。


## 如何使用clouda-core？

本节将结合实例详细介绍如何使用clouda-core，并结合实例简单介绍clouda-core的运行过程。

（1）如果需要使用clodua-core，就需在js文件使用下面的方法引入

	require("clouda-core")
	
当执行`require("clouda-core")`时，将自动提供名称为"clouda"的全局对像，以及defin、watch、use等三个方法。

（2）检测ROOR_DIR、USER_DIR、CONF_DIR等三个全局常量是否存在，如果不存在会自动创建以下默认值。

	clouda.ROOT_DIR = GLOBAL.ROOT_DIR = path.join( process.argv[1] || __dirname, "../");
	clouda.USER_DIR = GLOBAL.USER_DIR = path.join(ROOT_DIR , "./app/");
	clouda.CONF_DIR = GLOBAL.CONF_DIR = path.join(ROOT_DIR , "./conf/");
	
（3）自动检测CONF_DIR是否存在，以及其下是否有可载入的.js文件，若有则进行载入，每个载入的文件应该用来定义config，增加resource，注册简单的plugin等动作，可以使用以下写法：

	clouda.resource.define("appName","Clouda+ App Framework");
		
	clouda.config.define("clouda-httpserver",{
		port : 8888,
		autoStart : true
	});
		
	clouda.plugin.define("sayHi",function(cb){
		cb(null,{
			say:function(namy){
					return "Hi," + name
				}
		});
	});
	
或者使用下面的精简写法：

	define({
		"resource.appName":"Clouda+ App Framework",
		"config.clouda-httpserver" : {
			port : 8888,
			autoStart : true
		},
		"plugin.sayHi":{
			say:function(namy){
				return "Hi," + name;
			}
		}
	})
	
（4）对于一些相互间存在依赖的内容，可以使用`watch`方法添加一个监视动作。当需要监视的资源存在的时候触发回调，进行下一步操作。实例如下：

	// waiting resource
	clouda.resource.watch("appName",function(name){
		console.log("find appName is [%s], at time : %d" , name, Date.now());
		clouda.resource.watch("version",function(ver){		
			console.log("find version is [%s], at time : %d" , ver, Date.now());
			clouda.resource.define("fullAppName",name + "@" + ver);
			clouda.plugin.define("talker",function(cb){
				cb(null,{
					say:function(){
						console.log("hi, i am [" + clouda.resource.fullAppName + "]");
					}
				})
			})
		});
	})
		
	//延迟..
	setTimeout(function(){
		console.log("set appName at %d", Date.now());
		define({
			"resource.appName" : "CloudaAppFramework"
		});
			
		// 再延迟..
		setTimeout(function(){
			console.log("set version at %d", Date.now());
			define({
				"resource.version" : "0.0.1#Preview"
			});
		},1000)
			
	},1000)
		
	//直到有talker
	clouda.plugin.watch("talker",function(talk){
		console.log("find talker, at time : %d" , Date.now());
		talk.say();
	});
	
（5）基于以上的资源定义和使用的方式，可以使所有资源异步声明，因此做到对文件载入顺序和资源使用顺序的无依赖。

实例：

	//批量载入actions目录下所有以.conf.js结尾的文件。

 	clouda.requireDir("/actions",/.*\.conf\.js/);
 	
对于外部载入的文件,为了再次简化watch的写法, 提供另一种更为简单的use方法.为了示范无序载入,这里定义了两个外引文件. 分别为 include_1.js与include_2.js.并放在与启动文同目录下.
	
（1）编写include_1.js

	var name = use("resource.appName");
	var ver = use("resource.version");
		
	define("resource.fullAppName",name + "@" + ver);
		
	define("plugin.talker", {
		say:function(){
			console.log("hi, i am [" + clouda.resource.fullAppName + "]");
		}
	});
		
（2）编写include_2.js

	var talker = use("plugin.talker");
	talker.say();
		
（3）编写启动文件
		
	//载入目录下以  include开头的js文件
	clouda.requireDir("./",/include.*\.js/);
		
	//相同的延迟注册处理..
	setTimeout(function(){
		console.log("set appName at %d", Date.now());
		define({
			"resource.appName" : "CloudaAppFramework"
		});
			
		// 再延迟..
		setTimeout(function(){
			console.log("set version at %d", Date.now());
			define({
				"resource.version" : "0.0.1#Preview"
			});
		},1000)
			
	},1000); 
 	
  