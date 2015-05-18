##页面标记

对页面主题和内容的性质进行标记的引用
> 其中`blend-badge-empty`实心字体白色背景，其他字体颜色为镂空白色，背景颜色的变化需要指定`blend-badge-`后面的值，有`primary`、`secondary`等可选。

###源码

####html

    <div style="margin-bottom: 20px;">
        <span class="blend-badge">在线支付</span>
        <span class="blend-badge blend-badge-empty">随订随用</span>
        <span class="blend-badge blend-badge-empty">有效期内可退</span>
    </div>

    <div style="margin-bottom: 20px;">
        <span class="blend-badge blend-badge-large">在线支付</span>
        <span class="blend-badge blend-badge-large blend-badge-empty">随订随用</span>
        <span class="blend-badge blend-badge-large blend-badge-empty">有效期内可退</span>
    </div>

###效果示例

<div style="margin-bottom: 20px;">
    <span class="blend-badge">在线支付</span>
    <span class="blend-badge blend-badge-empty">随订随用</span>
    <span class="blend-badge blend-badge-empty">有效期内可退</span>
</div>

<div style="margin-bottom: 20px;">
    <span class="blend-badge blend-badge-large">在线支付</span>
    <span class="blend-badge blend-badge-large blend-badge-empty">随订随用</span>
    <span class="blend-badge blend-badge-large blend-badge-empty">有效期内可退</span>
</div>

##按钮

页面中可以应用的按钮样式
> 其中`blend-button`为无背景按钮，其他字体颜色为镂空白色，背景颜色的变化需要指定`blend-button-`后面的值，有`primary`、`secondary`等可选。

###源码

####html

	<div style="margin: 20px 10px;width:250px;">
    <button class="blend-button blend-button-red blend-button-large">大按钮</button>
    </div>

    <div style="margin: 20px 10px;">
        <button class="blend-button blend-button-default">default</button>
        <button class="blend-button blend-button-red">red</button>
        <button class="blend-button blend-button-gray">gray</button>
    </div>
    <div style="margin: 20px 10px;">
        <button class="blend-button blend-button-default blend-button-icon">
            <em></em>带icon
        </button>
        <button class="blend-button blend-button-red blend-button-icon">
            <em></em>带icon
        </button>
    </div>

    <div style="margin: 20px 10px;">
        <button class="blend-button blend-button-primary blend-active">active</button>
        <button class="blend-button blend-button-primary blend-disabled">disabled</button>
        <button class="blend-button blend-button-primary blend-round">round</button>
        <button class="blend-button blend-button-primary blend-radius">radius</button>
    </div>

###效果示例

<div style="margin: 20px 10px;width:250px;">
    <button class="blend-button blend-button-red blend-button-large">大按钮</button>
</div>

<div style="margin: 20px 10px;">
    <button class="blend-button blend-button-default">default</button>
    <button class="blend-button blend-button-red">red</button>
    <button class="blend-button blend-button-gray">gray</button>
</div>
<div style="margin: 20px 10px;">
    <button class="blend-button blend-button-default blend-button-icon">
        <em></em>带icon
    </button>
    <button class="blend-button blend-button-red blend-button-icon">
        <em></em>带icon
    </button>
</div>

<div style="margin: 20px 10px;">
    <button class="blend-button blend-button-primary blend-active">active</button>
    <button class="blend-button blend-button-primary blend-disabled">disabled</button>
    <button class="blend-button blend-button-primary blend-round">round</button>
    <button class="blend-button blend-button-primary blend-radius">radius</button>
</div>

##选择框

页面中的选择框
> 待选选项要夹在`<span>`标签里，默认选中项可以在类中指定`blend-checkbox-checked`

###源码

