#自定义事件

##概述
用户开发应用中会大量使用事件功能。除了浏览器内置的事件之外，BlendUI提供给用户触发和绑定自定义事件的能力。通过自定义事件，用户可以轻松控制页面数据传递、页面切换。

##监听页面初始化事件
BlendUI中提供了一个监听页面初始化方法，用户可以在页面初始化时触发函数，进行页面数据绑定、绑定监听事件等操作，大大方便了用户处理消息。使用方法如下：
<pre><code>Blend.ui.layerInit("页面id",function(dom){
    //dom操作，需要指定context为当前的dom
	$("#xx",dom).append("xx");
});</code></pre>

> 首页`index.html`页面默认页面id为“0”，其余所创建的页面id均由用户自行定义不受限制。用户如果要进行页面dom操作时，需要指示其context。

一个实例：
<pre><code>document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        console.log("index.html init");
    });

    Blend.ui.layerInit("contentId",function(dom){
        console.log("content.html init");
    });
});</code></pre>

> 以上代码定义了两个页面`index.html`和`content.html`的初始化函数。初始化函数中可以添加页面的事件响应，详见下小节。

##添加监听事件
BlendUI提供了监听事件添加功能，用户可以自行定义事件类型，可以在一个事件类型上关联众多操作。使用方法如下：
<pre><code>Blend.ui.on("eventType",function(event){
     //handler
});</code></pre>

> eventType可以为用户自定义的事件，也可以为系统自带的事件类型，系统事件类型详见：API文档-自定义事件。

一个实例：

<pre><code>var handler = function(event){
    //event中detail字段保存有页面id
	console.log(event['detail']);
};

Blend.ui.layerInit("页面id",function(dom){
	Blend.ui.on("eventType",function(event){
	    //event中data字段保存有fire方法传递的数据
	    console.log(event['data']);
	});
	Blend.ui.on("eventType",handler});
});</code></pre>

> 以上代码表示，我们为`eventType`绑定了两个事件处理函数，此处我们使用了`Function handle`作为`on`方法的第二个参数，这种方式可以方便用户进行事件解绑操作，详见解绑事件。

当用户需要添加的监听事件只需执行一次，则可以使用`once("eventType",callback)`方法，使用方法同`on("eventType",callback)`。

一个实例：

<pre><code>var handler = function(event){
    //event中detail字段保存有页面id
	console.log(event['detail']);
};

Blend.ui.layerInit("页面id",function(dom){
	Blend.ui.once("eventType",handler);

	//触发一次操作后，该自定义事件将会自动注销不可再触发
	Blend.ui.fire("eventType","页面id");
});</code></pre>



##触发监听事件
绑定了事件之后，需要用户控制进行触发操作，这个触发操作既可以触发当前页面的监听事件也可以触发其他页面的监听事件，通过这种方式，用户也可以实现页面间数据传递。使用方法如下：
<pre><code>Blend.ui.fire ("eventType","页面id","数据");</code></pre>

> 第一个参数为用户自定义事件名称，第二参数标识要触发哪个页面的事件，第三个参数为要传递的数据，既可以是Object也可以是String


一个实例：

<pre><code>Blend.ui.layerInit("页面1",function(dom){
	Blend.ui.on("eventA",function(event){
	    //event中data字段保存有fire方法传递的数据 "other"
	    console.log(event['data']);
	});
});

Blend.ui.layerInit("页面2",function(dom){
	Blend.ui.on("eventB",function(event){
	    //event中data字段保存有fire方法传递的数据 "myself"
	    console.log(event['data']);
	});

	$("#button_1",dom).on("click",function(e){
	    e.preventDefault();
	    Blend.ui.fire("eventB","页面2","myself");
	});

	$("#button_2",dom).on("click",function(e){
	    e.preventDefault();
	    Blend.ui.fire("eventA","页面1","other");
	});
});</code></pre>

> 以上代码展示了通过在`页面2`上点击`Button`触发监听事件，既包括自身的事件也包括其他页面的事件，同时也提供了一种页面传递数据的方法，数据格式详情参见API文档。

##取消监听事件
在用户绑定了事件之后，如果用户想要取消绑定的事件可以使用BlendUI中的`off`方法，使用方法如下：
<pre><code>Blend.ui.off("eventType",[handler]);</code></pre>

一个实例：
<pre><code>var handler = function(event){
    console.log(event['data']);
};
Blend.ui.layerInit("layerId", function(dom){
	Blend.ui.on("eventType", function(event){
	    console.log(event['detail']);
	});

	Blend.ui.on("eventType", handler});

	$("#button_1",dom).on("click",function(e){
	    e.preventDefault();
	    //取消与eventType绑定的所有操作
	    Blend.ui.off("eventType");
	});

	$("#button_2",dom).on("click",function(e){
	    e.preventDefault();
	    //取消与eventType绑定的handler操作
	    Blend.ui.off("eventType",handler);
	});
});</code></pre>

> `off`第二个参数可以为空也可以为`handler`，只有这种句柄方式可以解除特定绑定，所以优先推荐句柄方式。
