### 个人云存储(PCS) ###
    clouda.mbaas.pcs

使用PCS接口实现文件上传，文件操作，文件下载，离线下载等功能，步骤如下：

- 用户登录授权得到密钥（token）
- 使用密钥（token）执行初始化函数init

**方法：**

- init(token,options)
- mkdir(path,options)
- getQuota(options)
- uploadFile(localpath,serverpath,options)
- downloadFile(serverpath,localpath,options)
- deleteFiles(patharr,options)
- getMeta(path,options)
- getList(path,options)
- getListByCategory(mediaType,options)
- getStreamingURL(serverpath,codeType,options)
- search(serverpath,key,recursive,options)
- thumbnail(serverpath,options)
- move(patharr,options)
- rename(patharr,options)
- copy(patharr,options)
- createFileLink(path,options)
- deleteFileLink(path,options)
- cloudMatch(localpath,serverpath,options)
- cloudMatchAndUploadFile(localpath,serverpath,options)
- listRecycle(options)
- restore(filesukarr,options)
- cleanRecycle(options)
- cloudDownload(url,serverpath,options)
- cancelCloudDownload(path,options)
- cloudDownloadTaskList(options)
- queryCloudDownloadTaskProgress(filesukarr,options)
- queryCloudDownloadTaskStatus(filesukarr,options)
- diff(cursor,options)


#### init####
    init(token,options)

**功能描述：**

通过帐号登录（Account）获得的token，初始化PCS

**参数说明：**
- token：为 string 类型，

- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回登录用户信息
onfail | function(err){} | 操作失败，返回错误码信息

#### mkdir ####
    mkdir(path,options)

**功能描述：**

创建文件夹，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### getQuota ####
    getQuota(options)

**功能描述：**

返回pcs空间使用情况，单位字节

**参数说明：**
- options：为 object 类型，其中包括以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回空间使用情况Quota对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Quota对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
used | int | 已使用空间，单位字节
total | int | 空间总大小，单位字节


#### uploadFile ####
    uploadFile(localpath,serverpath,options)

**功能描述：**

上传文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于手机文件系统的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象

**返回的Progress对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
progress | int | 已上传的大小，单位字节
total | int | 空间总大小，单位字节


#### downloadFile ####
    downloadFile(serverpath,localpath,options)
**功能描述：**
下载文件到本地，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- serverpath：为 string或Array 类型，位于个人云存储的绝对路径，若是Array类型，则自动打包下载
- localpath：为 string 类型，位于本地的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象
asStream | boolean | 可选参数，默认是false
codecType | string | 可选参数，默认为空，可选值如下：
         - clouda.mbaas.CODEC_TYPE.M320
         - clouda.mbaas.CODEC_TYPE.M480224
         - clouda.mbaas.CODEC_TYPE.M480360
         - clouda.mbaas.CODEC_TYPE.M640
         - clouda.mbaas.CODEC_TYPE.M854


#### deleteFiles ####
    deleteFiles(patharr,options)

**功能描述：**

批量删除文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由个人云存储上文件或文件夹的绝对路径组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回登录用户信息
onfail | function(err){} | 操作失败，返回错误码信息

#### getMeta ####
    getMeta(path,options)


**功能描述：**

获取文件信息，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回meta对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Meta对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
hasSubFolder | booleanen | 是否有子文件夹
blockList | string | md5值
path | string | 绝对路径
isDir | booleanen | 是否是文件夹
fsId | string | 文件的唯一id
mTime | string | 修改时间戳
mediaType | int | 媒体类型
cTime | string | 创建时间戳
size | int | 文件大小，单位字节

#### getList ####
    getList(path,options)


**功能描述：**

获取文件夹下的信息，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数： 

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息
order | string | 可选参数asc,desc
by | string | 可选参数time,size


#### getListByCategory ####
    getListByCategory(mediaType,options)

**功能描述：**

分类浏览，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- mediaType：为 string 类型，位于个人云存储的绝对路径,其值如下：
         - clouda.mbaas.MEDIA_TYPE.IMG
         - clouda.mbaas.MEDIA_TYPE.AUD
         - clouda.mbaas.MEDIA_TYPE.VID
         - clouda.mbaas.MEDIA_TYPE.DOC 
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息


#### getStreamingURL ####
    getStreamingURL(serverpath,codeType,options)


**功能描述：**

获得文件播放流，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath： string 类型，位于个人云存储的绝对路径
- codeType：播放流类型，其值如下：
         - clouda.mbaas.VIDEO_STREAM.P360(默认)
         - clouda.mbaas.VIDEO_STREAM.P480  
        
- options： object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件流信息
onfail | function(err){} | 操作失败，返回错误码信息

#### search ####
    search(serverpath,key,recursive,options)

**功能描述：**

搜索文件夹，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- key：为 string 类型，搜索关键字
- recursive：为 boolean 类型，是否递归查询
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息

#### thumbnail ####
    thumbnail(serverpath,options)

