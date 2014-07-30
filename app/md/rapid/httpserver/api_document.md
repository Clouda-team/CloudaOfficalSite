
# rapid-httpserver API文档

## config

rapid-httpserver可以使用config来配置相应的信息。

rapid-httpserver的配置格式如下：

  	rapid.define({
      	"config.rapid-httpserver":{
    	}
  	});

rapid-httpserver包含以下配置项：

<h3 class="config">autoStart</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.send("Hello,World!");
          	}
  	});

<h3 class="config">port</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
         	autoStart : true,
          	port:8082,
          	defaultAction : function(){
              	this.send("Hello,World!");
          	}
  	});

<h3 class="config">loading_dir</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	port:8082,
          	//添加/app/actions目录下的文件
          	loading_dir: ["/app/actions"],
          	defaultAction : function(){
              	this.send("Hello,World!");
          	}
  	}});

<h3 class="config">mapping</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,

          	mapping:{
            	url:"/test",
            	doAction:function(){
              	this.send("Hello,World!");
            }
       	}
  	}});

<h3 class="config">filter</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	filter:{
            	url:"/test",
            	doFilter: "filterTest"
          	},
          	defaultAction : function(){
              this.send("Hello,World!");
          	}
  	});


## define

rapid-httpserver提供自定义`Extension`、`Filter`、`Action`的方法。

<h3 class="define">httpd.defineExtension(name,handle)</h3>

除系统默认的载入的extension以外，如果需要自定义extension，可以使用该方法添加

  	httpd.defineExtension(name,handle);

实例：

  	httpd.defineExtension(name,handle)

<h3 class="define">httpd.defineFilter(name,depends,handle)</h3>

除系统默认载入的filter以外，如果需要自定义filter，可以使用该方法添加。

  	httpd.defineFilter(name,depends,handle)

实例：

	httpd.defineFilter("testFilter",function(default_request,default_response,cookie){
		var req = default_request;
		var res = default_response;

		cookie.set("name","huangxin")
			  .set("age","17")
			  .set("company","baidu", {
			  	  expires : new Date(Date.now() + 1000000)
			  });
		//filter中需要显示的调用next()执行下一个filter
		this.next();
	});

<h3 class="define">httpd.defineAction(name,depends,handle)</h3>

除系统默认载入的Action外，如需要自定义的action，可以使用该方法添加。

  	httpd.defineAction(name,depends,handle)

实例：

  	rapid-httpserver.defineAction("index", function(){

		this.send("Hello World!");

	});


## start

<h3 class="start">httpd.start(conf)</h3>

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

<h3 class="httpvisitor">httpVisitor.getCompressType()</h3>

从请求的header中分析出客户端所支持的压缩类型，一般为gzip或deflate.

  	httpVisitor.getCompressType();

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              this.getCompressType();
          	}
  	});

<h3 class="httpvisitor">httpVisitor.getComprcessStream(pipeOnStream)</h3>

根据request支持的类型，支持对应压缩类型的stream对像。

`注意`：pipeOnStream{WriteableStream}当提供时，将直接将WriteableStream对像到返回的stream对像上，未提供时，返回不对接到任何对像上的Writeablestream对像。

  	httpVisitor.getComprcessStream(pipeOnStream);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.getComprcessStream(pipeOnStream);
          	}
  	});

<h3 class="httpvisitor">httpVisitor.parseForm(callback)</h3>

解析一般form表单的参数，即content-type = application/x-www-form-urlencoded的表单。

  	httpVisitor.parseForm(callback);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
            	//例如Form包含“name”
              	this.parseForm(function(err,content){
                	if(err){
            			this.sendError(err);
            			return;
          			}

          			this.send(content.name);
              	});
          	}
  	});

<h3 class="httpvisitor">httpVisitor.parseQuery(callback)</h3>

解析query部份的参数。

  	httpVisitor.parseQuery(callback);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
            	//例如Query包含“name”
              	this.parseQuery(function(err,content){
                	if(err){
            			this.sendError(err);
            			return;
          			}

          			this.send(content.name);
        		);
          }
  });

<h3 class="httpvisitor">httpVisitor.parseParams(callback)</h3>

一并解析query与form，如果query上存在与form中同名的参数，query上的值将被覆盖。

  	httpVisitor.parseParams(callback);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
            	//例如Query或者Form包含“name”
              	this.parseParams(function(err,content){
                	if(err){
            			this.sendError(err);
            			return;
          			}

          			this.send(content.name);
        		);
          }
  	});

