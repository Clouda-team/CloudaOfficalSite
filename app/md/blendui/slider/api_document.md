#Slider API文档

<!-- 幻灯片组件 -->

## Construct

配置所需参数来初始化一个幻灯片组件Slider

Slider的配置格式如下：

<pre><code>var slider = new Blend.ui.Slider({"options":"values"});</code></pre>

Slider包含以下配置项：

<h3 class="construct" platform="ios android web">id</h3>
slider的id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>slider的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>


<h3 class="construct" platform="ios android web">top</h3>
配置slider距离屏幕top的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>slider距离屏幕top的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"top": 100,
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">left</h3>
配置slider距离屏幕left的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>slider距离屏幕left的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"top": 100,
	"left": 100,
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">width</h3>
配置slider宽度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>slider像素宽度，默认为屏幕宽度</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
    "width": 100,
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">height</h3>
配置slider高度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>slider像素高度，默认为屏幕高度</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
    "height": 100,
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">bgColor</h3>
配置slider背景颜色

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>slider背景颜色,默认透明</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
    "bgColor": "#cccccc",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">images</h3>
配置图片数据json

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Object</th>
          <td>图片数据json</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">tap</h3>
配置点击slider的事件回调

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Function</th>
          <td>点击slider的事件回调</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "tap": function(e){console.log(e.data.index)}
});
</code></pre>

<h3 class="construct" platform="ios android web">slide</h3>
配置滑动slide的事件回调

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Function</th>
          <td>滑动slider的事件回调</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "slide": function(e){console.log(e.data.index)}
});
</code></pre>

<h3 class="construct" platform="ios android web">hasIndicator</h3>
是否添加页面指示，可以以圆点的方式展现有多少个图片页面，可以指示当前页面在整个页面的顺序。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Boolean</th>
          <td style="color:red">是否添加页面指示,默认值？</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "hasIndicator": true
});
</code></pre>

<h3 class="construct" platform="ios android web">inactiveColor</h3>
配置非选中状态的指示圆点图标的颜色
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>非选中状态的指示圆点图标的颜色RGB值</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "hasIndicator": true,
    "inactiveColor": "#888888"
});
</code></pre>

<h3 class="construct" platform="ios android web">activeColor</h3>
配置选中状态的指示圆点图标的颜色

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>选中状态的指示圆点图标的颜色RGB值</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "hasIndicator": true,
    "inactiveColor": "#888888",
    "activeColor": "#ff0000"
});
</code></pre>

<h3 class="construct" platform="ios android">unitSize</h3>
配置页面指示圆点图标的尺寸

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>页面指示圆点图标的尺寸（单位：像素），默认值10</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ],
    "hasIndicator": true,
    "unitSize": 6
});
</code></pre>

<h3 class="construct" platform="ios android">unitSpace</h3>
配置页面指示圆点图标间的间距

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>页面指示圆点图标间的间距（单位：像素），默认值5</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例:
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
      ],
	"hasIndicator": true,
	"inactiveColor": "#888888",
	"activeColor": "#ff0000",
	"unitSize": 6,
	"unitSpace": 3
});
</code></pre>

##Method

<h3 class="method" platform="ios android web">prev ( )</h3>
滚动到前一个图片页面

实例:
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});

slider.prev();
</code></pre>


<h3 class="method" platform="ios android web">next ( )</h3>
滚动到下一个图片页面

实例:
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});

slider.next();
</code></pre>

<h3 class="method" platform="ios android web">sliderTo (index)</h3>
滑动到第index个图片页面

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>index</th>
            <th>Number</th>
            <td>滑动到第index个页面</td>
            <td>是</td>
        </tr>
   <tbody>
</table>

实例:
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});

slider.sliderTo(0);
</code></pre>

<h3 class="method" platform="ios android web">destroy ( )</h3>
销毁slider

实例:
<pre><code>var slider = new Blend.ui.Slider({
	"id": "slider",
	"images": [
		{"url":"http://*.com/old_07_02.jpg"},
		{"url":"http://*.com/old_09_02.jpg"}
     ]
});

slider.destroy();
</code></pre>