####html


    <div id="checkgroup" data-blend-widget="checkbox"
         data-blend-checkbox="{&quot;type&quot;:&quot;radio&quot;,&quot;values&quot;:[&quot;radio1&quot;,&quot;radio2&quot;,&quot;radio3&quot;]}">
        <div class="blend-checkbox-group">
            <label class="blend-checkbox-label">就是这个原因了</label>
            <span class="blend-checkbox blend-checkbox-default blend-checkbox-checked"></span>
        </div>
        <div class="blend-checkbox-group">
            <label class="blend-checkbox-label">不是因为这个</label>
            <span class="blend-checkbox blend-checkbox-default"></span>
        </div>
        <div class="blend-checkbox-group">
            <label class="blend-checkbox-label">让我再想一想</label>
            <span class="blend-checkbox blend-checkbox-default"></span>
        </div>
    </div>

    <div id="checkall" class="blend-checkbox-red" data-blend-widget="checkbox" data-blend-checkbox="{&quot;type&quot;:&quot;group&quot;}">
        <div>
            <span class="blend-checkbox blend-checkbox-square blend-checkbox-all"></span><label
                class="blend-checkbox-label">全选</label>
        </div>
        <div>
            <span class="blend-checkbox blend-checkbox-default blend-checkbox-checked"></span><label
                class="blend-checkbox-label">A</label>
            <span class="blend-checkbox blend-checkbox-default"></span><label class="blend-checkbox-label">B</label>
            <span class="blend-checkbox blend-checkbox-default"></span><label class="blend-checkbox-label">C</label>
        </div>

    </div>

    <div id="check" data-blend-widget="checkbox" data-blend-checkbox="{&quot;type&quot;:&quot;group&quot;}">
        <span class="item blend-checkbox blend-checkbox-square blend-checkbox-checked"></span><label
            class="blend-checkbox-label">A</label>
        <span class="item blend-checkbox blend-checkbox-square"></span><label class="blend-checkbox-label">B</label>
    </div>


###效果示例


<div style="margin: 0 20px;" id="checkbutton" data-blend-widget="checkbox" data-blend-checkbox="{&quot;type&quot;:&quot;radio&quot;,&quot;itemSelector&quot;:&quot;.blend-button&quot;,&quot;itemSelected&quot;:&quot;blend-button-checkbox-checked&quot;}">

    <button class="blend-button blend-button-red blend-button-checkbox">nocheck</button>
    <button class="blend-button blend-button-red blend-button-checkbox blend-button-checkbox-checked">checked</button>

</div>
<hr>
<div id="checkgroup" data-blend-widget="checkbox"
     data-blend-checkbox="{&quot;type&quot;:&quot;radio&quot;,&quot;values&quot;:[&quot;radio1&quot;,&quot;radio2&quot;,&quot;radio3&quot;]}">
    <div class="blend-checkbox-group">
        <label class="blend-checkbox-label">就是这个原因了</label>
        <span class="blend-checkbox blend-checkbox-default blend-checkbox-checked"></span>
    </div>
    <div class="blend-checkbox-group">
        <label class="blend-checkbox-label">不是因为这个</label>
        <span class="blend-checkbox blend-checkbox-default"></span>
    </div>
    <div class="blend-checkbox-group">
        <label class="blend-checkbox-label">让我再想一想</label>
        <span class="blend-checkbox blend-checkbox-default"></span>
    </div>
</div>
<hr>
<div id="checkall" class="blend-checkbox-red" data-blend-widget="checkbox" data-blend-checkbox="{&quot;type&quot;:&quot;group&quot;}">
    <div>
        <span class="blend-checkbox blend-checkbox-square blend-checkbox-all"></span><label
            class="blend-checkbox-label">全选</label>
    </div>
    <div>
        <span class="blend-checkbox blend-checkbox-default blend-checkbox-checked"></span><label
            class="blend-checkbox-label">A</label>
        <span class="blend-checkbox blend-checkbox-default"></span><label class="blend-checkbox-label">B</label>
        <span class="blend-checkbox blend-checkbox-default"></span><label class="blend-checkbox-label">C</label>
    </div>

</div>
<hr>
<div id="check" data-blend-widget="checkbox" data-blend-checkbox="{&quot;type&quot;:&quot;group&quot;}">
    <span class="item blend-checkbox blend-checkbox-square blend-checkbox-checked"></span><label
        class="blend-checkbox-label">A</label>
    <span class="item blend-checkbox blend-checkbox-square"></span><label class="blend-checkbox-label">B</label>
</div>



##计数器

> 用作数量的加减，在`.on`里设置监听事件

###源码

