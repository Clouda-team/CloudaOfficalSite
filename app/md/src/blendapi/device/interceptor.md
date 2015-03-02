## Interceptor ##

	Blend.device.interceptor

拦截器

**方法：**

- set(options)

<h3 class="interceptor"> set </h3>

	set(options)
	
**功能描述：**

开启拦截器，访问拦截器列表中已有资源时会使用本地缓存，如果关闭则不使用缓存

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
status | int | 0表示关闭，1表示打开
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg


**返回data对象说明：**
	
	{
		paras:{...}	// paras是调用时传入的参数			
	}