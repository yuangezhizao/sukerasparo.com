$(window).on('load', function(){
	$("#loader-bg").delay(500).fadeOut();
	setTimeout(function(){
		$(".mv-bg").stop().delay(0).queue(function(){
			$(this).fadeIn(300).animate({duration:300,queue: false}).dequeue();
		});
		$(".mas-up").stop().delay(300).queue(function(){
			$(this).fadeIn(500).animate({duration:300,queue: false}).dequeue();
		});
		$(".mv-trailer").stop().delay(300).queue(function(){
			$(this).fadeIn(500).animate({duration:300,queue: false}).dequeue();
		});
		$(".mv-banner").stop().delay(300).queue(function(){
			$(this).fadeIn(500).animate({duration:300,queue: false}).dequeue();
		});
		$(".mv-text01").stop().delay(300).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text02").stop().delay(1000).queue(function(){
			$(this).fadeIn(500).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text03").stop().delay(1500).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text04").stop().delay(2300).queue(function(){
			$(this).fadeIn(500).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text05").stop().delay(2800).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text06").stop().delay(3600).queue(function(){
			$(this).fadeIn(500).animate({duration:800,queue: false}).dequeue();
		});
		$(".mv-text-logo").stop().delay(4100).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		
		$(".mv-text07").stop().delay(4800).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		$(".icn-tw-copy").stop().delay(4800).queue(function(){
			$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
		});
		
	},500);
});
$(document).ready(function(){
	$(".mas-up,.mv-bg,.mv-text01,.mv-text02,.mv-text03,.mv-text04,.mv-text05,.mv-text06,.mv-text07,.mv-text-logo,.icn-tw-copy,.mv-banner,.mv-trailer").css({display: "none"});
	
})

if($(window).innerWidth() <= 1027){
	$(".icn-tw-copy").stop().delay(4800).queue(function(){
		$(this).fadeIn(800).animate({duration:800,queue: false}).dequeue();
	});
	$(document).ready(function(){
		$(".icn-tw-copy").css({display: "none"});
	})
};

//if($(window).innerWidth() <= 640){
//$("#mv-demo").stop().delay(300).queue(function(){
//		$(this).fadeIn(500).animate({duration:800,queue: //false}).dequeue();
//	});
//	$(document).ready(function(){
//		$("#mv-demo").css({display: "none"});
//	})
//};