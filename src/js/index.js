import {$, Fancybox, Swiper} from './common';

// Плавный переход к блоку
if($('.js-link-move').length){
	$('.js-link-move').on('click', function() {
		var posBlock = $('.js-to-move[data-move='+$(this).data('move')+']').offset().top;

		$(window).on('resize', function(){
			posBlock = $('.js-to-move[data-move='+$(this).data('move')+']').offset().top;
		});
		
		$('html, body').animate({ scrollTop: posBlock }, 600);
	});
}

//Слайдер товаров
var prodDetailSlider = new Swiper('.js-product-slider', {
	pagination: {
		el: ".js-product-slider-pager",
	  },
});

//Фильтр
var curCountry = $('.js-choose-country').val();
var curType = 'all';

$('.js-product-item[data-country="'+curCountry+'"]').addClass('show');

$('.js-category-item').on('click', function(){//Меняем товары при клике на категорию
	curType = $(this).data('type');

	$('.js-category-item').removeClass('active');
	$(this).addClass('active');

	$('.js-product-item').removeClass('show');
	$('.js-product-item[data-country="'+curCountry+'"][data-type="'+curType+'"]').addClass('show');
});

$('.js-choose-country').on('change', function(){//Меняем товары при смене страны
	curCountry = $(this).val();
	curType = 'all';

	$('.js-category-item').removeClass('active');
	$('.js-product-item').removeClass('show');
	$('.js-product-item[data-country="'+curCountry+'"]').addClass('show');
});

// Открыть/Закрыть мобильное меню
if($('.js-open-menu').length){
	$('.js-open-menu').on('click', function() {
		$('.js-main-menu').toggleClass('open');
	});
}