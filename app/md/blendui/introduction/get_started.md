# 快速入门

## 创建Html文件

创建一个名为`Hello`的目录，并在`Hello`目录下创建一个名`helloworld.html`的文件，并在文件中输入以下内容：

	<html>
		<head>
		</head>
		<body>
			<a href="http://m.baidu.com" target='_blank'>百度首页</a>
		</body>
	</html>
		
## 引入BlendUI脚本

引入BlendUI脚本有两种方法：

（1）下载BlendUI脚本到本地然后引入，下载地址如下：

<https://github.com/Clouda-team/BlendUI>

下载完成后放入`Hello`目录下，并在`helloworld.html`中引入BlendUI脚本	
	
	<script src="./BlendUI-0.0.1.min.js">\</script>

（2）在`helloworld.html`中使用远程地址直接引入BlendUI脚本

	<script src="http://BlendUI-0.0.1.min.js">\</script>
	
## 使用BlendUI

BlendUI有两种使用方式，一种是直接使用BlendUI开发，第二种是结合Clouda方式开发，两种方法的详细介绍如下：


### 直接使用BlendUI开发

	Blend.ready(function(main){
	
	});


实例：使用BlendUI中`Layer`加载helloworld.html中`a`标签的链接

	Blend.ready(function(main) {
		//启动动画默认开启，这里先去除启动画面直接看实例效果
		main.api.removeSplashScreen();
				
		//外链a用BlendUI layer打开
		var Layer = main.Layer;
		var links = $("a[target='_blank']");
		var page = null;
		links.click(function(e){
			e.preventDefault();
			var $t = $(this);
			var link = $t.attr("href");
			if(page){ 
				page.destroy();
			}
			page = new Layer({
				"id":"layerId",
			   	"url":link,
			   	"active":true
			});
		});
			
	}); 

### 结合Clouda方式开发

	clouda.lightInit({
		ak:xxxx, //轻应用apikey
		module:["xxxx","blendui"]//根据需要添加模块到数组中即可
	});
	
	document.addEventListener("blendready",function(){
	
	});
	

实例：使用BlendUI中`Layer`加载helloworld.html中`a`标签的链接

	clouda.lightInit({
		ak:xxxx, //轻应用apikey
		module:["blendui"]//根据需要添加模块到数组中即可
	});
	
	document.addEventListener("blendready",function(){
		//启动动画默认开启，这里先去除启动画面直接看实例效果
		main.api.removeSplashScreen();
				
		//外链a用BlendUI layer打开
		var Layer = main.Layer;
		var links = $("a[target='_blank']");
		var page = null;
		links.click(function(e){
			e.preventDefault();
			var $t = $(this);
			var link = $t.attr("href");
			if(page){ 
				page.destroy();
			}
			page = new Layer({
				"id":"layerId",
			   	"url":link,
			   	"active":true
			});
		});
	});


## 浏览应用

### Android端浏览

下载blendui.apk并安装到Android移动端上，下载地址如下：

<https://github.com/Clouda-team/BlendUI>

安装完成后打开blendui应用，使用“扫码”扫描BlendUI开发应用的服务器URL地址即可查看应用。

### IOS端浏览

使用IOS终端扫描下面的二维码安装BlendUI测试运行应用

![](/md/images/iosdownload.png)

安装完成后打开blendui应用，使用“扫码”扫描BlendUI开发应用的服务器URL地址即可查看应用。

### 浏览器浏览

如果需要直接使用浏览器中浏览，需要添加一下操作：

（1）首先需要下载`crema.css`文件，下载地址如下

<https://github.com/Clouda-team/BlendUI>

（2）HTML中引入`crema.css`

	<link rel="stylesheet" href="crema.css">
	
（3）修改HTMl代码，在body中加入三个标签

	<html>
		<head>
			<link rel="stylesheet" href="crema.css">
			<script src="./BlendUI-0.0.1.min.js">\</script>
		</head>
		<body>
			<div class="pages">
				<div class="page">
					<div class="page-content">
						<a href="http://m.baidu.com" target='_blank'>百度首页</a>
					</div>
				</div>
			</div>
		</body>
	</html>

修改后直接在浏览器中输入应用服务器的URL即可。