####html

    <div  data-blend-counter='{"step":1,"maxValue":10}' class="blend-counter">
        <div class="blend-counter-minus">-</div>
        <input class="blend-counter-input" type="text">
        <div class="blend-counter-plus">+</div>
    </div>
    <div data-blend-counter='{"step":2,"maxValue":20}' class="blend-counter">
        <div class="blend-counter-minus">-</div>
        <input class="blend-counter-input" type="text" value="20">
        <div class="blend-counter-plus">+</div>
    </div>

####Javascript

	<script>
        $(function () {
            /**
             * window.boost = $; // 引入boost.min.js时解决与JQuery冲突
             */
            var $counter = $('.blend-counter').counter(); // 选择元素
            $counter.on("counter:update", function (e) {
                console.log(arguments);
            });
        });
    </script>

###效果示例

<div class="boost demo">
    <div data-blend-counter='{"step":1,"maxValue":10}' class="blend-counter">
        <div class="blend-counter-minus"></div>
        <input class="blend-counter-input" type="text" value="1">
        <div class="blend-counter-plus"></div>
    </div>
    <div data-blend-counter='{"step":2,"maxValue":20}' class="blend-counter">
        <div class="blend-counter-minus"></div>
        <input class="blend-counter-input" type="text" value="20">
        <div class="blend-counter-plus"></div>
    </div>
</div>

<script>
;(function () {
    
    var $counter = boost('.blend-counter').counter();
    $counter.on("counter:update", function (e) {
        console.log(arguments);
    });

})();  
</script>


##对话框

用作提示的对话框

> 窗口由header，body，footer三部分构成，分别以`<div>`展示，`renderType:`表明渲染方式。

###源码

####html

    <button id="dialog-btn1" class="blend-button blend-button-default">点击出弹框</button>
    <button id="dialog-btn2" class="blend-button blend-button-default">点击也出弹框</button>

	<div id="domInitDialog" class="blend-dialog">

      <div class="blend-dialog-body">
        这是提示弹框
      </div>
      <div class="blend-dialog-footer">
        <a href="javascript:void(0);" class="blend-dialog-cancel">取消</a>
        <a href="javascript:void(0);" class="blend-dialog-confirm">确认</a>
      </div>
    </div>

    <div id="jsInitDialog" class="blend-dialog">
    </div>

####Javascript

    <script>
       ;(function(){

            // Dom渲染方式
            var dialog1 = boost("#domInitDialog").dialog({
                hasHeader: false,
                btnStatus:1,
                renderType:0 // 默认使用dom渲染
            }).on('dialog:show',function(){
                console.log("dialog1 show");
            }).on('dialog:hide',function(){
                console.log("dialog1 hide");
            })

            boost("#dialog-btn1").on("click",function(){
                dialog1.dialog("show");
            });
          
            var dialog2 = boost("#jsInitDialog").dialog({
                title:"这是title",
                content: '<p style="margin: 0;" class="blend-dialog-phone">13313331333</p><p style="margin: 0;"><a href="http://www.baidu.com" class="blend-dialog-link">这是一个链接</a></p>',
                // cancelOnly: 1,
                confirmText:"确认",
                cancelText: '取消',
                btnStatus:3,
                renderType:1  //js渲染
            }).on('dialog:show',function(){
                console.log("dialog3 show");
            }).on('dialog:hide',function(){
                console.log("dialog3 hide");
            }).on("dialog:confirm",function(){
                alert("监听confirm事件");
            }).on("dialog:cancel",function(){
                alert("监听cancel事件")
            });

            boost("#dialog-btn2").on("click",function(){
                dialog2.dialog("show");
            });

       })();
    </script>

###效果示例

<button id="dialog-btn1" class="blend-button blend-button-default">点击出弹框</button>
<button id="dialog-btn2" class="blend-button blend-button-default">点击也出弹框</button>

<div id="domInitDialog" class="blend-dialog">

  <div class="blend-dialog-body">
    这是提示弹框
  </div>
  <div class="blend-dialog-footer">
    <a href="javascript:void(0);" class="blend-dialog-cancel">取消</a>
    <a href="javascript:void(0);" class="blend-dialog-confirm">确认</a>
  </div>
</div>

<div id="jsInitDialog" class="blend-dialog">
</div>


