#自定义事件 API

##Event
<h3 class="event" platform="ios android web">on ( event_type, callback ) </h3>
自定义事件，为一个事件绑定回调函数，同一事件可绑定多个回调函数。

<pre><code>Blend.ui.on(event_type,callback);</code></pre>

<table>
    <tbody>
        <tr>
        	<th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>event_type</th>
          <th>String</th>
          <td>事件名称</td>
          <td>是</td>
        </tr>
        <tr>
          <th>callback</th>
          <th>Function</th>
          <td>事件绑定的回调函数fuction(event): event['detail']为layer的id, event['data']为通过fire方法传递过来的数据</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

可用的系统事件名称

<table>
    <tbody>
        <tr>
        	<th>事件名称</th>
            <th>说明</th>
        </tr>
        <tr>
          <td>layerCreateSuccess</td>
          <td>layer创建成功</td>
        </tr>
        <tr>
          <td>layerLoadFinish</td>
          <td>layer页面载入成功</td>
        </tr>
        <tr>
          <td>layerPullDown</td>
          <td>下拉刷新loading</td>
        </tr>
        <tr>
          <td>layerPoped</td>
          <td>layer返回事件</td>
        </tr>
        <tr>
          <td>tap</td>
          <td>slider点击</td>
        </tr>
        <tr>
          <td>slide</td>
          <td>slider滑动切换</td>
        </tr>
        <tr>
          <td>menuPressed</td>
          <td>菜单建事件</td>
        </tr>
        <tr>
          <td>layerGoBack</td>
          <td>layer中返回键goBack回调</td>
        </tr>
        <tr>
          <td>backPressedBeforeExit</td>
          <td>返回键退出事件回调</td>
        </tr>
	<tbody>
</table>


实例
<pre><code>//添加script脚本
document.addEventListener("blendready",function() {
    var callbackA = function(e){
		console.log(e['data']);
    };
    var callbackB = function(e){
		console.log(e['detail']);
    };
	Blend.ui.on("event",callbackA};
	Blend.ui.on("event",callbackB};
});
</code></pre>

<h3 class="event" platform="ios android web">off ( event_type, [callback] )</h3>
解绑事件，解绑event_type类型的函数回调。

<pre><code>Blend.ui.on(event_type,[callback]);</code></pre>

<table>
    <tbody>
        <tr>
        	<th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>event_type</th>
          <th>String</th>
          <td>事件名称</td>
          <td>是</td>
        </tr>
        <tr>
          <th>callback</th>
          <th>Function</th>
          <td>要解绑的函数，如果callback为空或"all"，将会删除所有与event_type绑定的回调函数</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>//添加script脚本
document.addEventListener("blendready",function(){
    var callbackA = function(e){console.log(e)};
    var callbackB = function(e){console.log(e)};
	Blend.ui.on("event",callbackA};
	Blend.ui.on("event",callbackB};
	//解绑callbackA
	Blend.ui.off("event",callbackA);
	//解除与event相关的所有绑定
	Blend.ui.off("event");
	//Blend.ui.off("event","all");
});
</code></pre>

<h3 class="event" platform="ios android web">fire (event_type, targetId, message) </h3>
触发注册的事件
<pre><code>Blend.ui.fire(type,targetId,message);</code></pre>

<table>
    <tbody>
        <tr>
        	<th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>event_type</th>
          <th>String</th>
          <td>事件名称</td>
          <td>是</td>
        </tr>
        <tr>
          <th>targetId</th>
          <th>String</th>
          <td>发送目标的layerId, 如果是false则是广播，如果为“top”则向原始layer发送</td>
          <td>是</td>
        </tr>
        <tr>
          <th>message</th>
          <th>Object/String</th>
          <td>发送的数据信息可以是字符串或者json数据</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>//添加script脚本
document.addEventListener("blendready",function(){
    //自定义事件
    var callback = function(e){console.log(e)};
	Blend.ui.on("event",callback};

	Blend.ui.fire("event","top",{"url":"http://www.baidu.com"});
});
</code></pre>


<h3 class="event platform="ios android web">once (event_type, [callback]) </h3>
触发自定义事件后，将该事件注销掉
<pre><code>Blend.ui.once(event_type, [callback]);</code></pre>

<table>
    <tbody>
        <tr>
        	<th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>event_type</th>
          <th>String</th>
          <td>事件名称</td>
          <td>是</td>
        </tr>
        <tr>
          <th>callback</th>
          <th>Function</th>
          <td>要触发一次后解绑的函数，如果callback为空或"all"，在触发所有响应后删除所有与event_type绑定的回调函数</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>//添加script脚本
document.addEventListener("blendready",function() {
    var callbackA = function(e){console.log(e)};
    var callbackB = function(e){console.log(e)};
	Blend.ui.on("event",callbackA};
	Blend.ui.on("event",callbackB};
	//触发一次后解绑callbackA
	Blend.ui.once("event",callbackA);
	//触发一次后解除与event相关的所有绑定
	Blend.ui.once("event");
	//Blend.ui.once("event","all");
});
</code></pre>

<h3 class="event" platform="ios android web">start ( layerId, callback )</h3>
<p style="color:red">在layerId对应的页面初始化后的执行回调函数
<pre><code>Blend.ui.start(layerId, callback);</code></pre>

<table>
    <tbody>
        <tr>
        	<th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>layerId</th>
          <th>String</th>
          <td>layer的id；当layerId为"0"时，首页初始化后执行callback函数</td>
          <td>是</td>
        </tr>
        <tr>
          <th>callback</th>
          <th>Function</th>
          <td>在相应layer初始化后执行的函数</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>//添加script脚本
document.addEventListener("blendready",function() {
    var layerA = new Blend.ui.Layer({
    	"url":"contentA.html",
    	"id":"contentLayerA"
	 });
	var layerB = new Blend.ui.Layer({
    	"url":"contentB.html",
    	"id":"contentLayerB"
	 });
    var callback = function(e){console.log(e)};
    Blend.ui.start(layerA, callback);
});
</code></pre>