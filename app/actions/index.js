var server = rapid.use("rapid-httpserver");

server.defineAction("index", function(default_request, default_response){

	var req = default_request;
	var res = default_response;

	var content = this.render("index");

	this.send(content);
	
});