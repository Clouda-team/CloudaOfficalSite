#Layer API文档

<!--Layer类，内含一个web容器，可以放置在手机屏幕的任何位置，动画可自定义。-->

## construct

配置所需参数来构建一个Layer。

Layer的配置格式如下：

<pre><code>var layer = new Blend.Layer({"options":"values"});</code></pre>

Layer包含以下配置项：

<h3 class="construct">url</h3>

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

<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});
</code></pre>

<h3 class="construct">id</h3>
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
            <td>layer页面id，Blend API可以通过该id对页面控制</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer"
});</code></pre>

<h3 class="construct">active</h3>
<!-- active : Boolean (optional)  -->
 通过该项配置是否立即激活

 <table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
            <th>Boolean</th>
            <td>是否立即激活</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true
});
</code></pre>

<h3 class="construct">autoStopLoading</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":true
});
</code></pre>

<h3 class="construct">maxLoadingTime</h3>
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
            <th style="color:red">Number</th>
            <td>超时停止loading状态（默认2毫秒，单位毫秒）</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":false,
	"maxLoadingTime":10
});
</code></pre>

<h3 class="construct">pullToRefresh</h3>
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
            <td>是否支持下拉刷新</td>
            <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true
});
</code></pre>

<h3 class="construct">pullText</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙"
});
</code></pre>

<h3 class="construct">loadingText</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,
	"autoStopLoading":true,

	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待..."
});
</code></pre>

<h3 class="construct">releaseText</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"pullToRefresh":true,
	"pullText":"下拉可以刷新⊙０⊙",
	"loadingText":"更新中，请等待...",
	"releaseText":"释放更新⊙０⊙"
});
</code></pre>

<h3 class="construct">pullIcon</h3>
<!--	* pullIcon : String (optional)  (仅支持Android)  -->
下拉操作时需要显示的Icon (仅支持Android)
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
<pre><code>var layer = new Blend.Layer({
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

<h3 class="construct">loadingIcon</h3>
<!--	* loadingIcon : String (optional) (仅支持Android)  -->
在页面加载前的loading状态时屏幕显示的Icon (仅支持Android)
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html",
	"id":"contentLayer",
	"active":true,

	"loadingIcon":"base64图片字符串"
});
</code></pre>

## method

<h3 class="method">in ( ) : this</h3>
<!--in ( ) : Object-->
激活layer页面

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

//替换layer的url
layer.replace("http://www.baidu.com");
layer.in();
</code></pre>

<h3 class="method">out ( ) : this</h3>
当前layer退场，返回上一个Layer

实例
<pre><code>var layerA = new Blend.Layer({
	"url":"contentA.html"
});
var layerB = new Blend.Layer({
	"url":"contentB.html"
});

//layerB退场，返回上一个layerA
layerB.out();
</code></pre>

<h3 class="method">reload (url) : this</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

layer.reload("http://www.baidu.com");
</code></pre>

<!-- <h3 class="method">stopPullRefresh ( )</h3> -->
<!-- 停止layer拉动刷新状态

实例
<pre><code>var layer = new Blend.Layer({
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

<h3 class="method">replace (url) : this</h3>
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
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

layer.replace("http://www.baidu.com");
//可以利用in()方法，激活页面
layer.in();
</code></pre>

<h3 class="method">getUrl ( ) : String</h3>
获取layer页面的url属性

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

console.log(layer.getUrl());
</code></pre>

<h3 class="method">canGoBack ( ) : Boolean</h3>
layer是否可以回退，是否有历史记录

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

if(layer.canGoBack()){
    //可以回退后操作
    Blend.api.layerBack();
}
</code></pre>

<h3 class="method">clearHistory ( ) </h3>
清空页面历史记录

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

layer.clearHistory();
</code></pre>

<h3 class="method">isActive ( ) : Boolean</h3>
layer是否是激活状态

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

//页面激活状态
var layerState = layer.isActive();
</code></pre>


<h3 class="method">destroy ( )</h3>
销毁layer

实例
<pre><code>var layer = new Blend.Layer({
	"url":"content.html"
});

layer.destroy();
</code></pre>