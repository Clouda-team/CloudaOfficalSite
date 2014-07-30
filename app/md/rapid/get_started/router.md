# 路由

## 如何使用路由

rapid的路由一般通过`/conf`目录下的文件中的`mapping`参数来配置，最简单的配置方法如下

	mapping : [{
		url : “/test”,
		doAction : "test"
	}]
	
通过`mapping`的设定将请求与相应的Action做映射，框架不仅提供URL与Action的映射关系，也提供URL与静态资源之间的映射关系，方法如下：

	mapping : [{
		url : "test",
		resource : "/app/views/index.html"
	}]
	
`mapping`中也可以包含多组路由，格式如下：

	mapping : [{
		url : "/test",
		doAction : "test"
	},{
		url : "index",
		resource : "/app/views/index.html"
	},{
		url : "/hello",
		doAction : function(){
			this.send("Hello,World!");
		}
	}]

## 路由参数说明

路由通过`mapping`设定，包含`url`、`doAction`、`resource`，`defaultAction`四个参数，参数说明如下：

- url

	URL中路径部分的值，类型：String，可以使用正则，url参数可以缺省，缺省就是表示如果没有匹配的路由就执行与之对应的'defaultAction'或者'resource'。
	
实例：
	
	rapid.config.define({
		"rapid-httpserver" : {
			
			autoStart : true,
			
			loading_dir : ["/app/actions/"],
			
			mapping : [{
				url : "/test",
				doAction : "test"
			},{
				url : "index",
				resource : "/app/views/index.html"
			}]
		}
	});
	
或者

	rapid.config.define({
		"rapid-httpserver" : {
			autoStart : true,
			loading_dir : ["/app/actions/"],
			
			mapping : [{
					url : "/test",
					doAction : "test"
				},{
					url : "index",
					resource : "/app/views/index.html"
				},{
					resource : "/app/views/index.html"
				}
				
			}]
		}
	});

* doAction

	对应的Action，类型：String或者function，如果是String其值为已经的定义Action的name。
	
* resource

	对应的静态资源，可以使用正则，类型：String。
	
* defaultAction

	如果没有匹配的路由，就会执行defaultAction，类型：String或者function，如果是String其值为已经的定义Action的name。




## 路由实例

通过下面的路由建立URL与名为index的Action之间的映射关系。

	rapid.config.define({
		"rapid-httpserver" : {
			autoStart : true,
			port : 8082,
			loading_dir : ["/app/actions/"],
			
			mapping : [{
					url : "/test",
					doAction : "test"
				},{
					url : "index",
					resource : "/app/views/index.html"
				},{
					url : "/hello",
					doAction : function(){
					this.send("Hello,World!");
				},{
					url : /^\/favicon.ico$/,
					resource : "/favicon.png"
				},{
					doAction : "index"
				}
				
			}]
		}
	});




