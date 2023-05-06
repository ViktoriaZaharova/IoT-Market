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

$('.btn-search').on('click', function (e) {
	e.preventDefault();
	$(this).siblings('.form-search').fadeToggle();
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


	$(".range_val input").change(function () {
		var input_left = $(".dec1").val().replace(/[^0-9]/g, ''),
			opt_left = $(".slider-range").slider("option", "min"),
			where_right = $(".slider-range").slider("values", 1),
			input_right = $(".dec2").val().replace(/[^0-9]/g, ''),
			opt_right = $(".slider-range").slider("option", "max"),
			where_left = $(".slider-range").slider("values", 0);
		if (input_left > where_right) {
			input_left = where_right;
		}
		if (input_left < opt_left) {
			input_left = opt_left;
		}
		if (input_left == "") {
			input_left = 0;
		}
		if (input_right < where_left) {
			input_right = where_left;
		}
		if (input_right > opt_right) {
			input_right = opt_right;
		}
		if (input_right == "") {
			input_right = 0;
		}
		$(".dec1").val(input_left);
		$(".dec2").val(input_right);
		if (input_left != where_left) {
			$(".slider-range").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
			$(".slider-range").slider("values", 1, input_right);
		}
	});
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

// hidden list > 5
$('.accordion-item .accordion-body .list-checkbox ').each(function () {
	if ($(this).find('li').length > 4) {
		$(this).find('li').slice(4).hide();
		$(this).parents('.accordion-body').append('<a href="#" class="load-more-wrap color-red">Показать еще</a>');
	}

});
// hidden list > 5

// show list all
$('.load-more-wrap').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.accordion-item .accordion-body .list-checkbox').find('li').slideDown();

	var onBlock = $(this).prev('.acordion-item .accordion-body .list-checkbox ').find('li:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

	// show list all
