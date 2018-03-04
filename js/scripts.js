var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var thumb;
var thumbsHeightArr = [];
var thumbHeight;
var maxThumbHeight;

$(window).load(function() {

    getTHumbsHeight();

    getTopOffset();

});

$(window).resize(function() {

    getTHumbsHeight();

    getTopOffset();

    showScrollTopBtn();

});

$(document).scroll(function() {

    showScrollTopBtn();
    
});

$(document).ready(function() {   

    detectIE();

    showScrollTopBtn();

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_wrapp").is(":hidden") ) {

                $(".main-nav_wrapp").fadeIn(300);

                $(this).addClass("active");

            } else {

                $(".main-nav_wrapp").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".main-nav_wrapp").is(":visible") ) {

                    $(".main-nav_wrapp").fadeOut(300);

                    $(".respmenubtn").removeClass("active");

            }

        });

    });

    $(function() {

        $(".top_btn").click(function(e) {

            e.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 700);

        });

    });

});

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');

    if ( msie > 0 || trident > 0 || edge > 0 ) {
        document.getElementsByTagName("html")[0].classList.add("ie");
    }

    return false;

}

function getTHumbsHeight() {

    $(".set_height").each(function() {

        thumbsHeightArr = [];

        thumb = $(this).find(".thumb");

        $(this).find(".inner").css({"height" : "auto"});

        thumb.each(function() {

            thumbHeight = $(this).find(".inner").height();

            thumbsHeightArr.push(thumbHeight);

        });

        maxThumbHeight = Math.max.apply(null, thumbsHeightArr);

        thumb.find(".inner").height(maxThumbHeight);

    });

}

function getTopOffset() {

    $(".wrapper").css({
        "padding-top" : $(".header-site").height() + "px"
    });

}

function showScrollTopBtn() {

    if( $(".header-site").offset().top > 0 ) {

        $(".header-site").addClass("fixed");

        $(".scroll-btn").fadeIn(300);

    } else {

        $(".header-site").removeClass("fixed");

        $(".scroll-btn").fadeOut(300);

    }

}