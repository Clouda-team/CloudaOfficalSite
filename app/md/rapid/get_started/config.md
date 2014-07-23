# 配置


## 配置运行环境

rapid开发的工程需要安装Node.js环境来安装依赖和为工程提供运行环境，Node.js下载地址如下：

<http://nodejs.org/download/>

当安装Node.js后，可以使用下面的命令测试Node.js是否安装成功。

	node --version
	
## 配置工程

### 配置工程初始化信息

在工程根目录下编写`package.json`文件完成工程的配置，内容如下：

	{
    	"name": "welcome",
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
	
关键参数说明：

* install

	安装完依赖后执行node_modules/rapid-core/init.js在工程根目录下生成项目启动文件`start.js`，启动文件的主要完成设置`GLOBAL.ROOT_DIR`、`GLOBAL.USER_DIR`、`GLOBAL.CONF_DIR`参数后自动检测三个配置目录并载入配置目录的文件的功能。
	
* dependencies

	工程所要使用的依赖，根据工程需要开发者自行添加。


### 配置工程运行信息

当我们运行工程后，用户访问工程和工程运行的信息可通过`rapid.config.define`来配置，格式如下：

	rapid.config.define({
		"rapid-httpserver" : {
			autoStart : true,
			port : 8082,
			loading_dir : ["/app/actions/"],
			
			mapping : [{
				url:"/welcome"
				doAction : "index"
			}]
		}
	});
	
该实例是对`rapid-httpserver`进行配置，关于配置项列表和详细介绍可查看《httpserver API Document》中`Configure`部分。
