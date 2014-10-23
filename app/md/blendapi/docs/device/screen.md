### Screen ###
    clouda.device.screen

截屏分享

**方法：**

- captureScreen(options)
- shareImage(data, options)
- shareScreen(options)

#### captureScreen ####
    capture(options)

**功能描述：**

获取截屏

**参数说明：**

- options：为 object 类型，其中包括以下参数：

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
            <td>获取成功，返回的 data 为一个base64 string 的 jpeg 文件流</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>


#### shareImage ####
    shareImage(data, options)

**功能描述：**

分享图片

**参数说明：**

- data : 为 base64 的 string 类型，captureScreen接口中返回的data信息
- options：为 object 类型，其中包括以下参数：

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
            <td>分享成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

#### shareScreen ####
    shareScreen(options)

**功能描述：**

获取并分享截屏

**参数说明：**

- options：为 object 类型，其中包括以下参数：
- 
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
            <td>分享成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>