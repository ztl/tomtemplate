(function(define, global) {

	define(function(require) {

		var DEFAULT_CONF = {
			trigger: 'click'
		};

		function Tab(tab, view, options) {
			$tab = $(tab);
			view = $(view);
			hoverTimer = null;

			$.extend(this, DEFAULT_CONF, options);

			switch(trigger) {
				case 'mouseenter':
					$tab.each(function(inx, elem) {
						function run(inx) {
							$(elem).on('mouseenter', function() {
								var me = $(this);
								clearTimeout(hoverTimer);

								hoverTimer = setTimeout(function() {
									me
										.siblings().removeClass('active').end()
										.addClass('active');
									view
										.hide()
										.eq(inx).show();
								}, 200);
							});
						}
						run.call(elem, inx);
					});
				default:
					$tab.each(function(inx, elem) {
						function run(inx) {
							$(elem).on('click', function(evt) {
								var me = $(this);
								evt.preventDefault();

								me
									.siblings().removeClass('active').end()
									.addClass('active');
								view
									.hide()
									.eq(inx).show();
							});
						}
						run.call(elem, inx);
					});
			}
		}

	　　return Tab;

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