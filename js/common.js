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

$('.down').on("click", function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});


$('.product-gallery-max').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
});

$('.product-gallery-preview').slick({
	slidesToShow: 4,
	arrows: false,
	vertical: true,
	asNavFor: '.product-gallery-max',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				vertical: true,
			}
		}
	]
});

function setProgress(index) {
	var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

	$progressBar
		.css('width', calc + '%')
		.attr('aria-valuenow', calc);
}

var $slider = $('.product-gallery-max');
var $progressBar = $('.progress-bg');

$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	setProgress(nextSlide);

});
setProgress(0);

$(".form-checkout input, .form-checkout textarea").focus(function () {
	$(this).parent().addClass("focus");
}).blur(function () {
	if ($(this).val() === '') {
		$(this).parent().removeClass("focus");
	}
});

$('.form-checkout input, .form-checkout textarea').each(function () {
	var $this = $(this),
		val = $this.val();

	if (val.length >= 1) {
		$(this).parent().addClass("focus");
	} else {
		$(this).parent().removeClass("focus");
	}
});