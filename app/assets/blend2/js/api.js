document.addEventListener("DOMContentLoaded", function(){

	var tools = {
		randomID : function(){
			return Math.random().toString(36).slice(2).replace(/\d/g,"");
		}
	};

	// var docs = document.querySelector("#docs");
	var $docs = $("#docs");
	//对
	var pres = document.querySelectorAll("pre");
	if(pres.length){
		[].forEach.call(pres, function(pre){
			pre.classList.add("prettyprint");
		});
		prettyPrint();
	}

	//generate icon
	/*var generateIcon = function(){
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
	}*/

	var platico = {
		ios : '<i class="fa fa-apple" title=" iOS "></i>',
		android : '<i class="fa fa-android" title=" Android "></i>',
		web : '<i class="fa fa-desktop" title=" Web "></i>'
	}

	//generate archive
	var archive = function(renderH3){

		var $h2s = $("#docs h2");
		if($h2s.length){
			var $h1 = $("#docs h1");
			var $arch = $("<ul id=arch></ul>");

			[].forEach.call($h2s, function(h2){

				var $h2 =$(h2) ;
				var h2text = $h2.text();

				$h2.attr('data',h2text);


				var id = $h2.text().replace(".","").replace(/\s+/g,"");//tools.randomID();

				$h2.attr("id",id);

				var $li = $("<li></li>");
				var $a = $("<a></a>");

				$a.attr('data',h2text);
				$a.text(h2text);

				$li.append($a);


				$a.on("click",function(e){
					e.preventDefault();
					var target = $("h2[data='"+h2text+"']");
					var offset = target.offset().top;

					window.scrollTo(0,offset-70);
					// history.pushState("", document.title, window.location.pathname);
				});

				if(renderH3){


					var h3s = $("h3[data='"+h2text+"']");

					// console.log(h3s.length);
					// console.log(h3s);
					if(h3s.length){
						// var ul = document.createElement("ul");
						var $ul = $("<ul></ul>");
						[].forEach.call(h3s, function(h3){
							// var h3id = "h3" + tools.randomID();
							var $h3li = $("<li></li>");
							var $h3lia = $("<a></a>");
							$h3lia.text($(h3).text());
							$h3li.append($h3lia);

							$(h3).data("text",$(h3).text());
							$(h3).attr('data',$(h3).text());

							$h3lia.on("click", function(e){
								e.preventDefault();
								// console.log(e.target.innerText)
								var target = $("h3[data='"+e.target.innerText+"']");
								// var target = $("h3[data-text='"+e.target.innerText+"']");

								// console.log(target)
								var offset = target.offset().top;

								window.scrollTo(0,offset-70);

								history.pushState("", document.title, window.location.pathname);
							});

							// h3.id = h3id;

							//render platform ico

							$ul.append($h3li);
						});
						$li.append($ul);
					}
				}
				$arch.append($li);
			});

			// $docs.prepend('<div id="add_div" class="doc_menu"></div>');
			// var $addDiv = $("#addDiv");
			// $addDiv.prepend($arch);
			var $addDiv = $("<div class='doc-menu'></div>");
			var $addDivTitle = $("<div class='menu-title'>组件</div>");
			$addDiv.prepend($arch);
			$addDiv.prepend($addDivTitle);
			$docs.prepend($addDiv);

			$docs.prepend($h1);

		}
	}

	//archive(true);


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
	// goTop();

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
		// var mod = url(1, location.href);

		var path_arr = location.pathname.split("/");
		var proj = path_arr[1]
		var mod = path_arr[2];
		var el = h3nav[mod];
		while(el.nextElementSibling && el.nextElementSibling.tagName === "DL"){
			el.nextElementSibling.classList.add("active");
			el = el.nextElementSibling;
		}
	}
	// initMenu();


	;(function(){
		var pathname = location.pathname;
		$("#docList a[href='"+pathname+"']").css({"color":"#007aeb","font-size":"16px"});
	})();

}, false);