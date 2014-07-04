var server = use("clouda-httpserver");
var url = require("url");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md";

server.defineAction("clouda", function(default_request, default_response){

	var req = default_request;
	var res = default_response;
	var visitor = this;

	var sep = this.url("seppath", req.url);
	var proj = sep[0] || "";
	var mod = sep[1] || "core";
	var doc = (sep[2] || "portal") + ".md";

	var mdpath = path.join(USER_DIR, mddir, proj, mod, doc);
	var cached = cache.get(mdpath);

	if(cached){
		visitor.send(cached);
		return;
	}

	fs.stat(mdpath, function(err, stat){

		if(err){
			visitor.redirect("/404/");
			return ;
		}

		var md = fs.readFileSync(mdpath).toString();

		var mdparsed = marked(md);

		var content = visitor.render("api", {
			proj : proj,
			mod : mod,
			doc : doc,
			ctnt : mdparsed
		}, {
			autoescape : false
		});

		cache.add(mdpath, content);
		visitor.send(content);
		return ;

	});
	
});