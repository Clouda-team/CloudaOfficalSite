## Media ##
    clouda.device.media

本地媒体功能

**方法：**

- captureMedia(options)
- operateMedia(link, operator, options)    

#### CaptureMedia ####
    captureMedia(options)

**功能描述：**

调取本地照相、视频功能；拍摄、录制、拍照及读取本地图片文件。

**参数说明：**

- options ：为 object 类型，其中包含以下参数：


参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回 MediaFile 对象
onfail | function(err){} | 操作失败，返回错误码 
source | string | 媒体文件来源，其值如下： 
 |  | - clouda.device.MEDIA_SOURCE.CAMERA
 |  | - clouda.device.MEDIA_SOURCE.ALBUM
quality | number | 媒体文件压缩 取值 (1-100)
base64 | boolean | 同时返回图片的base64，默认false
width | number | 图片的最大宽度，大于则压缩，单位像素
height | number | 图片的最大高度，大于则压缩，单位像素
 


**返回的MediaFile对象**

参数 | 类型 | 描述 
------------ | ------------- | ------------
name | string | 文件名，不含路径信息
fullPath | string | 文件本地全路径（含文件名）
type | string | 文件的MIME类型
lastModifiedDate | timestamp | 文件最后修改时间
size | int | 文件大小，单位：字节(bytes)
width | number | 图片的宽度，单位像素
height | number | 图片的宽度，单位像素
base64 | string | 图片的base64(base64为true时，显示)



#### operateMedia ####
    operateMedia(link, operator, options)

**功能描述：**

录制和回放指定路径的音频文件

**参数说明：**

- link : 为 string 类型，本地音频文件路径
- operator ： 为 string 类型，所支持的对音频文件的具体操作类型如下：

方法 | 描述 
------------ | -------------
play | 开始或继续播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
stop | 停止播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，data返回信息，详见前述 operator 的参数说明
onfail | function(err){} | 操作失败，返回错误码信息 







## VTT ##

    clouda.mbaas.vtt

语音识别服务
开发轻应用前，需要先申请语音服务的ak，sk和pid，并执行初始化init方法

**方法：**

- init(ak,sk,pid)
- showDialog(options)

#### init ####
    init(ak,sk,pid)

**功能描述：**

初始化所申请的ak，sk，pid等参数，然后方可使用语音识别服务

**参数说明：**

- ak ：所申请的语音服务的ak
- sk ：所申请的语音服务的sk
- pid：所申请的语音服务的pid

#### showDialog ####
    showDialog(options)

**功能描述：**

显示语音识别对话框，实现语音输入识别

**参数说明：**

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
            <td>识别成功，返回语音识别对象，{result:0,voice_result:{record_time:"5",str_result:"xxx"}}</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>识别失败<br>
            - clouda.mbaas.VTT_STATUS.FAILED ：语音识别失败
            </td>  
        </tr>
        <tr>
            <td>speechMode</td>
            <td>int</td>            
            <td>设置识别模式，可选，其参数如下：<br>
            - clouda.mbaas.VTT_SPEECHMODE.SEARCH ：搜索模式 （默认）<br>
            - clouda.mbaas.VTT_SPEECHMODE.INPUT  ：文本输入模式
        </td>  
        </tr>
        <tr>
            <td>filename</td>
            <td>string</td>            
            <td>语音识别保存的文件名（可选）</td>  
            </td>  
        </tr>
        <tr>
            <td>uuid</td>
            <td>string</td>            
            <td>语音识别标识的uuid（可选）</td>  
        </tr>
        <tr>
            <td>enablePower</td>
            <td>boolen</td>            
            <td>是否显示语音音量条纹，取值：true（默认）/false</td>  
        </tr>
    </tbody>
</table>







## FileSystem ##

    clouda.device.fs

文件管理

**方法：**

- post(path,target,options)

#### post ####
    post(path,target,options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- target : 为 string 类型，目标地址URL(仅HTTP/HTTPS)
- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误码信息 
param | object| 伴随文件上传，传递的POST数据（可选）
uploadKey | string | 上传表单中的key




## Keyboard（ps.键盘的端能力实现有风险） ##
     clouda.device.keyboard

键盘，键盘类

**方法：**

- startListenKeyboard(options)
- stopListenKeyboard(options)


#### startListenKeyboard ####

    startListenKeyboard(options)

**功能描述：**

添加键盘事件监听


**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 当键盘打开或者关闭，返回 键盘信息对象
onfail | function(err){} | 添加监听失败，返回错误码 


**返回的键盘信息对象**

参数 | 类型 | 描述 
------------ | ------------- | ------------
status | number | 0 是从显示到隐藏， 1是从隐藏到显示， 2是键盘一直显示，但高度发生变化
height | number | 键盘的高度，单位像素


#### stopListenKeyboard ####

    stopListenKeyboard(options)

**功能描述：**

停止键盘事件监听

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 停止监听成功，返回 success状态码
onfail | function(err){} | 停止监听失败，返回错误码



