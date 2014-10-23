### Geolocation ###
    clouda.device.geolocation

地理位置

**方法：**

- get(options)
- startListen(options)
- stopListen(options)

#### get ####
    get(options)

**功能描述：**

获取当前地理位置信息。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回地理信息对象
onfail | function(err){} | 操作失败，返回错误码信息 

**返回的地理信息对象**

参数 | 类型 | 描述 
------------ | ------------- | ------------
accuracy | float | 精确度(单位米)
longitude | float | 经度
latitude | float | 纬度
coordtype | string | 坐标类型, 包括
| | clouda.device.COORDTYPE.BD 百度经纬度坐标
| | clouda.device.COORDTYPE.GCJ 国测局经纬度坐标
| | clouda.device.COORDTYPE.GPS GPS经纬度


#### startListen ####
    startListen(options)

**功能描述：**

监听地理位置信息。

使用场景分为步行（高灵敏度）和开车（低灵敏度）两种，

启动对有大幅变化的地理位置进行监听。调用后立即触发一次回调，报告当前位置，后续只在地理位置发生变动时方通知。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回地理信息对象
onfail | function(err){} | 操作失败，返回错误码信息 
significant | bool | 是否仅在位置发生大幅变化时进行回调，boolean类型，默认true(相当于省电模式)。<font color="red">目前大幅变化阈值设置为20米，不支持自定义配置。</font>


#### stopListen ####
    stopListen(options)

**功能描述：**

停止监听地理位置信息。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息 


