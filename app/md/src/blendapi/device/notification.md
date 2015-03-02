## Notification ##
    
    Blend.device.notification

本地设备通知，可设置通知、震动或蜂鸣声提示。

**方法：**

- alert(msg, options)
- confirm(msg, options)
- beep(time)
- vibrate(time)
- prompt(msg, options)
- startLoad(title, msg, options)
- stopLoad(options)
- progress(title, msg, options)
- startProgress(title, msg, options)
- updateProgress(value)
- stopProgress()
- smsVrification(options)

<h3 class="notification"> alert</h3>

    alert(msg, options)

**功能描述：**

显示一个定制的警告或对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
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
            <td>function(){}</td>           
            <td>用户点击“OK”按钮</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>          
            <td>对话框标题，可选项，默认为：Alert</td>  
        </tr>
        <tr>
            <td>buttonName</td>
            <td>string</td>          
            <td>按钮名称，可选项，默认为：OK</td>  
        </tr>
    </tbody>
</table>

<h3 class="notification"> confirm</h3>

    confirm(msg, options)

**功能描述：**

显示一个可定制的确认对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
- options ：为一个object，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(){}</td>           
            <td>用户点击“OK”按钮 </td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败或用户点击“Cancel”，返回错误码</td>  
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>          
            <td>对话框标题，可选项，默认为：Confirm</td>  
        </tr>
        <tr>
            <td>buttonLabels</td>
            <td>array</td>          
            <td>自定义按钮标签名，可选项，默认为：[OK，Cancel]</td>  
        </tr>
    </tbody>
</table>

<h3 class="notification"> beep</h3>

    beep(time)

**功能描述：**

设备将发出蜂鸣声，且可设定持续时长

**参数说明：**

- time : 为 int 类型， 蜂鸣的持续时间，单位：毫秒

<h3 class="notification"> vibrate</h3>

    vibrate(time)

**功能描述：**

使设备震动，且可设置指定的震动时长。

**参数说明：**

- time ： 为 int 类型， 设备震动时长，单位： 毫秒

<h3 class="notification"> prompt</h3>

    prompt(msg, options)

**功能描述：**

弹出一个定制化对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
- options :为一个object，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>onsuccess</td>
            <td>function(){}</td>           
            <td>用户点击“确定”按钮 </td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败或用户点击取消，返回错误码</td>  
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>          
            <td>对话框标题，可选项，默认为：OK</td>  
        </tr>
        <tr>
            <td>buttonLabels</td>
            <td>array</td>          
            <td>自定义按钮标签名，可选项，默认为：[OK，Cancel]</td>  
        </tr>
        <tr>
            <td>defaultText</td>
            <td>string</td>          
            <td>输入框默认文字， 默认为空</td> 
    </tbody>
</table>

<h3 class="notification"> startLoad</h3>

    startLoad(title, msg, options)

**功能描述：**

启动加载界面

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

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
        <td>操作成功，返回 MediaFile 对象</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
    </tbody>
</table>

<h3 class="notification"> stopLoad</h3>

    stopLoad(options)

**功能描述：**

停止加载界面

**参数说明：**

- options ：为 object 类型，其中包含以下参数：

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
        <td>操作成功，返回 MediaFile 对象</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
    </tbody>
</table>

<h3 class="notification"> progress</h3>

    progress(title, msg, options)

**功能描述：**

显示进度条

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

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
        <td>操作成功，返回 MediaFile 对象</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
    </tbody>
</table>

<h3 class="notification"> startProgress</h3> 

    startProgress(title, msg, options)

**功能描述：**

开始进度显示

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

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
        <td>操作成功，返回 MediaFile 对象</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
    </tbody>
</table>

<h3 class="notification"> updateProgress</h3> 

    updateProgress(value)

**功能描述：**

更新进度显示

**参数说明：**

- value : 为 int 类型，取值范围为[0,100]，进度数值

<h3 class="notification"> stopProgress</h3> 

    stopProgress()

**功能描述：**

关闭进度显示



<h3 class="notification">smsVrification</h3>

	smsVrification(options)
	
**功能描述：**

短信拦截，更具关键字和长度等自动获取验证码

**参数说明：**

-	options是一个object，具体包含的参数：

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
        <td>操作成功，返回获取的短信内容对象data</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
     <tr>
        <td>keyWord</td>
        <td>string</td>          
        <td>短信验证码关键字，如"来自支付宝"</td>  
    </tr>
     <tr>
        <td>dataType</td>
        <td>string</td>          
        <td>验证码类型，目前仅支持 "int"</td>  
    </tr>
     <tr>
        <td>dataLength</td>
        <td>int</td>          
        <td>验证码长度</td>  
    </tr>
    </tbody>
</table>

**data对象说明：**
	
	{
		vrification:"555779"，
		keyWord:"来自支付宝"
	}

	

