# CSRF

RapidJS提供便捷的方法来避免应用程序受到跨站伪造请求(CSRF)的攻击。


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

处理后的数据会随机生成一个`CSRF Token`，分别分发至前后端。


## 前端使用CSRFToken

下面是前端发送请求

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

CSRF默认从三个地方验证token：

1. Query中key为csrfToken的字段；  
2. 请求头部的`x-csrf-token`或者`x-xsrf-token`字段；  
3. 请求body中key为csrfToken的字段。

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

