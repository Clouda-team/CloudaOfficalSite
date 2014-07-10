#clouda-httpserver


## 概述

clouda-httpserver是Clouda+ Framework中实现http server功能的插件。


## 配置

clouda-httpserver可以使用config来配置相应的信息。

clouda-httpserver的配置格式如下：

	define({
    	"config.clouda-httpserver":{
		}
	});

clouda-httpserver包含以下配置项：

### autoStart

通过该项设置是否自行启动。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>值</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th rowspan=2>Boolean</th>
       		<th>true</th> <td>表示依据配置自行启动</td></tr>
   	   		<tr><th>false</th> <td>表示需要通过httpd.start启动</td></tr>
   	    </tr>    
   <tbody>
</table>

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
	});

### port

通过该项配置访问的端口。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>Number</th>
       		<td>httpd的运行端口，默认值8080</tr>
   	    </tr>    
   <tbody>
</table>

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	port:8082,
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
	});

### loading_dir

通过该项添加载入的资源。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>[string,string...]</th>
       		<td>每项内容为一个目录的名称，启动时将载入目录下所有.js文件。</tr>
   	    </tr>    
   <tbody>
</table>

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	port:8082,
        	//添加/app/actions目录下的文件
        	loading_dir: ["/app/actions"],
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
	});	

#### mapping

配置访问Action的路由。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>[object,object....]</th>
       		<td>其用于配置url与action的映射关系及filter的执行。每个object为一个配置对像。</tr>
   	    </tr>    
   </tbody>
</table>

配置对象如下表：

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>url</th>
        	<td>string</td>
       		<td>目标url，可以为一个正则对像或一个包含*号的字符串对像。</tr>
   	    </tr> 
   	    <tr>
        	<th>doAction</th>
        	<td>string或者function</td>
       		<td>所执行的action名称或handle。</tr>
   	    </tr>   
   	    <tr>
        	<th>params</th>
        	<td>object</td>
       		<td>执行当前action的配置参数。<br/><br/> 实例：<br/>params:{
        			key1:value1,
        			.....
    			}
   	    </tr>  
   	    <tr>
        	<th>http_status</th>
        	<td>object</td>
       		<td>返回一个http状态，等价于doAction:"http_status"<br/><br/>实例：<br/> {code:number, msg:"xxxx", body:"xxxxxx"}。</tr>
   	    </tr>
   	    <tr>
        	<th>resource</th>
        	<td>string</td>
       		<td>返回静态资源，值可以为一个目录直接是一个文件名，等价于doAction:"resource"。</tr>
   	    </tr>  
   	    <tr>
        	<th>redirect</th>
        	<td>string</td>
       		<td>返回重定向，等价于doAction:"redirect"。</tr>
   	    </tr>
   </tbody>
</table>

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
     
        	mapping:{
        		url:"/test",
        		doAction:function(){
        			this.send("Hello,World!");
        		}
        	}
	});	
	
#### filter

配置Filter的路由。

<table>
    <tbody>
        <tr>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>[object,object....]</th>
       		<td>每一项表示一个被执行的过滤器Filter的对象</tr>
   	    </tr>    
   </tbody>
</table>

每一个object的配置信息见下表：


<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>url</th>
        	<td>string</td>
       		<td>url限制仅在匹配的情况下执行过滤器，如果需要配置非(not)操作,请使用正则对像。</tr>
   	    </tr> 
   	    <tr>
        	<th>doFilter</th>
        	<td>string</td>
       		<td>将执行filter的名称。</tr>
   	    </tr>   
   	    <tr>
        	<th>params</th>
        	<td>object</td>
       		<td>执行当前filter的配置参数。<br/><br/> 实例：<br/>params:{
        			key1:value1,
        			.....
    			}
   	    </tr>  
   </tbody>
</table>

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	filter:{
        		url:"/test",
        		doFilter: "filterTest"
        	},
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}
	});
	
	
## 定义

clouda-httpserver提供自定义`Extension`、`Filter`、`Action`的方法。

### httpd.defineExtension(name,handle)

除系统默认的载入的extension以外，如果需要自定义extension，可以使用该方法添加

	httpd.defineExtension(name,handle);

