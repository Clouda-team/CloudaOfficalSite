# 快速入门

## 创建Html文件

创建一个名为`Hello`的目录，并在`Hello`目录下创建一个名`helloworld.html`的文件，并在文件中输入以下内容：

	<html>
		<head>
		</head>
		<body>
			<a class="testLink" href="http://news.baidu.com">百度新闻</a>
		</body>
	</html>


## 使用BlendUI

（1）通过CDN公共库地址引入Blend API脚本和样式文件：

	<script type="text/javascript" name="baidu-tc-cerfication" data-appid="{appid}" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
	<link rel="stylesheet" href="http://apps.bdimg.com/cloudaapi/res/css/crema.css">

如果页面是使用https加密链接的时，请内嵌如下代码：

	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="https://openapi.baidu.com/cloudaapi/lightapp.js"></script>
	<link rel="stylesheet" href="https://openapi.baidu.com/cloudaapi/res/css/crema.css">
	
（2）使用Blend UI：

	Blend.lightInit({
		ak:xxxx, //轻应用apikey，请参考《获取API Key》文档
		module:["xxxx","blendui"]//根据需要添加模块到数组中即可
	});

	document.addEventListener("blendready",function(){

	});


实例：使用BlendUI中`Layer`加载helloworld.html中`a`标签的链接


（1）在HTML中引入Blend脚本

	<html>
		<head>
			<meta charset="utf-8">
    		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    		<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
    		<script src="http://apps.bdimg.com/libs/zepto/1.1.3/zepto.min.js"></script>
    		
			<script type="text/javascript" name="baidu-tc-cerfication" data-appid="{appid}" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
        	<link rel="stylesheet" href="http://apps.bdimg.com/cloudaapi/res/css/crema.css">
		</head>
		<body>
			<a class="testLink" href="http://news.baidu.com">百度新闻</a>
		</body>
	</html>

（2）加入BlendUI js代码完成使用BlendUI中`Layer`加载helloworld.html中`a`标签的链接的功能

	<html>
		<head>
			<meta charset="utf-8">
    		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    		<meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
    		<script src="http://apps.bdimg.com/libs/zepto/1.1.3/zepto.min.js"></script>
    		<script type="text/javascript" name="baidu-tc-cerfication" data-appid="{appid}" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
        	<link rel="stylesheet" href="http://apps.bdimg.com/cloudaapi/res/css/crema.css">
		</head>
		<body>
			<a class="testLink" href="http://news.baidu.com">百度新闻</a>
		</body>
		<script>
			Blend.lightInit({
				ak:'xxxx', //轻应用apikey
				module:["blendui"]//根据需要添加模块到数组中即可
			});

			document.addEventListener("blendready",function(){
            	Blend.ui.layerInit("0",function(dom){
                	var herfLayer;
                	$(".testLink",dom).on("click",function(e){
                    	e.preventDefault();
                    	if(herfLayer){
                        	herfLayer.in();
                    	}else{
                        	herfLayer = new Blend.ui.Layer({
                            	"id" : "herfLayer",
                            	"url" : this.href,
                            	"active" :true
                        	});
                    	}
                	});
            	});
        	});
		</script>
	</html>


## 浏览应用

### Android端浏览

下载blendui.apk并安装到Android移动端上，下载地址如下：

<img src="/md/images/ios_runtime.png" class="download-pic">

安装完成后打开blendui应用，使用“扫码”扫描BlendUI开发应用的服务器URL地址即可查看应用。



### 浏览器浏览

直接在浏览器中输入应用服务器的URL即可。

## 示例源码
[在线获取源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/get_started)
  


