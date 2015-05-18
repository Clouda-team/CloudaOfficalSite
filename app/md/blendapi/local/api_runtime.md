# 本地设备能力API（Runtime）

## 概述

Runtime是一个与框类似的webapp运行环境，可以提供出色的Native API，从而调用设备能力以及实现流畅的页面展现，切换等效果。

本地设备能力类API目前支持以下功能：

- 加速器 (Accelerometer)
- 调起应用 (Activity)
- 电池（Battery）
- 指南针 (Compass)
- 网络连接状态(Connection)
- 手机通讯录 (Concact)
- 设备信息（Device）
- 文件系统（FileSystem）
- 地理位置 (Geolocation)
- 系统语言信息 (Globalization)
- 陀螺仪感应器 (Gyroscope)
- 本地媒体功能（Media）
- 设备通知 (Notification)
- 二维码（QRCode）
- 截屏分享 （Screen)
- 数据存储(database)
- 拦截器（Interceptor）
- 缓存(Cache)

<!-- - 键盘（Keyboard）-->


## Accelerometer ##

    Blend.device.accelerometer

**功能描述：**

加速感应器

**方法：**

- get(options)
- startListen(options)
- stopListen()

<h3 class="accelerometer"> get</h3>

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

<h3 class="accelerometer"> startListen</h3>

    startListen(options)

**功能描述：**

监听设备x,y,z轴方向的加速度信息

**参数说明：**

同get(options)中的参数说明。


<h3 class="accelerometer"> stopListen</h3>

    stopListen()

**功能描述：**

停止监听设备x,y,z轴方向的加速度信息



## Activity ##

    Blend.device.activity

调起应用 

**方法：** 

- start(options)

<h3 class="activity"> start</h3>

  	start(options)

**功能描述：** 

根据传递参数调起本地应用

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
            <td>操作成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>操作失败，返回错误码信息</td>   
        </tr>
        <tr>
            <td>intent</td>
            <td>object</td>
            <td>参考android调起应用参数[intent](http://developer.android.com/reference/android/content/Intent.html)</td>   
        </tr>
    </tbody>
</table>


**intent用法举例**

	var onsuccess = onfail = function(){};

	function setupCalender() {//新建日历
    	var intent = {
        	action: "android.intent.action.EDIT",
        	type: "vnd.android.cursor.item/event",
        	title: "Some title",
        	description: "Some description",
        	beginTime: 1384676947757,
        	endTime: 1384680547757
    	};
    	Blend.device.activity.start({onsuccess:onsuccess,onfail:onfail,intent:intent});
    
	}

	function sendMessage() {//发送短信
    	var intent = {
        	action: "android.intent.action.SENDTO",
        	uri: "smsto: 18600872789",
        	sms_body: "How are you doing?"
    	};
    	Blend.device.activity.start({onsuccess:onsuccess,onfail:onfail,intent:intent});
	}

	function playVideo() {//播放视频
    	var intent = {
        	action: "android.intent.action.VIEW",
        	uri: "http://bcs.duapp.com/jaketestbucket/BaiduXCloud%20v03.mp4?sign=MBO:B3cd3aed3bca93d78135c99c2ab8b5ce:3rCc42yqHZu6lOn7uuucEMSQzI8%3D",
        	type: "video/*"
    	};
    	Blend.device.activity.start({onsuccess:onsuccess,onfail:onfail,intent:intent});
	}

## Battery ##

    Blend.device.battery

**方法：**

- get(options)
- startListen(options)
- stopListen(options)

<h3 class="battery"> get </h3>

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

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>level</td>
            <td>float</td>  
            <td>电量百分比</td>  
        </tr>
        <tr>
            <td>isPlugged</td>
            <td>boolean</td>
            <td>电池充电状态，默认false，未充电</td>   
        </tr>
    </tbody>
</table>


<h3 class="battery"> startListen </h3>

    startListen(options)

**功能描述：**

监听电池状态

**参数说明：**

- options 是一个object，同get(options)中的options说明。

### stopListen ###
    stopListen(options)

**功能描述：**

清除电池状态信息

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){}  | 操作成功，返回SUCCESS状态码
onfail | function(err){}  | 操作失败，返回错误码信息

