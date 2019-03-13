(function(define, global) {

	define(function(require) {

		function Share(elem, sel) {
			var $elem 	= $(elem),
				selLen 	= sel.length,
				title 	= encodeURIComponent(document.title),
				url		= encodeURI(location.href),
				str		= '',
				strNew	= '',
				items 	= [
					{
						id: 'weibo',
						name: '新浪微博',
						url: 'http://service.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url,
						thisClass: 'i-weibo'
					},
					{
						id: 'douban',
						name: '豆瓣',
						url: 'http://www.douban.com/recommend/?url=' + url + '&title=' + title,
						thisClass: 'i-douban'
					},
					{
						id: 'qzone',
						name: 'QQ空间',
						url: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + title + '&url=' + url,
						thisClass: 'i-qzone'
					},
					{
						id: 'renren',
						name: '人人网',
						url: 'http://share.renren.com/share/buttonshare.do?link=' + url + '&title=' + title,
						thisClass: 'i-renren'
					}
				];

			for(var j = 0; j < selLen; j++) {
				for(var i = 0; i < items.length; i++) {
					if(items[i].id != sel[j]) {
						continue;
					}
					str = '<li class="' + items[i].thisClass + '"><a href="' + items[i].url + '" title="' + items[i].name + '" target="blank">' + items[i].name + '</a></li>';
					strNew += str;
				}
			}

			$elem.html(strNew);

		}

	　　return Share;

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