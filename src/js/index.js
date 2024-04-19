import {$, Fancybox, Swiper} from './common';

var widthWindow = $(window).width();

$(window).on('resize', function(){
	widthWindow = $(window).width();
});

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
		clickable: true,
	},
});

//Фильтр
var curCountry = $('.js-choose-country').val();
var curType = 'all';

if(curCountry == 'all'){
	$('.js-product-item').addClass('show');
}else{
	$('.js-product-item[data-country="'+curCountry+'"]').addClass('show');
}

$('.js-category-item').on('click', function(){//Меняем товары при клике на категорию
	let countActiveElem = 0;
	curType = $(this).data('type');

	$('.js-category-item').removeClass('active');
	$(this).addClass('active');

	$('.js-product-item').removeClass('show');

	if(curCountry == 'all'){
		$('.js-product-item[data-type="'+curType+'"]').addClass('show');
		countActiveElem= $('.js-product-item[data-type="'+curType+'"]').length;
	}else{
		$('.js-product-item[data-country="'+curCountry+'"][data-type="'+curType+'"]').addClass('show');
		countActiveElem= $('.js-product-item[data-country="'+curCountry+'"][data-type="'+curType+'"]').length;
	}

	$('.js-products-empty').removeClass('active');

	if(countActiveElem == 0 && curCountry != 'all'){
		$('.js-products-empty').addClass('active');
	}
});

$('.js-choose-country').on('change', function(){//Меняем товары при смене страны
	curCountry = $(this).val();
	curType = 'all';
	
	$('.js-category-item').removeClass('active');
	$('.js-product-item').removeClass('show');
	$('.js-products-empty').removeClass('active');
	
	if(curCountry == 'all'){
		$('.js-product-item').addClass('show');
	}else{
		$('.js-product-item[data-country="'+curCountry+'"]').addClass('show');
	}

	console.log('len = ', $('.js-product-item[data-country="'+curCountry+'"]').addClass('show').length);
});

// Открыть/Закрыть мобильное меню
if($('.js-open-menu').length){
	$('.js-open-menu').on('click', function() {
		
		if(widthWindow < 768){
			$('.js-main-menu').toggleClass('open');// Открыть/Закрыть мобильное меню на мобиле
		}else{
			//Переход к продукции на десктопе
			var posBlock = $('.js-to-move[data-move=products]').offset().top;
	
			$(window).on('resize', function(){
				posBlock = $('.js-to-move[data-move=products]').offset().top;
			});
			
			$('html, body').animate({ scrollTop: posBlock }, 600);
		}
	});

}

// select
if($('.js-select').length){
	$('.js-select').select2({
		minimumResultsForSearch: -1,
	});
}