## Compass ##

    Blend.device.compass

**功能描述：**
指南针功能

**方法：**

- get(options)
- startListen(options)
- stopListen()

<h3 class="compass"> get</h3>

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
        <tr>
            <td>frequency</td>
            <td>integer</td>
            <td>获取朝向信息的频率,单位是毫秒</td>  
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

<h3 class="compass"> startListen</h3>

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

<h3 class="compass"> stopListen</h3>

    stopListen()

**功能描述：**

停止监听指南针信息


## Connection ##

     Blend.device.connection
    
网络连接

**方法：**

- get(options)
- startListen(options)

<h3 class="connection"> get </h3>

    get(options)

**功能描述：**

获取当前网络状态

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
            <td>操作成功，data是返回的当前网络的字符串</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
    </tbody>
</table>

**返回的网络类型字符串**

网络连接状态类型可能的取值：


    Blend.device.CONNECTION_STATUS.UNKNOWN // 未知状态
    Blend.device.CONNECTION_STATUS.NONE // 断开状态
    Blend.device.CONNECTION_STATUS.WIFI // WIFI连通状态
    Blend.device.CONNECTION_STATUS.CELL_2G // 移动数据2G连通状态
    Blend.device.CONNECTION_STATUS.CELL_3G // 移动数据3G连通状态
    Blend.device.CONNECTION_STATUS.CELL_4G // 移动数据4G连通状态
    Blend.device.CONNECTION_STATUS.CELL // 移动数据通连通状态
    Blend.device.CONNECTION_STATUS.ETHERNET // 以太网连通状态

    startListen(options)

**功能描述：**

监听当前网络状态

**参数说明：**

- options 是一个object，同get(options)中的options说明。



## Contact ##
    Blend.device.contact

联系人类。

**方法：**

- find(field, options)
- count(options)    
- getCursor(field, cursorOffset, length， options)    
- insert(data, options)
- update(contact, data, options)
- remove(contact, options)
- chooseContact(options)

<h3 class="contact"> find</h3>

    find(field, options)

**功能描述：**

查找并选择联系人

**参数说明：**

- field: 为array类型, 其中的元素是“Contact对象”中的“参数”字段组合。表示查找条件。
        
   举例：

   1.全选：可用`["*"]`

   2.自定义选择：
    ["displayName", "phoneNumbers", "emails"]

- options: 为object，其中包括以下参数：

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
            <td>操作成功，data是返回的是“Contact对象”组成的数组</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
        <tr>
            <td>filter</td>
            <td>string</td>          
            <td>筛选条件，可选参数，默认为空</td>  
        </tr>
        <tr>
            <td>multiple</td>
            <td>boolean</td>          
            <td>是否返回多个返回联系人信息，默认：flase</td>  
        </tr>
    <tbody>
</table>

**Contact对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>id</td>
            <td>string</td>           
            <td>联系人ID，全局唯一标识符，标识通讯录中的一个联系人</td>  
        </tr>
        <tr>
            <td>displayName</td>
            <td>string</td>           
            <td>姓名</td>  
        </tr>
        <tr>
            <td>nickname</td>
            <td>string</td>           
            <td>昵称</td>  
        </tr>
        <tr>
            <td>phoneNumbers</td>
            <td>array</td>           
            <td>电话（座机、手机等相同），详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>addresses</td>
            <td>array</td>           
            <td>联系地址，详细说明参考“ContactAddress”对象</td>  
        </tr>
        <tr>
            <td>emails</td>
            <td>array</td>           
            <td>电子邮件地址，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>organizations</td>
            <td>array</td>           
            <td>组织，详细说明参考“ContactOrg”对象</td>  
        </tr>   
        <tr>
            <td>birthday</td>
            <td>string</td>           
            <td>生日</td>  
        </tr>
        <tr>
            <td>photos</td>
            <td>array</td>           
            <td>头像，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>ims</td>
            <td>array</td>           
            <td>IM信息，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>urls</td>
            <td>array</td>           
            <td>相关网页，如博客，详细说明参考“ContactField”对象</td>  
        </tr>
        <tr>
            <td>note</td>
            <td>string</td>           
            <td>备注</td>  
        </tr>
        <tr>
            <td>categories</td>
            <td>array</td>           
            <td>自定义类别，详细说明参考“ContactField”对象</td>  
        </tr>
    </tbody>
