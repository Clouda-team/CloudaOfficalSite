# 开发指南


## 概念解释

### Extension

用来实现http功能的包装，如Session，Cookie，fileupload，Form等，每个Extension使用固定的接口形式，接收request与response，并返回一个处理包装对象。一般来说，Extension不包含业务功能，只是扩展http行为能力的一种包装，所以使用方式相对简单没有复杂配置，配置写在http.conf对象下即可，无需单独配置。

### Filter

每个Filter可作用于每个http访问的请求过程中，用来处理一些通用业务，如安全认证的过滤，日志打印，统计等任务，多个Filter采用链式调用，全部通过则执行最终的Action，在执行过程中可以中断执行（如认证检查失失败等）。

### Action

每组Filter的未端使用一个Action，用来实现最终的业务功能。


## 生命周期

### 启动

1. httpserver在被require时，将自动向clouda.plugin进行注册。

2. httpserver在被require时，将进行clouda.config.watch("clouda-server")，用于发现自动配置的存在。

3. 如果找到配置，根据**`autoStart=true`**的配置进行自动调用httpserver.start()，否则放弃启动并等待手动执行httpserver.start(conf)方法。

4. 当autoStart=false或未提供配置信息时，可利用httpserver.start(conf)启动server。(**如果存在配置，这里将提供一个替换默认配置的机会，两次配置不会进行合并，而是完全进行覆盖**)。


### 运行

1. server启动后，直接监听配置端口(默认为8080)，并开始接收请求。

2. 在请求到达时，将根据配置依次通过`fiterChain`与`actionChain`两条执行链，每个请求根据配置的url会完整经过所有配置的filter链并到达action链，在actionChain的执行中，在任意配置的action被执行时，将停止继续执行下一个。如果所有都不配置，则执行**`defaultAction`**，默认返回`404`错误给客户端。

3. 在处理请求的过程中，如果根据配置需要处理请求的action或filter尚未载入(这种情况多发生在启动过程中，或受业务影响需要延迟提供的action与filter情况下)，系统将停止继续处理本次请求，并返回`400`或`500`错误，如果下次同样请求到来时,缺失的action与filter存在,则会正常派发处理。


## 一个完整的实例

（1）新建一个名为`welcome`的目录，并在该目录下编写`package.json`文件，内容如下：

	{
    	"name": "welcome",
    	"version": "0.0.0",
    	"description": "",
    	"main": "index.js",
    	"scripts": {
        	"install" : "node ./node_modules/clouda-core/init.js"
    	},
    	"author": "",
    	"dependencies":{
        	"clouda-core" : "*",
        	"clouda-httpserver" : "*"
    	},
    	"license": "MIT"
	} 
	
配置`dependencies`包含：`clouda-core`和`clouda-httpserver`
	
（2）在`welcome`目录下只用下面命令

	npm install
	
命令执行完成后会自动安装`clouda-core`和`clouda-httpserver`依赖并自动创建`start.js`文件。
	
（3）在`welcome`目录下新建名为`app`的目录（该目录在`start.js`中被自动关联到工程），并在`app`目录下新建`actions`目录并在该目录下新建`welcome.js`文件，该文件描述实例的主要功能，内容如下：

	var server = use("clouda-httpserver");
	
	erver.defineAction("index", function(default_request, default_response){
		var req = default_request;
		var res = default_response;
		//渲染index.html
		var content = this.render("index");
		//发送到前端
		this.send(content);
	});
	
（4）编写index.html视图模板，方法如下：在`app`目录下新建`views`目录并在该目录下编写`index.html`文件，内容如下：

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="简单可依赖的Javascript开发框架" />
		<title>Clouda+</title>
	</head>
	<body>
		<p>Welcome to Clouda+!</p>
	</body>
	</html>
	
（5）编写Router（路由）将请求与Action进行关联，方法如下：在`welcome`目录下新建`conf`目录并在该目录下编写http.conf.js文件，对项目进行配置并编写路由规则。

	clouda.config.define({
		"clouda-httpserver" : {
			autoStart : true,
			port : 8082,
			loading_dir : ["/app/actions/"],
			
			mapping : {
				url:"/welcome"
				doAction : "index"
			}
		}
	});
	
上面代码的效果是只有路径为`youpath/welcome`才会显示正确页面。如果希望不是这个路径也可以显示这个页面可使用`defauleAction`来处理。

	clouda.config.define({
		"clouda-httpserver" : {
			autoStart : true,
			port : 8082,
			loading_dir : ["/app/actions/"],
			
			mapping : [{
				url:"/welcome",
				doAction : "index"
			},{
				defaultAction : "index"
			}]
		}
	});
	
到此整个实例开发完成了，在`welcome`目录下运行下面的命令启动项目即可在浏览器输入`localhost:8082`或者`localhost:8082/welcome`浏览：

	node start
	

	