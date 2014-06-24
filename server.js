var http = require('http');
var parse = require('url').parse;
var xpath = require('path');
var join = xpath.join;
var fs = require('fs');
var mime = require('./mime').mime;
var root = __dirname;

var port = 18080;

var server = http.createServer(function(req, res) {
    var url = parse(req.url);

    var path = join(root, url.pathname);

	if(url.pathname === "/"){
		path = join(root, "/index.html");
	}else if(url.pathname === "/detail"){
		path = join(root, "/detail.html");
	}else if(url.pathname === "/about"){
		path = join(root, "/about.html");
	}
    
	if(url.pathname.indexOf("/v") === 0){

		var p = url.pathname.slice(3).toLowerCase();
		res.writeHead(200,{
			"Content-Type" : "application/json"
		});
		if(libs[p]){
			res.end(JSON.stringify(libs[p]));
		}else{
			res.end(JSON.stringify({err:"not found"}));
		}

	} else {
		fs.stat(path, function(err, stat) {

			if(!stat) {
				res.statusCode = 404;
				res.end('Not found!\n');
				return;
			}
			var lastModified = stat.mtime.toUTCString();
			var ifModifiedSince = "If-Modified-Since".toLowerCase();
			res.setHeader("Last-Modified", lastModified);

			if(err) {
				if('ENOENT' == err.code ) {
					res.statusCode = 404;
					res.end('Not found!\n');
				} else {
					res.statusCode = 500;
					res.end('Internal Servers Errors!');
				}
			} else {

				var ext = xpath.extname(path);
				if (req.headers[ifModifiedSince] && lastModified == req.headers[ifModifiedSince]) {
                    res.writeHead(304, "Not Modified");
                    res.end();
                } else {
					var expires = new Date();
					expires.setTime(expires.getTime() + 265000, 1000);

					res.setHeader("Expires", expires.toUTCString());
					res.setHeader("Cache-Control", "max-age=" + 265000);

					res.writeHead(200, {
						'Content-Type': mime.lookupExtension(ext),
						'Content-Length' : stat.size
					});

					var stream = fs.createReadStream(path);
					stream.pipe(res);

					stream.on('error', function(err) {
						res.statusCode = 500;
						res.end('Internal Server Errors YO!\n');
						console.log(err);
					});				
				}

			}
		});
	}

});

server.listen(port);