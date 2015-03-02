var server = rapid.use("rapid-httpserver");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md";

server.defineAction("portal", function(default_request,default_response){
	var req = default_request;
	var res = default_response;

	
	var visitor = this;

	var ctnt = this.render("new/portal");

	this.send(ctnt);
	
});