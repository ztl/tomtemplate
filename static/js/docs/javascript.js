require(['jquery', 'SlideShow', 'PicSlide', 'Tab', 'Share'], function($, SlideShow, PicSlide, Tab, Share) {

	// Slide Show
	SlideShow('slideshow_1', {
		lazyTime: 1000
	});

	// 图片滚动
	PicSlide('picslide-1', 4);

	// Tab切换
	Tab('#tabview .ui-tab li', '#tabview .view', {
		'trigger': 'mouseenter'
	});

	// 分享
	Share('#share', ['douban', 'weibo', 'qzone']);

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