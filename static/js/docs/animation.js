require(['jquery'], function($) {

	if(!$.browser.webkit) {
		return;
	}

	var holidayTimer = null;

	function action() {
		$('#doc-ft').after('<div id="holiday"><div class="cloudtop"></div><div class="sun"></div><div class="river"></div><div class="fish"></div></div>');
		holidayTimer = setTimeout(function() {
			$('#holiday').hide();
			try {
				delete holidayTimer;
			} catch(e) {}
		}, 10000);
	}

	if($('#holiday')) {
		$('#holiday').remove();
	}

	action();

});