</table>

**ContactField对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>value</td>
            <td>string</td>           
            <td>字段值（电话号码或email）</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
    </tbody>
</table>

**ContactAddress对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
        <tr>
            <td>formatted</td>
            <td>string</td>           
            <td>完整地址显示格式</td>  
        </tr>
        <tr>
            <td>streeAddress</td>
            <td>string</td>           
            <td>完整街道地址</td>  
        </tr>
        <tr>
            <td>locality</td>
            <td>string</td>           
            <td>城市或地区</td>  
        </tr>
        <tr>
            <td>region</td>
            <td>string</td>           
            <td>省</td>  
        </tr>
        <tr>
            <td>country</td>
            <td>string</td>           
            <td>国家</td>  
        </tr>
        <tr>
            <td>postalCode</td>
            <td>string</td>           
            <td>邮编</td>  
        </tr>

    </tbody>
</table>

**ContactOrg对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>type</td>
            <td>string</td>           
            <td>字段类型，如“住宅”、“单位”等</td>  
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>           
            <td>组织名称</td>  
        </tr>
        <tr>
            <td>pref</td>
            <td>boolean</td>           
            <td>用户是否设置为首选项，true：设置为首选项</td>  
        </tr>
        <tr>
            <td>department</td>
            <td>string</td>           
            <td>部门</td>  
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>           
            <td>职务</td>  
        </tr>
    </tbody>
</table>

<h3 class="contact"> count</h3>

    count(options)

**功能描述：**

获取通讯录中的条目总数。

**参数说明：**

options: 为object，参数说明同find(field, options)中的options说明。

<h3 class="contact"> getCursor</h3>

    getCursor(field, cursorOffset, length， options)

**功能描述：**

读取联系人信息

**参数说明：**

- field : 同 find(field, options)中的field说明
- cursorOffset：为 int 类型， 指定位移的联系人，表示从第几个开始
- length : 为 int 类型，设置查询个数
- options：
   参数说明同find(field, options)中的options说明。

<h3 class="contact"> insert</h3>

    insert(data, options)

**功能描述：**

新增一个联系人条目

**参数说明：**

- data： find(field, options)接口中返回的“Contact对象”中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

<h3 class="contact"> update</h3>

    update(contact, data, options)

**功能描述：**

保存一个联系人条目

**参数说明：**

- contact： 为 array 类型，即 find(field, options)接口中所返回的Contact对象中的参数所组成的数组
- data： find(field, options)接口中返回的Contact对象中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

<h3 class="contact"> remove</h3>

    remove(contact, options)

**功能描述：**

删除一个联系人条目

**参数说明：**

- contact： 为 array 类型，即 find(field, options)接口中所返回的Contact对象中的参数所组成的数组
- options：参数说明同find(field, options)中的options说明。

<h3 class="contact">chooseContact</h3>

	chooseContact(options)

**功能描述：**

从手机通讯录选择某个联系人，返回联系人信息

**参数说明：**
-	options为object，其中包括以下参数：

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
            <td>操作成功，data是返回的是选取的联系人信息对象</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
    <tbody>
</table>






## Device ##

    Blend.device.device

设备信息

**方法：**

- getImei(options)
- getSysVersion(options)
- getDeviceModelName(options)
- getScreenSize(options)

<h3 class="device"> getImei </h3>

    getImei(options)

**功能描述：**

获取设备的imei号，imei由设备生产商及特定设备平台或型号所决定

**参数说明：**

- options : 为 object 类型，其中包含以下参数：
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
            <td>操作成功，data返回的是一个string</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码</td>  
        </tr>
    </tbody>
</table>

<h3 class="device"> getSysVersion </h3>

    getSysVersion(options)

**功能描述：**

获取设备的系统版本信息

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息 





<h3 class="device"> getDeviceModelName </h3>

    getDeviceModelName(options)

**功能描述：**

获取设备的名称

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息

 

<h3 class="device"> getScreenSize </h3>

    getScreenSize(options)

**功能描述：**