**功能描述：**

缩略图，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回图片base64
onfail | function(err){} | 操作失败，返回错误码信息
quality | int | 0-100 缩略图品质
width | int | 缩略图宽度，单位像素
height | int | 缩略图高度，单位像素

#### move ####
    move(patharr,options)

**功能描述：**

移动文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**Path**对象组成:


参数 | 类型 | 描述
------------ | ------------- | ------------
from | string | 源文件的绝对路径
to | string | 目标地址的绝对路径


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### rename ####
    rename(patharr,options)

**功能描述：**

重命名文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**PathRename**对象组成:

参数 | 类型 | 描述
------------ | ------------- | ------------
oldName | string | 源文件的绝对路径
newName | string | 新文件名


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### copy ####
    copy(patharr,options)

**功能描述：**

移动文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- patharr：为 Array 类型，由**Path**对象组成:

参数 | 类型 | 描述
------------ | ------------- | ------------
from | string | 源文件的绝对路径
to | string | 目标地址的绝对路径


- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息



#### createFileLink ####
    createFileLink(path,options)

**功能描述：**

创建文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### deleteFileLink ####
    deleteFileLink(path,options)

**功能描述：**

删除文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- path：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息



#### cloudMatch ####
    cloudMatch(localpath,serverpath,options)

**功能描述：**

云端匹配，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于本地的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回是否匹配
onfail | function(err){} | 操作失败，返回错误码信息

#### cloudMatchAndUploadFile ####
    cloudMatchAndUploadFile(localpath,serverpath,options)

**功能描述：**

云端匹配文件并上传，权限仅限于token所获得的路径下`/apps/your_app_dir/`

**参数说明：**
- localpath：为 string 类型，位于本地的绝对路径
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回操作成功状态码
onfail | function(err){} | 操作失败，返回错误码信息
onprogress | function(status){} | 返回上传进度Progress对象

**返回的Progress对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
progress | int | 已上传的大小，单位字节
total | int | 空间总大小，单位字节

#### listRecycle ####
    listRecycle(options)
**功能描述：**
列出回收站的文件列表
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回文件列表，由Meta对象组成的数组
onfail | function(err){} | 操作失败，返回错误码信息

#### restore####
    restore(filesukarr,options)
**功能描述：**
回收站还原文件，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由fsId字符串组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息

#### cleanRecycle ####
    cleanRecycle(options)
**功能描述：**
清空回收站，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息


#### cloudDownload ####
    cloudDownload(url,serverpath,options)
**功能描述：**
启动离线下载任务，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- url：为 string 类型，外网地址
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### cancelCloudDownload ####
    cancelCloudDownload(serverpath,options)
**功能描述：**
取消离线下载任务，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功状态码
onfail | function(err){} | 操作失败，返回错误码信息

#### cloudDownloadTaskList ####
    cloudDownloadTaskList(options)
**功能描述：**
获取离线下载任务列表，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回cloudDownloadList对象
onfail | function(err){} | 操作失败，返回错误码信息
order | string | 可选asc,desc
start | int | 列表查找句柄的开始位置
limit | int | 列表查找句柄的个数限制
needTaskInfo | boolean | 是否需要文件详细信息，默认true
status | int | 0-10

#### queryCloudDownloadTaskStatus ####
    queryCloudDownloadTaskStatus(filesukarr,options)
**功能描述：**
查询给定文件的离线下载状态，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由下载任务id组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回所查询任务的状态
onfail | function(err){} | 操作失败，返回错误码信息


#### queryCloudDownloadTaskProgress ####
    queryCloudDownloadTaskProgress(filesukarr,options)
**功能描述：**
查询给定文件的离线下载进度，权限仅限于token所获得的路径下`/apps/your_app_dir/`
**参数说明：**
- filesukarr：为 Array 类型，由下载任务id组成
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，所查询任务的进度
onfail | function(err){} | 操作失败，返回错误码信息


#### diff ####
    diff(cursor,options)
**功能描述：**
历史版本库变更的查询管理
功能第一次调用时，传入的参数为null。后续调用，需要使用前一次调用返回的data.cursor作为参数传入
查询，两次diff调用之间，有哪些操作被执行了
**参数说明：**
- serverpath：为 string 类型，位于个人云存储的绝对路径
- options：为 object 类型，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回Diff对象
onfail | function(err){} | 操作失败，返回错误码信息

**返回的Diff对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
list | Array | 由Meta对象组成
cursor | string | 供函数diff对比的句柄

**Meta对象：**


参数 | 类型 | 描述
------------ | ------------- | ------------
hasSubFolder | booleanen | 是否有子文件夹
blockList | string | md5值
path | string | 绝对路径
isDir | booleanen | 是否是文件夹
fsId | string | 文件的唯一id
mTime | string | 修改时间戳
mediaType | int | 媒体类型
cTime | string | 创建时间戳
size | int | 文件大小，单位字节
