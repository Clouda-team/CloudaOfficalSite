### App ###
    clouda.mbaas.app

轻应用订阅相关接口
订阅及检测是否已订阅

**方法：** 

- followSite(appid,options)
- checkFollow(appid,options)

<!--#### addShortcut #### 
  addShortcut(appid,options)

**功能描述：** 

创建轻应用的快捷方式到桌面

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息 -->


#### followSite 
  followSite(appid,options)

**功能描述：** 

关注轻应用，同时添加轻应用到桌面

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息 

#### checkFollow 
  followSite(appid,options)

**功能描述：** 

检查是否已关注轻应用

**参数说明：** 

- appid：为 string 类型，该轻应用的appid
- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回关注信息状态码
onfail | function(err){} | 操作失败，返回错误码信息 

**返回的关注信息状态码：**
stateCode表示是否关注轻应用的状态码，如下表

stateCode | 描述 
---------- | ------------- 
0 | 未添加
1 | 已添加
2 | 添加中

