rapid.config.define({

	"rapid-httpserver" : {

		autoStart : true,

		loading_dir : ["/app/actions/","/app/filters/"],

		gzip : true,

		port : 18080,

		/* "Cache-Control" : "max-age:31536000" */
		

		filters : [{
			url:/^(.*)$/,
			doFilter:"needRedirect"
		},{
			url : /^\/assets\/(.*)/,
			doFilter : "addHeaders",
			params : {
				"Cache-Control" : "max-age:31536000"
			}
		},{
			url:/^\/(applist|appinfo)(\/.*)?/i,
			doFilter:"isLogin"
		},{
			url:/^(.*)$/,
			doFilter:"isDeveloper"
		},{
			url:/^(.*)$/,
			doFilter:"getAccessToken",
			params:{

			}
		}],

		mapping : [{
			url : /^\/favicon.ico$/,
			resource : "/favicon.ico"
		},{
			url : /^\/assets\/(.*)/,
			resource : "/app/assets/{1}"
		},{
			url : /^\/md\/images\/(.*)/,
			resource : "/app/md/images/{1}"
		},{
			url : /^\/portal\/?$/,
			doAction : "portal"
		},{
			url : /^\/rapid(\/.*)?/,
			doAction : "rapid"
		},{
			url : "/blendapi/product",
			doAction : "api-product"
		},{
			url : /^\/blendapi(\/.*)?/,
			doAction : "blend"
		},{
			url : /^\/blendui(\/.*)?/,
			doAction : "blend"
		},{
			url : /^\/blend(\/.*)?/,
			doAction : "blend"
		},{
			url : /^\/runtime(\/.*)?/,
			doAction : "runtime"
		},{
			url :/^\/getHybrid(\/)?/i,
			doAction:"hybrid"
		},{
			url:/^\/other\/jump/i,
			resource:"/app/views/other/jump.html"
		},{
			url:/^\/proxy(\/.*)?/i,
			doAction:"proxy"
		},{
			url:/^\/index(\/.*)?/i,
			doAction:"index"
		},{
			url:/^\/applist(\/.*)?$/i,
			doAction:"applist"
		},{
			url:/^\/appinfo(\/.*)?$/i,
			doAction:"appinfo"
		},{
			url:/^\/sample(\/)?$/i,
			doAction:"sample"
		},{
			url:/^\/history(\/.*)?$/i,
			doAction:"history"
		},{
			url : /^\/$/,
			doAction : "index"
		},{
			url : /^\/noIE/,
			doAction : "noIE"
		},{
			url : /^\/404/,
			doAction : "404"
		}],

		defaultAction : "404"
	}

});
