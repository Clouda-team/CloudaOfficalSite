#页面预加载

##概述
Layer和LayerGroup接口中预留有页面预加载参数。开发者通过配置该参数可以控制页面在后台预加载、控制页面呈现，页面切换速度更快，增强了用户在移动端上获得的浏览体验。

##Layer预加载
BlendUI中Layer提供了预加载参数。配置方法如下：
<pre><code>Blend.ui.layerInit("页面id",function(dom){
    var layer = new Blend.ui.Layer({
         "id": "layerId",
         "url": "layer.html",
         "active": false   //预加载参数
    });
});</code></pre>

一个实例：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#btn-preload', dom).click(function () {
            var layer1 = new Blend.ui.Layer({
                "id": "layerId1",
                "url": "layer.html",
                "active": false,   //禁止预加载
                "duration":200
            });
            layer1.in();  //当禁止预加载时，需通过in()方法显示
        });
        $('#btn-unpreload', dom).click(function () {
            var layer2 = new Blend.ui.Layer({
                "id": "layerId2",
                "url": "layer.html",
                "active": true,  //允许预加载，页面立即呈现
                "duration":200
            });
        });
    });
});</code></pre>

>  当`active`参数值为`false`时，如果需要显示页面,需要通过`in()`方法；当`active`参数值为`true`时，页面将直接加载显示。

##LayerGroup预加载
BlendUI中LayerGroup提供了预加载参数。配置方法如下：
<pre><code>Blend.ui.layerInit("页面id",function(dom){
    var tabs = new Blend.ui.LayerGroup({
          id: "tabs",
          layers: [{
               "id": 'contentA',
               "url": 'contentA.html',
               "autoload": true  //预加载参数
          }]
    });
});</code></pre>

一个实例：

<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "tabs",
            layers: [
                {
                    "id": 'contentA',
                    "url": 'contentA.html',
                    "active": true
                },
                {
                    id: 'contentB',
                    "url": 'contentB.html',
                    "autoload": false //禁止预加载
                }
            ]
        });
    });
});</code></pre>

> 页面B禁用了预加载，仅当用户滑动到页面B时才进行页面加载；如果页面B有大量内容需要加载时，可以设置`autoload`参数值为`true`，页面B将会在用户浏览其他页面时预加载，减少了用户在页面切换浏览时所需等待的时间。


## 示例源码
[在线获取Layer预加载源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/layer_preload)

[在线获取LayerGroup预加载源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/layergroup_preload)