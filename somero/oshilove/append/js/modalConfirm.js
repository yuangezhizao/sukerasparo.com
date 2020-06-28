/*
 * Confirm Modal Plugin V1.0
 * https://github.com/klutche/confirm_modal
 * Released under the MIT license
 */

$(function(){
	var modal = $(".modal-age");
	var opacity = 1;
	var button = $(".close_modal");
	var limit = 120;
	var cookie = $.cookie("modal");
	if(cookie !== "off"){
		var overlay = $("<div></div>");
		overlay.css({
			"position":"fixed",
			"z-index":100,
			"top":0,
			"left":0,
			"height":100+"%",
			"width":100+"%",
			"background":"#fff",
			"opacity":opacity,
			"z-index":1000
		});
		$("body").append(overlay);
		modal.css("display", "block");
	}else{
		m_start02();
	}
	button.click(function(){
		$(overlay).fadeOut("slow");
		$(modal).hide();
		var clearTime = new Date();
		clearTime.setTime(clearTime.getTime()+(limit*60*1000));
		$.cookie("modal", "off", {expires:clearTime, path:"/"});
	});
	$(".remove_cookie").click(function(){
		$.removeCookie("modal", {expires:-1, path:"/"});
		location.reload();
	});
});

