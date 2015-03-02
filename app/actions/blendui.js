var server = rapid.use("rapid-httpserver");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md";

server.defineAction("blendui", function(default_request, default_response){

	var req = default_request;
	var res = default_response;
	var visitor = this;

	var sep = this.url("seppath", req.url);
	var proj = sep[0];
	var mod = sep[1];
	var doc = sep[2];

	var mdpath = path.join(USER_DIR, mddir, proj, mod, doc + ".md");

	fs.stat(mdpath, function(err, stat){

		if(err){
			visitor.redirect("/404");
			return ;
		}

		var md = fs.readFileSync(mdpath).toString();
		var cached = cache.get(mdpath);
		var html = cached ? cached : marked(md);

		var content = visitor.render("new/doc", {
			proj : proj,
			doc : doc,
			mod : mod,
			ctnt : html
		}, {
			autoescape : false
		});
		cache.add(mdpath, html);
		visitor.send(content);
		return ;

	});

	
	
});