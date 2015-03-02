# 页面间通信

## 概述
当多个layer在同一屏显示时，可能会希望在layer1做某些操作后改变layer2中的内容。但是layers之间独立运行在自己的沙箱内，无法修改其它layer的内容。这时需要通过页面间通信来使layer1通知layer2去改自己的内容。

页面间借助“自定义事件”通信，被通知方用Blend.ui.on监听事件，通知方用Blend.ui.fire发送事件。

## 示例

例子中共有两个layer分上下同时显示，id分别为0和subLayerId。layer-0中有一个输入框和一个按钮，layer-subLayerId有一个显示框。点击layer-0内的按钮将输入框中的内容显示在layer-subLayerId上。

<pre><code>document.addEventListener("blendready", function () {
    var main = Blend.ui;
    console.log('blendready');
    Blend.ui.layerInit("0", function (dom) {
        var subLayers = [{id:'subLayerId',url:'item.html','active':true}];

        new main.LayerGroup({
            layers: subLayers,
            left: 0,
            top: 200
        });

        $('#notifyBtn',dom).on("click",function(e){
            var msgContent = $('#input_msg').val();
            Blend.ui.fire("sendMsg", "subLayerId",{content:msgContent});
        });
    });

    Blend.ui.layerInit("subLayerId", function (dom) {

        Blend.ui.on("sendMsg", function (e) {
            $('#display_msg').val( e.data.content);
        });

    });
});</code></pre>

## 示例源码
[在线获取源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/layer_communicate)