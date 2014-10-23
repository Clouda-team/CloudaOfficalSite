### Accelerometer ###

    clouda.device.accelerometer

**功能描述：**

加速感应器

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
    get(options)

**功能描述：**

捕获设备x,y,z轴方向的加速度信息

**参数说明：**

- options： 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>返回</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(data){}</td>          
            <td>获取加速度信息成功，data是返回的Acceleration对象信息</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>获取失败，返回错误码</td>  
        </tr>
        <tr>
            <td>frequency</td>
            <td>number</td>            
            <td>加速度信息获取频率设置，默认为10000，单位：毫秒</td>  
        </tr>
    <tbody>
</table>

**返回的Acceleration对象：**

特定时间点采集到的加速度信息。
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>x</td>
            <td>number</td>          
            <td>x轴加速度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>y</td>
            <td>number</td>            
            <td>y轴加速度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>z</td>
            <td>number</td>          
            <td>z轴加速度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>timestamp</td>
            <td>number</td>          
            <td>获取加速度数据时的时间戳，单位：毫秒</td>  
        </tr>
    <tbody>
</table>

#### startListen ####

    startListen(options)

**功能描述：**

监听设备x,y,z轴方向的加速度信息

**参数说明：**

同get(options)中的参数说明。


#### stopListen ####

    stopListen()

**功能描述：**

停止监听设备x,y,z轴方向的加速度信息

