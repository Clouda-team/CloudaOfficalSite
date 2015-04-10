var server = rapid.use("rapid-httpserver");
var https = require("https");
var fetchInterval = 3 * 60 * 60 * 1000;

var github = {
	stars : 0,
	forks : 0
};

function fetchGithubStars (org){

	var opts = {
		hostname : "api.github.com",
		path : "/orgs/" + org + "/repos",
		headers : {
			"User-Agent" : "CloudaTeam"
		}
	}

	var req = https.request(opts, function(res){
		var data = "";
		res.on('data', function(chunk){
			data += chunk;
		});

		res.on('end', function() {
			data = data.toString();
			try{

				var orgdata = JSON.parse(data);
				var stars = 0, forks = 0;
				orgdata.forEach(function(item){
					stars += item.stargazers_count;
					forks += item.forks_count;
				});

				github.stars = stars;
				github.forks = forks;

			}catch(e){
				console.log(e);
			}
		});
	});

	req.on("error", function(err){
		console.log(err);
	});

	req.end();

}

//fetch
fetchGithubStars("Clouda-team");
setInterval(function(){ fetchGithubStars("Clouda-team"); }, fetchInterval);

// server.defineAction("index", function(){

// 	var content = this.render("index", github);

// 	this.send(content);
	
// });