var server = rapid.use("rapid-httpserver");

server.defineAction("api-product", function(){

	var ctnt = this.render("api-product");

	this.send(ctnt);
	
});