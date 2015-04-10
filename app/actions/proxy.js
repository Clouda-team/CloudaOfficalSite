var server = rapid.use("rapid-httpserver");
var path = require("path");
var http = require('http');
var util = require('util');

var cache = require("../utils/cache");



var the_host = rapid.config.use("base_host");
var the_port = rapid.config.use("base_port");


server.defineAction("proxy",function(default_request,default_response,cookie){

	var req = default_request;
	var res = default_response;

	var that = this,sec;

	sec = that.url(2,req.url);

	if(!sec){that.render("404");return;}

	that.forward(sec,{
		"baiduid":cookie.get("BAIDUID"),
		"bduss":cookie.get("BDUSS")
	});
	
	//console.log(req.url+"|||||||||||||||||||||");

});

//获取用户登录状态以及信息
server.defineAction("getUserInfo", function(default_request,default_response){

	var ori_req = default_request;
	var ori_res = default_response;

	var visitor = this;

	var body = "";
	var reqHeaders = ori_req.headers;



	var opt = { 
	    host: 'openapi.baidu.com', 
	    port: '80',
	    path: '/widget/social/login?format=json',
	    method: 'GET',
	    headers:{
	    	cookie:ori_req.headers.cookie
	    }
	};
    
    var httprequest = http.request(opt, function (res) {  
       	
        res.on("data",function(data){
        	body += data;
        });

        res.on("end",function(data){
        	
        	visitor.send(body);
        	// return;
        });

    });

	//httprequest.write(body + "\n");

	httprequest.on('error', function(e) {
		console.log('problem with request: ' + e.message);
	});

	httprequest.end();
	
	return;
});

//获取accesstoken
server.defineAction('getAccessToken',function(default_request,default_response){
	var req = default_request;
	var res = default_response;
	var visitor = this;

	var opt = {
		host: the_host, 
	    port: the_port,
	    path: '/public/2.0/lapp/developer?method=get_access_token',
	    method: 'GET',
	    headers:{
	    	cookie:req.headers.cookie
	    }
	};

	var body="";
	var httprequest = http.request(opt, function (response){  
       	
        response.on("data",function(data){
        	body += data;
        });

        response.on("end",function(data){
        	
        	visitor.send(body);
        	return;
        });

    });

    httprequest.on('error', function(e) {
		util.error('get_access_token------problem with request: ' + e.message);
	});

	httprequest.end();
	
	return;

});




//获取某个账号下应用列表信息
server.defineAction("getAppList",function(default_request,default_response){

	var req = default_request;
	var res = default_response;

	var visitor = this;

	// if(!req.isDeveloper){
	// 	visitor.forward("applist");
	// 	return;
	// }
	var result = {};

	var access_token = visitor.url('?access_token',req.url);
	var page = visitor.url('?page',req.url);
	var pagesize = visitor.url('?pagesize',req.url);

	var opt = {
		host: the_host, 
	    port: the_port,
	    path: '/public/2.0/lapp/developer?method=get_app_list&csrf_token='+access_token+"&bduss="+visitor.params.bduss+"&baiduid="+visitor.params.baiduid+"&start="+page+"&limit="+pagesize,
	    method: 'GET',
	    headers:{
	    	cookie:req.headers.cookie
	    }
	};

	//  console.log("http://"+opt.host+":"+opt.port+opt.path);

	var body="";
	var httprequest = http.request(opt, function (response){  
       	
        response.on("data",function(data){
        	body += data;
        });

        response.on("end",function(data){
        	visitor.send(body);
        	return;
        });

    });

    httprequest.on('error', function(e) {
		util.error('get_app_list------problem with request: ' + e.message);
	});

	httprequest.end();
	
	return;

});



//获取某个应用的具体信息
server.defineAction("getAppInfo",function(default_request,default_response){

	var req = default_request;
	var res = default_response;

	var visitor = this;

	var access_token = visitor.url('?access_token',req.url);
	var app_id = visitor.url('?app_id',req.url);

	var opt = {
		host: the_host,
	    port: the_port,
	    path: '/public/2.0/lapp/developer?method=get_app_info&csrf_token='+access_token+"&app_id="+app_id+"&bduss="+visitor.params.bduss+"&baiduid="+visitor.params.baiduid,
	    method: 'GET',
	    headers:{
	    	cookie:req.headers.cookie
	    }
	};

		// console.log("http://"+opt.host+":"+opt.port+opt.path);

	var body="";
	var httprequest = http.request(opt, function (response){  
       	
        response.on("data",function(data){
        	body += data;
        });

        response.on("end",function(data){
        	
        	visitor.send(body);

        });

    });

    httprequest.on('error', function(e) {
		util.error('get_app_info------problem with request: ' + e.message);
	});

	httprequest.end();

});

//注册和注销runtime
server.defineAction("regRuntime",function(default_request,default_response){

	var req = default_request;
	var res = default_response;

	var visitor = this;

	var access_token = visitor.url('?access_token',req.url);
	var app_id = visitor.url('?app_id',req.url);
	var method = visitor.url('?method',req.url);

	

	var opt = {
		host: the_host,
	    port: the_port,
	    path: '/public/2.0/lapp/runtime?method='+method+'&csrf_token='+access_token+"&app_id="+app_id+"&bduss="+visitor.params.bduss+"&baiduid="+visitor.params.baiduid,
	    method: 'GET',
	    headers:{
	    	cookie:req.headers.cookie
	    }
	};


	// console.log("http://"+opt.host+":8082/"+opt.path);

	var body="";
	var httprequest = http.request(opt, function (response){  
       	
        response.on("data",function(data){
        	body += data;
        	console.log(body);
        });

        response.on("end",function(data){
        	visitor.send(body);
        });

    });

    httprequest.on('error', function(e) {
		util.error('reg_runtime------problem with request: ' + e.message);
	});

	httprequest.end();


});