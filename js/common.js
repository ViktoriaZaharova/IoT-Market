// $('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	appendDots: '.home-slider__nav',
	fade: true
});

// timer
$(".countdown-time1").countdowntimer({
	dateAndTime: "2023/05/12 00:00:00",
	labelsFormat: true,
	displayFormat: "DHMS",
	// currentTime: true,
});