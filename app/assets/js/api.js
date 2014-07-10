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

	var archive = function(){
		
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
				arch.appendChild(li);
			});
			
			docs.insertBefore(arch, h1.nextSibling);
		}
	}

	archive()

}, false);