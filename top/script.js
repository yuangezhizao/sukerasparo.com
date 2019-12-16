$(window).on('load', function(){
	$("#loader-bg").delay(250).fadeOut();
});
//
$(function(){
	var tgElm = $('.info-box p'), 
			tagType = "span";
	tgElm.each(function(){
		var tgText = $(this).html();
		tgText = tgText.replace(/[「『（【｛［〔〈《]/g, '<' + tagType + ' style="display: inline-block; margin-left: -0.2em;">$&</' + tagType + '>');
		tgText = tgText.replace(/[」』）】｝］〕〉》，]/g, '<' + tagType + ' style="display: inline-block; margin-right: -0.2em;">$&</' + tagType + '>');
		tgText = tgText.replace(/[・；：]/g, '<' + tagType + ' style="margin-left: -0.2em; margin-right: -0.2em;">$&</' + tagType + '>');
		$(this).html(tgText);
	});
});

//
const defaultDispCnt = 12; // 初期表示件数
const addDispCnt = 12;     // 追加表示件数

(function ($) {
	$(function () {
		let maxDispCnt = 0;     // 最大表示件数
		let currentDispCnt = 0; // 現在の表示件数
		let tileList = $('.info-list').children('li.info-box'); // 一覧の子要素をすべて取得

		// 一覧の初期表示
		$(tileList).each(function (i, elem) {

			// 初期表示件数のみ表示
			if (i < defaultDispCnt) {
				$(this).show().css("display", "inline-block");
				currentDispCnt++;
			}
			maxDispCnt++;

			// もっと見るボタンを表示
			if (maxDispCnt > currentDispCnt) {
				$('.readMoreBtn').show().css("display", "block");
			}
		});

		// もっと見るボタンクリックイベント
		$('.readMoreBtn').click(function () {
			var newCount = currentDispCnt + addDispCnt; // 新しく表示する件数

			// 新しく表示する件数のみ表示
			$(tileList).each(function (i, elem) {
				if (currentDispCnt <= i && i < newCount) {
					$(this).show().css("display", "inline-block");
					currentDispCnt++;
				}
			});

			// もっと見るボタンを非表示
			if (maxDispCnt <= newCount) {
				$(this).hide();
			}
			return false;
		});
	});
}(jQuery));