<h3 class="httpvisitor">httpVisitor.setHeader(key,value)</h3>

httpResponse上setHeader的快捷方式，方法直接调用response的setHeader方法,支持key为一个map对像。

  	httpVisitor.setHeader(key,value);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.setHeader("Content-Type","text/html");
              	this.send("hello world");
          	}
  	});

<h3 class="httpvisitor">httpVisitor.setExpires(t)</h3>

设置response上的expires信息，当t为一个整数，表示从现在起向后多少秒后过期，当为字符串时，直接认为是GMT时间表示，当为Date对像直接将date对像转换为GMT格式

  	httpVisitor.setExpires(t);


实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.setExpires(300000);
              	this.send("hello world");
          	}
  	});

<h3 class="httpvisitor">httpVisitor.setMaxAge(sec)</h3>

设置response上的cache-coltrol:max-age={sec};

  	httpVisitor.setMaxAge(sec);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.setMaxAge(30000);
              	this.send("hello world");
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.setNostore()</h3>

设置response上的cache-coltrol:no-store;

  	httpVisitor.setNostore();

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.setNostore();
              	this.send("hello world");
          	}
  	});

<h3 class="httpvisitor">httpVisitor.setNoCache()</h3>

设置response上的cache-coltrol:no-cache;

  	httpVisitor.setNoCache();

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.setNoCache();
              	this.send("hello world");
          	}
  	});

<h3 class="httpvisitor">httpVisitor.sendStatus(code,msg,body)</h3>

设置一个状态响应。

  	httpVisitor.sendStatus(code,msg,body);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.sendStatus(500,"Server error","500,Server error");
          	}
  	});

<h3 class="httpvisitor">httpVisitor.render(viewname,data,opts)</h3>

渲染一个模板,viewname为模板名称,将自动在config.views_dir中指定的位置下寻找模版,如果未提供配置，默认为`/app/views`;

  	httpVisitor.render(viewname,data,opts);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
            	//渲染app/views/index.html
            	var content = this.render("index");
            	//发送到前端
            	this.send(content);
          	}
  	}});


<h3 class="httpvisitor">httpVisitor.renderStr(tplstr,data,opts)</h3>

渲染一个模板片段。

  	httpVisitor.renderStr(tplstr,data,opts);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.render(viewname,data,opts);
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.lookup(url)</h3>

根据一个url或fname的扩展名返回对应的mime类型。

  	httpVisitor.lookup(url);

实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
          	
          		// return "text/html"
              	var mimietype = this.lookup("http://www.XXX.com/index.html");
              	
              	this.send("hello world",200, mimietype);
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.forward(name,conf)</h3>

在server端重定向到指定的action处理链，这个重定向不再经过filter直接到达目标的action。

  	httpVisitor.forward(name,conf);


<h3 class="httpvisitor">httpVisitor.redirect(url,[code])</h3>

发送一个客户端重定向请求。

  	httpVisitor.redirect(url,[code]);

参数说明：

* url

  表示重定向位置

* code

  code表示返回的http状态,这里应为`301`或`302`


实例：

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.redirect("http://www.baidu.com");
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.send(content,[code],[contentType])</h3>


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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.send("Hello,World!");
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.sendContent(content,[code],[contentType])</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.sendContent("Hello,World!");
          	}
  	}});

<h3 class="httpvisitor">httpVisitor.sendFile(file,[code],[headers]);</h3>

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

  rapid.define({
      "config.rapid-httpserver":{
          autoStart : true,
          defaultAction : function(){
            //路径需要使用绝对路径
              this.sendFile(path.join(ROOT_DIR,"./conf/index.html");
          }
  }});


<h3 class="httpvisitor">httpVisitor.sendError(error,[code]);</h3>

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

  	rapid.define({
      	"config.rapid-httpserver":{
          	autoStart : true,
          	defaultAction : function(){
              	this.sendError(new Error("Server Error!"),500);
          	}
  	}});


<h3 class="httpvisitor">httpVisitor.url(selector, url);</h3>


解析url

	var path = "http://rapid:123456@www.example.com/path/index.html?query1=test&silly=willy#test=hash&chucky=cheese"


参数说明


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
                var path = this.url('path', req.url);
                this.send(path);
            }
    }});