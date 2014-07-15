# 快速入门

## 创建入口文件

创建一个index.html，内容如下：

	<!DOCTYPE html>		
		<html>
		    <head>
		    	<title>Blend API代码示例</title>
		    </head>
		    <body>
		    </body>
		 </html>

## 引入脚本

通过CDN公共库地址引入Blend API脚本：
	
	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/Blendapi/lightapp.js"></script>
	
如果页面是使用https加密链接的时，请内嵌如下代码：

	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="https://openapi.baidu.com/Blendapi/lightapp.js"></script>
	
实例：

	<!DOCTYPE html>		
		<html>
			<head>
		    	<title>Blend API代码示例</title>
		    	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/Blendapi/lightapp.js"></script>
		    </head>
		    <body>
		    </body>
		 </html>
		 
## 初始化Blend api

初始化Blend api，可以使用如下方法:

	Blend.lightInit({
        ak:apikey,//从百度开放云平台获取
        module:["app","account"]//根据勾选的模块生成
    });
    
## 使用Blend api

下面的实例功能是获取本地相机图片：

	<!DOCTYPE html>     
	<html>
    <head>
        <title>Blend API代码示例</title>
        <script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/Blendapi/lightapp.js"></script>
    </head>
    <body>
        <img id="photo"></img>
        <script>
            Blend.lightInit({
                ak: "XXXXXXXXXXXXXXX",//从百度开放云平台获取，请替换成自己的API key
                module:["app","media"]//根据勾选的模块生成
            });
            
            Blend.device.media.captureMedia({
                mediaType : Blend.device.MEDIA_TYPE.IMAGE,
                source : Blend.device.MEDIA_SOURCE.CAMERA,
                format : 'file',
                onfail : function(err){},
                onsuccess : function(mediaFile){
                    //返回读取到的图片文件的本地全路径
                    document.getElementById('photo').src= mediaFile[0].fullPath;
                } 
           })
        
        </script>
    </body>
 	</html>





