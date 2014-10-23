### Media ###
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
mediaType | string | 媒体类型，其值如下：
 |  | - clouda.device.MEDIA_TYPE.IMAGE(默认) <br>
 |  | - clouda.device.MEDIA_TYPE.VIDEO
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
startRecord | 开始录制音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
stopRecord | 停止录制音频文件，操作成功返回文件的绝对路径；操作失败，则返错误码信息 
play | 开始或继续播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
stop | 停止播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
seekTo | 移动音频文件的播放位置。此操作类型下，options中需包含以下三个参数：
       | time: int 类型，设置音频文件重放位置，单位：毫秒  
       | onsuccess:  操作成功返回SUCCESS状态码
       | onfail: 操作失败，则返错误码
setVolume | 设置播放音量，此操作类型下，options中需包含以下三个参数：
       | volume: float 类型，设置音频文件播放音量，取值范围为[0.0, 1.0]
       | onsuccess:  操作成功返回SUCCESS状态码
       | onfail: 操作失败，则返错误码
speedFF | 快进5s，操作成功返回SUCCESS状态码；操作失败，则返错误码信息


- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，data返回信息，详见前述 operator 的参数说明
onfail | function(err){} | 操作失败，返回错误码信息 



