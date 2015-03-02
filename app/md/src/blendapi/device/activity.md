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