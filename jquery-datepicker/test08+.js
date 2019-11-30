(function($, window) {
  $(function() {
    // ここに処理を書きます
    $("#date_picker").flatpickr({
        locale: "ja",
        buttonText: "カレンダーから選択", // ツールチップ表示文言
        buttonImage:"http://design-ec.com/d/e_company_12/l_e_company_120.png",
        buttonImageOnly: true,           // 画像として表示
        showOn: "button" 
    });
  });
})(jQuery, window);
