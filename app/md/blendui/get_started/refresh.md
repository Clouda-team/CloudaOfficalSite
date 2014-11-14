#下拉刷新
##概述
用户可以在页面上自定义下拉刷新样式和定义下拉操作，方便用户刷新获取页面内容。

##下拉刷新简单使用
在BlendUI中我们既可以在Layer页面内也可以在LayerGroup页面内使用下拉刷新功能。
##Layer页面内下拉刷新操作
代码主要格式如下：
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("contentLayerId",function(dom){
        Blend.ui.on("layerPullDown",function(event){
            Blend.ui.layerStopRefresh();
        });
    });

    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "pullToRefresh": true
        });
    });
});</code></pre>

一个简单的实例：
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "pullToRefresh": true
        });
    });
});</code></pre>

> 温馨提示：这里定义的Layer需要设置pullToRefresh为true才可以显示下拉刷新效果，但目前只是在页面上增加了效果，具体刷新操作如何配置请向下看。


##加入下拉事件响应
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("contentLayerId",function(dom){
        Blend.ui.on("layerPullDown",function(event){
            //监听下拉事件，自定义刷新操作
            setTimeout(function(){
                $("#content", dom).prepend("刷新操作");
                //一定要在操作结束后停止页面刷新
                Blend.ui.layerStopRefresh();
            },1000);
        });
    });

    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "pullToRefresh": true
        });
    });
});</code></pre>

> 温馨提示：这里的刷新操作通过`setTimeout`模拟了一个耗时1秒的请求操作，请求结束后需要用户手动结束页面刷新操作。


##自定义下拉样式
配置下拉文本样式，默认为"下拉刷新"
<pre><code>pullText:"下拉可以刷新⊙０⊙"</code></pre>
配置加载中文本样式，默认为"正在载入"
<pre><code>loadingText:"更新中，请等待..."</code></pre>
配置释放下拉文本样式，默认为"放开以刷新"
<pre><code>releaseText:"释放更新⊙０⊙"</code></pre>
配置加载中图标样式
<pre><code>loadingIcon:"base64图片字符串，不包含头"</code></pre>

一个实例：
<pre><code>document.addEventListener("blendready", function() {
    Blend.ui.layerInit("0", function(dom) {
        var contentLayer = new Blend.ui.Layer({
            "id": "contentLayerId",
            "url": "content.html",
            "active": true,
            "pullToRefresh": true,
            "pullText": "下拉可以刷新⊙０⊙",
            "loadingText": "更新中，请等待...",
            "releaseText": "释放更新⊙０⊙",
            "loadingIcon": "base64图片字符串，不包含头"
        });
    });

    Blend.ui.layerInit("contentLayerId",function(dom){
        Blend.ui.on("layerPullDown",function(event){
            setTimeout(function(){
                $("#content", dom).prepend("刷新操作");
                Blend.ui.layerStopRefresh();
            },1000);
        });
    });
});</code></pre>

##LayerGroup页面内下拉刷新操作
代码主要格式如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("content", function (dom) {
        Blend.ui.on("layerPullDown", function (event) {
            setTimeout(function () {
                $("#page-content", dom).prepend("刷新操作");
                Blend.ui.layerStopRefresh();
            }, 2000);
        });
    });
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "tab",
            layers: [
                {
                    "id": 'content',
                    "url": 'content.html',
                    "active": true,
                    "autoload": true,
                    "pullToRefresh": true,
                    "pullBgColor": "ff0000",
                    "pullText": "下拉刷新",
                    "loadingText": "更新中...",
                    "releaseText": "释放更新"
                },{
                    id: 'first',
                    "url": 'first.html',
                    "autoload": true
                }
            ]
        });
    });
});</code></pre>

> LayerGroup与Layer页面下刷新操作基本一致，具体参数配置和使用方法见上面讲解。

## 示例源码
[在线获取Layer下拉刷新源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/layer_pullrefresh)

[在线获取LayerGroup下拉刷新源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/layergroup_pullrefresh)