#sidebar 侧边栏API文档

<!-- 底部菜单组件 -->



sidebar是Layer的静态方法,是对Layer功能扩展；

## sidebar的创建 

<pre><code>Blend.ui.Layer.addSidebar(layerId,options);</code></pre>

参数: 

<h3 class="construct" platform="android">id</h3>
指定增加侧边栏的layer的id，默认为当前layer;

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>layer的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var Layer = Blend.ui.Layer;
Layer.addSidebar('baidulayer',{
    url:'http://www.baidu.com'
})
</code></pre>


<h3 class="construct" platform="android">options</h3>
侧边栏的配置项:

**url**

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>侧边栏要加载的URL</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var Layer = Blend.ui.Layer;
Layer.addSidebar('baidulayer',{
    url:'http://www.baidu.com'
})
</code></pre>

<h3 class="construct" platform="android">width</h3>
配置footbar距离屏幕left的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>侧边栏的宽度,默认为宽度的2/3</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var Layer = Blend.ui.Layer;
Layer.addSidebar('baidulayer',{
    url:'http://www.baidu.com',
	width:200
})
</code></pre>

<h3 class="construct" platform="ios android web">bgColor</h3>
侧边栏底层背景色，页面背景透明时能看出效果；

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>背景颜色</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var Layer = Blend.ui.Layer;
Layer.addSidebar('baidulayer',{
    url:'http://www.baidu.com',
	width:200,
	bgColor:"#ff0000"
})
</code></pre>


## 侧边栏显示

<pre><code>Blend.ui.Layer.showSidebar(layerId);</code></pre>


参数：

<h3 class="method" platform="android">id</h3>
要显示侧边栏的layer的id，可省略， 默认为当前layer的id；

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>layer的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例:
	var Layer = Blend.ui.Layer;
	Layer.showSidebar();



## 侧边栏隐藏

	Blend.ui.Layer.hideSidebar(layerId);

参数：

<h3 class="method" platform="android">id</h3>
要隐藏侧边栏的layer的id，可省略， 默认为当前layer的id；

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>layer的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例:
	
	var Layer = Blend.ui.Layer;
	Layer.hideSidebar();


##侧边栏销毁

	Blend.ui.Layer.destorySidebar(layerId);

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>layer的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

参数：

<h3 class="method" platform="android">id</h3>
要销毁侧边栏的layer的id，可省略， 默认为当前layer的id；

实例:
	var Layer = Blend.ui.Layer;
	Layer.destorySidebar();

