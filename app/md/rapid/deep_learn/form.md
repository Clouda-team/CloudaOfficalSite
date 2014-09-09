#表单处理

Rapid框架中提供很简单的方法直接处理表单，方法如下：

（1）定义视图并指定请求的路径


	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>test form</title>
		</head>
		<body>
			<form action="/testForm">
    			<input name="name"  type="text">
    			<input name="age" type="number" min="1" max="100" value="1">
    
    			<input type="submit" value="提交" >
			</form>
		</body>
	</html>
	
（2）配置路由


	define("config.rapid-httpserver",{
		autoStart:true,
		mapping:[{
			url:"/testForm",
			doAction:"testForm"
		}]
		
	});
	
（3）定义Action处理表格

	rapid-httpserver.defineAction("index", function(default_request, default_response){
    	var req = default_request;
    	var res = default_response;
    	
    	this.parseForm(function(err,content){
    	
    		if(err){
	 			this.sendError(err);
	 			return;
	 		}
	 		if(content.name){
	 			// dosomething..
	 		}  	
    	})
	});
	