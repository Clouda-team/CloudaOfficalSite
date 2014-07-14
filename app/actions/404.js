var server = rapid.use("rapid-httpserver");

server.defineAction("404", function(default_request, default_response){
	
	var content = this.render("404");

	this.send(content, 404);

	return ;

});