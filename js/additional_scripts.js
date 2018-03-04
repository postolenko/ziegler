$(window).on("load",function(){

	$("scroll").mCustomScrollbar();

	$(".scroll_x").mCustomScrollbar({
		axis: "x"
	});

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
	        asNavFor: ".good_slider_miniature",
	        responsive: [
			    {
			      breakpoint: 700,
			      settings: {
			        arrows: true
			      }
			    }
			  ]
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
            asNavFor: ".good_slider_big",
            responsive: [
			    {
			      breakpoint: 700,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1,
			        vertical: false
			      }
			    },
			    {
			      breakpoint: 610,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1,
			        vertical: false
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        vertical: false
			      }
			    },
			    {
			      breakpoint: 400,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        vertical: false
			      }
			    }
			  ]
	    });

	});

});