获取设备的屏幕分辨率

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回成功信息
onfail | function(err){} | 操作失败，返回错误码信息 

**返回的screen对象**

参数 | 类型 | 描述
------------ | ------------- | ------------
width | int | 宽度
height | int | 高度
pixelDepth | int | 颜色分辨率
colorDepth | int | 色深


## FileSystem ##

    Blend.device.fs

文件管理

**方法：**

- post(path, target, options)
- download (options)
- remove(options)
- clear(options)
- getInfo (options)
- getSurplusSize (options)
- getMd5 (options)
- unzip(options)
- read(options)

<h3 class="filesystem"> post </h3>

    post(path, target, options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- target : 为 string 类型，目标地址URL(仅HTTP/HTTPS)
- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
param | object| 伴随文件上传，传递的POST数据（可选）
uploadKey | string | 上传表单中的key

<h3 class="filesystem"> download </h3>

	download(options)

**功能描述：**

将指定URL的文档下载保存到本地

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
url | string | url地址
value | string | 文件保存路径

- 返回的data参数说明


	{
		paras:{ 
			url:xx, 
			value:""
		},
		path:"本地绝对路径"
	}

<h3 class="filesystem"> remove </h3>

	remove(options)

**功能描述：**

删除一个文件对象

**参数说明：**

- options : 为 object 类型，其中包含以下参数：


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{
		paras:""  //传入的参数值,等同于key值
	}
	
<h3 class="filesystem"> clear </h3>

	clear(options)

**功能描述：**

清除本域的所有文件对象，并且将数据存储中相应的key和value删除

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg

- 返回的data参数说明


	{
		paras:""  //传入的参数值
	}

<h3 class="filesystem"> getInfo </h3>

	getInfo(options)

**功能描述：**

获取文件信息

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: 这个参数代表请求参数透传回来
		}, 
		size: 1024 ,
		type:"类型"
	}

<h3 class="filesystem"> getSurplusSize </h3>

	getSurplusSize(options)

**功能描述：**

获取剩余存储空间

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg

- 返回的data参数说明


	{ 
		{
			paras: 这个参数代表请求参数透传回来
		}, 
		size: 1024 //剩余存储空间,单位是字节
	}

<h3 class="filesystem"> getMd5 </h3>

	getMd5(options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		md5: "" //文件MD5值
	}

<h3 class="filesystem"> unzip </h3>

	unzip(options)

**功能描述：**

用unzip解压文件，如果遇到同名文件自动覆盖

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		files: [] //解压出来的文件全路径列表
	}

<h3 class="filesystem"> read </h3>

	read(options)

**功能描述：**

读取txt文件中的内容以JSON类型(如果不能以JSON形式返回则返回string)返回

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，操作成功，返回的 data 是目标URL返回的结果
onfail | function(err){} | 操作失败，返回错误对象。包括errorCode和错误信息errMsg
key | string | 文件索引

- 返回的data参数说明


	{ 
		{
			paras: //请求参数
		}, 
		data:"" //以文本读取方式获取到的字符串
	} 


## Geolocation ##
    Blend.device.geolocation

地理位置

**方法：**

- get(options)
- startListen(options)
- stopListen(options)

<h3 class="geolocation"> get </h3>

    get(options)

**功能描述：**

获取当前地理位置信息。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回地理信息对象
onfail | function(err){} | 操作失败，返回错误码信息
 

**返回的地理信息对象**

参数 | 类型 | 描述
------------ | ------------- | ------------
accuracy | float | 精确度(单位米)
longitude | float | 经度
latitude | float | 纬度
coordtype | string | 坐标类型,一共有三类, 包括:<br/> bd09ll (百度经纬度坐标)  <br/> gcj02ll (国测局经纬度坐标)<br/> wgs84ll (GPS经纬度)



<h3 class="geolocation"> startListen </h3>

    startListen(options)

**功能描述：**

监听地理位置信息。

使用场景分为步行（高灵敏度）和开车（低灵敏度）两种，

启动对有大幅变化的地理位置进行监听。调用后立即触发一次回调，报告当前位置，后续只在地理位置发生变动时方通知。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回地理信息对象
onfail | function(err){} | 操作失败，返回错误码信息 
significant | bool | 是否仅在位置发生大幅变化时进行回调，boolean类型，默认true(相当于省电模式)。<font color="red">目前大幅变化阈值设置为20米，不支持自定义配置。</font>

