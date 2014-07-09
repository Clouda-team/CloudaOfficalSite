$(function(){

	//hilight code
	highlight(undefined, undefined, 'pre');

	//active nav
	var $menu = $("#menu");
	$menu.on("click", "dt", function(e){
		var $dl = $(this).closest("dl");
		$dl.toggleClass("unfold");
	});


});