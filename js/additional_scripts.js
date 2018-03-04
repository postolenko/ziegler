$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	$(document).ready(function() {

		$(".promo-slider").not(".slick-initialized").slick({
	        dots: true,
	        arrows: true,
	        // autoplay: true,
	        autoplaySpeed: 10000,
	        speed: 1200,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true,
	        appendArrows: $(".append-arrows_promo-slider .row"),
	        appendDots: $(".promo_sl_dots")
	    });

	    $(".good_slider_big").not(".slick-initialized").slick({
	        dots: false,
	        arrows: false,
	        // autoplay: true,
	        autoplaySpeed: 10000,
	        speed: 1200,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        fade: true,
	        asNavFor: ".good_slider_miniature"
	    });

	    $(".good_slider_miniature").not(".slick-initialized").slick({
	        dots: false,
	        arrows: false,
	        // autoplay: true,
	        autoplaySpeed: 10000,
	        speed: 1200,
	        slidesToShow: 5,
	        slidesToScroll: 1,
	        vertical: true,
            verticalSwiping: true,
            infinite: true,
            focusOnSelect: true,
            asNavFor: ".good_slider_big"
	    });

	});

});

