#快速入门

BlendUI是解决开发者开发webapp中体验无法达到native的体验而生，使Webapp的体验和交互与Native媲美。

具体而言，里面包括了两项关键能力：

1. 多Webview控制能力。让一个Webapp拆到多个webview中运行，并能用Javascript来调度。搞定了业务无解的难题：页面过大导致卡顿，页面切换不流畅，
2. Native组件嵌入能力。能将Native控件嵌入Webview中，这样就能让页面中那些性能较差的部分用Native来实现，以最大化地提高体验和交互。



## 相关接口

###clouda api

移步: [点击这里](http://cloudajs.org/lightapp/docs/api) 


### apk打包平台

移步：[点击这里](http://10.42.82.59/wenku/injekt.php) 

BlendUI和clouda api是兄弟关系，如果webapp中不使用本地能力可直接内嵌blendui js进行开发,如需要可把blendui作为clouda api的一个模块,初始化时进行加载：

    clouda.lightInit({
    	ak:apikey,
    	module:["blendui"]
    });

推荐采用clouda方式加载；

## 线下调试环境
1. 下载测试apk包 blendui.apk

2. 下载android开发调试工具adb(Android Debug Bridge)；
 - 可直接安装adb，请自行google 

 - 安装android开发工具(推荐),[点击这里](http://developer.android.com/sdk/index.html)，直接使用SDK包里platform-tools adb工具(请配置添加到环境变量中)，还可使用android eclipse开发环境，直接使用logcat观察log；  

4. adb命令的使用请自行google或者baidu，请确保手机连接后打开debug模式;


## Hello World

1. 在服务器目录下创建www文件夹
	`./www`


2. 新建index.html入口文件，

	`./www/index.html`


3. 引入blendui脚本


        <!-- 引入BlendUI 脚本文件,确保已经下载到本地 -->
    	<script src="BlendUI-0.0.1.min.js">\</script>
    
    	<!-- clouda方式开发 -->
    	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>



4. 使用

	- 直接引入BlendUI脚本
	
			Blend.ready(function(main) {
				//去除启动画面
				var core = main.api.core
				core.removeSplashScreen();
				
			    //外链a用BlendUI layer打开
				var Layer = main.Layer;
			    var links = $("a[target='_blank']");
			    var page = null;
			    links.click(function(e){
			        e.preventDefault();
			        var $t = $(this);
			        var link = $t.attr("href");
			        if(page) page.destroy();
			        page = new Layer({
			            "id":"layerId",
			            "url":link,
			            "active":true
			        });
			    });
			
			    //返回键退出应用
				var layerApi = main.api.layer;
			    layerApi.on("backPressedBeforeExit",function(){
			        if(window.confirm("确定要退出吗?")){
			            core.exitApp();
			        }
			    });
			
			}); 

	
	- clouda方式开发
	

		    clouda.lightInit({
		    	ak:xxxx, //apikey
		    	module:["xxxx","blendui"]//根据勾选的模块生成，
		    });
			
			document.addEventListener("blendready",function(){
				var Layer = Blend.ui.Layer;
		        var links = $("a[target='_blank']");
		        var page = null;
		        links.click(function(e){
		            e.preventDefault();
		            var $t = $(this);
		            var link = $t.attr("href");
		            if(page) page.destroy();
		            page = new Layer({
		                "id":"layerId",
		                "url":link,
		                "active":true
		            });
		        });
		
		        //返回键退出应用
		        var core = Blend.api.core;
		        var layerApi = Blend.api.layer;
		        layerApi.on("backPressedBeforeExit",function(){
		            if(window.confirm("确定要退出吗?")){
		                core.exitApp();
		            }
		        });
			});


5. 手机测试（确保手机已经连上adb调试）

		adb shell "echo "http://192.168.0.100/index.html" > /sdcard/blend/url.conf"

	*Tip：* 192.168.0.100为本服务器访问ip,确保手机在一个网段，可正常访问

6. 此时重新启动安装的blendui app, 可以看到已经加载所要访问的页面,点击链接查看功能是否生效;


7. 调试, 
	
	可以打开所下载的eclipse 切换到logcat面板观察日志, js中可正常使用console.log，console.error进行日志调试;

8. 打包平台进行打包

	//todo
	

## Show Case

//todo