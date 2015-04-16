var server = rapid.use("rapid-httpserver");
var http = require('http');
var util = require('util');



var the_host = rapid.config.use("base_host");
var the_port = rapid.config.use("base_port");

server.defineFilter("needRedirect",function(default_request,default_response){
    var req = default_request;
    var res = default_response;

    var visitor = this;
    if(req.headers.host == "clouda.com"){
        this.redirect("http://clouda.baidu.com"+req.url);
    }else{
        visitor.next();    
    }
    
});


//判断是否登录
server.defineFilter("isLogin",function(default_request,default_response){
    var req = default_request;
    var res = default_response;


    var visitor = this;

    var body = "";


    var opt = { 
        host: 'openapi.baidu.com', 
        port: '80',
        path: '/widget/social/login?format=json',
        method: 'GET',
        headers:{
            cookie:req.headers.cookie
        }
    };
    
    var httprequest = http.request(opt, function (res) {  
        
        res.on("data",function(data){
            body += data;
        });

        res.on("end",function(){

            // req.accountData = {};
            var obj = JSON.parse(body);

            if(obj.uid){
                req.isLogin =1;
            }else{
                req.isLogin =0;
            }
            visitor.next();
        });

    });


    httprequest.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    httprequest.end();
    
    return;
});

//判断是否为开发者
server.defineFilter("isDeveloper",function(default_request, default_response,cookie){
    var req = default_request;
    var res = default_response;

    var visitor = this;

    var opt = {
        host: the_host, 
        port: the_port,
        path: '/public/2.0/lapp/developer?method=is_register&csrf_token='+visitor.access_token+"&bduss="+cookie.get("BDUSS")+"&baiduid="+cookie.get("BAIDUID"),
        method: 'GET',
        headers:{
            cookie:req.headers.cookie
        }
    };

    var body="";
    var httprequest = http.request(opt, function (res){  
        
        res.on("data",function(data){
            body += data;
        });

        res.on("end",function(){
            var obj = JSON.parse(body);
            if(!obj.error_code){
                req.isDeveloper = 1;
            }else{
                req.isDeveloper = 0;
            }

            visitor.next();
        });

    });

    httprequest.on('error', function(e) {
        util.error('filter:isDeveloper------problem with request: ' + e.message);
    });

    httprequest.end();

});

//获取access_token
server.defineFilter("getAccessToken", function(default_request, default_response,cookie){

    var req = default_request;
    var res = default_response;


    var visitor = this;

    var opt = {
        host: the_host, 
        port: the_port,
        path: '/public/2.0/lapp/developer?method=get_access_token&bduss='+cookie.get("BDUSS")+"&baiduid="+cookie.get("BAIDUID"),
        method: 'GET',
        headers:{
            cookie:req.headers.cookie
        }
    };



    var body="";
    var httprequest = http.request(opt, function (res){  
        
        res.on("data",function(data){
            body += data;
        });

        res.on("end",function(){
            var obj = JSON.parse(body);

            if(!obj.error_code){
                visitor.access_token = obj.response_params.csrf_token;
            }else{  
                visitor.access_token = "";
            }

            visitor.next();
        });

    });

    httprequest.on('error', function(e) {
        util.error('filter:get_access_token------problem with request: ' + e.message);
    });

    httprequest.end();
        
});