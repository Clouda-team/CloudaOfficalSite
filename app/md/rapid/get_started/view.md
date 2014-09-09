# 视图（view）

## 概述

视图通常包含应用中的HTML代码，为分离表现层与控制器和业务逻辑提供了便利。视图通常存放于`app/views`目录。

一个简单的实例：

	<html>
    	<body>
        	<h1>Hello, World!</h1>
    	</body>
	</html>
	

## 传递参数给视图

rapid允许给视图传递参数，视图(View)中默认使用`Swig`模板，方法如下：

（1）在Action中使用`render`方法想相应的视图模板传递参数

	var server = use("rapid-httpserver");
	
	server.defineAction("sendParamsToView", function(default_request, default_response){
		//index为/app/views/index.html
		this.render("index", {
			name: "John",
			age: 18
		})
	})


（2）在相应的视图模板中接收传递过来的参数

	<html>
    	<body>
        	<p>name: {{name}}</p>
        	<br/>
        	<p>age: {{age}}</p>
    	</body>
	</html>
	
	
## 传递参数给子视图

在项目中可能会出现多个视图的嵌套，例如导航栏、工具栏等这样的子视图，rapid中提供了给子视图传递参数的方法。

（1）定义子视图取名为`nav.html`，并使用`Swig`模板提供的`{% macro use() %}`语法获取传递过来的参数，例如子视图中需要用到用户的名字和年龄，这个名字和年龄需要父视图提供。

	{% macro use(name,age) %}
	
		<p>name: {{name}}</p>
		<br/>
		<p>age: {{age}}</p>
	
	{% endmacro %}
	
（2）在父视图中导入子模板，并传递相应参数给子视图

	{% import "./nav.html" as nav %}
	
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="简单可依赖的Javascript开发框架" />
		<title>rapid+ API</title>
	</head>
	<body>
		{{ nav.use("John","18") }}
	</body>
	
	</html>


## 其他

上述只是简单的介绍了视图传递参数的基本方法，更多的使用方法请查看[Swig官网](http://paularmstrong.github.io/swig/docs/)。

如果`Swig`模板不适合您，您可以使用自己喜欢的模板替换，方法如下：

在`Action`中`require`相应的模板直接使用模板即可。
	