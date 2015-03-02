## Cache ##

	Blend.mbaas.cache
	
离线存储，缓存指定的url，使得webapp在离线状态下也能像native App下

**方法**

-	set(options)
-	remove(options)
-	&lt;meta&gt;标签

<h3 class="cache">set</h3>

	set(options)
	
**功能描述**

页面加载，直接调用该API，可以将指定url资源下载到本地，并且将url和本地路径存放作为key-value存放在拦截列表当中。下次访问时就会优先使用缓存资源。


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



<h3 class="cache">remove</h3>

	remove(options)
	
**功能描述**

删除url对应的本地文件，并且把拦截列表中的对应关系删除。

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
            <td>filedata</td>
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

页面增加&lt;meta&gt;标签 更为智能，方便。
			
	<meta name="Cache-Type" content="text/css;text/js;text/gif">

以上代码表示对于页面的css，js，gif静态资源启动资源拦截缓存功能。
	
