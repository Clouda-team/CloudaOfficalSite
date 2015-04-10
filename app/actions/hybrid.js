var server = rapid.use("rapid-httpserver");

server.defineAction("hybrid", function(){

	this.redirect("http://hybrid.baidu.com/blendui");
	
});