$(document).ready(function() {
    
/*For the sticky Navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    
/* Scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    


/* Mobile nav */

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-burger');
    
    nav.slideToggle(200);
    
})
    
    
$(window).resize(function(){

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if ($(window).width() > 767){
        nav.css("display", "block");
        icon.addClass('burger');
        
        }

        });

    });