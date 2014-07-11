#layerGroup API文档

## construct
配置所需要参数来构建layerGroup。

layerGroup的配置格式如下：

<pre><code>var layerGroup = new Blend.layerGroup({"options":"values"});</code></pre>

layerGroup包含以下配置项：

<h3 class="construct">id</h3>
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
<pre><code>var layerGroup = new Blend.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }]
});
</code></pre>

<h3 class="construct">top</h3>
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
<pre><code>var layerGroup = new Blend.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    top: 90
});
</code></pre>

<h3 class="construct">left</h3>
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
<pre><code>var layerGroup = new Blend.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    left: 90
});
</code></pre>

<h3 class="construct">width</h3>
配置layerGroup像素宽度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th style="color:red">Number</th>
          <td>layer像素宽度，默认全屏</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.LayerGroup({
    id: "group",
	layers: [{
        "id": "first",
        "url": "first.html",
        "autoload": true
    }],
    width: 90
});
</code></pre>

<h3 class="construct">height</h3>
配置layerGroup像素高度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th style="color:red">Number</th>
          <td>layerGroup像素高度，默认全屏</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layerGroup = new Blend.LayerGroup({
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

<h3 class="construct">onselected</h3>
定义layerGroup中select事件处理

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Function</th>
          <td>layerGroup中选择event事件</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

<pre><code>function(event){
     //获取选择的layerId
     var layerId = event['layerId'];
     var layerGroupId = event['groupId'];
}</code></pre>

实例
<pre><code>var layerGroup = new Blend.LayerGroup({
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
    onselected: function(event) {
        var layerId = event['layerId'];
    }
});
</code></pre>

<h3 class="construct">layers</h3>
定义layerGroup中的layers

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
          <td>是否支持下拉刷新，仅支持iOS</td>
        </tr>
        <tr>
          <th>pullBgColor</th>
          <th>String</td>
          <td>下拉刷新的背景颜色RGB值，仅支持iOS</td>
        </tr>
        <tr>
          <th>pullText</th>
          <th>String</td>
          <td>下拉时显示的文字，仅支持iOS</td>
        </tr>
        <tr>
          <th>loadingText</th>
          <th>String</td>
          <td>加载中显示的文字，仅支持iOS</td>
        </tr>
        <tr>
          <th>releaseText</th>
          <th>String</td>
          <td>释放提示的文字，仅支持iOS</td>
        </tr>
   <tbody>
</table>

<!--* <p style="color:red">pullIcon : String (optional) (均不支持)
Base64编码的图片字符串 -->

<!-- * <p style="color:red">loadingIcon : String (optional) (均不支持)
Base64编码的图片字符串-->

实例
<pre><code>var layerGroup = new Blend.LayerGroup({
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

##method

<h3 class="method">active (layerId)</h3>
激活layerId相应layer，切换并显示layer

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
<pre><code>var layerGroup = new Blend.LayerGroup({
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

<h3 class="method">destroy ( )</h3>
销毁layerGroup

实例
<pre><code>var layerGroup = new Blend.LayerGroup({
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

