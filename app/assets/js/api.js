document.addEventListener("DOMContentLoaded", function(){

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
	//generateIcon();

}, false);