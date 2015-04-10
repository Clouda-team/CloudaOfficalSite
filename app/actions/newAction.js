var server = rapid.use("rapid-httpserver");
var path = require("path");
var http = require('http');
var util = require('util');

var cache = require("../utils/cache");

var the_host = rapid.config.use("base_host");
var the_port = rapid.config.use("base_port");

server.defineAction('index', function(default_request,default_response){
	
	var req = default_request;
	var res = default_response;


	var content = this.render("new/index");

	this.send(content);

});

server.defineAction('applist', function(default_request,default_response){
	
	var req = default_request;
	var res = default_response;

	var visitor = this;

	var content = this.render("new/applist",{access_token:visitor.access_token,isDeveloper:req.isDeveloper,isLogin:req.isLogin});
	this.send(content);

});


server.defineAction('appinfo',function(default_request,default_response,cookie){

	var req = default_request;
	var res = default_response;

	var visitor = this;
	var app_id = visitor.url("?app_id",req.url);
	var access_token = visitor.access_token;

	var opt = {
		host: the_host, 
	    port: the_port,
	    path: '/public/2.0/lapp/developer?method=get_app_info&csrf_token='+access_token+"&app_id="+app_id+"&bduss="+cookie.get("BDUSS")+"&baiduid="+cookie.get("BAIDUID"),
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
        	var obj = JSON.parse(body);
        	var appinfo;

        	if(!obj.error_code){
        		appinfo = obj.response_params;
        	}else{
        		appinfo = null;
        	}

        	var content = visitor.render("new/appinfo",{access_token:visitor.access_token,app_id:app_id,isDeveloper:req.isDeveloper,isLogin:req.isLogin,appinfo:appinfo});

        	visitor.send(content);
        });

    });

    httprequest.on('error', function(e) {
		util.error('get_app_info------problem with request: ' + e.message);
	});

	httprequest.end();


});

server.defineAction('sample',function(default_request,default_response){
	var req = default_request;
	var res = default_response;

	var cnt = this.render("new/sample",{
		page:"sample"
	});
	this.send(cnt);
});


server.defineAction('noIE',function(default_request,default_response){
	var req = default_request;
	var res = default_response;

	var cnt = this.render("new/noIE");
	this.send(cnt);
});


