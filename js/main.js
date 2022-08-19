$(document).ready(function () {
	$.fancybox.defaults.touch = false
	$.fancybox.defaults.closeExisting = true

	//! Select

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.header__city, .header__dropdown').length) {
			$('.header__dropdown').removeClass('active')
			$('.header__city').removeClass('active')
		}
		e.stopPropagation()
	})

	//! Burger

	$('.header__burger').on('click', function () {
		$('.header__nav').toggleClass('active')
	})

	$('.header__link--dropdown').on('click', function () {
		if ($(window).width() < 991) {
			$(this).toggleClass('active').find('.header__dropdown').slideToggle()
		}
	})

	const showcase = new Swiper('.showcase__container', {
		slidesPerView: 1,
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	$('.radio').on('click', function () {
		$('.radio').removeClass('active')
		$(this).addClass('active')
	})

	$('.calculation__btn').on('click', function () {
		$('.calculation__progress .green').css('width', '100%')
		$('.calculation__steps span').text('2')

		$('.calculation__subtitle').text('Оставьте свой контакт для связи')

		$(this).hide()
		$('.calculation__end').css('display', 'flex')
		$('.calculation__step--first').hide()
		$('.calculation__step--second').show()

		return false
	})

	const realization = new Swiper('.realization__container', {
		slidesPerView: 1,
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const clients = new Swiper('.reviews-clients__container', {
		slidesPerView: 1,
		spaceBetween: 24,
		loop: true,

		navigation: {
			nextEl: '.reviews-clients__next.swiper-button-next',
			prevEl: '.reviews-clients__prev.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	})

	const partners = new Swiper('.partners__container', {
		slidesPerView: 1,
		spaceBetween: 26,
		loop: true,
		navigation: {
			nextEl: '.partners__next.swiper-button-next',
			prevEl: '.partners__prev.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
			},

			1301: {
				slidesPerView: 3,
			},
		},
	})

	$('[data-tabs-nav]')
		.children()
		.on('click', function () {
			var index = $(this).index()
			$(this).addClass('active').siblings().removeClass('active')
			$(this).parent().next().children().hide().eq(index).fadeIn()

			return false
		})

	$('.question__field-button').on('click', function () {
		$(this).toggleClass('active')
		$('.question__message').toggleClass('active')
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('.question__field-button, .question__message').length
		) {
			$('.question__message').removeClass('active')
			$('.question__field-button').removeClass('active')
		}
		e.stopPropagation()
	})

	//? filter-slider

	let $range = $('#example_2')
	let $inputFrom = $('#example_2_input_from')
	let $inputTo = $('#example_2_input_to')
	let instance
	let min = 0
	let max = 500
	let from = 0
	let to = 0

	$range.ionRangeSlider({
		skin: 'round',
		type: 'double',
		min: min,
		max: max,
		from: 51,
		to: 414,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs,
	})

	instance = $range.data('ionRangeSlider')

	function updateInputs(data) {
		from = data.from
		to = data.to

		$inputFrom.prop('value', from)
		$inputTo.prop('value', to)
	}

	$inputFrom.on('change', function () {
		var val = $(this).prop('value')

		// validate
		if (val < min) {
			val = min
		} else if (val > to) {
			val = to
		}

		instance.update({
			from: val,
		})

		$(this).prop('value', val)
	})

	$inputTo.on('change', function () {
		var val = $(this).prop('value')

		// validate
		if (val < from) {
			val = from
		} else if (val > max) {
			val = max
		}

		instance.update({
			to: val,
		})

		$(this).prop('value', val)
	})

	// First

	var swiper = new Swiper('.page-showcase__gallery', {
		spaceBetween: 10,
		slidesPerView: 0,
		freeMode: true,
		watchSlidesProgress: true,

		breakpoints: {
			992: {
				slidesPerView: 3,
			},

			1301: {
				slidesPerView: 4,
			},
		},
	})

	var swiperGallery = new Swiper('.page-showcase__cart', {
		navigation: {
			nextEl: '.page-showcase__cart-next',
			prevEl: '.page-showcase__cart-prew',
		},

		thumbs: {
			swiper,
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	// Second

	var swiperNew = new Swiper('.page-showcase__gallery1', {
		spaceBetween: 10,
		slidesPerView: 0,
		freeMode: true,
		watchSlidesProgress: true,

		breakpoints: {
			992: {
				slidesPerView: 3,
			},

			1301: {
				slidesPerView: 4,
			},
		},
	})

	var swiperGallery = new Swiper('.page-showcase__cart1', {
		thumbs: {
			swiper: swiperNew,
		},

		navigation: {
			nextEl: '.page-showcase__cart-next1',
			prevEl: '.page-showcase__cart-prew1',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	// Third

	var swiper2 = new Swiper('.page-showcase__gallery2', {
		spaceBetween: 10,
		slidesPerView: 0,
		freeMode: true,
		watchSlidesProgress: true,

		breakpoints: {
			992: {
				slidesPerView: 3,
			},

			1301: {
				slidesPerView: 4,
			},
		},
	})

	var swiperThird = new Swiper('.page-showcase__cart2', {
		navigation: {
			nextEl: '.page-showcase__cart-next2',
			prevEl: '.page-showcase__cart-prew2',
		},

		thumbs: {
			swiper: swiper2,
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	$('.question__message-item').on('click', function () {
		var current = $(this).text()
		var parent = $(this).parent().parent().parent()
		var text = parent.find('.question__field-current span')
		var img = $(this).find('.question__message-img img')
		var imgNew = parent.find('.question__field-current img')
		var imgOld = img.attr('src')
		var currentNew = parent.find('.question__field-current')

		text.text(current)
		imgNew.attr('src', imgOld)
		$('.question__message').removeClass('active')
		$('.question__field-button').removeClass('active')
		$('.question__field-button input').attr('placeholder', '')
		currentNew.addClass('active')
	})

	// Resize

	var mySwiper

	function resizeScreen() {
		if ($(window).width() < 991) {
			if ($('.scheme__container').length > 0) {
				if (mySwiper === undefined) {
					mySwiper = new Swiper('.scheme__container', {
						slidesPerView: 1,
						spaceBetween: 20,
						loop: true,
						centeredSlides: true,

						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							clickable: true,
						},
					})
				}
			}
		} else {
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true)
				mySwiper = undefined
			}
		}
	}
	resizeScreen()

	$(window).resize(function () {
		resizeScreen()
	})

	// Realized-objects

	var swiperObjects = new Swiper('.page-showcase__gallery-realized', {
		spaceBetween: 10,
		slidesPerView: 3,
		watchSlidesProgress: true,
		centeredSlides: false,

		breakpoints: {
			992: {
				slidesPerView: 3,
			},

			1301: {
				slidesPerView: 4,
			},
		},

		
	})
	
	var swiperGalleryObjects = new Swiper('.page-showcase__gallery-content', {
		navigation: {
			nextEl: '.page-showcase__cart-next',
			prevEl: '.page-showcase__cart-prew',
		},

		thumbs: {
			swiper: swiperObjects,
		},
	})
})