<script>
    ;(function(){

            // Dom渲染方式
            var dialog1 = boost("#domInitDialog").dialog({
                hasHeader: false,
                btnStatus:1,
                renderType:0 // 默认使用dom渲染
            }).on('dialog:show',function(){
                console.log("dialog2 show");
            }).on('dialog:hide',function(){
                console.log("dialog2 hide");
            });

            boost("#dialog-btn1").on("click",function(){
                dialog1.dialog("show");
            });
          
            var dialog2 = boost("#jsInitDialog").dialog({
                title:"这是title",
                content: '<p style="margin: 0;" class="blend-dialog-phone">13313331333</p><p style="margin: 0;"><a href="http://www.baidu.com" class="blend-dialog-link">这是一个链接</a></p>',
                // cancelOnly: 1,
                confirmText:"确认",
                cancelText: '取消',
                btnStatus:3,
                renderType:1  //js渲染
            }).on('dialog:show',function(){
                console.log("dialog3 show");
            }).on('dialog:hide',function(){
                console.log("dialog3 hide");
            }).on("dialog:confirm",function(){
                alert("监听confirm事件");
            }).on("dialog:cancel",function(){
                alert("监听cancel事件");
            });

            boost("#dialog-btn2").on("click",function(){
                dialog2.dialog("show");
            });
       })();
</script>


##导航组件

顶部导航和底部导航组件

> 用`blend-fixedBar-`后面的`top`或者`bottom`来确定位置

###源码

####html

    <div class="boostdemo">
        <div data-blend-widget="fixedBar" class="blend-fixedBar blend-fixedBar-top">
            我是头部固定人
        </div>
        <div data-blend-widget="fixedBar" class="blend-fixedBar blend-fixedBar-bottom" style="padding: 9px 16px;display: -webkit-box;">
            <button style="margin-right: 10px;-webkit-box-flex:1;width: 0;display: block;" class="blend-button blend-button-red">按钮一</button>
            <button style="-webkit-box-flex:1;width: 0;display: block;" class="blend-button blend-button-default">按钮二</button>
        </div>
    </div>



##Gallery组件

> `height`，`width`可以设置图片的长宽，`duration`设置图片滑动延迟，`isLoopin`设置是否循环，`useZoom`支持是否缩放

###源码

####html

	<div id="gallery_wrapper"  class="blend-gallery" >
    <button id="show" class="show">click to show</button>

####Javascript

    <script type="text/javascript">

        ;(function(){
            
            var list = [{
                image: "http://a.hiphotos.baidu.com/image/pic/item/4b90f603738da977a9aac626b251f8198618e332.jpg",
                description:"这是第1张图片！",
                title:"图片集"
            },{
                image: "http://b.hiphotos.baidu.com/image/pic/item/b8389b504fc2d5627c886ee4e51190ef76c66c33.jpg",
                description:"这是第2张图片",
                title:"图片集"
            },{
                image: "http://c.hiphotos.baidu.com/image/pic/item/4034970a304e251f17a2e38ba486c9177f3e536f.jpg",
                description:"这是第3张图片",
                title:"图片集"
            },{
                image: "http://t12.baidu.com/it/u=4224136820,222817142&fm=32&s=CE73A55661C252F05E652DCE010070E2&w=623&h=799&img.JPEG",
                description:"这是第4张图片！",
                title:"图片集"
            },{
                image: "http://d.hiphotos.baidu.com/image/pic/item/00e93901213fb80e80d7d65437d12f2eb938942b.jpg",
                description:"这是第5张图片",
                title:"图片集"
            },{
                image: "http://h.hiphotos.baidu.com/image/pic/item/d439b6003af33a87069d591bc45c10385343b53b.jpg",
                description:"超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述",
                title:"图片集"
            }];
            var wrapper = boost("#gallery-wrapper").gallery({
                data:list,
                duration:2000,
            });
            boost("#show").on("click",function(){
                wrapper.gallery("show");
            });
        
        })();
    </script>

###效果示例

<button id="gallery-show" class="blend-button blend-button-default">点击触发gallery</button>

<div id="gallery-wrapper"  class="blend-gallery"></div>


