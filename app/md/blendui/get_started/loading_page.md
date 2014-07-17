#Loading
##概述
在页面加载完毕前，页面会处于Loading状态，该状态下默认会出现加载图标，用户可以自行配置Loading状态开关以及保持时间。

##Loading简单使用
代码主要格式如下：
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function (dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "active": true,
            "autoStopLoading": false,
            "maxLoadingTime": 10000,
            "loadingIcon": "base64图片字符串，不包含头"
        });
    });
});</code></pre>

##开启Loading状态配置
通过设置`autoStopLoading : false`阻止系统自动停止Loading状态，只有在此前提下才能继续配置Loading时间和图标。
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function (dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "autoStopLoading": false
        });
    });
});</code></pre>

##配置Loading时长
设置Loading状态的时长，单位为毫秒。
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function (dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "autoStopLoading": false,
            "maxLoadingTime": 10000
        });
    });
});</code></pre>

##配置Loading图标
设置Loading状态显示的图标，需要图片的Base64字符串（不包含头）。
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function (dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "autoStopLoading": false,
            "maxLoadingTime": 10000,
            "loadingIcon": "base64图片字符串，不包含头"
        });
    });
});</code></pre>
