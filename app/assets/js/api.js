document.addEventListener("DOMContentLoaded", function(){

	var tools = {

		randomID : function(){
			
			return Math.random().toString(36).slice(2).replace(/\d/g,"");

		}

	};

	var docs = document.querySelector("#docs");

	//prettyPrint
	var pres = document.querySelectorAll("pre");
	if(pres.length){
		[].forEach.call(pres, function(pre){
			if(pre.classList){
				pre.classList.add("prettyprint");
			}else{
				var classNames = [];
				if(pre.className){
					classNames = pre.className.split(/\s+/);
					classNames.push("prettyprint");
					pre.className = classNames.join(" ");
				}else{
					pre.className = "prettyprint";
				}
			}
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

	var platico = {
		ios : '<i class="fa fa-apple" title=" iOS "></i>',
		android : '<i class="fa fa-android" title=" Android "></i>',
		web : '<i class="fa fa-desktop" title=" Web "></i>'
	}

	//generate archive
	var archive = function(renderH3){
		
		var h2s = document.querySelectorAll("#docs h2");
		if(h2s.length){
			var h1 = document.querySelector("#docs h1");
			var arch = document.createElement("ul");
			arch.id = "arch";
			[].forEach.call(h2s, function(h2){
				var id = h2.innerHTML.toLowerCase().replace(".","").replace(/\s+/g,"");//tools.randomID();
				h2.id = id;
				var li = document.createElement("li");
				var a = document.createElement("a");
				// a.addEventListener("click", function(e){
				// 	var offset = document.querySelector("#" + id).offsetTop;
				// 	window.scrollTo(0,offset);
				// }, false);
				a.href = "#" + id;
				a.innerHTML = h2.innerHTML;
				li.appendChild(a);
				a.addEventListener("click", function(e){
					e.preventDefault();
					var offset;
					try{
						offset = document.querySelector("#" + id).offsetTop;
					}catch(e){
						offset = document.querySelector("h2[id='"+id+"']").offsetTop;
					}
					
					// window.scrollTo(0,offset);
					//window.scrollTo(0,offset-115);
					window.scrollTo(0,offset-39);

					//history.pushState("", document.title, window.location.pathname);
				}, false);

				if(renderH3){
					var sel = h2.innerText || h2.textContent;
					sel = sel.toLowerCase().replace(/\(.*\)/,"");
					var h3s = document.querySelectorAll("." + sel);
					if(h3s.length){
						var ul = document.createElement("ul");
						[].forEach.call(h3s, function(h3){
							var h3id = "h3" + tools.randomID();
							var h3li = document.createElement("li");
							var h3lia = document.createElement("a");
							h3li.appendChild(h3lia);
							h3lia.addEventListener("click", function(e){
								var offset = document.querySelector("#" + h3id).offsetTop;
								// window.scrollTo(0,offset);
								window.scrollTo(0,offset-115);
								history.pushState("", document.title, window.location.pathname);
							}, false);
							h3.id = h3id;
							
							//render ico
							var plat = h3.getAttribute("platform") || "";
							var plats = {};
							plat.split(" ").forEach(function(key){
								plats[key] = true;
							});
							var allplats = ["ios","android","web"];
							if(plat){
								var icos = "";
								allplats.forEach(function(name){

									if(platico[name] && plats[name]){
										icos += platico[name].replace('class="fa ', 'class="fa support ');
									}else if(platico[name]){
										icos += platico[name]
									}
								});
								h3.innerHTML += icos;
							}
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
	if(url(3) === "api_document" || url(3) === "runtime" ||url(3) === "api_runtime"||url(3) === "api_kuang"){
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
			
			var offtop = document.documentElement.scrollTop ||  document.body.scrollTop;
			if(offtop >= (window.screen.availHeight + 100-150)){
				gotop.style.display = "block";
			} else {
				gotop.style.display = "none";
			}

		}, false);
	}
	goTop();

	//menu
	var h3nav = {};
	var initMenu = function(){
		var h3s = document.querySelectorAll("h3");
		[].forEach.call(h3s, function(h3){
			var text = h3.innerText || h3.textContent;
			text = text.toLowerCase().replace(/\s/ig, "");
			h3nav[text] = h3;
			if(text === "blendui" || text === "blendapi"){
				h3.classList.add("sub");
			}
		});
		var mod = url(1, location.href);
		var el = h3nav[mod];
		while(el.nextElementSibling && el.nextElementSibling.tagName === "DL"){
			el.nextElementSibling.classList.add("active");
			el = el.nextElementSibling;
		}
	}
	//initMenu();

}, false);