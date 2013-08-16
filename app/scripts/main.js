'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        app: 'app',
        shoplocket: 'https://d1pocdzmde73mw.cloudfront.net/assets/widgets/embed'
    }
});

require(['jquery'], function ($) {
    'use strict';
    
    var windowHeight = function () {
		var t = document.documentElement.clientHeight / window.innerHeight;
		return window.innerHeight * t;
	},
	t = windowHeight();
	$('.banner').css('height', t + 1);
    if(/mobile/i.test(navigator.userAgent) && !location.hash){
		setTimeout(function () {
			var t = windowHeight();
			$('.banner').css('height', t + 1);
		}, 1e3);
    }
	$(window).resize(function () {
		t = windowHeight();
		$('.banner').css('height', t + 1);
	});
	$('.arrow , .buy_coffee').on('click', function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 300);
		return false;
	});
});