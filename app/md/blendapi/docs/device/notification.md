### Notification ###
    
    clouda.device.notification

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

#### alert ####
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

#### confirm ####
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

#### beep ####
    beep(time)

**功能描述：**

设备将发出蜂鸣声，且可设定持续时长

**参数说明：**

- time : 为 int 类型， 蜂鸣的持续时间，单位：毫秒

#### vibrate ####
    vibrate(time)

**功能描述：**

使设备震动，且可设置指定的震动时长。

**参数说明：**

- time ： 为 int 类型， 设备震动时长，单位： 毫秒

#### prompt ####
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

#### startLoad ####
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

#### stopLoad ####
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

#### progress ####
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

#### startProgress #### 
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

#### updateProgress #### 
    updateProgress(value)

**功能描述：**

更新进度显示

**参数说明：**

- value : 为 int 类型，取值范围为[0,100]，进度数值

#### stopProgress #### 
    stopProgress()

**功能描述：**

关闭进度显示
