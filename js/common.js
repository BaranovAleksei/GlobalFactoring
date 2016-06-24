$(document).ready(function(){

	$('.menu').mouseenter(function(){
		$(this).children('div.submenu').slideDown(300);
		$(this).css( {'background': 'rgb( 0, 122, 163)'});
		$(this).children('p:first').css( {'color': 'rgb( 255, 255, 255)'});
	});

	$('.menu').mouseleave(function(){
		$(this).children('div.submenu').slideUp(300);
		$(this).css( {'background': 'rgb( 236, 236, 236)'});
		$('.menu > p:first-child').css( {'color': 'rgb( 37, 38, 42)'});
	});

	$('.slide').slick({
		slideToShow: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 900
	});

	

});

