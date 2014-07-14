# 快速入门

## 创建Html文件

创建一个名为`Hello`的目录，并在`Hello`目录下创建一个名`helloworld.html`的文件，并在文件中输入以下内容：

	<a href="http://m.baidu.com" target='_blank'>百度首页</a>
		
## 引入BlendUI脚本

引入BlendUI脚本有两种方法：

（1）下载BlendUI脚本到本地然后引入，下载地址如下：



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

开发完成后在打包平台上使用打包工具将应用打包成`apk`文件，在`Android`移动端上安装相应格式的应用即可。

打包平台的地址如下：

[http://10.42.82.59/wenku/injekt.php](http://10.42.82.59/wenku/injekt.php) 

### IOS端浏览



### 浏览器浏览