实例：
	
	httpd.defineExtension(name,handle)
	
### httpd.defineFilter(name,depends,handle)

除系统默认载入的filter以外，如果需要自定义filter，可以使用该方法添加。

	httpd.defineFilter(name,depends,handle)

实例：

### httpd.defineAction(name,depends,handle)

除系统默认载入的Action外，如需要自定义的action，可以使用该方法添加。

	httpd.defineAction(name,depends,handle)

实例：

	httpd.defineAction("hello",function(){
		content = "Hello, World!";
		this.sendContent(content);
	})


## 手动启动

### httpd.start(conf)

启动httpd服务，conf是配置对像，如果提供将与已有配置合并，如果服务已启动，则忽略执行

	httpd.start(conf);
	
实例：

	httpd.start({
		autoStart : false,
		port: 8082,
        defaultAction : function(){
            this.send("Hello,World!");
        }
	});

## httpVisitor

httpVisitor表示每个请求的上下文对像，<font color=red>在使用框架的过程中将自动被注入action与filter的this对像</font>，并提供以下方法。

### httpVisitor.getComprcessType()

从请求的header中分析出客户端所支持的压缩类型，一般为gzip或deflate.

	httpVisitor.getComprcessType();
	
实例：
	
	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.getComprcessType();
        	}       	
	});

### httpVisitor.getComprcessStream(pipeOnStream)

根据request支持的类型，支持对应压缩类型的stream对像。

`注意`：pipeOnStream{WriteableStream}当提供时，将直接将WriteableStream对像到返回的stream对像上，未提供时，返回不对接到任何对像上的Writeablestream对像。

	httpVisitor.getComprcessStream(pipeOnStream);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.getComprcessStream(pipeOnStream);
        	}       	
	});

### httpVisitor.parseForm(callback)

解析一般form表单的参数，即content-type = application/x-www-form-urlencoded的表单。

	httpVisitor.parseForm(callback);
	
实例：
	
	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
        		//例如Form包含“name”
            	this.parseForm(function(err,content){
            		if(err){
	 					me.sendError(err);
	 					return;
	 				}
	 				
	 				this.send(content.name);
            	});
        	}       	
	});

### httpVisitor.parseQuery(callback)

解析query部份的参数。

	httpVisitor.parseQuery(callback);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
        		//例如Query包含“name”
            	this.parseQuery(function(err,content){
            		if(err){
	 					me.sendError(err);
	 					return;
	 				}
	 				
	 				this.send(content.name);
	 			);
        	}       	
	});

### httpVisitor.parseParams(callback)

一并解析query与form，如果query上存在与form中同名的参数，query上的值将被覆盖。

	httpVisitor.parseParams(callback);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
        		//例如Query或者Form包含“name”
            	this.parseParams(function(err,content){
            		if(err){
	 					me.sendError(err);
	 					return;
	 				}
	 				
	 				this.send(content.name);
	 			);
        	}       	
	});

### httpVisitor.setHeader(key,value)

httpResponse上setHeader的快捷方式，方法直接调用response的setHeader方法,支持key为一个map对像。

	httpVisitor.setHeader(key,value);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.setHeader("Content-Type","text/html");
        	}       	
	});

### httpVisitor.setExpires(t)

设置response上的expires信息，当t为一个整数，表示从现在起向后多少秒后过期，当为字符串时，直接认为是GMT时间表示，当为Date对像直接将date对像转换为GMT格式

	httpVisitor.setExpires(t);

	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.setExpires(300000);
        	}       	
	});

### httpVisitor.setMaxAge(sec)

设置response上的cache-coltrol:max-age={sec};

	httpVisitor.setMaxAge(sec);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.setMaxAge(30000);
        	}       	
	});	

### httpVisitor.setNostore()

设置response上的cache-coltrol:no-store;

	httpVisitor.setNostore();
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.setNostore();
        	}       	
	});

### httpVisitor.setNoCache()

设置response上的cache-coltrol:no-cache;

	httpVisitor.setNoCache();
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.setNoCache();
        	}       	
	});

### httpVisitor.sendStatus(code,msg,body)

