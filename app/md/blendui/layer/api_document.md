#Layer API文档

<!--Layer类，内含一个web容器，可以放置在手机屏幕的任何位置，动画可自定义。-->

## Construct

配置所需参数来构建一个Layer。

Layer的配置格式如下：

<pre><code>var layer = new Blend.ui.Layer({"options":"values"});</code></pre>
另一种格式如下：
<pre><code>var Layer = Blend.ui.Layer;
var layer = new Layer({"options":"values"});</code></pre>

> 开发者可自行选定使用格式，以下统一以第一种格式展示代码

Layer包含以下配置项：

<h3 class="construct" platform="ios android web">url</h3>

通过该项设置要显示的页面地址

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>要显示的页面url地址</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例：

<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html"
});
</code></pre>

<h3 class="construct" platform="ios android web">id</h3>
layer页面id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>layer页面id，标识一个页面</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer"
});</code></pre>

<h3 class="construct" platform="ios android web">active</h3>
<!-- active : Boolean (optional)  -->
 通过该项配置是否立即激活。如果不激活的话，该页面将不会显示。

 <table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>是否立即激活，默认为false，激活时需要使用Layer的in()方法激活页面</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true
});
</code></pre>

<h3 class="construct" platform="ios android web">autoStopLoading</h3>
<!-- autoStopLoading : Boolean (optional) -->
是否自动停止loading状态

 <table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>是否自动停止loading状态（默认值true，当页面加载完毕时将停止loading状态）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":true
});
</code></pre>

<h3 class="construct" platform="ios android web">maxLoadingTime</h3>
<!-- maxLoadingTime : String (optional) -->
当autoStopLoading设置为false时，超过定义时间将停止loading状态
 <table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Number</th>
            <td>超时停止loading状态（默认2毫秒，单位毫秒）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":false,
	"maxLoadingTime":10
});
</code></pre>

<h3 class="construct" platform="ios android web">pullToRefresh</h3>
<!--	* pullToRefresh : Boolean (optional) -->
是否支持下拉刷新
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>是否支持下拉刷新（默认为false，不支持下拉刷新）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true
});
</code></pre>

<h3 class="construct" platform="ios android web">pullText</h3>
<!--	* pullText : String (optional)  -->
下拉显示的文字
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>下拉显示的文字</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙"
});
</code></pre>

<h3 class="construct" platform="ios android web">loadingText</h3>
<!--	* loadingText : String (optional)  -->
加载中的文字
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>加载中的文字</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":true,

	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待..."
});
</code></pre>

<h3 class="construct" platform="ios android web">releaseText</h3>
<!--	* releaseText : String (optional)  -->
提示释放的文字
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>提示释放的文字</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待...",
	"releaseText":"释放更新⊙０⊙"
});
</code></pre>

<h3 class="construct" platform="android">pullIcon</h3>
<!--	* pullIcon : String (optional)  (仅支持Android)  -->
下拉操作时需要显示的Icon
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>Base64编码的图片字符串（不包含数据头）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待...",
	"releaseText":"释放更新⊙０⊙",
	"pullIcon":"base64图片字符串"
});
</code></pre>

<h3 class="construct" platform="android">loadingIcon</h3>
在页面加载完毕前的loading状态时，屏幕显示的Icon
<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>String</th>
            <td>Base64编码的图片字符串（不包含数据头）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"loadingIcon":"base64图片字符串"
});
</code></pre>

<h3 class="construct" platform="android">subLayer</h3>
是否是子layer

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>是否是子layer,默认不是</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"subLayer":true
});
</code></pre>


<h3 class="construct" platform="android">fixed</h3>
如果是子layer，用fixed说明是否需要固定在页面上

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td> 如果subLayer==tuue, 是否fiexd到附属layer上面，默认false</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"subLayer":true,
	"fixed":true,
});
</code></pre>


<h3 class="construct" platform="android ios">fx</h3>
layer打开显示时的动画类型slide|fade|pop

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>layer打开显示时的动画类型slide|fade|pop,默认是slide</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	'fx': 'pop',
});
</code></pre>


<h3 class="construct" platform="android ios">fx</h3>
layer打开显示时的动画时常

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>[normal|quick|slow|number], 动画持续时间可以是字符串或者指的数值，默认为normal</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var layer = new Blend.ui.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	'fx': 'pop',
	"duration":"quick"
});
</code></pre>


## Method

<h3 class="method" platform="ios android web">in ( )</h3>
<!--in ( ) : Object-->
激活layer页面，在页面初始化配置时，如果`active`属性未配置，则需要使用该方法激活要显示的页面。

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html"
});

//替换layer的url
layer.replace("http://www.baidu.com");
layer.in();
</code></pre>

<h3 class="method" platform="ios android web">out ( )</h3>
当前layer退场，返回上一个Layer

实例
<pre><code>var layerA = new Blend.ui.Layer({
	"url":"contentA.html",
	"active":true
});
var layerB = new Blend.ui.Layer({
	"url":"contentB.html",
	"active":true
});

//layerB退场，返回上一个layerA
layerB.out();
</code></pre>

<h3 class="method" platform="ios android web">reload (url)</h3>
重载页面

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>url</th>
            <th>String</th>
            <td>重载页面时所用的url</td>
            <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"active":true
});

layer.reload("http://www.baidu.com");
</code></pre>

<!-- <h3 class="method">stopPullRefresh ( )</h3> -->
<!-- 停止layer拉动刷新状态

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待...",
	"releaseText":"释放更新⊙０⊙",
	"pullIcon":"base64图片字符串",
	"loadingIcon":"base64图片字符串"
});

layer.stopPullRefresh();
</code></pre> -->

<h3 class="method" platform="ios android">replace (url)</h3>
页面url替换

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>url</th>
            <th>String</th>
            <td>页面替换的url</td>
            <td>是</td>
        </tr>
   <tbody>
</table>

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"active":true
});

layer.replace("http://www.baidu.com");
//可以利用in()方法，激活页面
layer.in();
</code></pre>

<h3 class="method" platform="ios android web">getUrl ( ) : String</h3>
获取layer页面的url属性

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html"
});

console.log(layer.getUrl());
</code></pre>

<h3 class="method" platform="ios android web">canGoBack ( ) : Boolean</h3>
layer是否可以回退，是否有历史记录

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"active":true
});

if(layer.canGoBack()){
    //可以回退后操作
    Blend.ui.layerBack();
}
</code></pre>

<h3 class="method" platform="ios android">clearHistory ( ) </h3>
清空页面历史记录

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"active":true
});

layer.clearHistory();
</code></pre>

<h3 class="method" platform="ios android web">isActive ( ) : Boolean</h3>
layer是否是激活状态

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html",
	"active":true
});

//页面激活状态，以下为true
console.log(layer.isActive());
</code></pre>


<h3 class="method" platform="ios android web">destroy ( )</h3>
销毁layer

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html"
});

layer.destroy();
</code></pre>


<h3 class="method" platform="android">setLayout( )</h3>
如果是子layer,此可以设置layer的大小和位置

实例
<pre><code>var layer = new Blend.ui.Layer({
	"url":"content.html"
});

layer.setLayout({
    left: 30,
    top: 180,
    width: 250,
    height: 200,
});

</code></pre>