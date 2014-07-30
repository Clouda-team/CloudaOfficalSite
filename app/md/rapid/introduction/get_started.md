# RapidJS快速入门

## 安装Node.js

rapid开发的工程需要安装Node.js环境来安装依赖和为工程提供运行环境，Node.js下载地址如下：

<http://nodejs.org/download/>

当安装Node.js后，可以使用下面的命令测试Node.js是否安装成功。

	node --version
	
## 配置工程

新建一个名为`welcome`的目录，并在该目录下编写`package.json`文件，内容如下：

	{
    	"name": "welcome",
    	"version": "0.0.0",
    	"description": "",
    	"main": "start.js",
    	"scripts": {
        	"install" : "node ./node_modules/rapid-core/init.js"
    	},
    	"author": "",
    	"dependencies":{
        	"rapid-core" : "*",
        	"rapid-httpserver" : "*"
    	},
    	"license": "MIT"
	}

## 初始化工程

在`welcome`目录下使用下面命令完成工程初始化：

	npm install
	
命令执行完成后会自动安装`rapid-core`和`rapid-httpserver`依赖并自动创建`start.js`文件。


## 创建视图（View）

在`welcome`目录下新建名为`app`的目录，在`app`目录下新建`views`目录并在`views`目录下编写`index.html`文件，内容如下：

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="简单可依赖的Javascript开发框架" />
		<title>Rapid</title>
	</head>
	<body>
		<p>Welcome to rapid!</p>
	</body>
	</html>
	
## 创建Action

在`app`目录下新建`actions`目录并在`actions`目录下新建`welcome.js`文件，该文件描述工程的主要功能，内容如下：

	var server = rapid.use("rapid-httpserver");
	
	server.defineAction("index", function(){
		//渲染index.html
		var content = this.render("index");
		//发送到前端
		this.send(content);
	});
	
## 创建路由（Router）

在`welcome`目录下新建`conf`目录并在`conf`目录下编写`http.conf.js`文件，对项目进行配置并编写路由规则。

	rapid.config.define({
		"rapid-httpserver" : {
			autoStart : true,
			port : 8080,
			loading_dir : ["/app/actions/"],
			
			mapping : [{
				url:"/welcome",
				doAction : "index"
			}]
		}
	});
	
## 启动工程

在`welcome`目录下使用下面的命令启动项目

	node start
	
><font color="red">小提示：

>运行前请确定8080端口没有被占用，如果需要更换端口，可在`http.conf.js`中配置`port`即可。</font>
	
## 浏览工程

在浏览器中输入`http://localhost:8080/welcome`来浏览项目。

![](/md/images/helloworlddemo.png)