<h3 class="geolocation"> stopListen </h3>

    stopListen(options)

**功能描述：**

停止监听地理位置信息。

**参数说明：**

- options是一个object，其中包括以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回SUCCESS状态码
onfail | function(err){} | 操作失败，返回错误码信息 

## Globalization ##
    Blend.device.globalization

系统语言信息 

**方法：** 

- getlocale(options)

<h3 class="globalization"> getlocale </h3>

  getlocale(options)

**功能描述：** 

获取本地语言种类

**参数说明：** 

- options：为 object 类型，其中包括以下参数： 


参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，返回当前用户语言，字符串格式，具体参见 [语言编码标准](http://zh.wikipedia.org/wiki/ISO_639-1)
onfail | function(err){} | 操作失败，返回错误码信息


## Gyroscope ##
    Blend.device.gyro

陀螺仪感应器

**方法：**

- get(options)
- startListen(options)
- stopListen()

<h3 class="gyroscope"> get</h3>

    get(options)

**功能描述：**

捕获设备x,y,z轴方向的转动角度信息

**参数说明：**

- options ： 为 object 类型，其中包含以下参数：

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
            <td>获取陀螺仪转动角度信息成功，data是返回的Gyroscope对象信息</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>获取失败，返回错误码</td>  
        </tr>
        <tr>
            <td>frequency</td>
            <td>number</td>            
            <td>陀螺仪转动角度信息获取频率设置，默认为10000，单位：毫秒</td>  
        </tr>
    <tbody>
</table>

**返回的Gyroscope对象：**

特定时间点采集到的陀螺仪转动角度信息。
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>alpha</td>
            <td>number</td>          
            <td>x轴方向转动角度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>beta</td>
            <td>number</td>            
            <td>beta轴方向转动角度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>gamma</td>
            <td>number</td>          
            <td>gamma轴方向转动角度数据，[0,1)之间</td>  
        </tr>
        <tr>
            <td>timestamp</td>
            <td>number</td>          
            <td>获取陀螺仪转动角度数据数据时的时间戳，单位：毫秒</td>  
        </tr>
    <tbody>
</table>

<h3 class="gyroscope"> startListen</h3>

    startListen(options)

**功能描述：**

监听设备x,y,z轴方向转动角度信息

**参数说明：**

同get(options)中的参数说明。

<h3 class="gyroscope"> stopListen</h3>

    stopListen()

**功能描述：**

停止监听设备x,y,z轴方向转动角度信息


## Media ##
    Blend.device.media

本地媒体功能

**方法：**

- captureMedia(options)
- operateMedia(link, operator, options)    

<h3 class="media"> CaptureMedia </h3>

    captureMedia(options)

**功能描述：**

调取本地照相、视频功能；拍摄、录制、拍照及读取本地图片文件。

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
        <td>操作成功，返回 MediaFile 对象或其组成的数组，如[MediaFile, MediaFile]</td>  
    </tr>
    <tr>
        <td>onfail</td>
        <td>function(err){}</td>          
        <td>操作失败，返回错误码</td>  
    </tr>
    <tr>
        <td>mediaType</td>
        <td>string</td>          
        <td> 媒体类型，其值如下： <br>
         - Blend.device.MEDIA_TYPE.PICTURE(默认) <br>
         - Blend.device.MEDIA_TYPE.VIDEO <br>
         - Blend.device.MEDIA_TYPE.AUDIO <br>
         - Blend.device.MEDIA_TYPE.ALLMEDIA
     </td>  
    </tr>
    <tr>
        <td>source</td>
        <td>string</td>
        <td>媒体文件来源，其值如下：<br>
         0(拍照) ;  1(相册)<br>
        </td>  
    </tr>
    <tr>
        <td>quality</td>
        <td>number</td>
        <td>媒体文件压缩 取值 (1-100)</td>  
    </tr>
    <tr>
        <td>base64</td>
        <td>boolean</td>
        <td>同时返回图片的base64，默认false
        </td>  
    </tr>
    <tr>
        <td>width</td>
        <td>number</td>
        <td>图片的最大宽度，大于则压缩，单位像素
        </td>  
    </tr>
    <tr>
        <td>height</td>
        <td>number</td>
        <td>图片的最大高度，大于则压缩，单位像素
        </td>  
    </tr>
</tbody>
</table>

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

<h3 class="media"> operateMedia </h3>

    operateMedia(link, operator, options)

**功能描述：**

录制和回放指定路径的音频文件

**参数说明：**

- link : 为 string 类型，本地音频文件路径
- operator ： 为 string 类型，所支持的对音频文件的具体操作类型如下：

参数 | 描述 
------------ | ------------- | ------------
startRecord | 开始录制音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
stopRecord | 停止录制音频文件，操作成功返回文件的绝对路径；操作失败，则返错误码信息 
play | 开始或继续播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
stop | 停止播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码信息
seekTo | 移动音频文件的播放位置。此操作类型下，options中需包含以下三个参数：<br/>time: int 类型，设置音频文件重放位置，单位：毫秒 <br/> onsuccess:  操作成功返回SUCCESS状态码<br/>onfail: 操作失败，则返错误码
setVolume | 设置播放音量，此操作类型下，options中需包含以下三个参数：<br/>volume: float 类型，设置音频文件播放音量，取值范围为[0.0, 1.0]<br/>onsuccess:  操作成功返回SUCCESS状态码<br/>onfail: 操作失败，则返错误码
speedFF | 快进5s，操作成功返回SUCCESS状态码；操作失败，则返错误码信息


- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
onsuccess | function(data){} | 操作成功，data返回信息，详见前述 operator 的参数说明
onfail | function(err){} | 操作失败，返回错误码信息 

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
- smsVerification(options)

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



<h3 class="notification">smsVerification</h3>

	smsVerification(options)
	
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

	



## QRCode ##
     Blend.device.qr

二维码、条形码类

**方法：**

- startCapture(options)

<h3 class="qrcode"> startCapture</h3>

	startCapture(options)

**功能描述：**

启动二维码或条形码扫描与识别

**扫描对象类型：**

- clouda.device.QR_TYPE.QRCODE  ：二维码
- clouda.device.QR_TYPE.BARCODE  ： 条形码

**参数说明：**

参数 | 类型 | 描述 
------------ | ------------- | ------------
onsuccess | function(data){} | 扫描成功，返回二维码内容字符串
onfail | function(err){} | 二维码扫描失败，返回错误码 
type | number | 扫描对象类型 




## Screen ##
    Blend.device.screen

截屏分享

**方法：**

- captureScreen(options)
- shareImage(data, options)
- shareScreen(options)

<h3 class="screen"> capture</h3>

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


<h3 class="screen"> shareImage</h3>

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

<h3 class="screen"> shareScreen</h3>

    shareScreen(options)

**功能描述：**

获取并分享截屏

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
            <td>分享成功，返回SUCCESS状态码</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>          
            <td>操作失败，返回错误码信息</td>  
        </tr>
    </tbody>
</table>

## Database ##

	Blend.device.database

为webapp提供大规模数据，文件存储的功能

**方法：**

- set(options)
- get(options)
- remove(options)
- clear(options)

<h3 class="database"> set </h3>

	set(options)
	
**功能描述：**

设置存储的值

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要存储数据的key值
value| string | 需要存储数据的value值
filedata | int | 默认为0，0 表示普通数据，不会添加到拦截器列表，1表示会添加到拦截列表(供离线缓存拦截使用)
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg


**返回data对象说明：**
	
	{
		paras:{...}	// paras是调用时传入的参数			
	}


<h3 class="database"> get </h3>

	get(options)
	
**功能描述：**

如key存在则输出对应的JSON，如果key不存在则输出" "


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要获取数据的key值
filedata | int | 默认为0，0 表示普通数据，1表示从拦截列表中获取
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...},	// paras 是调用时传入的参数
		value: "xxx"	// key 对应的value
	} 
	


