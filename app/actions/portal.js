var server = rapid.use("rapid-httpserver");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md";

server.defineAction("portal", function(){

	var visitor = this;
	var ctnt = this.render("portal");

	this.send(ctnt);
	
});