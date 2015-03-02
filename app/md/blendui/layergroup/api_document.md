#layerGroup API文档

## Construct
配置所需要参数来构建layerGroup。

layerGroup的配置格式如下：

<pre><code>var layerGroup = new Blend.ui.layerGroup({"options":"values"});</code></pre>

另一种配置格式如下：
<pre><code>var LayerGroup = Blend.ui.layerGroup;
var layerGroup = new LayerGroup({"options":"values"});</code></pre>

> 开发者可自行选定使用格式，以下统一以第一种格式展示代码

layerGroup包含以下配置项：

<h3 class="construct" platform="ios android web">id</h3>
配置layerGroup的id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>layerGroup的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }]
});
</code></pre>

<h3 class="construct" platform="ios android web">top</h3>
配置layerGroup距离屏幕top的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>layerGroup距离屏幕top的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    top: 90
});
</code></pre>

<h3 class="construct" platform="ios android web">left</h3>
配置layerGroup距离屏幕left的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>layerGroup距离屏幕left的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    left: 90
});
</code></pre>

<h3 class="construct" platform="ios android web">width</h3>
配置layerGroup像素宽度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>layer像素宽度，默认全屏</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    width: 90
});
</code></pre>

<h3 class="construct" platform="ios android web">height</h3>
配置layerGroup像素高度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>layerGroup像素高度，默认全屏</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }],
    height: 90
});
</code></pre>

<h3 class="construct" platform="ios android web">onshow</h3>
定义layerGroup中layer间切换时事件处理，通过event对象中的detail字段可以获得当前激活的layer的id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Function</th>
          <td>layer间切换时要触发的函数</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

<pre><code>function(event){
     //获取选择的layerId
     var layerId = event['detail'];
}</code></pre>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }],
    onshow: function(event) {
        var layerId = event['detail'];
    }
});
</code></pre>

<h3 class="construct" platform="ios android web">layers</h3>
定义layerGroup中要显示的layers (部分配置仅限iOS)

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Array</th>
          <td>layerGroup中的layers </td>
          <td>是</td>
        </tr>
   <tbody>
</table>
layers中layer配置参数如下：

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
          <th>url</th>
          <th>String</td>
          <td>layer的link</td>
        </tr>
        <tr>
          <th>id</th>
          <th>String</td>
          <td>layer的id</td>
        </tr>
        <tr>
          <th>autoload</th>
          <th>Boolean</td>
          <td>自动加载，默认值false</td>
        </tr>
        <tr>
          <th>pullToRefresh</th>
          <th>Boolean</td>
          <td platform="ios web">是否支持下拉刷新<label style="color:red">(仅支持iOS)</td>
        </tr>
        <tr>
          <th>pullBgColor</th>
          <th>String</td>
          <td>下拉刷新的背景颜色RGB值<label style="color:red">(仅支持iOS)</td>
        </tr>
        <tr>
          <th>pullText</th>
          <th>String</td>
          <td>下拉时显示的文字<label style="color:red">(仅支持iOS)</td>
        </tr>
        <tr>
          <th>loadingText</th>
          <th>String</td>
          <td>加载中显示的文字<label style="color:red">(仅支持iOS)</td>
        </tr>
        <tr>
          <th>releaseText</th>
          <th>String</td>
          <td>释放提示的文字<label style="color:red">(仅支持iOS)</td>
        </tr>
   <tbody>
</table>

<!--* <p style="color:red">pullIcon : String (optional) (均不支持)
Base64编码的图片字符串 -->

<!-- * <p style="color:red">loadingIcon : String (optional) (均不支持)
Base64编码的图片字符串-->

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true,
        "pullToRefresh":true,
        "pullBgColor":"ff0000",
        "pullText":"下拉刷新",
        "loadingText":"更新中...",
        "releaseText":"释放更新"
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});
</code></pre>

##Method

<h3 class="method" platform="ios android web">active (layerId)</h3>
切换到layerId对应的layer并显示

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
          <td>要显示的layer的id</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});

layerGroup.active("top");
</code></pre>

---
<!--
##remove(layerId) : Object
删除相应layer
###Parameters
* layerId : String
group中layer id

###Returns
* Object
this

###示例
```
layerGroup.remove("top");
```

---


##add(layerOptions,[index]) : Layer
增加layer
###Parameters
* layerOptions : Object
layer Options
* index : Number (optional)
插入到第index个下标之后
Defaults to: last

###Returns
* Object
layer

###示例
```
layerGroup.add({"id":"addLayer","url":"add.html"},1);
```

---

##<p style="color:red">update(layer,[index])   参数不太对
更新layer url
###Parameters
* layer : Object
Options
* index : Number (optional)
插入到第index个下标之后
Defaults to: last

###Returns
* Object
layer
---
-->

<h3 class="method" platform="ios android web">destroy ( )</h3>
销毁layerGroup

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});

layerGroup.destroy();
</code></pre>


<h3 class="method" platform="ios android">isScroll ( )</h3>
isScroll判断是否可以滚动

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});

layerGroup.isScroll();
</code></pre>


<h3 class="method" platform="ios android">setScroll ( )</h3>
setScroll

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>true|false</th>
          <th>Boolean</th>
          <td>设置是否能手动滚动</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});

layerGroup.setScroll(false);
</code></pre>

<h3 class="method" platform="ios android">toggleScroll ( )</h3>
toggleScroll自动切换是否能手动切换;

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>true|false</th>
          <th>Boolean</th>
          <td>设置是否能手动滚动</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.ui.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }, {
        "id": "top",
        "url": "top.html",
        "autoload": true
    }]
});

layerGroup.toggleScroll();
</code></pre>