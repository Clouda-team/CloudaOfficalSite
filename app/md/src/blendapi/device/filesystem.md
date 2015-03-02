## FileSystem ##

    Blend.device.fs

文件管理

**方法：**

- post(path, target, options)
- download (options)
- remove(options)
- clear(options)
- getInfo (options)
- getSurplusSize (options)
- getMd5 (options)
- unzip(options)
- read(options)

<h3 class="filesystem"> post </h3>

    post(path, target, options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- target : 为 string 类型，目标地址URL(仅HTTP/HTTPS)
- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
param | object| 伴随文件上传，传递的POST数据（可选）
uploadKey | string | 上传表单中的key

<h3 class="filesystem"> download </h3>

	download(options)

**功能描述：**

将指定URL的文档下载保存到本地

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
url | string | url地址
value | string | 文件保存路径

- 返回的data参数说明


	{
		paras:{ 
			url:xx, 
			value:""
		},
		path:"本地绝对路径"
	}

<h3 class="filesystem"> remove </h3>

	remove(options)

**功能描述：**

删除一个文件对象

**参数说明：**

- options : 为 object 类型，其中包含以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{
		paras:""  //传入的参数值,等同于key值
	}
	
<h3 class="filesystem"> clear </h3>

	clear(options)

**功能描述：**

清除本域的所有文件对象，并且将数据存储中相应的key和value删除

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg

- 返回的data参数说明


	{
		paras:""  //传入的参数值
	}

<h3 class="filesystem"> getInfo </h3>

	getInfo(options)

**功能描述：**

获取文件信息

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: 这个参数代表请求参数透传回来
		}, 
		size: 1024 ,
		type:"类型"
	}

<h3 class="filesystem"> getSurplusSize </h3>

	getSurplusSize(options)

**功能描述：**

获取剩余存储空间

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg

- 返回的data参数说明


	{ 
		{
			paras: 这个参数代表请求参数透传回来
		}, 
		size: 1024 //剩余存储空间,单位是字节
	}

<h3 class="filesystem"> getMd5 </h3>

	getMd5(options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		md5: "" //文件MD5值
	}

<h3 class="filesystem"> unzip </h3>

	unzip(options)

**功能描述：**

用unzip解压文件，如果遇到同名文件自动覆盖

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		files: [] //解压出来的文件全路径列表
	}

<h3 class="filesystem"> read </h3>

	read(options)

**功能描述：**

读取txt文件中的内容以JSON类型(如果不能以JSON形式返回则返回string)返回

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		data:"" //以文本读取方式获取到的字符串
	} 
