#百度轻应用API参考文档#

问题反馈： [Blend-support@baidu.com](mailto:Blend-support@baidu.com)


## 概述 ##

百度轻应用API是一套使用JavaScript语言提供的应用工具接口，方便快捷的实现轻应用开发。

百度轻应用API包括三类API：

- 本地设备能力类： **Blend.device**
- 云服务类：   **Blend.mbaas**

## 命名空间

百度轻应用API统一使用的命名空间为：

    Blend

## 服务开启及设置

参考[开发指南](http://Blendjs.org/lightapp/docs/dev_guide#h2_1)
    
## 引用JS API文件

在HTML页面中添加以下代码：

    <script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="http://apps.bdimg.com/blend/loader.js"></script>

如果页面是使用https加密链接的时，请内嵌如下代码

    <script name="baidu-tc-cerfication" type="text/javascript" charset="utf-8" src="https://openapi.baidu.com/Blendapi/lightapp.js"></script>

## App信息注册API ##


初始化api，可以使用如下方法:
 
		Blend.lightInit({
			ak:apikey,
			module:["app","account"]//根据勾选的模块生成
		});

参数 | 类型 | 描述 
------------ | ------------- | ------------
apikey | string | 轻应用的APIKEY,获取方法参考[开发指南](http://Blendjs.org/lightapp/docs/dev_guide)
module | Array | 轻应用的具体模块,获取方法参考[勾选模块](http://Blendjs.org/lightapp/api-product)



##系统通用的状态码信息

    Blend.STATUS.SUCCESS ： 成功(非0)
    Blend.STATUS.SYSTEM_FAILURE ： 系统错误
    Blend.STATUS.USER_CANCELED ： 用户取消操作(-2)
    
###系统通用的成功信息
具体格式参考文档，一般来说类型有string,object

###系统通用的取消码信息
当用户在使用设备能力api未完成而取消时，触发onfail函数，错误码（-2）

    {result:-2,error_info:"canceled."}

###系统通用的错误码信息
    
    {result:1,error_info:"some errors readable."}

## 本地设备能力类API##
    Blend.device

本地设备能力类API目前支持以下功能：

- 调起应用 (Activity)
- 电池（Battery）
- 网络连接状态(Connection)
- 设备信息（Device）
- 文件系统（FileSystem）
- 系统语言信息 (Globalization)
- 地理位置（Geolocation）
- 本地媒体功能（Media）
- 二维码（QRCode）