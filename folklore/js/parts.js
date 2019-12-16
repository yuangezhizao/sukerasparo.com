$(window).on('load', function(){
	$("#loader-bg").delay(1000).fadeOut();
	setTimeout(function(){
		$(".mv-chara-bg").stop().delay(0).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-chara01").stop().delay(1000).queue(function(){
			$(this).fadeIn(1000).animate({duration: 1000,queue: false}).dequeue();
		});
		$(".mv-chara02,.mv-chara03").stop().delay(2500).queue(function(){
			$(this).fadeIn(1200).animate({duration:1500,queue: false}).dequeue();
		});
		$(".mv-text01").stop().delay(4000).queue(function(){
			$(this).fadeIn(1000).animate({duration:1000,queue: false}).dequeue();
		});
		$(".mv-text02").stop().delay(5300).queue(function(){
			$(this).fadeIn(800).animate({duration:1000,queue: false}).dequeue();
		});
		$(".mv-text03").stop().delay(6300).queue(function(){
			$(this).fadeIn(1000).animate({duration:1000,queue: false}).dequeue();
		});
		$(".mv-text04").stop().delay(7300).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text05").stop().delay(8300).queue(function(){
			$(this).fadeIn(1000).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text06").stop().delay(9300).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text07").stop().delay(10300).queue(function(){
			$(this).fadeIn(1000).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-logo").stop().delay(11500).queue(function(){
			$(this).fadeIn(800).animate({bottom:25},{duration:800,queue: false}).dequeue();
		});
	},500);
});
$(document).ready(function(){
	$(".mv-chara01,.mv-chara02,.mv-chara03,.mv-logo,.mv-chara-bg,.mv-text01,.mv-text02,.mv-text03,.mv-text04,.mv-text05,.mv-text06,.mv-text07").css({display: "none"});
})