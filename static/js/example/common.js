require.config({
	baseUrl: '../static/js',
	paths: {
		'jquery'	: 'common/jquery-1.8.3.min',
		'SlideShow'	: 'common/slideshow',
		'PicSlide'	: 'common/picslide',
		'Tab'		: 'common/tab',
		'Share'		: 'common/share'
	}
});

require(['jquery', 'SlideShow', 'PicSlide', 'Tab', 'Share'], function($, SlideShow, PicSlide, Tab, Share) {

	// Slide Show
	SlideShow('slideshow_1', {
		lazyTime: 1500
	});
	SlideShow('slideshow_2');

	// 图片滚动
	PicSlide('picslide_1', 5);
	PicSlide('picslide_2', 4);

	// 分享
	Share('#share', ['douban', 'renren', 'weibo', 'qzone']);

	// Tab切换
	Tab('.hot-news .ui-tab li', '.hot-news .view');
	Tab('.pick-news .ui-tab li', '.pick-news .view', {
		'trigger': 'mouseenter'
	});

	// 实例化弹层
	var popup = new Popup();

	// 弹层 1
	$('#popup-1').on('click', function(evt) {
		var renderHtml = $('#layer-1').html();
		popup.renderBody(renderHtml).show();
		evt.preventDefault();
	});

	// 弹层 2
	$('#popup-2').on('click', function(evt) {
		var renderHtml = $('#layer-2').html();
		popup.renderBody(renderHtml).show();
		evt.preventDefault();
	});

	// 弹层 3
	$('.ui-popup').delegate('#popup-3', 'click', function(evt) {
		var renderHtml = $('#layer-3').html();
		popup.renderBody(renderHtml).show();
		evt.preventDefault();
	});
});