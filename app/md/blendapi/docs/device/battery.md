### Battery ###

    clouda.device.battery

**方法：**

- get(options)
- startListen(options)
- stopListen(options)

#### get ####
    get(options)

**功能描述：**

获取电池状态信息

**参数说明：**

- options ： 为 object 类型，其中包含以下参数：

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
            <td>获取电池状态信息成功，data是返回的BatteryStatus对象</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>获取失败，返回错误码</td>   
        </tr>
    </tbody>
</table>

**返回的BatteryStatus对象：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
level | float | 电量百分比
isPlugged | boolean | 电池充电状态，默认false，未充电


#### startListen ####
    startListen(options)

**功能描述：**

监听电池状态

**参数说明：**

- options 是一个object，同get(options)中的options说明。

#### stopListen ####
    stopListen(options)

**功能描述：**

清除电池状态信息

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息


