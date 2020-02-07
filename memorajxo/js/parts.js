$(window).on('load', function(){
	$("#loader-bg").delay(500).fadeOut();
	setTimeout(function(){
		$(".mv-chara-bg").stop().delay(0).queue(function(){
			$(this).fadeIn(500).animate({bottom:0},{duration: 500,queue: false}).dequeue();
		});
		$(".mv-chara-onsale").stop().delay(800).queue(function(){
			$(this).fadeIn(800).animate({bottom:0},{duration: 500,queue: false}).dequeue();
		});
		$(".mv-logo").stop().delay(1850).queue(function(){
			$(this).fadeIn(800).animate({bottom:20},{duration: 800,queue: false}).dequeue();
		});
		$(".mv-banner02").stop().delay(1000).queue(function(){
			$(this).fadeIn(800).animate({duration: 500,queue: false}).dequeue();
		});
		$("#mv-demo").stop().delay(1000).queue(function(){
			$(this).fadeIn(800).animate({duration: 500,queue: false}).dequeue();
		});
		$("#perticle_1").stop().delay(1850).queue(function(){
			$(this).fadeIn(800).animate({duration: 500,queue: false}).dequeue();
		});
		$(".mv-catch div").stop().delay(2000).queue(function(){
			$(this).fadeIn(800).animate({duration: 500,queue: false}).dequeue();
		});
		$(".mas-up div").stop().delay(2000).queue(function(){
			$(this).fadeIn(800).animate({duration: 500,queue: false}).dequeue();
		});

	},500);
});
$(document).ready(function(){
	$(".mv-chara-onsale,.mv-logo,.mv-chara-bg,.mv-catch div,#perticle_1,.mv-banner02").css({display: "none"});
	$(".mv-logo").css({bottom: 40});
})



$(function() {
	$(".f-link").click(function(event){
		event.preventDefault();
		var url = this.href;
		var parts = url.split("#");
		var target = parts[1];
		var target_offset = $("#"+target).offset();
		var target_top = target_offset.top;
		$('html, body').animate({
			opacity: 0,
			scrollTop: target_top
		}, 650, function() {
			$('html, body').animate({
				opacity: 1,
			}, 150);
		});
	});
	$('a.p-top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 300,
			opacity: 0
		}, 400, function() {
			$('html, body').animate({
				opacity: 1,
				scrollTop: 0
			}, 150);
		});
	});
});
//キャラ差分
function showimg1(){
	document.imgLink.src = "image/chara1-01.png";
}
function showimg2(){
	document.imgLink.src = "image/chara1-02.png";
}
function showimg3(){
	document.imgLink2.src = "image/chara2-01.png";
}
function showimg4(){
	document.imgLink2.src = "image/chara2-02.png";
}
function showimg5(){
	document.imgLink3.src = "image/chara3-01.png";
}
function showimg6(){
	document.imgLink3.src = "image/chara3-02.png";
}
function showimg7(){
	document.imgLink4.src = "image/chara4-01.png";
}
function showimg8(){
	document.imgLink4.src = "image/chara4-02.png";
}
function showimg9(){
	document.imgLink5.src = "image/chara5-01.png";
}
function showimg10(){
	document.imgLink5.src = "image/chara5-02.png";
}

$(function(){
	$("#nav-toggle").click(function(){
		$("#navi").slideToggle();
		return false;
	});
	$(window).resize(function(){
		var win = $(window).width();
		var p = 767;
		if(win > p){
			$("#navi").show();
		} else {
			$("#navi").hide();
		}
	});
});
$(function() {
	var win = $(window).width();
	var p = 767;
	if(win < p)$(function(){
		$(".menu li a").click(function(){
			$("#navi").hide();
		});

	});
});