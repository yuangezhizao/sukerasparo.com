//top誘導
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('right', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'right' : '10px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'right' : '-100px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//ローディング
$(function() {
  var h = $(window).height();
 
  $('#top,#main-floor').css('display','none');
  $('#loader').height(h).css('display','block');
});
 
$(window).ready(function () { //全ての読み込みが完了したら実行
  $('#loader').delay(800).fadeOut(800);
  $('#top,#main-floor').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',3000);
});

function stopload(){
  $('#top,#main-floor').css('display','block');
  $('#loader').delay(800).fadeOut(800);
}

//hover:メニュー
$(document).ready(function() {
  $('.hover').multirollover({
    suffix:'-on',	
    duration:300,
    crossfade: true
  });
});

//CG
$(function(){
	$('.jslink').click(function(){
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

$(document).ready(function(){
	$(".group1").colorbox({rel:'group1'});
    $(".group1").colorbox({
      maxWidth:"90%",
      maxHeight:"90%"
    });
	$(".group2").colorbox({rel:'group2'});
	$(".group3").colorbox({rel:'group3'});
	$(".inline").colorbox({
		inline:true,
		maxWidth:"90%",
		maxHeight:"90%",
		opacity: 0.7
	});
	$(".group4").colorbox({rel:'group4'});
    $(".group4").colorbox({
      maxWidth:"90%",
      maxHeight:"90%"
    });
	$(".group5").colorbox({rel:'group2'});
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
//時限
$(document).ready(function() {
  $(".view_timer").each(function(index, target) {
    var startDate = $(this).attr("data-start-date");
    var endDate = $(this).attr("data-end-date");
    var nowDate = new Date();

    if (startDate) {
      startDate = new Date(startDate);
    } else {
      startDate = nowDate;
    }
    if (endDate) {
      endDate = new Date(endDate);
    }

    if (startDate <= nowDate && (!endDate || nowDate <= endDate)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