<script>
;(function(){
var list = [{
    image: 'http://a.hiphotos.baidu.com/image/pic/item/4b90f603738da977a9aac626b251f8198618e332.jpg',
    description:"这是第1张图片！",
    title:"图片集"
},{
    image: "http://b.hiphotos.baidu.com/image/pic/item/b8389b504fc2d5627c886ee4e51190ef76c66c33.jpg",
    description:"这是第2张图片",
    title:"图片集"
},{
    image: "http://c.hiphotos.baidu.com/image/pic/item/4034970a304e251f17a2e38ba486c9177f3e536f.jpg",
    description:"这是第3张图片",
    title:"图片集"
},{
    image: "http://t12.baidu.com/it/u=4224136820,222817142&fm=32&s=CE73A55661C252F05E652DCE010070E2&w=623&h=799&img.JPEG",
    description:"这是第4张图片！",
    title:"图片集"
},{
    image: "http://d.hiphotos.baidu.com/image/pic/item/00e93901213fb80e80d7d65437d12f2eb938942b.jpg",
    description:"这是第5张图片",
    title:"图片集"
},{
    image: "http://h.hiphotos.baidu.com/image/pic/item/d439b6003af33a87069d591bc45c10385343b53b.jpg",
    description:"超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述超长的描述",
    title:"图片集"
}];
var wrapper = boost("#gallery-wrapper").gallery({
    data:list,
    duration:2000,
});

boost("#gallery-show").on("click",function(){
    wrapper.gallery("show");
});
    
})();
</script>


## Header组件

顶部header

> 页头的样式中，如果是着重强调的按钮，需要用`blend-button`来定义其样式

###源码

####html

    <header data-blend-widget="header" class="blend-header">
        <span class="blend-header-left">
            <a class="blend-header-item blend-action-back-icon" href="javascript:history.back();"></a>
        </span>
        <span class="blend-header-title">
            <span class="blend-header-item">测试一标题</span>
        </span>
        <span class="blend-header-right">
            <a class="blend-header-item blend-button blend-button-gray" href="header.test2.html">测试2</a>
        </span>
    </header>



###效果示例

<div class="boost demo">
    <header data-blend-widget="header" class="blend-header">
        <span class="blend-header-left">
            <a class="blend-header-item blend-action-back-icon" href="javascript:history.back();"></a>
        </span>
        <span class="blend-header-title">
            <span class="blend-header-item">测试一标题</span>
        </span>
        <span class="blend-header-right">
            <a class="blend-header-item blend-button blend-button-gray" href="header.test2.html">测试2</a>
        </span>
    </header>
</div>


##列表

页面中用来展示数据的列表

> 列表类型可以用`refresh`等绑定来设置。

###源码

####html

    <section data-blend-widget="list" class="blend-list">
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第一行，向左滑动试试～～～</div>
            <span class="blend-list-item-delete">删除</span>
        </div>
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第二行</div>
            <span class="blend-list-item-delete">hello</span>
        </div>
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第三行</div>
            <span class="blend-list-item-delete">删除</span>
        </div>
    </section>

####Javascript

    <script>
        var $blendList = boost('.blend-list').list();
    </script>

###效果示例

<div class="boost demo">
    <section data-blend-widget="list" class="blend-list">
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第一行，向左滑动试试～～～</div>
            <span class="blend-list-item-delete">删除</span>
        </div>
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第二行</div>
            <span class="blend-list-item-delete">hello</span>
        </div>
        <div class="blend-list-item">
            <div class="blend-list-item-content">这是第三行</div>
            <span class="blend-list-item-delete">删除</span>
        </div>
    </section>
</div>

<script type="text/javascript">
    ;(function(){
        var $blendList = boost('.blend-list').list();
    })();
</script>


##Loading组件

加载内容过程中的等待界面

>可以自动为`<div>`分配加载时的样式。

###源码

####Javascript

    <script>
        /**
         * window.boost = $;
         */
    	var loading = boost.blend.loading();

        boost("#open-loading").on('click',function(){
            loading.show();
        });
        boost("#close-loading").on('click',function(){
            loading.hide();
        });
    </script>

###效果示例

<div class="boost demo">
    <button id='open-loading' class="blend-button blend-button-default">打开loading</button>
    <br/><br/>
    <button id="close-loading" class="blend-button blend-button-default">关闭loading</button>
</div>


<script type="text/javascript">
;(function(){

    var loading = boost.blend.loading();

    boost("#open-loading").on('click',function(){
        loading.show();
    });
    boost("#close-loading").on('click',function(){
        loading.hide();
    });

})();
</script>


