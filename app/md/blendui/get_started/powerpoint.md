# 幻灯片使用

## 概述

在多数的应用中都会使用到幻灯片的功能，BlendUI中对幻灯片做了优化处理，使开发者使用起来更简单，用户体验更流畅。


## 幻灯片简单使用

在BlendUI中我们可以使用Slider来定义一个幻灯片，我们只需要配置相应的参数即可，格式如下：

	slider = new Blend.ui.Slider({
		"id" : "sliderId",
		"bgColor" : "#cccccc",
		"images" : images //图片资源，json数组
		"width" : 100,
        "height" : 200
	});
	
一个简单的实例：

	var images = [{"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_07_02.jpg"},
                  {"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_09_02.jpg"}];
    document.addEventListener("blendready", function () {
        slider = new Blend.ui.Slider({
            "id": "sliderId",
            "bgColor": "#cccccc",
            "images": images,
            "height": 200,
            "top": 0,
            "left": 0
        });
    });
	
> 温馨提示：这里定义的幻灯片并不会自动切换，需要用户滑动切换各个页面
	
## 加入Indicator

Indicator为幻灯片下的指示小圆点，如果您需要在应用中幻灯片下面显示这些指示小圆点，可以使用下面的方法加入：

显示指示小圆点配置项：

	hasIndicator:true,
	
非当前幻灯片下指示小圆点显示颜色配置项：

	inactiveColor:"#ebebeb",
	
当前指示幻灯片下小圆点显示颜色配置项：
	
	activeColor:"#3c9c76",
	
每个指示小圆点的大小：

	unitSize:6,
	
每个指示小圆点之间的间距：

	unitSpace:3
	
一个实例：

	var images = [{"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_07_02.jpg"},
                  {"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_09_02.jpg"}];
    document.addEventListener("blendready", function () {
        slider = new Blend.ui.Slider({
            "id": "test",
            "bgColor": "#cccccc",
            "images": images,
            "height": 200,
            "top": 0,
            "left": 0,
            hasIndicator: true,
            inactiveColor: "#ebebeb",
            activeColor: "#3c9c76",
            unitSize: 16,
            unitSpace: 10            
        });
    });
	
	
## 加入事件

当我们需要对幻灯片的一些事件进行监听和处理的时候，可以使用下面的方法：

### slide

当我们手动翻页时触发，格式如下：

	"slide" : function(e){
		console.log(e.data.index);
	}
	
### tap

当点击一个页面时触发，格式如下：

	"tap" : function(e){
		console.log(e.data.index);
	}
	
一个实例：

	var images = [{"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_07_02.jpg"},
                  {"url":"http://static.wenku.bdimg.com/topic/wapTopics/old_09_02.jpg"}];
    document.addEventListener("blendready", function () {
        slider = new Blend.ui.Slider({
            "id": "test",
            "bgColor": "#cccccc",
            "images": images,
            "height": 200,
            "top": 0,
            "left": 0,
            hasIndicator: true,
            inactiveColor: "#ebebeb",
            activeColor: "#3c9c76",
            unitSize: 16,
            unitSpace: 10,
            "tap": function (e) {
                //手动点击时打印当前幻灯片的编号
                console.log(e.data.index);
            },
            "slide": function (e) {
                //滑动时打印当前幻灯片的编号
                console.log(e.data.index);
            }
        });
    });

## Slider间跳转	

BlendUI提供下面三个方法使开发者可以自由在Slider间跳转。

### prev()

滚动到前一个页面

	var slider = new Blend.ui.Slider({
    	"id": "slider",
    	"images": [
        	{"url":"http://*.com/old_07_02.jpg"},
        	{"url":"http://*.com/old_09_02.jpg"}
     	]
	});

	slider.prev();

### next()

滚动到下一个页面

	var slider = new Blend.ui.Slider({
    	"id": "slider",
    	"images": [
        	{"url":"http://*.com/old_07_02.jpg"},
        	{"url":"http://*.com/old_09_02.jpg"}
     	]
	});

	slider.next();

### sliderTo(index)

滚动到指定的index个页面

	var slider = new Blend.ui.Slider({
    	"id": "slider",
    	"images": [
        	{"url":"http://*.com/old_07_02.jpg"},
        	{"url":"http://*.com/old_09_02.jpg"}
     	]
	});

	slider.sliderTo(0);
	
## 示例源码
[在线获取源码](https://github.com/yunlongmain/blendui_doc_demo/tree/master/slider)