#Extension


## 概述

Extension用来实现http功能的包装，如Session，Cookie，fileupload，Form等，每个Extension使用固定的接口形式，接收request与response，并返回一个处理包装对象。一般来说，Extension不包含业务功能，只是扩展http行为能力的一种包装，所以使用方式相对简单没有复杂配置，配置写在http.conf对象下即可，无需单独配置。


## 定义Extension

除系统默认载入的Extension以外，如果需要自定义Extension，可以使用该方法添加。

	httpd.defineExtension(name,handle);

参数说明：

* name

	Extension的名称
	
	
* handle

	Extension的功能定义
	

## 使用Extension

定义好Extension后，就可以在定义Filter和Action中使用，例如我们定义了一个名为“Cookies”的Extension，即可在Filter或者Action使用，方法如下：

	httpd.defineFilter("testFilter",["cookies"],function(cookie){

		cookie.set("name","huangxin")
			  .set("age","17")
			  .set("company","baidu", {
			  	  expires : new Date(Date.now() + 1000000)
			  });
		//filter中需要显示的调用next()执行下一个filter
		this.next();
	});

或者

	httpd.defineAction("testAction",["cookies"],function(cookie){
	
		cookie.set("name","John")
			  .set("age","17")
			  .set("company","baidu", {
			  	  expires : new Date(Date.now() + 1000000)
			  });
		this.send("set cookie done!");
	});
	
	
## 内置API

为了方便开发者更好更快速的开发应用，我们在Extension中提供了内置的API，包括：cookie、session、url三部分，现在将详细介绍这些API的用法。

### cookie

设置Cookie, 如果没有相关key值，则创建一个key-value cookie。

	Cookie.set(key, value [, options])
	
参数说明：

- *key*

	{String} cookie key 
	 
- *value* 

	{String} cookie value 
	 
- *options*: 

	{Object} Cookie相关参数，详细说明见下表： 
	
<table>
    <tbody>
        <tr>
            <th>key</th>
            <th>value</th>
            <th>默认值</th>
        </tr>
        <tr>
          <th>expires</th>
          <td>{Object} date</td>
          <td>浏览器差窗口关闭即过期</td> 
        </tr>
        <tr>
          <th>domain</th>
          <td>{String} 在特定域名下才能收到cookie</td>
          <td>当前域名</td> 
        </tr>
        <tr>
          <th>path</th>
          <td>{String} 为特定路径指定cookie</td>
          <td>当前路径</td> 
        </tr>
        <tr>
          <th>secure</th>
          <td>{Boolean} 指定是否只在`https`下生效</td>
          <td>默认值false</td> 
        </tr>
   <tbody>
</table> 
	

	
返回说明：

返回`Cookies`对象，支持链式操作。


实例：

	cookie.set("name","John");
	
	
### session

对session的操作

#### session.set(key,value)

设置session

	session.set(key,value);
	
#### session.getId()

获取session的ID

	session.getId()
	
#### session.get(key)

获取session中key对应的value

	session.get(key);
	
#### session.getStartTime()

获取session开始时间

	session.getStartTime()
	
#### session.getLastActiveTime()

获取session的最后存在时间

	session.getLastActiveTime()
	
#### session.isTimeout()

判断session时候超时

	session.isTimeout()

	
	
### url

解析URL

例如URL为：

	var path = http://rapid:123456@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
	
可使用下面的方法来解析URL

	this.url(path);            // http://rapid:123456@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese
	this.url('domain', path);    // example.com
	this.url('hostname', path);  // www.example.com
	this.url('sub', path);       // www
	this.url('.0', path)         // ""(an empty string)
	this.url('.1', path)         // www
	this.url('.2', path)         // example
	this.url('.-1', path)        // com
	this.url('auth', path)       // rapid:123456
	this.url('user', path)       // rapid
	this.url('pass', path)       // 123456
	this.url('port', path);      // 80
	this.url('protocol', path);  // http
	this.url('path', path);      // /path/index.html
	this.url('file', path);      // index.html
	this.url('filename', path);  // index
	this.url('fileext', path);   // html
	this.url('1', path);         // path
	this.url('2', path);         // index.html
	this.url('3', path);         // (an empty string)
	this.url('-1', path);        // index.html
	this.url(1, path);           // path
	this.url(2, path);           // index.html
	this.url(-1, path);          // index.html
	this.url('?', path);         // query1=test&silly=willy
	this.url('?silly', path);    // willy
	this.url('?poo', path);      // null
	this.url('#', path);         // test=hash&chucky=cheese
	this.url('#chucky', path);   // cheese
	this.url('#poo', path);      // null

实例：

    rapid.define({
        "config.rapid-httpserver":{
            autoStart : true,
            defaultAction : function(){
            	var req = this.request;
                var path = this.url('path', req.url);
                this.send(path);
            }
    }});
