### Compass ###

    clouda.device.compass

**功能描述：**
指南针功能

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
    get(options)

**功能描述：**

获取设备当前朝向信息

**参数说明：**

options ： 为 object 类型，其中包括以下参数：

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
            <td>操作成功，data是返回的Compass对象</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>操作失败，获取方向信息失败，返回错误码</td>  
        </tr>
    </tbody>
</table>

**返回的Compass对象**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>magneticHeading</td>
            <td>number</td>          
            <td>指南针在某一时刻的朝向，范围[0-359.99]度</td>  
        </tr>
        <tr>
            <td>trueHeading</td>
            <td>number</td>            
            <td>指南针在某一时刻相对于北极的朝向，取值范围是[0-359.99]度；若为负值则表明该参数不确定</td>  
        </tr>
        <tr>
            <td>headingAccuracy</td>
            <td>number</td>            
            <td>实际度数和记录度数之间的偏差</td>  
        </tr>
        <tr>
            <td>timestamp</td>
            <td>number</td>            
            <td>指南针朝向信息的获取时间，精确到毫秒</td>  
        </tr>
    <tbody>
</table>

#### startListen ####
    startListen(options)

**功能描述：**

监听指南针信息

**参数说明：**

options是一个对象，其中包括以下参数：

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
            <td>操作成功，获取方向信息；同compass.get(options)中的参数说明。</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>           
            <td>操作失败，获取方向信息失败，返回错误码</td>  
        </tr>
        <tr>
            <td>frequency</td>
            <td>number</td>          
            <td>获取方向信息频率设置，可选，单位毫秒，默认100 </td>  
        </tr>
    </tbody>
</table>

#### stopListen ####
    stopListen()

**功能描述：**

停止监听指南针信息
