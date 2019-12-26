$(window).on('load', function(){
	$("#loader-bg").delay(500).fadeOut();
	setTimeout(function(){
		$(".mv-bg").toggleClass("mv-anime");
		$(".mv-logo-img01").stop().delay(3000).queue(function(){
			$(this).fadeIn(1000).animate({top:0},{duration:1000,queue: false}).dequeue();
		});
		$(".mv-catch").stop().delay(3000).queue(function(){
			$(this).fadeIn(1000).animate({duration:1000,queue: false}).dequeue();
		});
		$(".mv-logo-img02").stop().delay(4000).queue(function(){
			$(this).fadeIn(1000).animate({top:0},{duration:500,queue: false}).dequeue();
		});
		$("#mv-demo").stop().delay(3000).queue(function(){
			$(this).fadeIn(1000).animate({duration:1000,queue: false}).dequeue();
		});
	},500);
});
$(document).ready(function(){
	$(".mv-logo-img01,.mv-logo-img02,.mv-catch,#mv-demo").css({display: "none"});
	$(".mv-logo-img01").css({top:-50});
	$(".mv-logo-img02").css({top:50});

})

if($(window).innerWidth() <= 1024){
	setTimeout(function(){
		$(".mv-bg").toggleClass("mv-anime");
		$(".mv-logo-img01").stop().delay(2500).queue(function(){
			$(this).fadeIn(1000).animate({top:0},{duration:1000,queue: false}).dequeue();
		});
		$(".mv-catch").stop().delay(1500).queue(function(){
			$(this).fadeIn(1000).animate({duration:1000,queue: false}).dequeue();
		});
		$(".mv-logo-img02").stop().delay(2500).queue(function(){
			$(this).fadeIn(1000).animate({top:0},{duration:1000,queue: false}).dequeue();
		});
		
	},500);
	$(document).ready(function(){
		$(".mv-logo-img01,.mv-logo-img02,.mv-catch").css({display: "none"});
		$("#mv-demo").css({display: "block"});
		$(".mv-logo-img01").css({top:-50});
		$(".mv-logo-img02").css({top:50});
	});
};

//画廊
$(document).ready(function(){
	$(".group1").colorbox({rel:'group1'});
	$(".group1").colorbox({
		maxWidth:"96%",
		maxHeight:"96%"
	});
	$(".no-group").colorbox({
		maxWidth:"96%",
		maxHeight:"96%"
	});
	$(".inline").colorbox({
		inline:true,
		maxWidth:"96%",
		maxHeight:"96%"
	});
});


//音声
$(function () {
	$('.svb1').click(function () {
		audioplay(1);
	});
});
$(function () {
	$('.svb2').click(function () {
		audioplay(2);
	});
});
$(function () {
	$('.svb3').click(function () {
		audioplay(3);
	});
});
$(function () {
	$('.svb4').click(function () {
		audioplay(4);
	});
});
$(function () {
	$('.svb5').click(function () {
		audioplay(5);
	});
});
$(function () {
	$('.svb6').click(function () {
		audioplay(6);
	});
});
$(function () {
	$('.svb7').click(function () {
		audioplay(7);
	});
});
$(function () {
	$('.svb8').click(function () {
		audioplay(8);
	});
});
$(function () {
	$('.svb9').click(function () {
		audioplay(9);
	});
});
function audioplay(num) {
	var media = document.getElementById("sv" + num);
	var audio01 = document.getElementById('sv1');
	var audio02 = document.getElementById('sv2');
	var audio03 = document.getElementById('sv3');
	var audio04 = document.getElementById('sv4');
	var audio05 = document.getElementById('sv5');
	var audio06 = document.getElementById('sv6');
	var audio07 = document.getElementById('sv7');
	var audio08 = document.getElementById('sv8');
	var audio09 = document.getElementById('sv9');
	audio01.pause();
	audio01.currentTime = 0;
	audio02.pause();
	audio02.currentTime = 0;
	audio03.pause();
	audio03.currentTime = 0;
	audio04.pause();
	audio04.currentTime = 0;
	audio05.pause();
	audio05.currentTime = 0;
	audio06.pause();
	audio06.currentTime = 0;
	audio07.pause();
	audio07.currentTime = 0;
	audio08.pause();
	audio08.currentTime = 0;
	audio09.pause();
	audio09.currentTime = 0;
	$('.svb1').attr('src','/somero/oshilove/img/character_btn1.png');
	$('.svb2').attr('src','/somero/oshilove/img/character_btn2.png');
	$('.svb3').attr('src','/somero/oshilove/img/character_btn3.png');
	$('.svb4').attr('src','/somero/oshilove/img/character_btn4.png');
	$('.svb5').attr('src','/somero/oshilove/img/character_btn5.png');
	$('.svb6').attr('src','/somero/oshilove/img/character_btn6.png');
	$('.svb7').attr('src','/somero/oshilove/img/character_btn7.png');
	$('.svb8').attr('src','/somero/oshilove/img/character_btn8.png');
	$('.svb9').attr('src','/somero/oshilove/img/character_btn9.png');
	var dura = media.duration;
	media.play();
	$('.svb' +num ).attr('src','/somero/oshilove/img/character_btn_playing.png');
	$(function () {
		setTimeout(function () {
			$('.svb' + num ).attr('src','/somero/oshilove/img/character_btn' + num + '.png');
		}, dura * 1000);
	});
}

//衣装変更
$('.cloth-1').click(function () { clothchange(1);});
$('.cloth-2').click(function () { clothchange(2);});
$('.cloth-3').click(function () { clothchange(3);});
$('.cloth-4').click(function () { clothchange(4);});
$('.cloth-5').click(function () { clothchange(5);});
$('.cloth-6').click(function () { clothchange(6);});
function clothchange(num) {
	if(num == 1){
		$('.cloth-1').toggleClass('active');
		$('.cloth-2').toggleClass('active');
	}else if(num == 2){
		$('.cloth-1').toggleClass('active');
		$('.cloth-2').toggleClass('active');
	}else if(num == 3){
		$('.cloth-3').toggleClass('active');
		$('.cloth-4').toggleClass('active');
	}else if(num == 4){
		$('.cloth-3').toggleClass('active');
		$('.cloth-4').toggleClass('active');
	}else if(num == 5){
		$('.cloth-5').toggleClass('active');
		$('.cloth-6').toggleClass('active');
	}else if(num == 6){
		$('.cloth-5').toggleClass('active');
		$('.cloth-6').toggleClass('active');
}}

$(function () {
	$('#chara-box01b .chara-cos img').click(function() {
		var img_full = $(this).attr('src').replace('btn','full');
		$('#chara-box01b .chara-img img').fadeOut('fast', function() {
			$(this).attr('src', img_full).fadeIn();
		});
	});
	$('#chara-box02b .chara-cos img').click(function() {
		var img_full = $(this).attr('src').replace('btn','full');
		$('#chara-box02b .chara-img img').fadeOut('fast', function() {
			$(this).attr('src', img_full).fadeIn();
		});
	});
	$('#chara-box03b .chara-cos img').click(function() {
		var img_full = $(this).attr('src').replace('btn','full');
		$('#chara-box03b .chara-img img').fadeOut('fast', function() {
			$(this).attr('src', img_full).fadeIn();
		});
	});
});