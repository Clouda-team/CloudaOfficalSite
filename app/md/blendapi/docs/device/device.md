### Device ###

    clouda.device.device

设备信息

**方法：**

- getImei(options)
- getSysVersion(options)
- getDeviceModelName(options)
- getScreenSize(options)

#### getImei ####
    getImei(options)

**功能描述：**

获取设备的imei号，imei由设备生产商及特定设备平台或型号所决定

**参数说明：**

- options : 为 object 类型，其中包含以下参数：
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
            <td>操作成功，data返回的是一个string</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
    </tbody>
</table>

#### getSysVersion ####
    getSysVersion(options)

**功能描述：**

获取设备的系统版本信息

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息 

#### getDeviceModelName ####
    getDeviceModelName(options)

**功能描述：**

获取设备的名称

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息 

#### getScreenSize ####
    getScreenSize(options)

**功能描述：**

获取设备的屏幕分辨率

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息 

**返回的screen对象**

参数 | 类型 | 描述 
------------ | ------------- | ------------
width | int | 宽度
height | int | 高度
pixelDepth | int | 颜色分辨率
colorDepth | int | 色深