<h3 class="database"> remove </h3>

	remove(options)
	
**功能描述：**

删除一个数据对象，只能删除本域下的数据


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
key | string | 需要删除数据对象的key值
filedata | int | 默认为0，0 表示普通数据，1表示删除拦截列表中的key-value
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...}	// paras 是调用时传入的参数
	} 
	

<h3 class="database"> clear </h3>

	clear(options)
	
**功能描述：**

清除该域下所有的数据对象


**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
filedata | int | 默认为0，0 表示普通数据，1表示拦截列表中的数据
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg

**返回data对象说明：**
	
	{
		paras:{...}	// paras 是调用时传入的参数
	} 
	



## Interceptor ##

	Blend.device.interceptor

拦截器

**方法：**

- set(options)

<h3 class="interceptor"> set </h3>

	set(options)
	
**功能描述：**

开启拦截器，访问拦截器列表中已有资源时会使用本地缓存，如果关闭则不使用缓存

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

参数 | 类型 | 描述
------------ | ------------- | ------------
status | int | 0表示关闭，1表示打开
onsuccess | function(data){}  | 调用成功的回调函数,返回data对象
onfail | function(err){}  | 调用失败的回调函数，返回错误对象，包含错误码errorCode和错误信息errMsg


**返回data对象说明：**
	
	{
		paras:{...}	// paras是调用时传入的参数			
	}

