# 快速入门

## 安装Node.js

如果您想在本地运行和测试rapid开发的工程就需要安装Node.js，下载地址如下：

<http://nodejs.org/download/>

当安装Node.js后，可以使用下面的命令测试Node.js是否安装成功

	node --version

## 编写package.json

创建一个目录，例如目录取名`helloworld`，并在目录下创建一个`package.json`文件，该文件为工程信息配置文件，格式如下：

	{
    	"name": "helloworld",
    	"version": "0.0.0",
    	"description": "",
    	"main": "index.js",
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

当Node.js安装成功后，在目录下执行下面的命令来安装工程所需的Dependencies和初始化工程，下载的Dependencies在项目目录下`package.json`配置。

	npm install 
	
命令执行完成后会自动在工程目录下生成**`node_modules`**目录（Dependencies存放目录）和**工程启动文件`start.js`**。

## 编写一个测试实例

在工程目录`helloworld`下新建`conf`目录，并在`conf`目录下创建`httpserver`的启动配置文件`http.conf.js`，该文件的主要作用是定义路由与Action的映射关系，内容如下：

	define({
    	"config.rapid-httpserver":{
       		autoStart : true ,
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
    	}
	});
	
在上一步自动创建的`start.js`已经将`conf`目录下的所有文件关联到工程。

## 启动工程

在项目目录下使用下面的命令启动项目

	node start
	
## 访问工程

在浏览器中输入`http://localhost:8080`来浏览项目。

![](/md/images/helloworlddemo.png)

