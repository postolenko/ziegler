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

    getTHumbsHeight()

});

$(window).resize(function() {

    getTHumbsHeight()

});

$(document).ready(function() {   

    detectIE();

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