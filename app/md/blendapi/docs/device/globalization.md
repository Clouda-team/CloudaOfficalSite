### Globalization ###
    clouda.device.globalization

系统语言信息 

**方法：** 

- getlocale(options)

#### getlocale #### 
  getlocale(options)

**功能描述：** 

获取本地语言种类

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回当前用户语言，字符串格式，具体参见 [语言编码标准](http://zh.wikipedia.org/wiki/ISO_639-1)
onfail | function(err){} | 操作失败，返回错误码信息 