##可展开导航组件

列表式可展开导航用组件

>可以自动为`<div>`分配加载时的样式。

###源码

####html

    <nav data-blend-widget="nav" class="blend-nav blend-nav-column-3">
        <a class="blend-nav-item" href="#">炒菜</a>
        <a class="blend-nav-item" href="#">面食类</a>
        <a class="blend-nav-item" href="#">饼类</a>
        <a class="blend-nav-item" href="#">米线</a>
        <a class="blend-nav-item" href="#">馄饨</a>
        <a class="blend-nav-item" href="#">饺子</a>
        <a class="blend-nav-item" href="#">饮料</a>
        <a class="blend-nav-item" href="#">砂锅</a>
        <a class="blend-nav-item" href="#">煲仔饭</a>
        <a class="blend-nav-item" href="#">烧烤</a>
        <a class="blend-nav-item" href="#">其他</a>
    </nav>

####Javascript

    <script>
        $('.blend-nav').nav({
            column: 3,
            row: 2
        }).nav('column');
    </script>

###效果示例

<div class="boost demo" style="width:360px;">
    <nav data-blend-widget="nav" class="blend-nav blend-nav-column-3">
        <a class="blend-nav-item" href="#">炒菜</a>
        <a class="blend-nav-item" href="#">面食类</a>
        <a class="blend-nav-item" href="#">饼类</a>
        <a class="blend-nav-item" href="#">米线</a>
        <a class="blend-nav-item" href="#">馄饨</a>
        <a class="blend-nav-item" href="#">饺子</a>
        <a class="blend-nav-item" href="#">饮料</a>
        <a class="blend-nav-item" href="#">砂锅</a>
        <a class="blend-nav-item" href="#">煲仔饭</a>
        <a class="blend-nav-item" href="#">烧烤</a>
        <a class="blend-nav-item" href="#">其他</a>
    </nav>
</div>


<script>
;(function(){
    boost('.blend-nav').nav({
        column: 3,
        row: 2
    }).nav('column');
})();
</script>



##内容面板组件

展示内容的面板

> 面板中的基础元素分页眉`header`页身`body`和页脚`footer`，位置也分左`left`中`center`右`right`。

###源码

####html

	<div data-blend-widget="panel" class="blend-panel">
		<div class="blend-panel-header blend-panel-left">
			长途汽车:
		</div>
		<div class="blend-panel-body">
			成都新南门车站——峨眉山客运中心（峨眉山市票价43元/人），30分钟一班。
			旅游专线：乐山客运中心站——峨眉山市乐山港——峨眉山报国寺乐山客运中心站——沙湾乐山港
			<br/>【有效期】 2015.03.15
			<br/>【退票规则】 使用前均可提前退票
		</div>
		<div class="blend-panel-footer blend-panel-center">
			加载更多
		</div>
	</div>

###效果示例

<div class="boost demo" style="width:360px;">
	<div  class="blend-panel">
		<div class="blend-panel-header blend-panel-left">
			长途汽车:
		</div>
		<div class="blend-panel-body">
			成都新南门车站——峨眉山客运中心（峨眉山市票价43元/人），30分钟一班。
			旅游专线：乐山客运中心站——峨眉山市乐山港——峨眉山报国寺乐山客运中心站——沙湾乐山港
			<br/>【有效期】 2015.03.15
			<br/>【退票规则】 使用前均可提前退票
		</div>
		<div class="blend-panel-footer blend-panel-center">
			加载更多
		</div>
	</div>
</div>

##图片组件

不同的图片展示样式

> 通过指定`cover`来定义图片中是否插入黑底横幅文字。

###源码

####html

    <figure data-widget="picture" class="blend-picture blend-picture-default blend-picture-radius" data-picture="{}">
       <a calss="picture-link" href="http://www.baidu.com" target="_blank">
       <img src="http://c.hiphotos.baidu.com/image/pic/item/91ef76c6a7efce1b1769fdd6ac51f3deb48f656f.jpg"> 
       </a>
       <figcaption class="blend-picture-title blend-picture-title-default">bottom,带链接，default图片</figcaption>
    </figure>
    <figure data-widget="picture" class="blend-picture blend-picture-full " data-picture="{}">
       <img src="http://img5.imgtn.bdimg.com/it/u=2144620322,1877482059&fm=23&gp=0.jpg"> 
       <figcaption class="blend-picture-title blend-picture-title-default">bottom,不带链接，full图片</figcaption>
    </figure>

