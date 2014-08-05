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
	
	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/blend/loader.js"></script>
	
如果页面是使用https加密链接的时，请内嵌如下代码：

	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="https://apps.bdimg.com/blend/loader.js"></script>
	
实例：

	<!DOCTYPE html>		
		<html>
			<head>
		    	<title>Blend API代码示例</title>
		    	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/blend/loader.js"></script>
		    </head>
		    <body>
		    </body>
		 </html>
		 
## 初始化Blend api

从百度开放云平台上获取API Key并初始化Blend api，可以使用如下方法:

	Blend.lightInit({
        ak:apikey,//从百度开放云平台获取
        module:["app","account"]//根据勾选的模块生成
    });
    
## 使用Blend api

下面的实例功能是获取本地相机图片：

	<!DOCTYPE html>
    <html>
        <head>
            <title>轻应用开发JavaScript代码示例</title>
            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <meta content="width=device-width,initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no" name="viewport" />
            <!-- 引用轻应用API的JS文件 -->
            <script type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
        </head>
        <body>
            <script>
               //首先输入轻应用的ak
               clouda.lightInit({
                    ak:"iUQs1O9pmkIvfZ1zmy8sm7Gk",
                    module:["media"]
                });

                //加载完api js后，立即执行读取本地相机图片
                var openCamera = function(){
                    clouda.device.media.captureMedia({
                            mediaType : 0,//IMAGE
                            source : 0,//CAMERA
                            onfail : function(err){
                                    alert(JSON.stringify(err));
                            },
                            onsuccess : function(mediaFile){
                                    //返回读取到的图片文件的本地全信息
                                    alert(JSON.stringify(mediaFile));
                            } 
                    });
                };
                openCamera();

            </script>
            <button onclick = "openCamera()">openCamera</button>
            <hr/>
            <h2 id="runtime"></h2>
        </body>
    </html>





