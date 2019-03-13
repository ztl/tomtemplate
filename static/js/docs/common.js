require.config({
	baseUrl: 'static/js',
	paths: {
		'jquery'	: 'common/jquery-1.8.3.min',
		'SlideShow'	: 'common/slideshow',
		'Tab'		: 'common/tab',
		'PicSlide'	: 'common/picslide',
		'Share'		: 'common/share'
	}
});

require(['jquery', 'Share'], function($, Share) {
	var sidebar 		= $('.sidebar'),
		sidebarItem 	= $('.sidebar li'),
		len 			= sidebarItem.length,
		sidebarTimer 	= null;

	// 定位 sidebar
	function navActive() {
		sidebarItem.removeClass('active');

		sidebarItem.each(function(i, item) {
			if(sidebar.offset().top >= $('.tom-item').eq(i).offset().top) {
				sidebarItem.removeClass('active');
				sidebarItem.eq(i).addClass('active');
				return;
			}
		});
	}

	// 返回顶部
	function backToTop() {
		$('.back-to-top').addClass('hide');
		$('.back-to-top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 500);
		});
	}

	// 顶部分享
	function topShare() {
		var btn 	= $('.top-share p'),
			items 	= $('#top-share');

		items.hide();

		btn.hover(function() {
			items.show();
		}, function() {
			
		});

		// 点击空白隐藏顶部分享
		$('body').on('click', function(event) {
			var me = $(this),
				evtTarget = event.target;

			if(evtTarget == btn[0] || evtTarget == items[0] || evtTarget.parentNode == items[0]) {
				return;
			}
			items.hide();

		});
	}

	// sidebar 点击
	function sidebarNav() {
		sidebar.delegate('a', 'click', function(e) {
			var me 			= $(this),
				scrollTop 	= $(me.attr('href')).offset().top - 30;

			e.preventDefault();
			clearTimeout(sidebarTimer);

			sidebarItem.removeClass('active');
			me.parent().addClass('active');	

			sidebarTimer = setTimeout(function() {
				$('html, body').animate({'scrollTop': scrollTop});
			}, 100);

		});
	}

	// sidebar fixed
	$(window).on('scroll', function() {
		var me 		= $(this),
			winTop 	= me.scrollTop();

		if(winTop < 180) {
			sidebar.removeClass('sidebar-fixed');
			sidebarItem.removeClass('active');
		}	
		if(winTop >= 180) {
			sidebar.addClass('sidebar-fixed');
		}
		if(winTop < 1000) {
			$('.back-to-top').addClass('hide');
		}	
		if(winTop >= 1000) {
			$('.back-to-top').removeClass('hide');
		}

		navActive();
	});

	// 加载代码高亮
	$('pre').addClass('prettyprint');
    prettyPrint();

	// 分享
	// Share('#top-share', ['weibo', 'qzone', 'douban', 'renren']);

	// 顶部分享
	// topShare();

	// sidebar
	sidebarNav();

	// 返回顶部
	backToTop();

});