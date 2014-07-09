document.addEventListener("DOMContentLoaded", function(){

	var pres = document.querySelectorAll("pre");

	[].forEach.call(pres, function(pre){
		pre.classList.add("prettyprint");
	});
	prettyPrint();

}, false);