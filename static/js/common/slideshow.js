(function(define, global) {

	define(function(require) {

		var DEFAULT_CONF = {
			lazyTime: 3000
		};

		function SlideShow(elem, options) {
			var $elem	 = $('#' + elem),
				items	 = $elem.find('.data li'),
				len		 = items.length,
				cur		 = 0,
				noList 	 = '',
				noStr	 = '',
				timer 	 = null;

			$.extend(this, DEFAULT_CONF, options);

			// 生成按钮
			for(var i = 1; i <= len; i++) {
				noStr += '<li><a href="#">' + i + '</a></li>';
			}
			noList = document.createElement('ul');
			$(noList)
				.html(noStr)
				.addClass('no-list')
				.appendTo($elem)
				.find('li').first().addClass('cur');

			// 播放
			var run = function(_cur) {
				if(_cur >= len){
					_cur = 0;
				}
				$(noList).find('li').removeClass('cur');
				$(noList).find('li').eq(_cur).addClass('cur');
				items.hide();
				items.eq(_cur).show();
				cur = _cur;
			};

			// 点击按钮
			$(noList).find('li').each(function(i, item) {
				var me = $(item);
				me.on('click', function(e) {
					e.preventDefault();
					me.siblings().removeClass('cur');
					me.addClass('cur');
					items.hide();
					items.eq(i).show();
					cur = i;
				});
			});

			// 暂停和继续播放
			items.on('mouseenter', function() {
				clearInterval(timer);
			});
			items.on('mouseleave', function() {
				init();
			});

			// 初始
			var init = function() {
				timer = setInterval(function() {
					run(cur + 1);
				}, lazyTime);	
			};

			init();

		};

	　　return SlideShow;

	});

})(
    typeof define === 'function' && define.amd ? define : function(factory) { 
        if(typeof module != 'undefined') {
            module.exports = factory(require); 
        } else if (typeof window != 'undefined') {
            window.Tab = factory();
        }
    },
    this
);