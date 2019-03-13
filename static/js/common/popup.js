(function() {
	// 默认配置
	var DEFAULT_CONF = {
		// 弹层 class
		'layerClass': 'ui-popup',
		// 蒙版 class
		'layerMask': 'ui-popup-mask',
		// 是否有蒙版
		'hasMask': true,
		// 是否有关闭
		'hasClose': true,
		// 是否有底部
		'hasFt': false,
		// 关闭 html
		'closeHtml': '<a href="#" class="close">x</a>',
		// 底部 html
		'ftHtml': '<div class="popup-ft"></div>',
		// 弹层 z-index
		'zIndex': 10000
	};

	// 弹层
	function Popup(options) {
		$.extend(this, DEFAULT_CONF, options);
		this.init();
	}

	// 初始化
	Popup.prototype.init = function() {
		this.render();
	};

	// 渲染弹层结构
	Popup.prototype.render = function(ops) {
		var $doc = $(document),
			$body = $('body'),
			closeHtml = '',
			ftHtml = '',
			self = this;
		
		self.hasClose ? closeHtml = self.closeHtml : '';
		self.hasFt ? ftHtml = self.ftHtml : '';
		$('<div class="' + self.layerClass + '">')
			.html('<div class="popup-hd">' + closeHtml + '</div><div class="popup-bd">' + ftHtml)
			.appendTo($body);

		self.hasMask && $('<div class="' + self.layerMask + '">').appendTo($body);
		self.hasClose && $('.' + self.layerClass).delegate('.close', 'click', function(evt) {
			self.hide(evt);
		});
	};

	// 渲染弹层内容
	Popup.prototype.renderBody = function(bodyHtml) {
		$('.' + this.layerClass).children('.popup-bd').html(bodyHtml);
		return this;
	};

	// 显示弹层
	Popup.prototype.show = function() {
		var $doc = $(document),
			$win = $(window);

		$('.' + this.layerClass)
			.css({
				'margin-top': 0,
				'top': $doc.scrollTop() + $win.height() / 2 - $('.' + this.layerClass).height() / 2
			})
			.show();
		$('.' + this.layerMask)
			.css({
				'height': $doc.height(),
				'z-index': --this.zIndex
			})
			.show();
	};

	// 关闭弹层
	Popup.prototype.hide = function(evt) {
		evt.preventDefault();
		$('.' + this.layerClass).hide();
		$('.' + this.layerMask).hide();
	};

　　window.Popup = Popup;
})();