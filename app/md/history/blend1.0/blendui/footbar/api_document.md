#Footbar API文档

<!-- 底部菜单组件 -->

## Construct

配置所需参数来初始化一个底部菜单组件Footbar

Slider的配置格式如下：

<pre><code>var footbar = new Blend.ui.Footbar({"options":"values"});</code></pre>

Slider包含以下配置项：

<h3 class="construct" platform="ios android web">id</h3>
footbar的id

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>footbar的id</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var footbarCase = new Blend.ui.Footbar({
	"id": "footbartest",
	"menus": [
		{id:0,name:"账单",subMenus:[
			{id:100,name:"当月账单"},
			{id:101,name:"历史账单"}
		]
		},
        {id:1,name:"我的"}
     ]
});
</code></pre>


<h3 class="construct" platform="ios android web">top</h3>
配置footbar距离屏幕top的坐标

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>footbar距离屏幕top的坐标，默认值在页面底部</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var footbarCase = new Blend.ui.Footbar({
	"id": "footbarCase",
	"top": 100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">left</h3>
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
          <td>距离屏幕left的坐标，默认值0</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>var footbarCase = new Blend.ui.Footbar({
	"id": "footbarCase",
	"top": 100,
	"left":100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">width</h3>
配置footbar宽度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <tdfootbar像素宽度，默认为屏幕宽度</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var footbarCase = new Blend.ui.Footbar({
	"id": "footbarCase",
	"top": 100,
	"left":100,
	"widht":100,
	"menus": [
		{id:0,name:"账单"},
        {id:1,name:"我的"}
     ]
});
</code></pre>

<h3 class="construct" platform="ios android web">height</h3>
配置footbar高度

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>Number</th>
          <td>菜单高度，默认45px</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
var footbarCase = new Blend.ui.Footbar({
	"id": "footbarCase",
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

<h3 class="construct" platform="ios android web">selected</h3>
菜单被选中时的触发函数

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
            <th>是否必须</th>
        </tr>
        <tr>
          <th>String</th>
          <td>点击菜单触发；默认为空；</td>
          <td>否</td>
        </tr>
   <tbody>
</table>

实例：
<pre><code>
footbarCase = new Blend.ui.Footbar({
    id:"footbartest",
    menus:[
        {id:0,name:"账单",
            subMenus:[{id:100,name:"当月账单"},{id:101,name:"历史账单"}]},
        {id:1,name:"我的",
            subMenus:[{id:100,name:"积分"},{id:101,name:"额度"},{id:102,name:"开卡"},{id:103,name:"缴费"},{id:104,name:"预约"}]},
        {id:2,name:"自助查询"},
        {id:3,name:"资讯",
            subMenus:[{id:101,name:"今日头条"},{id:102,name:"昨日头条"},{id:103,name:"前日头条"},{id:104,name:"大前日头条"}]}
    ],
    selected:function(e){
        alert(JSON.stringify(e.data));
    }
});
</code></pre>




##Method

<h3 class="method" platform="ios android web">show ( )</h3>
把footbar显示

实例:
<pre><code>
var footbarCase = new Footbar({
    id:"footbartest",
    menus:[
        {id:0,name:"账单",
            subMenus:[{id:100,name:"当月账单"},{id:101,name:"历史账单"}]},
        {id:1,name:"我的",
            subMenus:[{id:100,name:"积分"},{id:101,name:"额度"},{id:102,name:"开卡"},{id:103,name:"缴费"},{id:104,name:"预约"}]},
        {id:2,name:"自助查询"},
        {id:3,name:"资讯",
            subMenus:[{id:101,name:"今日头条"},{id:102,name:"昨日头条"},{id:103,name:"前日头条"},{id:104,name:"大前日头条"}]}
    ],
    selected:function(e){
        alert(JSON.stringify(e.data));
    }
});
footbarCase.show();
</code></pre>


<h3 class="method" platform="ios android web">hide ( )</h3>
隐藏footbar菜单

实例:
<pre><code>
var footbarCase = new Footbar({
    id:"footbartest",
    menus:[
        {id:0,name:"账单",
            subMenus:[{id:100,name:"当月账单"},{id:101,name:"历史账单"}]},
        {id:1,name:"我的",
            subMenus:[{id:100,name:"积分"},{id:101,name:"额度"},{id:102,name:"开卡"},{id:103,name:"缴费"},{id:104,name:"预约"}]},
        {id:2,name:"自助查询"},
        {id:3,name:"资讯",
            subMenus:[{id:101,name:"今日头条"},{id:102,name:"昨日头条"},{id:103,name:"前日头条"},{id:104,name:"大前日头条"}]}
    ],
    selected:function(e){
        alert(JSON.stringify(e.data));
    }
});
footbarCase.hide();
</code></pre>

<h3 class="method" platform="ios android web">destroy ( )</h3>
销毁footbar

实例:
<pre><code>
var footbarCase = new Footbar({
    id:"footbartest",
    menus:[
        {id:0,name:"账单",
            subMenus:[{id:100,name:"当月账单"},{id:101,name:"历史账单"}]},
        {id:1,name:"我的",
            subMenus:[{id:100,name:"积分"},{id:101,name:"额度"},{id:102,name:"开卡"},{id:103,name:"缴费"},{id:104,name:"预约"}]},
        {id:2,name:"自助查询"},
        {id:3,name:"资讯",
            subMenus:[{id:101,name:"今日头条"},{id:102,name:"昨日头条"},{id:103,name:"前日头条"},{id:104,name:"大前日头条"}]}
    ],
    selected:function(e){
        alert(JSON.stringify(e.data));
    }
});
footbarCase.destroy();
</code></pre>
