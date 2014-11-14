#Tabs

##概述

在多数的应用中都会使用到Tabs功能，BlendUI中可以利用LayerGroup组件快捷实现Tabs样式，允许用户通过tap和slide方式在不同页面间切换。

##添加Tab切换按钮
使用Html+CSS方式设计两个Tab按钮，通过点击进行页面切换，格式如下：
<pre><code>//html部分
&ltdiv id="nav"&gt
	&ltul&gt
		&ltli id="tab1" class="on"&gt&lta href="tab1.html"&gtTab1&lt/a&gt&lt/li&gt
		&ltli id="tab2"&gt&lta href="tab2.html"&gtTab2&lt/a&gt&lt/li&gt
	&lt/ul&gt
&lt/div&gt
//css部分
&ltstyle&gt
    #nav {
        display: block;
    }
    #nav>ul {
        height: 42px;
        display: box;
        display: -webkit-box;
        list-style:none;
        padding: 0;
        margin:0;
    }
    #nav>ul>li {
        -webkit-box-flex: 1;
        position: relative;
    }
    #nav>ul>li>a {
        font-size: 16px;
        display: block;
        width: 40px;
        height: 42px;
        line-height: 42px;
        margin: 0 auto;
        text-align: center;
    }
    .on {
        background-color: grey;
    }
&lt/style&gt</code></pre>

>温馨提示：具体tabs的样式需求以用户设计为准，不作要求。

##为Tabs添加页面
用户在添加了切换按钮的基础上，添加两个名为tab1和tab2的html页面。使用BlendUI中的LayerGroup组件实现页面slide切换，格式如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "group",
            layers: [
                {
                    "id": "tab1",
                    "url": "tab1.html",
                    "active":true
                },
                {
                    "id": "tab2",
                    "url": "tab2.html",
                    "autoload": true
                }
            ],
            left: 0,
            top: 50
        });
    });
});</code></pre>

通过配置`active`参数设置默认显示页，也就是tab1的页面。当前用户已经可以通过横向滑动页面实现tab切换了，但是还不能通过点击tab实现页面切换，请继续阅读。

##关联Tab点击响应
用户需要自行关联点击，可以使用LayerGroup中的`active(id)`方法，需要用户添加的代码如下：
<pre><code>$("#nav a").on("click", function (e) {
    e.preventDefault();
    tabs.active($(this).parent()[0].id);
});</code></pre>

>温馨提示：用户使用LayerGroup时，一定要为每一个子页面设置id。

##添加当前页面指示
在页面滑动切换过程中，可以使用LayerGroup中的`onshow`参数配置，在页面滑动的过程中可以通过event事件的`detail`字段返回当前页面的id属性，用户可以通过添加css样式来高亮当前tab。添加页面指示后的代码如下：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "group",
            layers: [
                {
                    "id": "first",
                    "url": "first.html",
                    "active":true
                },
                {
                    "id": "content",
                    "url": "content.html",
                    "autoload": true
                }
            ],
            onshow: function (event) {
                var layerId = event['detail'];
                $("#nav li").removeClass('on');
                $("#"+ layerId).addClass('on');
            },
            left: 0,
            top: 50
        });

        $("#nav a").on("click", function (e) {
            e.preventDefault();
            tabs.active($(this).parent()[0].id);
        });
    });
});</code></pre>

> 温馨提示：以上代码中通过为li添加class的方式，结合css样式来实现tab指示，实际效果以用户设计为准，如果要显示页面上方的tab按钮的话，要为LayerGroup设置top值。

## 示例源码
[在线获取源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/tabs)