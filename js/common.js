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

$('.btn-burger').click(function () {
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').click(function () {
	$('.nav-menu').fadeOut();
});

// price slider
$(document).ready(function () {
	$('.slider-range').slider({
		range: true,
		min: 2000,
		max: 65000,
		values: [15000, 65000],
		classes: {
			"ui-slider-handle": "ui-corner-all"
		},
		slide: function (event, ui) {
			//Поле минимального значения
			$(".dec1").val(ui.values[0]);
			//Поле максимального значения
			$(".dec2").val(ui.values[1]);
		}
	});

	$(".dec1").val($(".slider-range").slider("values", 0));
	$(".dec2").val($(".slider-range").slider("values", 1));

});

$('.btn-filter').click(function () {
	$('.sidebar').fadeToggle();
});

$('.sidebar-close').click(function () {
	$('.sidebar').fadeOut();
});
