##开始

首先，确认你的机器已经安装`node`，如果没有安装，请移步[Node官网](http://nodejs.org)完成安装工作。


#### Step 1：初始化项目

创建一个项目目录，如`hello`，并创建一个`package.json`，用来描述项目信息，如下：

	{
  		"name": "helloworld",
  		"version": "0.0.0",
  		"description": "",
		"main": "index.js",
		"scripts": {
    		"install" : "node ./node_modules/clouda-core/init.js"
  		},
	    "author": "",
	    "dependencies":{
  			"clouda-core" : "*",
  			"clouda-httpServer" : "*"
  		},
  		"license": "MIT"
	}

其中`clouda-core`是`clouda+`框架的核心，为各类服务的扩展提供最基础的支持。  
`clouda-httpServer`是`clouda+`提供的httpServer服务。
   
接下来我们从Hello,World！开始，开发一个最简单而又灵活的httpServer。


#### Step 2: 安装clouda+

在`hello`目录命令行下运行命令，安装项目依赖：

	npm install

这样在你的目录下就多出了一个`./node_modules`，目录里已经安装好了`package.json`里所声明的依赖。  
并且在安装完成后会自动生成启动文件`start.js`。
	


#### Step 3：配置一个Action

创建一个名为`hello.js`的文件：
	
	//引入httpServer
	var app = clouda.use('httpServer');
	
	//定义一个Action
	app.defineAction('hello', function (default_request, default_response) {

		this.send("Hello，World！");

	});

`req`和`res`对象与`node`原生对象。

#### Step 4: 启动httpServer

运行`node start`，启动httpServer。  
打开浏览器访问`localhost:8080`：`Hello,World!`。



