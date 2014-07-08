var server = use("clouda-httpserver");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md";


server.defineAction("runtime", function(default_request, default_response){

	var req = default_request;
	var res = default_response;
	var visitor = this;

	var sep = this.url("seppath", req.url);
	var proj = sep[0] || "";
	var doc = (sep[1] || "portal") + ".md";

	var mdpath = path.join(USER_DIR, mddir, proj, doc);

	var cached = cache.get(mdpath);
	if(cached){
		visitor.send(cached);
		return;
	}

	fs.stat(mdpath, function(err, stat){

		if(err){
			visitor.redirect("/404");
			return ;
		}

		var md = fs.readFileSync(mdpath).toString();

		var content = visitor.render("api", {
			proj : proj,
			doc : doc,
			ctnt : marked(md)
		}, {
			autoescape : false
		});
		cache.add(mdpath, content);
		visitor.send(content);
		return ;

	});

	
	
});