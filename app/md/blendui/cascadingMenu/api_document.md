#cascadingMenu API文档

<!-- 级联菜单组件API -->

## Construct

配置所需参数来初始化一个级联菜单组件CascadingMenu

CascadingMenu的配置格式如下：

<pre><code>var cascadingMenu = new Blend.ui.CascadingMenu({"options":"values"});</code></pre>

CascadingMenu包含以下配置项：

<h3 class="construct" platform="android">id</h3>
cascadingMenu的id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>cascadingMenu的id</td>
          <td>是</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuTest",
	"menus": [
		{
            id:'00001',
            name:'回龙观'
        },{
            id:'00002',
            name:'天通苑'
        },{
            id:'00003',
            name:'昌平镇'
        }
     ]
});
</code></pre>


<h3 class="construct" platform="android">top</h3>
配置cascadingMenu距离屏幕top的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>cascadingMenu距离屏幕top的坐标，默认值在页面底部</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuTest",
	"top": 100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">left</h3>
配置cascadingMenu距离屏幕left的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>距离屏幕left的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuTest",
	"top": 100,
	"left":100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform=" android ">width</h3>
配置cascadingMenu宽度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>cascadingMenu像素宽度，默认为屏幕宽度</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform=" android ">height</h3>
配置cascadingMenu高度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>菜单高度，默认屏幕高度的1/2</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"height":100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform="android">fixed</h3>
是否随页面滚动

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>是否随页面滚动；默认为true；</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"height":100,
	"fixed":true,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的",
			menus:[
			{id:10,name:"我的xxxx"},
       		 {id:11,name:"我的xxxx",
			]
		}
     ]
});
</code></pre>




##Method

<h3 class="method" platform="ios android web">show ( )</h3>
把cascadingMenu显示

实例：
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"height":100,
	"fixed":true,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的",
			menus:[
			{id:10,name:"我的xxxx"},
       		 {id:11,name:"我的xxxx",
			]
		}
     ]
});
cascadingMenu.show();
</code></pre>


<h3 class="method" platform="android">hide ( )</h3>
把cascadingMenu隐藏

实例：
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"height":100,
	"fixed":true,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的",
			menus:[
			{id:10,name:"我的xxxx"},
       		 {id:11,name:"我的xxxx",
			]
		}
     ]
});
cascadingMenu.hide();
</code></pre>

<h3 class="method" platform="ios android web">selectItem()</h3>
选中菜单中的所在项

实例:
<pre><code>
var cascadingMenu = new Blend.ui.CascadingMenu({
	"id": "cascadingMenuCase",
	"top": 100,
	"left":100,
	"widht":100,
	"height":100,
	"fixed":true,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的",
			menus:[
			{id:10,name:"我的xxxx"},
       		 {id:11,name:"我的xxxx",
			]
		}
     ]
});
cascadingMenu.selectItem({
	{
	    id:'1',
	    menus:[
	        {id:'10'}
	    ]
	}
});
</code></pre>
