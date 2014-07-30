# 执行器（Action）


## 概述

Action用来实现最终的业务功能。


## 普通定义Action

在rapid中通常使用`rapid-httpserver.defineAction(name,depends,handle)`方法来定义一个Action，实例如下：

	rapid-httpserver.defineAction("index", function(){
		
		this.send("Hello World!");
	
	});
	
参数说明：

* name

	Action的名称，这个在配置路由时需要用到。
	
* depends

	Action中需要使用的依赖，可通过Extension定义，具体方法可查看Extension部分文档。

	
* handle

	业务功能函数。
	
	
## 直接使用Action

除了定义Action后再使用Action以外，还可以使用function()直接定义的方法来使用Action，方法如下：


	define("config.rapid-httpserver",{
		autoStart:true,
		mapping:[{
			doAction:function(){
				this.send("Hello,World");
			}
		}]	
		
	});






