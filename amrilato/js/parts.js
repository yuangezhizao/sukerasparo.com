//top�U��
$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('right', '-100px');
    var showFlag = false;
    //�X�N���[����100�ɒB������{�^���\��
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
    //�X�N���[�����ăg�b�v
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//���[�f�B���O
$(function() {
  var h = $(window).height();
 
  $('#top,#main-floor').css('display','none');
  $('#loader').height(h).css('display','block');
});
 
$(window).ready(function () { //�S�Ă̓ǂݍ��݂�������������s
  $('#loader').delay(800).fadeOut(800);
  $('#top,#main-floor').css('display', 'block');
});
 
//10�b�������狭���I�Ƀ��[�h��ʂ��\��
$(function(){
  setTimeout('stopload()',3000);
});

function stopload(){
  $('#top,#main-floor').css('display','block');
  $('#loader').delay(800).fadeOut(800);
}

//hover:���j���[
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
//�L��������
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
//����
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

