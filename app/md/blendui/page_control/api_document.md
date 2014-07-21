#页面控制 API

##Control
<h3 class="control" platform="ios android">removeSplashScreen ( )</h3>
去除启动屏幕（仅Native App可用)
<pre><code>Blend.ui.removeSplashScreen();</code></pre>
实例
<pre><code>document.addEventListener("blendready",function(){
	Blend.ui.removeSplashScreen();
});
</code></pre>

<h3 class="control" platform="ios android">exitApp ( )</h3>
退出应用（仅Native App可用）
<pre><code>Blend.ui.exitApp();</code></pre>
实例
<pre><code>document.addEventListener("blendready",function(){
    //监听系统消息，弹出退出确认框
	Blend.ui.on("backPressedBeforeExit",function(e){
	//Android系统按下返回键的消息为backPressedBeforeExit
        if(window.confirm("确定要退出吗?")){
             Blend.ui.exitApp();
        }
    });
});
</code></pre>

<h3 class="control" platform="ios android web">layerStopRefresh ( [layerId] ) : String</h3>
停止下拉刷新，需要配置页面刷新相关参数并注册"layerPullDown"下拉事件响应。

<pre><code>Blend.ui.layerStopRefresh([layerId]);</code></pre>

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
          <td>停止对应id的layer下拉刷新功能，默认停止当前页面下拉刷新功能。</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

返回

*  layerId : String 停止刷新操作的id

实例
<pre><code>document.addEventListener("blendready", function() {
	Blend.ui.layerInit("0", function(dom) {
		var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "active": true,
            "pullToRefresh":true,
            "pullText":"下拉可以刷新⊙０⊙",
            "loadingText":"更新中，请等待...",
            "releaseText":"释放更新⊙０⊙"
        });

        Blend.ui.on("layerPullDown",function(event){
            //模拟一次http请求操作
            setTimeout(function(){
                $("#content", dom).prepend("刷新操作");
                //到了5秒后将会停止页面下拉刷新状态
                Blend.ui.layerStopRefresh("contentLayerId");
            },5000);
        });
	});
});
</code></pre>

<h3 class="control" platform="ios android web">layerBack ( [layerId] )</h3>
退出当前layer，显示layerId对应的页面

<pre><code>Blend.ui.layerBack([layerId])</code></pre>

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
          <td>退出当前页面后要显示的页面id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>//script脚本部分代码
     var layer = new Blend.ui.Layer({
    	"url":"content.html",
    	"id":"contentLayer",
    	"active":true
	 });
	 Blend.ui.layerBack();
</code></pre>


<h3 class="control" platform="ios android web">layerStopLoading ([layerId])</h3>

消除页面的loading样式
<pre><code>Blend.ui.layerStopLoading([layerId])</code></pre>

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
          <td>消除id为layerId的页面loading样式，默认消除当前页面loading样式。</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

返回

*  layerId : String 消除页面的loading样式的id

实例
<pre><code>document.addEventListener("blendready", function() {
	Blend.ui.layerInit("0", function(dom) {
        //点击按钮切换页面
		$('#button', dom).click(function(e) {
			Blend.ui.fire("createContentLayer", "0");
		});

		var contentLayer;
		Blend.ui.on("createContentLayer", function(event) {
			if (contentLayer) {
				contentLayer.in();
			} else {
				contentLayer = new Blend.ui.Layer({
					"id": "contentLayerId",
					"url": "content.html",
					"active": true,
                    "autoStopLoading":false,
                    "maxLoadingTime":1000,
                    "loadingIcon":"base64图片字符串，不包含头"
                });
			}
		});
	});
});</code></pre>