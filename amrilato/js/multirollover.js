/*
 * multiRollover - jQuery Plugin
 * version: 1.2 (Fri, 7 Mar 2014)
 * @requires jQuery v1.7 or later
 * IE 8 (IE9, if using transparent PNG) or later
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Plugin page:
 * https://github.com/ixkaito/multirollover
 *
 * Download URL:
 * https://github.com/ixkaito/multirollover/archive/master.zip
 *
 * Copyright (c) 2013 KITE
 *
 */

;(function ($) {

	$.fn.multirollover = function (options) {

		var opts = $.extend({
			suffix		: '-on',
			duration	: 200,
			crossfade	: false
		}, options);

		var s = opts.suffix,
			d = opts.duration,
			c = opts.crossfade;

		return this.each(function(){

			$(this).find('img').each(function(){

				var p, i, v, z, src, o;

				p = $(this).css('position');
				v = $(this).css('vertical-align');
				z = $(this).css('z-index');

				if(p == 'static' || p == 'relative'){

					if( $(this).css('display') == 'inline' && !$(this).parent().hasClass('multirollover-image')){
						$(this).wrap('<span class="multirollover-image" style="position:relative; display:inline-block; max-width:100%;">');
						$(this).css('position','static');
					}

				}

				i = $(this).parent('.multirollover-image');

				if(p == 'relative'){
					i.css('top' , $(this).css('top'));
					i.css('bottom' , $(this).css('bottom'));
					i.css('left' , $(this).css('left'));
					i.css('right' , $(this).css('right'));
				}

				i.css('vertical-align', v);

				if(z == 'auto'){
					z = 1;
				}else{
					z = z + 1;
				}

				src = $(this).attr('src');
				src = src.replace(/^(.*)(\.jpg|\.gif|\.png)$/g, '$1' + s + '$2');

				$(this).clone().attr('src', src).addClass('multirollover-image-on').insertBefore($(this)).css({
					position	: 'absolute',
					zIndex		: z,
					opacity		: 0
				});

				o = $(this).prev('.multirollover-image-on');

				if($(this).css('position') == 'static' || $(this).css('position') == 'relative'){

					o.css({
						top		: 0,
						left	: 0
					});

				}

				$(this).addClass('multirollover-image-off');

				o.on('error',function(){
					$(this).next('.multirollover-image-off').removeClass('multirollover-image-off');
					$(this).remove();
					return;
				});

			});

			$(this).on({
				'mouseenter': function(){
					$('.multirollover-image-on', this).stop().animate({
						opacity	: 1
					}, d);

					if(c){
						$('.multirollover-image-off', this).stop().animate({
								opacity	: 0
						}, d);
					}

				},
				'mouseleave': function(){
					if(c){
						$('.multirollover-image-off', this).stop().animate({
							opacity	: 1
						}, d);
					}

					$('.multirollover-image-on', this).stop().animate({
						opacity	: 0
					}, d);
				}
			});
		});
	};

})(jQuery);