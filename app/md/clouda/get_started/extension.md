#Extension


## 概述

Extension用来实现http功能的包装，如Session，Cookie，fileupload，Form等，每个Extension使用固定的接口形式，接收request与response，并返回一个处理包装对象。一般来说，Extension不包含业务功能，只是扩展http行为能力的一种包装，所以使用方式相对简单没有复杂配置，配置写在http.conf对象下即可，无需单独配置。


## 定义Extension

除系统默认载入的Extension以外，如果需要自定义Extension，可以使用该方法添加。

	httpd.defineExtension(name,handle);

参数说明：

* name

	Extension的名称
	
	
* handle

	Extension的功能定义
	

## 使用Extension

定义好Extension后，就可以在定义Filter和Action中使用，例如我们定义了一个名为“Cookies”的Extension，即可在Filter或者Action使用，方法如下：

	httpd.defineFilter("testFilter",["cookies"],function(default_request,default_response,cookie){
		var req = default_request;
		var res = default_response;

		cookie.set("name","huangxin")
			  .set("age","17")
			  .set("company","baidu", {
			  	  expires : new Date(Date.now() + 1000000)
			  });
		//filter中需要显示的调用next()执行下一个filter
		this.next();
	});

或者

	httpd.defineAction("testAction",["cookies"],function(default_request,default_response,cookie){
		var req = default_request;
		var res = default_response;

		cookie.set("name","huangxin")
			  .set("age","17")
			  .set("company","baidu", {
			  	  expires : new Date(Date.now() + 1000000)
			  });
	});