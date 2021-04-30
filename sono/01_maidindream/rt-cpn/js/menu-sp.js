function　scrollFunction() {
	var this_y = $(this).scrollTop();
	if (this_y > 190) {
		$('#header').addClass('head768');
		$('.drawer').addClass('head768');
	} else {
		$('#header').removeClass('head768');
		$('.drawer').removeClass('head768');
	}	
}
$(window).on('load scroll',function () {
	scrollFunction();
});