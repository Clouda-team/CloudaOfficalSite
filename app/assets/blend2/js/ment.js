$(function(){

    var $el, leftPos, newWidth,
        $mainNav = $("#example-one");

    var $magicLine = $("#hds");
    
    $magicLine
        .width($(".current_page_item a").width())
        .css("left", $(".current_page_item a").position().left)
    
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        // console.log('this:' + this);
        // console.log('$el' + $el);
        leftPos = $el.position().left;
        //newWidth = $el.parent().width();
        newWidth = $el.width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            //width: $magicLine.data("origWidth")
        });    
    });
    
    // 初始化首屏高度
    if(window.screen.width > 768){
        $('.clouda_bann').height(window.innerHeight);
    }
    window.addEventListener('resize', function () {
        if(window.screen.width > 768){
            $('.clouda_bann').height(window.innerHeight);
        }
    });

    $(".back").click(function () {
        $(window).scrollTop(0);
    });

    var menus = document.querySelectorAll('#menus li a');
    var hash = location.hash;
    window.addEventListener('hashchange', function () {
        $('#menus a[href=' + hash + ']').className = ' attachedIcon'
        for (var i in menus) {
            if (menus[i].getAttribute("href") === currentPath) {
                menus[i].className += ' attachedIcon';
                break;
            }
        }
    });
});