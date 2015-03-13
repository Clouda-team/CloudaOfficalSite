# Blend介绍

## 概述

Blend将Native的端能力和百度的云服务融合（Blend）到webapp中，同时提供Native组件、离线存储等强大的端能力，让你的webapp如虎添翼。

Blend提供以下能力：

- 界面交互能力：Blend.ui
- 本地设备能力：Blend.device
- 云服务能力： Blend.mbaas

通过直接调用提供API，可以让你的webapp媲美Naitve app；


## 开始入门

###引入Loader
Blend能力按照模块划分，需要统一引入百度直达号的loader脚本，让后加载各个模块到webapp页面中；

1. http链接：

		<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>


2. https加密链接

		<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="https://openapi.baidu.com/cloudaapi/lightapp.js"></script>



###加载模块
引入loader之后，采用初始化函数按照模块加载各模块；

		Blend.lightInit({
		    ak:apikey,
		    module:["app","account","xxxx"]
		});

1. apikey是运用百度云能力必须申请的ak, 可点击进入[获取API Key](/blendui/introduction/get_api_key "获取API Key")申请;

- module模块名字，Blend的ui能力、本地设备能力和云能力按照module分别加载使用，如ui能力直接用`module:["blendui"]`;
目前已提供的能力如下：

######界面交互UI能力：


BlendUI

######本地设备能力模块：
<!--	  
- [加速器](http://clouda.com)  `accelerometer` 
- [调起应用](http://clouda.com)  `activity`
- [电池](http://clouda.com)  `battery` 
- [指南针](http://clouda.com)  `compass`
- [网络检测](http://clouda.com)  `connection`
- [手机通讯录](http://clouda.com) `contact`
- [设备信息](http://clouda.com)  `device`
- [文件系统](http://clouda.com)  `fs`
- [地理位置](http://clouda.com)  `geolocation`
- [系统语言信息]() `globalization`
- [陀螺仪](http://clouda.com) `gyro`
- [拦截器](http://clouda.com) `interceptor`
- [键盘](http://clouda.com) `keyboard`
- [本地存储](http://clouda.com) `localStorage`
- [本地媒体功能](http://clouda.com) `media`
- [横竖屏切换](http://clouda.com) `orientation`
- [二维码](http://clouda.com) `qr`
- [截频分享](http://clouda.com)  `screen` 
-    [数据存储]() `database`
-->

<!-- 
- [离线缓存](http://clouda.com)  `cache`
 -->


加速器，调起应用，电池， 指南针，网络检测，手机通讯录，设备信息，文件系统，地理位置，系统语言信息，陀螺仪，拦截器，键盘，本地存储，本地媒体功能 ，横竖屏切换，二维码，截频分享，数据存储，离线缓存

<!--
- 加速器  `accelerometer` 
- 调起应用  `activity`
- 电池  `battery` 
- 指南针`compass`
- 网络检测 `connection`
- 手机通讯录 `contact`
- 设备信息  `device`
- 文件系统  `fs`
- 地理位置  `geolocation`
- 系统语言信息 `globalization`
- 陀螺仪 `gyro`
- 拦截器 `interceptor`
- 键盘 `keyboard`
- 本地存储 `localStorage`
- 本地媒体功能 `media`
- 横竖屏切换 `orientation`
- 二维码 `qr`
- 截频分享  `screen` 
- 数据存储 `database`

-->

######百度云能力模块：

<!--
- [百度账号](http://clouda.com)  `account` 
- [轻支付](http://clouda.com)  `pay` 
- [社会化分享](http://clouda.com)  `socialshare` 
- [云推送](http://clouda.com)  `push` 
- [应用订阅](http://clouda.com)  `app` 
- [人脸识别](http://clouda.com)  `face` 
- [个人云存储](http://clouda.com)  `pcs` 
- [云播放](http://clouda.com)  `player`
- [语音识别](http://clouda.com)  `vtt`
- [文本转语音](http://clouda.com)  `tts`
-->

<!--
- [反馈](http://clouda.com)  `feedback`
- [地理定位](http://clouda.com)  `map` 
- [订阅](http://clouda.com)  `subscribe` 
-->

<!--
- 百度账号  `account` 
- 轻支付  `pay` 
- 社会化分享  `socialshare` 
- 云推送  `push` 
- 应用订阅  `app` 
- 人脸识别  `face` 
- 个人云存储 `pcs` 
- 云播放  `player`
- 语音识别  `vtt`
- 文本转语音  `tts`
-->

百度账号，轻支付，社会化分享，云推送，应用订阅，人脸识别，个人云存储 ，云播放，语音识别，文本转语音

## 简单实例

创建一个简单的运用二维码模块和ui模块的简单DEMO [点击下载](http://blend001.duapp.com/blenddemo/demo.zip)

代码片段：

1.loader引入及其模块初始化


		<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
		<script>
		blend.lightInit({
            ak:"8MAxI5o7VjKSZOKeBzS4XtxO",
            module:["qr","blendui"]
        });
		</script>
	
	
2.二维码调用


		$("#Camera").bind("touchend",function(e){
	       Blend.device.qr.startCapture({
	           onsuccess:function(code){
	                if(/^http:\/\//.test(code)){
	                    store(code);
	                    location.href=code;
	                }else{
	                    alert("地址错误")
	                }
	            },
	            onfail:function(e){
	                console.log(e);
	            },
	            type:Blend.device.qr.QRCODE
	        });
	    });



3.UI模块,Tab切换
	

	var tabs = new Blend.ui.LayerGroup({
        id: "Tabs",
        layers: [{
            id: 'Tab1',
            url: 'tab1.html',
            autoload:true
        }, {
            id: 'Tab2',
            url: 'tab2.html',
            autoload:true
        }],
        onselected: function(event) {
            var id = event['layerId'];
            $("#SQNav span").removeClass('on');
            $("#" + id).addClass('on');
            $("#SQNavStyle").removeClass().addClass("sq-lv lv" + $("#" + id).index());
        },
        left: 0,
        top: 177
    });

4.事件传递

		main.on("openUrl",function(e){
	        openUrl(e.data.url);
	    });

----------------------------------------------------------
	
		main.fire("openUrl","top",{
	        url: $(this).data('link')
	    });
		

5.离线缓存

Blend实现的是一套可编程的离线缓存方案。其主要通过对本地数据库操作、文件存储操作、http请求拦截而实现的。简单使用如下：

(1) 在head中间加入：

	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
	<meta name="Cache-Type" content="text/css;text/js;image/gif"> 

该meta标签代表需要缓存该页面的所有的css文件、js文件、gif图片文件。

(2) 在初始化Blend时加入cache组件，在加入组件后做下cache的初始化

	Blend.lightInit({
		ak:'xxx', /*ak是用户在百度开发者平台申请的appKey*/
		module:['cache']
	},function(){
		Blend.device.cache.init();
	});

在页面中加入这段代码即表示离线缓存本地css、js、gif资源，当然如果需要缓存如：png\jpg 等图片，也可以在content中加入 `image/png;image/jpg`（注意：使用该缓存会自动将本页面缓存为非常态离线缓存）。其他细节参看[离线与缓存](/blendui/introduction/storage_note)一节。