设置一个状态响应。

	httpVisitor.sendStatus(code,msg,body);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.sendStatus(500,"Server error","500,Server error");
        	}       	
	});

### httpVisitor.render(viewname,data,opts)

渲染一个模板,viewname为模板名称,将自动在config.views_dir中指定的位置下寻找模版,如果未提供配置，默认为`/app/views`;

	httpVisitor.render(viewname,data,opts);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
        		//渲染app/views/index.html
				    var content = this.render("index");
				    //发送到前端
				    this.send(content);
        	}       	
	});	


### httpVisitor.renderStr(tplstr,data,opts)

渲染一个模板片段。

	httpVisitor.renderStr(tplstr,data,opts);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.render(viewname,data,opts);
        	}       	
	});	

### httpVisitor.lookup(url)

根据一个url或fname的扩展名返回对应的mime类型。

	httpVisitor.lookup(url);
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.lookup("http://www.XXX.com");
        	}       	
	});	

### httpVisitor.forward(name,conf)

在server端重定向到指定的action处理链，这个重定向不再经过filter直接到达目标的action。

	httpVisitor.forward(name,conf);

	
### httpVisitor.redirect(url,[code])

发送一个客户端重定向请求。

	httpVisitor.redirect(url,[code]);
	
参数说明：
	
* url
	
	表示重定向位置
	
* code

	code表示返回的http状态,这里应为`301`或`302`

		
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.redirect("http://www.baidu.com");
        	}       	
	});			

### httpVisitor.send(content,[code],[contentType])


发送一段内容到客户端。

	httpVisitor.send(content,[code],[contentType])
	
参数说明：

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>content</th>
       		<td>发送的内容，类型：string 或者 buffer</td>
   	    </tr>   
   	    <tr>
        	<th>code</th>
       		<td>http状态码，默认为：200</td>
   	    </tr> 
   	    <tr>
        	<th>contentType</th>
       		<td>默认为: {"content-type":"text/html"}</td>
   	    </tr>  
   </tbody>
</table>


实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.send("Hello,World!");
        	}       	
	});	
	
### httpVisitor.sendContent(content,[code],[contentType])

发送一段内容到客户端。

	httpVisitor.sendContent(content,[code],[contentType]);
	
参数说明：

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>content</th>
       		<td>发送的内容，类型：string 或者 buffer</td>
   	    </tr>   
   	    <tr>
        	<th>code</th>
       		<td>http状态码，默认为：200</td>
   	    </tr> 
   	    <tr>
        	<th>contentType</th>
       		<td>默认为: {"content-type":"text/html"}</td>
   	    </tr>  
   </tbody>
</table>
	
实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.sendContent("Hello,World!");
        	}       	
	});	

### httpVisitor.sendFile(file,[code],[headers]);

发送一个文件到客户端。

	httpVisitor.sendFile(file,[code],[headers]);

参数说明：

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>file</th>
       		<td>将发送的文件的名称或file对像产生的readableStream，如果是buffer，请使用sendContent方法，文件的路径为绝对路径，类型：string 或者 readableStream</td>
   	    </tr>   
   	    <tr>
        	<th>code</th>
       		<td>http状态码，默认为：200</td>
   	    </tr> 
   	    <tr>
        	<th>headers</th>
       		<td>默认为: {"content-type":"text/html"}</td>
   	    </tr>  
   </tbody>
</table>

实例：

	var path = require("path");

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
        		//路径需要使用绝对路径
            	this.sendFile(path.join(ROOT_DIR,"./conf/index.html");
        	}       	
	});		
	

### httpVisitor.sendError(error,[code]);

发送一个错误信息到前端

	httpVisitor.sendError(error,[code]);
	
参数说明

<table>
    <tbody>
        <tr>
            <th>参数</th>
            <th>说明</th>
        </tr>
        <tr>
        	<th>error</th>
       		<td>错误对象</td>
   	    </tr>   
   	    <tr>
        	<th>code</th>
       		<td>http状态码</td>
   	    </tr> 
   </tbody>
</table>
	

实例：

	define({
    	"config.clouda-httpserver":{
        	autoStart : true,
        	defaultAction : function(){
            	this.sendError(new Error("Server Error!"),500);
        	}       	
	});	
