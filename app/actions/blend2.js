var server = rapid.use("rapid-httpserver");
var path = require("path");
var marked = require("marked");
var fs = require("fs");
var cache = require("../utils/cache");
var mddir = "md/blend2/";

//markdown 路径
var mdpath = path.join(__dirname,"../","md");

server.defineAction('blend2',function(default_request, default_response){


	var req = default_request;
	var res = default_response;
	var visitor = this;
	var sep = this.url("seppath", req.url);
	var proj = sep[0];
	var mod = sep[1];

	if(mod === 'start' || mod === 'docs'){
		var mdPath = sep.slice(1).join('/');
		if(sep[sep.length-1] === mod){
			mdPath += '/index.md';
		}
		else if(mdPath.lastIndexOf('.md') !== mdPath.length-3){
			mdPath += '.md';
		}

		mdpath = path.join(USER_DIR, mddir, mdPath);

		fs.stat(mdpath, function(err, stat){
			if(err){
				visitor.redirect("/404");
				return ;
			}

			var md = fs.readFileSync(mdpath).toString();
			var cached = cache.get(mdpath);
			var html = false ? cached : marked(md);

			var content = visitor.render("blend2/" + mod, {
				cnt : html,
				page: mod
			}, {
				autoescape : false
			});
			cache.add(mdpath, html);
			visitor.send(content);
			return ;
		});
	}
	else {
		var content = this.render("blend2/index",{
			page: "index"
		});
		visitor.send(content);
		return;
	}


});


