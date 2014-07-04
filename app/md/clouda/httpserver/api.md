##APIs Document

###属性

###方法

####httpd.defineExtension(name,depends,handle);
除系统默认的载入的extension以外，如果需要自定义extension，则需要以这个方式添加
####httpd.defineFilter(name,depends,handle);
除系统默认载入的filter以外，如果需要自定义filter，则需要以这种方式添加。
####httpd.defineAction(name,depends,handle);
除系统默认载入的Action外，如需要自定义的action，则需要以这种方式添加。

####httpd.start(conf);
启动httpd服务，conf是配置对像，如果提供将与已有配置合并，如果服务已启动，则忽略执行

####httpd.getRealServer();
**!!important:直接操作这个对像可能导至不可预知的后果，如原有的router失效等**

***!!Note:这个方法为一些特殊插件的实现预留,如sockjs需要直接使用httpserver对像,并替换listner上的事件.大部份情况,不应该使用(谨慎使用)这个方法的返回对像.***

取得实际工作中的原始httpserver对像; 

----

### httpVisitor
>httpVisitor表示每个请求的上下文对像,在使用框架的过程中将自动被注入action与filter的this对像,并提供以下一些个方法,属于在http端常见的操作用于服务端重定向,客户端重定向,返回错误消息等,其中几个是包装了默认action中的处理. 

###httpVisitor.getComprcessType();
从请求的header中分析出客户端所支持的压缩类型.一般为gzip或deflate.

###httpVisitor.getComprcessStream(pipeOnStream);
根据request支持的类型,支持对应压缩类型的stream对像.pipeOnStream {WriteableStream} 当提供时,将直接将WriteableStream对像到返回的stream对像上,未提供时,返回不对接到任何对像上的Writeablestream对像.

###httpVisitor.parseForm(callback);
解析一般form表单的参数, 即content-type = application/x-www-form-urlencoded的表单.

###httpVisitor.parseQuery(callback);
解析query部份的参数.

###httpVisitor.parseParams(callback);
一并解析query与form,如果query上存在与form中同名的参数. query上的值将被覆盖.

###httpVisitor.setHeader(key,value);
httpResponse上setHeader的快捷方式.方法直接调用response的setHeader方法,支持key为一个map对像.

###httpVisitor.setExpires(t);
设置response上的expires信息, 当t为一个整数,表示从现在起向后多少秒后过期,当为字符串时,直接认为是GMT时间表示,当为Date对像直接将date对像转换为GMT格式

###httpVisitor.setMaxAge(sec);
设置response上的cache-coltrol:max-age={sec};

###httpVisitor.setNostore();
设置response上的cache-coltrol:no-store;

###httpVisitor.setNoCache();
设置response上的cache-coltrol:no-cache;

###httpVisitor.sendStatus(code,msg,body);
设置一个状态响应.

###httpVisitor.render(viewname,data,opts);
渲染一个模板,viewname为模板名称,将自动在config.views_dir中指定的位置下寻找模版,如果未提供配置.默认为/app/views;

###httpVisitor.renderStr(tplstr,data,opts);
渲染一个模板片段.

###httpVisitor.lookup(url);
根据一个url或fname的扩展名返回对应的mime类型.

###httpVisitor.forward(name,conf);
在server端重定向到指定的action处理链,这个重定向不再经过filter直指到达目标的action(***争议:目标action中可能需要过滤器的处理操作,但是反复经过过滤器链又有可能造成重复操作或被filter中的部份处理造成影响.考虑这些问题,不处理比重复处理或影响已有处理可能造成更坏的后果,所以暂定为不经过filter链,直接抵达action***)

###httpVisitor.redirect(url,[code]);
发送一个客户端重定向请求,url表示重定向位置,code表示返回的http状态,这里应为 301或302;

###httpVisitor.send(content,[code],[contentType])
###httpVisitor.sendContent(content,[code],[contentType]);
发送一段内容到客户端, 
content {string|buffer} , html的content内容
code {number}, http状态码, 默认为 200
header {map}, 需要附加的httpd头. 默认为: {"content-type":"text/html"}
res {ServerResponse} 将响应的response对像

###httpVisitor.sendFile(file,[code],[headers]);
发送一个文件到客户端,
file {string|file} , 将发送的文件的名称或file对像产生的readableStream,如果已得以buffer,请使用sendContent方法;
code {number}, http状态码, 默认为 200
header {map}, 需要附加的httpd头. 默认为: {"content-type":"text/html"}
res {ServerResponse} 将响应的response对像

###httpVisitor.sendError(error,[code]);
发送一个错误信息到前端
error 错误对像,
code http status code