###效果示例

<div class="boost demo">
    <figure style="width:40%" data-widget="picture" class="blend-picture blend-picture-default blend-picture-radius fl" data-picture="{}">
        <a calss="picture-link" href="http://www.baidu.com" target="_blank">
        <img src="http://c.hiphotos.baidu.com/image/pic/item/91ef76c6a7efce1b1769fdd6ac51f3deb48f656f.jpg">
    </a>
    <figcaption class="blend-picture-title blend-picture-title-default">bottom,带链接，default图片</figcaption>
    </figure>
    <figure style="width:40%" data-widget="picture" class="blend-picture blend-picture-full fl" data-picture="{}">
        <img src="http://pic.4j4j.cn/upload/pic/20130530/f41069c61a.jpg">
        <figcaption class="blend-picture-title blend-picture-title-cover">黑底，不带链接，full图片</figcaption>
    </figure>
    <div style="clear:both"></div>
</div>



##Slider组件

用作展示图片的滑动窗口

> 通过绑定按钮事件中的`next``paused``prev`来控制展示图片的滑动样式。

###源码

####html

    <div id="slider1" data-blend-widget="slider" class="blend-slider" data-blend-slider='{"theme":"d2"}'>
        <ul class="blend-slides">
            <li>
        	    <img src="http://g.hiphotos.baidu.com/image/pic/item/50da81cb39dbb6fd2ca88b260b24ab18972b373a.jpg"/>
                <div class="blend-slider-title">这是图片1的标题</div>
        	</li>
            <li>
                <img src="http://b.hiphotos.baidu.com/image/pic/item/95eef01f3a292df5b933a51fbe315c6035a873c3.jpg"/>
                <div class="blend-slider-title">这是图片2的标题</div>
            </li>
            <li>
                <a href="http://www.baidu.com" target="_blank">
                    <img src="http://a.hiphotos.baidu.com/image/pic/item/c83d70cf3bc79f3dc8225e37b8a1cd11738b29f1.jpg"/>
                </a>
                <div class="blend-slider-title">这是图片3的标题</div>  
            </li>
        </ul>
    </div>
    <button id="prev">上一张</button>
    <button id="paused">暂停</button>
    <button id="next">下一张</button>

####Javascript

    <script>
        ;(function(){
            var $slider = boost("#slider1").slider({
                "theme":"d2",
                "speed":3000
            });
            boost("#slider-next").on('click',function () {
                $slider.slider('next');
            });

            boost("#slider-prev").on('click',function () {
                $slider.slider('prev');
            });
        })();
    </script>

###效果示例

<div class="boost demo" style="width:360px;">
    <div id="slider" class="blend-slider">
        <ul class="blend-slides">
            <li>
                <img src="http://g.hiphotos.baidu.com/image/pic/item/50da81cb39dbb6fd2ca88b260b24ab18972b373a.jpg"/>
                <div class="blend-slider-title">这是图片1的标题</div>
            </li>
            <li>
                <img src="http://b.hiphotos.baidu.com/image/pic/item/95eef01f3a292df5b933a51fbe315c6035a873c3.jpg"/>
                <div class="blend-slider-title">这是图片2的标题</div>
            </li>
            <li>
                <a href="http://www.baidu.com" target="_blank">
                    <img src="http://a.hiphotos.baidu.com/image/pic/item/c83d70cf3bc79f3dc8225e37b8a1cd11738b29f1.jpg"/>
                </a>
                <div class="blend-slider-title">这是图片3的标题</div>  
            </li>
        </ul>
    </div>
    <button id="slider-prev" class="blend-button blend-button-default">上一张</button>
    <button id="slider-next" class="blend-button blend-button-default">下一张</button>
</div>

<script type="text/javascript">
    ;(function(){
        var $slider = boost("#slider").slider({
            "theme":"d2",
            "speed":3000
        });
        boost("#slider-next").on('click',function () {
            $slider.slider('next');
        });

        boost("#slider-prev").on('click',function () {
            $slider.slider('prev');
        });
    })();
</script>

##标签组件

切换容器内容的标签

