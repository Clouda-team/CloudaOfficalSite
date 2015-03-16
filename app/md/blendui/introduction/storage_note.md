##[离线缓存](/blendapi/local/api_runtime)介绍

###概念介绍

[离线缓存](/blendapi/local/api_runtime) 通过对本地数据库操作、文件存储操作、http请求拦截实现了一套可编程的缓存方案。通过该方案，用户可以在离线时访问web资源，或者对某些web资源实现有网时访问线上、无网时访问缓存。

###通过meta标签启动离线存储功能

通过一个简单的meta标签，让用户快速实现web资源的离线存储功能。使用方法如下：
	
#####1、在head中间加入：

	<script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/cloudaapi/lightapp.js"></script>
	<meta name="Cache-Type" content="text/css;text/js;image/gif"> 

该meta标签代表需要缓存该页面的所有的css文件、js文件、gif图片文件。

####2、在初始化Blend时加入cache组件，在加入组件后做下cache的初始化****

	Blend.lightInit({
		ak:'xxx', /*ak是用户在百度开发者平台申请的appKey*/
		module:['cache']
	},function(){
		Blend.device.cache.init();
	});

在页面中加入这段代码即表示离线缓存本地css、js、gif资源，当然如果需要缓存如：png\jpg 等图片，也可以在content中加入
	
	image/png;image/jpg

（注意：使用该缓存方式会时，系统会自动将当前页面缓存为非常态离线缓存）。

###离线存储的自主编程操作

#### 自主缓存离线资源

在一些情况我们可能想自主缓存一些json数据、音乐文件、flash文件、影片文件，这时我们可以使用cache.set这个功能对离线cache进行自主编程。
	
	Blend.lightInit({
		ak:'xxx', /*ak是用户在百度开发者平台申请的appKey*/
		module:['cache']
	});

	var option = {
		onsuccess:function(data){

		},
		onfail:function(data){

		},
		url:"http://www.baidu.com",
		fileData:1 
	};

	Blend.device.cache.set(option)

上面这段表示缓存 "http://www.baidu.com" 这个资源。

注意事项：

1、 fileData目前有两个值：1、2，其中1代表常态缓存、2代表非常态缓存

2、 引用cache组件实质上引用了 database 、fs 、interceptor 组件


#### 删除离线缓存

一些缓存如果过时了，我们需要删除可以调用cache.remove接口进行删除：

	/*options 同上*/

	Blend.device.cache.remove(option)


 