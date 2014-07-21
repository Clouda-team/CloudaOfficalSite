# 页面切换

## 概述

在应用中很多开发者都会用到页面切换操作，BlendUI提供了相关页面切换接口供开发者使用。

## Pageback

<h3 class="pageback">out方法</h3>
out方法针对的是Layer对象，可以实现退出该对象的页面并返回到上一个页面效果。但退出的Layer页面并未被销毁，如果切换回来的话，直接使用in() 方法激活即可。
一个实例：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("contentLayerId", function (dom) {
        $('#nav-back', dom).click(function (e) {
            Blend.ui.fire("back","0");
        });
    });

    Blend.ui.layerInit("0", function (dom) {
        $('#jump', dom).click(function (e) {
            Blend.ui.fire("createContentLayer", "0");
        });

        var contentLayer;
        Blend.ui.on("createContentLayer", function (event) {
            if(Blend.ui.get("contentLayerId")){
                contentLayer.in();
            }else{
                contentLayer = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "active": true
                });
            }
        });

        Blend.ui.on("back", function (event) {
           contentLayer.out();
        });
    });
});</code></pre>

(1) 在主页`index.html`上添加一个`Button`，定义一个页面创建事件，事件中通过Layer方式实现了`content.html`页面初始化并跳转。部分代码如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#jump', dom).click(function (e) {
            //触发createContentLayer事件
            Blend.ui.fire("createContentLayer", "0");
        });

        var contentLayer;
        Blend.ui.on("createContentLayer", function (event) {
            if(Blend.ui.get("contentLayerId")){
                contentLayer.in();
            }else{
                //初始化页面并跳转
                contentLayer = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "active": true
                });
            }
        });
    });
});</code></pre>

<blockquote>
<p>代码中使用`Blend.ui.layerInit`方法定义了`index.html`页面初始化后的操作，`layerInit`第一个参数代表页面的id(默认首页id为“0”)。跳转页面之前进行了判断，如果页面已经创建，直接使用`in()`方法激活页面。</p>
</blockquote>

(2) 在`content.html`页面上添加回退按钮`id:nav-back`，当触发回退操作时，使用BlendUI自定义事件调起回退操作。部分代码如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#jump', dom).click(function (e) {
            Blend.ui.fire("createContentLayer", "0");
        });

        var contentLayer;
        Blend.ui.on("createContentLayer", function (event) {
            if(Blend.ui.get("contentLayerId")){
                contentLayer.in();
            }else{
                contentLayer = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "active": true
                });
            }
        });

        //回退事件处理
        Blend.ui.on("back", function (event) {
           contentLayer.out();
        });
    });

    Blend.ui.layerInit("contentLayerId", function (dom) {
        $('#nav-back', dom).click(function (e) {
            //触发回退操作
            Blend.ui.fire("back", "0");
        });
    });
});</code></pre>

<blockquote>
<p>代码中同样使用`layerInit`方法对id为`contentLayerId`的`content.html`页面进行了回退按钮绑定操作，定义了触发`back`回退事件，使用`Layer.out()`方法实现页面回退操作。</p>
</blockquote>

<h3 class="pageback">destroy方法</h3>

回退效果与out()方法相同，但是页面回退的同时也将对当前页面进行销毁操作，下次页面跳转时页面需要再次创建。基本调用方式同out()，此处不再多余解释，部分代码如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        $('#jump', dom).click(function (e) {
            Blend.ui.fire("createContentLayer", "0");
        });

        var contentLayer;
        Blend.ui.on("createContentLayer", function (event) {
            if(Blend.ui.get("contentLayerId")){
                contentLayer.in();
            }else{
                contentLayer = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "active": true
                });
            }
        });

        //回退事件处理，仅此处与out()不同
        Blend.ui.on("back", function (event) {
           contentLayer.destroy();
        });
    });

    Blend.ui.layerInit("contentLayerId", function (dom) {
        $('#nav-back', dom).click(function (e) {
            //触发回退操作
            Blend.ui.fire("back", "0");
        });
    });
});</code></pre>


<h3 class="pageback">layerBack方法</h3>

回退操作既可以使用Layer中的方法也可以直接使用Blend.ui中的方法。layerBack()方法可以实现根据页面id进行页面回退控制。部分代码如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("contentLayerId", function (dom) {
        $('#nav-back', dom).click(function (e) {
            //回退操作
            Blend.ui.layerBack();
            //Blend.ui.layerBack("退至其他页面id");
        });
    });

    Blend.ui.layerInit("0", function (dom) {
        $('#button', dom).click(function (e) {
            Blend.ui.fire("createContentLayer", "0");

        });

        var contentLayer;
        Blend.ui.on("createContentLayer", function (event) {
            if(Blend.ui.get("contentLayerId")){
                contentLayer.in();
            }else{
                contentLayer = new Blend.ui.Layer({
                    "id": "contentLayerId",
                    "url": "content.html",
                    "active": true
                });
            }
        });
    });
});</code></pre>

> 温馨提示：使用该方法可以不再受到Layer句柄的约束，直接通过id进行页面控制。