> `header`中的内容和`content`是一一对应的。

###源码

####html

    <section class="blend-tab">
        <div class="blend-tab-header">
            <div class="blend-tab-header-item">Tab1</div>
            <div class="blend-tab-header-item">Tab2</div>
            <div class="blend-tab-header-item">Tab3</div>
            <div class="blend-tab-header-active"></div>
        </div>
        <div class="blend-tab-content">
            <div class="blend-tab-content-item">我是Tab1里面的内容</div>
            <div class="blend-tab-content-item">Hello,我是Tab2的内容</div>
            <div class="blend-tab-content-item">居然还有Tab3</div>
        </div>
    </section>
    <br>
    <button id="toTab3" class="blend-button blend-button-default">穿越到Tab3</button><br/>


####Javascript

    <script>
        ;(function(){
            var $tab = boost(".blend-tab").tab();

            boost("#toTab3").on('click',function(){
                $tab.tab("active",2);
            });

        })();
    </script>

###效果示例

<div class="boost dmeo" style="width:360px;">
    <section class="blend-tab">
        <div class="blend-tab-header">
            <div class="blend-tab-header-item">Tab1</div>
            <div class="blend-tab-header-item">Tab2</div>
            <div class="blend-tab-header-item">Tab3</div>
            <div class="blend-tab-header-active"></div>
        </div>
        <div class="blend-tab-content">
            <div class="blend-tab-content-item">我是Tab1里面的内容</div>
            <div class="blend-tab-content-item">Hello,我是Tab2的内容</div>
            <div class="blend-tab-content-item">居然还有Tab3</div>
        </div>
    </section>
    <br>
    <button id="toTab3" class="blend-button blend-button-default">穿越到Tab3</button><br/>
</div>

<script type="text/javascript">
    ;(function(){
        var $tab = boost(".blend-tab").tab();

        boost("#toTab3").on('click',function(){
            $tab.tab("active",2);
        });

    })();
</script>


##Tab导航组件

页面导航位置上，可以切换内容的标签

> 默认激活的连接要用`blend-tabnav-item-active`类标识。

###源码

####html
    
    <nav data-blend-widget="tabnav" class="blend-tabnav blend-tabnav-dash" style="margin-bottom: 20px;">
        <a class="blend-tabnav-item blend-tabnav-item-active" href="#">
            <span class="blend-tabnav-item-text">链接1,注意分割线</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">链接2</span>
        </a>
    </nav>

    <nav data-blend-widget="tabnav" class="blend-tabnav">
        <a class="blend-tabnav-item blend-tabnav-item-active" href="#">
            <span class="blend-tabnav-item-text">First</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Second</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Third</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Fourth</span>
        </a>
    </nav>

###效果示例

<div class="boost demo" style="width:360px;">
    <h5>以下是两个导航</h5>
    <nav class="blend-tabnav blend-tabnav-dash" style="margin-bottom: 20px;">
        <a class="blend-tabnav-item blend-tabnav-item-active" href="#">
            <span class="blend-tabnav-item-text">链接1,注意分割线</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">链接2</span>
        </a>
    </nav>
    <br>
    <nav  class="blend-tabnav">
        <a class="blend-tabnav-item blend-tabnav-item-active" href="#">
            <span class="blend-tabnav-item-text">First</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Second</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Third</span>
        </a>
        <a class="blend-tabnav-item" href="#">
            <span class="blend-tabnav-item-text">Fourth</span>
        </a>
    </nav>
</div>

##Toast组件

在页面上淡入淡出出的提示内容

>`.show('这是个toast', 2000) `分别标示闪现的内容和延时。

###源码


####Javascript

    <script>
        ;(function(){
            var $toast = boost.blend.toast();
            boost("#toast-btn").on('click',function(){
               $toast.show('这是个toast, 每次时间戳都不一样哦。'+ new Date().getTime(), 2000); 
            });
        })();
    </script>

### 效果演示
    
<button id="toast-btn" class='blend-button blend-button-default'>点我，点我出toast</button>

<script>
    ;(function(){
        var $toast = boost.blend.toast();
        boost("#toast-btn").on('click',function(){
           $toast.show('这是个toast, 每次时间戳都不一样哦。'+ new Date().getTime(), 2000); 
        });
    })();
</script>




