# CSRF

> CSRF（Cross-site request forgery跨站请求伪造，也被称为 "one click attack" 或者 "session riding"，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。CSRF通过伪装来自受信任用户的请求来利用受信任的网站。

CSRF模块支持所有模板语言，此处以默认的Swig模板语言规范为例。


## 对数据进行CSRF处理

	var app = rapid.use('rapid-httpserver');
	
	//1.使用csrf extension
	app.defineAction('index', function(csrf){

		var req = this.request;
		var res = this.response;

		var data = {
			name : "hx",
		}
		
		//2.csrf(data)对数据进行CSRF处理
		var content = this.render('index', csrf(data));
		this.send(content);

	});

处理后的数据会随机生成一个CSRF Token，分别分发至前后端。


## 前端使用CSRFToken

CSRF默认从3个地方验证token：

1. Query中key为csrfToken的字段；  
2. 请求头部的`x-csrf-token`或者`x-xsrf-token`字段；  
3. 请求body中key为csrfToken的字段。

下面是个各种方式的简要说明:

##### 提交FORM

	<input type="hidden" name="csrfToken" value="{{ csrfToken }}">

在前端提交form表单时，添加一个隐藏的`input`，`name`字段值为`csrfToken`。  
	
##### AJAX Request Header
	
	//value来源于csrf(data)
	var xhr = new XMLHttpRequest();
	xhr.setRequestHeader('x-csrf-token', value);
	
##### AJAX Query
	
	//value来源于csrf(data)
	var xhr = new XMLHttpRequest();
	xhr.open("POST","/form?csrfToken=value",true);

CSRF在前端模板中变量名固定为`csrfToken`，绑定在模板的全局变量中。


## 添加validateCSRF Filter

`validateCSRF`是`rapid-httpserver`提供的默认filter，filter在用户action之前对token进行验证。

	rapid.config.define({

		"rapid-httpserver" : {

			autoStart : true,

			loading_dir : ["/app/actions/"],

			port : 18080,

			filter : [{
				url : /^\/form/,
				doFilter : "validateCSRF"
			}],

			mapping : [{
				url : /^\/form/,
				doAction : "form"
			},{
				url : /^\/$/,
				doAction : "index"
			}],

			defaultAction : "index"
			
		}

	});
	
验证成功后，执行用户逻辑，执行相关的Action。

