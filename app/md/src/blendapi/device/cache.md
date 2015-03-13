## Cache ##

	Blend.device.cache
	
离线存储功能为用户提供可编程的离线能力。其主要API接口包括cache.set、cache.remove、Meta离线标签等API

**方法**

-	set(options)
-	remove(options)
-	&lt;meta&gt;标签

<h3 class="cache">set</h3>

	Blend.device.cache.set(options)

**功能描述**

在页面加载完成后，直接调用该API，可以将指定url资源下载并且保存到本地，下次访问时就会优先使用本地缓存。


**参数说明**
- options是一个object，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>  
            <td>成功回调用函数</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>失败回调函数,参数为</td>   
        </tr>
         <tr>
            <td>url</td>
            <td>string</td>
            <td>需要缓存资源的url</td>   
        </tr>
         <tr>
            <td>filedata</td>
            <td>int</td>
            <td>拦截类型，1表示无论网络环境，对于存在于拦截列表中的url进行拦截，使用缓存资源，2表示对于仅仅网络离线的时候对url进行拦截，在web在线时候不进行拦截。</td>   
        </tr>
    </tbody>
</table>

**成功回调返回的data对象**
	
	{
		error_code:0,
		error_msg:"",
		response:""
	}


**失败回调返回的错误对象err**
	
	{
		error_code:1,
		error_msg:"",
		response:""
	}




<h3 class="cache">remove</h3>

	Blend.device.cache.remove(options)
	
	
**功能描述**

删除缓存cache中的内容，让请求走正常http请求流程。

**参数说明**
- options是一个object，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>  
            <td>成功回掉函数</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>失败回调函数,参数为</td>   
        </tr>
         <tr>
            <td>url</td>
            <td>string</td>
            <td>需要缓存资源的url</td>   
        </tr>
         <tr>
            <td>fileData</td>
            <td>int</td>
            <td>拦截类型，1表示无论网络环境，对于存在于拦截列表中的url进行拦截，使用缓存资源，2表示对于仅仅网络离线或者2G的时候对url进行拦截，在web在线时候不进行拦截。</td>   
        </tr>
    </tbody>
</table>

**成功回调返回的data对象**
	
	{
		error_code:0,
		error_msg:"",
		response:""
	}


**失败回调返回的错误对象err**
	
	{
		error_code:1,
		error_msg:"",
		response:""
	}





<h3 class="cache">&lt;meta&gt;标签</h3>

通过meta标签启动离线存储功能

	Blend.lightInit({
		ak:'xxx', /*ak是用户在百度开发者平台申请的appKey*/
		module:['cache']
	},function(){
		Blend.device.cache.init();
	});

在head中间加入：

	<meta name="Cache-Type" content="text/css;text/js;text/gif">

以上代码表示对于页面的css，js，gif静态资源启动资源拦截缓存功能，该功能默认对于静态资源缓存fileData为1，对于当前的html缓存的fileData为2（即离线则使用缓存，在线则不使用缓存）
	
