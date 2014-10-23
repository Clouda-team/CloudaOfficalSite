### FileSystem ###

    clouda.device.fs

文件管理

**方法：**

- post(path,target,options)

#### post ####
    post(path,target,options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- target : 为 string 类型，目标地址URL(仅HTTP/HTTPS)
- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误码信息 
param | object| 伴随文件上传，传递的POST数据（可选）
uploadKey | string | 上传表单中的key


