## Database ##

	Blend.device.database

为webapp提供大规模数据，文件存储的功能

**方法：**

- set(options)
- get(options)
- remove(options)
- clear(options)

<h3 class="database"> set </h3>

	set(options)
	
**功能描述：**

设置存储的值

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要存储数据的key值
value| string | 需要存储数据的value值
filedata | int | 默认为0，0 表示普通数据，不会添加到拦截器列表，1表示会添加到拦截列表(供离线缓存拦截使用)
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg


**返回data对象说明：**
	
	{
		paras:{...}	// paras是调用时传入的参数			
	}


<h3 class="database"> get </h3>

	get(options)
	
**功能描述：**

如key存在则输出对应的JSON，如果key不存在则输出" "


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要获取数据的key值
filedata | int | 默认为0，0 表示普通数据，1表示从拦截列表中获取
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...},	// paras 是调用时传入的参数
		value: "xxx"	// key 对应的value
	} 
	


<h3 class="database"> remove </h3>

	remove(options)
	
**功能描述：**

删除一个数据对象，只能删除本域下的数据


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要删除数据对象的key值
filedata | int | 默认为0，0 表示普通数据，1表示删除拦截列表中的key-value
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...}	// paras 是调用时传入的参数
	} 
	

<h3 class="database"> clear </h3>

	clear(options)
	
**功能描述：**

清除该域下所有的数据对象


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
filedata | int | 默认为0，0 表示普通数据，1表示拦截列表中的数据
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...}	// paras 是调用时传入的参数
	} 
	

