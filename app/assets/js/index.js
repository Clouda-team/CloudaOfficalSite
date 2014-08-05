document.addEventListener("DOMContentLoaded", function(){


	var showIndex = function(){
		move("#introbox").duration(800).set("opacity",1).end();	
	}

	localStorage.setItem("nicebg","");
	var flag = !localStorage.getItem("nicebg");
	var intro = document.querySelector('#intro');
	var bgimg = document.createElement('img');

	if(flag){
		//var introbox = document.querySelector('#introbox');
		var introtxt = document.querySelector('#introtxt');
		//introbox.classList.add("mask");
		introtxt.classList.add("darkmask");

		var rand = Math.floor(Math.random() * 23) + 1;
		bgimg.src = "/assets/images/S" + rand + ".jpg";
	} else {
		bgimg.src = "/assets/images/a9.jpg";
	}

	bgimg.onload = function(){
		intro.style.backgroundImage = "url(" + bgimg.src + ")"; 
		showIndex();
	}

	
	var adjust = function(){
		
		var sh = window.innerHeight < 640 ? 640 : window.innerHeight;
		var ch = document.querySelector("#clouda").offsetHeight;
		var mv = (sh - ch) / 2;
		move("#clouda").duration(0).y(mv).end();

		var scs = document.querySelectorAll(".showcase");
		[].forEach.call(scs, function(sc){
			var sermon = sc.querySelector(".sermon");
			var offset = (sh - sermon.offsetHeight - 10) / 2;
			offset = offset < 0 ? 0 : offset;
			move(sermon).duration(0).y(offset).end();
		});

	}

	adjust();

	window.addEventListener("resize", function(){
		adjust();
	}, false);
	

	
		
	$("#main").onepage_scroll({
		sectionContainer: ".scrollpage",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "cubic-bezier(0.25,0.1,0.25,1)",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
		                                // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
		animationTime: 1200,             // AnimationTime let you define how long each section takes to animate
		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
		loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: true,                  // You can activate the keyboard controls
		responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
		                                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
		                                // the browser's width is less than 600, the fallback will kick in.
		direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
	

}, false);