#Extension


## 概述

Extension用来实现http功能的包装，如Session，Cookie，fileupload，Form等，每个Extension使用固定的接口形式，接收request与response，并返回一个处理包装对象。一般来说，Extension不包含业务功能，只是扩展http行为能力的一种包装，所以使用方式相对简单没有复杂配置，配置写在http.conf对象下即可，无需单独配置。


## Extension定义

除系统默认载入的Extension以外，如果需要自定义Extension，可以使用该方法添加。

	httpd.defineExtension(name,handle);

参数说明：

* name

	Extension的名称
	
	
* handle

	Extension的功能定义
	
	
实例：

	


## 使用Extension


