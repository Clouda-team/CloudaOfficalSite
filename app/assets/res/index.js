move.defaults = {
	duration: 1000
};

document.addEventListener('DOMContentLoaded', function (){

	var sliderID = "#slider";
	var attr = 'opacity';

	var slider = document.querySelector(sliderID);
	if(!slider) return;

	var lis = slider.querySelectorAll("li");
	var l = lis.length;
	var idx = -1;

	var next = function(curid, nextid){
		if(curid === -1){
			move(lis[0]).set(attr,"1").end();
			idx = 0;
		} else {
			move(lis[curid]).set(attr,"0").end();
			move(lis[nextid]).set(attr,"1").end();
			idx = nextid % l;
		}
	}

	//next(idx);

}, false);