## Cache ##

	Blend.device.cache
	
离线存储功能为用户提供可编程的离线能力。其主要API接口包括cache.set、cache.remove、Meta离线标签等API

**方法**

-	set(options)
-	remove(options)
-	&lt;meta&gt;标签

<h3 class="cache">set</h3>

	Blend.device.cache.set(options)

**功能描述**

在页面加载完成后，直接调用该API，可以将指定url资源下载并且保存到本地，下次访问时就会优先使用本地缓存。


**参数说明**
- options是一个object，其中包括以下参数：

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
            <td>成功回调用函数</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>失败回调函数,参数为</td>   
        </tr>
         <tr>
            <td>url</td>
            <td>string</td>
            <td>需要缓存资源的url</td>   
        </tr>
         <tr>
            <td>filedata</td>
            <td>int</td>
            <td>拦截类型，1表示无论网络环境，对于存在于拦截列表中的url进行拦截，使用缓存资源，2表示对于仅仅网络离线的时候对url进行拦截，在web在线时候不进行拦截。</td>   
        </tr>
    </tbody>
</table>

**成功回调返回的data对象**
	
	{
		error_code:0,
		error_msg:"",
		response:""
	}


**失败回调返回的错误对象err**
	
	{
		error_code:1,
		error_msg:"",
		response:""
	}




<h3 class="cache">remove</h3>

	Blend.device.cache.remove(options)
	
	
**功能描述**

删除缓存cache中的内容，让请求走正常http请求流程。

**参数说明**
- options是一个object，其中包括以下参数：

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
            <td>成功回掉函数</td>  
        </tr>
        <tr>
            <td>onfail</td>
            <td>function(err){}</td>
            <td>失败回调函数,参数为</td>   
        </tr>
         <tr>
            <td>url</td>
            <td>string</td>
            <td>需要缓存资源的url</td>   
        </tr>
         <tr>
            <td>fileData</td>
            <td>int</td>
            <td>拦截类型，1表示无论网络环境，对于存在于拦截列表中的url进行拦截，使用缓存资源，2表示对于仅仅网络离线或者2G的时候对url进行拦截，在web在线时候不进行拦截。</td>   
        </tr>
    </tbody>
</table>

**成功回调返回的data对象**
	
	{
		error_code:0,
		error_msg:"",
		response:""
	}


**失败回调返回的错误对象err**
	
	{
		error_code:1,
		error_msg:"",
		response:""
	}





<h3 class="cache">&lt;meta&gt;标签</h3>

通过meta标签启动离线存储功能

	Blend.lightInit({
		ak:'xxx', /*ak是用户在百度开发者平台申请的appKey*/
		module:['cache']
	},function(){
		Blend.device.cache.init();
	});

在head中间加入：

	<meta name="Cache-Type" content="text/css;text/js;text/gif">

以上代码表示对于页面的css，js，gif静态资源启动资源拦截缓存功能，该功能默认对于静态资源缓存fileData为1，对于当前的html缓存的fileData为2（即离线则使用缓存，在线则不使用缓存）
	
