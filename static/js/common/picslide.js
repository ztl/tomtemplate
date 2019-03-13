(function(define, global) {

	define(function(require) {

		function PicSlide(elem, distance) {
			var	cur		= 0;
				$elem	= $('#' + elem),
				btnL	= $elem.find('.prev'),
				btnR	= $elem.find('.next'),
				liW		= $elem.find('li').width(),
				sep		= parseInt($elem.find('li').css('margin-right')),
				itemW	= liW + sep,
				cont	= $elem.find('.pcont ul');

			cont.html(cont.html() + cont.html());

			btnL.on('click', function(e) {
				e.preventDefault();
				var me = $(this);
				var cont_ = me.parent().find('.pcont ul');
				var len = (cont_.find('li').length) / 2;
				if(cur == 0){
					cont_
						.stop()
						.css({left:'-' + (itemW) * len + 'px'});
					cur = -(itemW) * len; 
				}
				cur += itemW * distance;
				cont_
					.stop(true, true)
					.animate({left:cur + 'px'});
			});

			btnR.on('click', function(e) {
				e.preventDefault();
				var me = $(this);
				var cont_ = me.parent().find('.pcont ul');
				var len = (cont_.find('li').length) / 2;
				if(cur == -(itemW) * len){
					cont_
						.stop()
						.css({left:'0px'});
					cur = 0;
				}
				cur -= itemW * distance;
				cont_
					.stop(true, true)
					.animate({left:cur + 'px'});
			});
		}

		return PicSlide;

	});

})(
    typeof define === 'function' && define.amd ? define : function(factory) { 
        if(typeof module != 'undefined') {
            module.exports = factory(require); 
        } else if (typeof window != 'undefined') {
            window.PicSlide = factory();
        }
    },
    this
);