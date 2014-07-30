#Filter

## 概述

每个Filter可作用于每个http访问的请求过程中，用来处理一些通用业务，如安全认证的过滤，日志打印，统计等任务，多个Filter采用链式调用，全部通过则执行最终的Action，在执行过程中可以中断执行（如认证检查失失败等）。


## 定义Filter

除系统默认载入的filter以外，如果需要自定义filter，可以使用该方法添加。

	httpd.defineFilter(name,depends,handle);
	
参数说明：

* name

	Filter的名称
	
* depends

	Filter需要使用的依赖
	
* handle

	Filter的功能定义


	
实例：

	httpd.defineFilter("testFilter",function(default_request,default_response,cookie){
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

## 使用Filter

Filter定义完成后就可以在`config`中使用`filter`来使用，格式如下：

	filter:[{
        url:"/test",
        doFilter: "filterTest",
        params : {
        	key: "value"
        }
   	}]


参数说明：

* url

	类型：String，url限制仅在匹配的情况下执行过滤器，如果需要配置非(not)操作，请使用正则对象。
	
* doFilter

	类型：String，执行filter的名称。
	
* params

	类型：object，执行当前filter的配置参数。格式如下：
	
		params:{
        	key1:value1,
        	.....
    	}

## 实例

	define({
    	"config.rapid-httpserver":{
        	autoStart : true,
        	filter:[{
        		url:"/test",
        		doFilter: "testFilter",
        		params : {
        			key: "value"
        		}
        	}],
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
	});

