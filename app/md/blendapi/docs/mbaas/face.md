### FaceRecognition ###
    clouda.mbaas.face

人脸识别

**方法：**

- register(uid, options)
- verify(uid, options)
- checkBlink(uid, options)
- authorizeDevice(uid, options)
- listDevice(uid, options)

#### register ####
    register(uid, options)

**功能描述：**

注册人脸识别服务，启动摄像功能获取人脸信息，并与UID建立绑定关系

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
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
            <td>注册成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

#### verify ####
    verify(uid, options)

**功能描述：**

启动摄像功能获取人脸信息，并与register接口中已注册的人脸信息进行验证

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>验证成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

#### checkBlink ####
    checkBlink(uid, options)

**功能描述：**

检查眨眼情况，用于活体检测或者通过眼睛活动状态进行远程控制操作

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>操作成功，返回SUCCESS状态码，存在眨眼情况</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回系统错误码信息</td>  
        </tr>
    </tbody>
</table>

#### authorizeDevice ####
    authorizeDevice(uid, options)

**功能描述：**

绑定设备，认证该用户可使用人脸识别服务的具体采集设备

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>绑定成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>绑定失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

#### listDevice ####
    listDevice(uid, options)

**功能描述：**

查看该用户使用人脸服务所认证的设备列表信息

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

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
            <td>获取成功，data 返回 string 类型设备UUID信息，以逗号分隔</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>获取失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>