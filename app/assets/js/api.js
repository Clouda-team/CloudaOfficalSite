document.addEventListener("DOMContentLoaded", function(){

	var tools = {

		str : "abcdefghijklmnopqrstuvwxyz",

		randomID : function(){
			var i = 0, r, rstr = "";
			for(i;i<4;i++){
				r = Math.round(Math.random(26) * 10);
				rstr += tools.str.slice(r,r+1);
			}
			return rstr;
		}

	};

	var docs = document.querySelector("#docs");

	//prettyPrint
	var pres = document.querySelectorAll("pre");
	if(pres.length){
		[].forEach.call(pres, function(pre){
			pre.classList.add("prettyprint");
		});	
		prettyPrint();
	}
	
	//generate icon
	var generateIcon = function(){
		var menu = document.querySelector("#menu");
		var dds = menu.querySelectorAll("dd");
		if(dds.length){
			[].forEach.call(dds, function(dd){
				var frag = document.createDocumentFragment();
				var i = document.createElement("i");
				i.classList.add("fa");
				i.classList.add("fa-angle-double-right");
				frag.appendChild(i);
				dd.insertBefore(frag, dd.firstChild);
			});	
		}
	}


	//generate archive
	var archive = function(renderH3){
		
		var h2s = document.querySelectorAll("#docs h2");
		if(h2s.length){
			var h1 = document.querySelector("#docs h1");
			var arch = document.createElement("ul");
			arch.id = "arch";
			[].forEach.call(h2s, function(h2){
				var id = tools.randomID();
				h2.id = id;
				var li = document.createElement("li");
				var a = document.createElement("a");
				a.href = "#" + id;
				a.innerHTML = h2.innerText || h2.innerHTML;
				li.appendChild(a);

				if(renderH3){
					var h3s = document.querySelectorAll("." + h2.innerHTML.toLowerCase());
					if(h3s.length){
						var ul = document.createElement("ul");
						[].forEach.call(h3s, function(h3){
							var h3id = "h3" + tools.randomID();
							var h3li = document.createElement("li");
							var h3lia = document.createElement("a");
							h3li.appendChild(h3lia);
							h3lia.href = "#" + h3id;
							h3.id = h3id;
							h3lia.innerHTML = h3.innerHTML;
							ul.appendChild(h3li);
						});
						li.appendChild(ul);
					}
				}
				
				arch.appendChild(li);
			});
			
			docs.insertBefore(arch, h1.nextSibling);
		}
	}
	if(url(3) === "api_document"){
		archive(true);	
	} else {
		archive();
	}
	
	//scrollTop
	var goTop = function(){
		if(document.querySelector("#gotop")) return console.log("duplicate id: gotop");
		
		var gotop = document.createElement("div");
		gotop.id = "gotop";
		gotop.innerHTML = '<i class="fa fa-arrow-up"></i>';
		
		document.body.appendChild(gotop);

		gotop.addEventListener("click", function(){

			window.scroll(0,0);

		}, false);

		window.addEventListener("scroll", function(e){
			
			if(document.body.scrollTop >= (window.screen.availHeight + 100)){
				gotop.style.display = "block";
			} else {
				gotop.style.display = "none";
			}

		}, false);
	}
	goTop();
	

}, false);