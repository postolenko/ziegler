$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity
		});

	});

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

	});

});

