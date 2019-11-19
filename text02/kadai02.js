//1.jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。

(function($, window) {
  $(function() {

    $('h2').remove();
    
  });
})(jQuery, window);


//2.#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、
///その違いについて比べてみましょう。

/*text()は指定した要素に含まれる子孫要素のテキストノードすべてを結合して返却する。
  html()は指定した要素のHTMLを返却する（指定した要素は含まない）。

  指定した要素がテキストノードのみであれば、html()とtext()の実行結果は同じだが、
  指定した要素にHTMLが含まれる場合、HTMLを返却するというところがtext()との違い。*/


//3.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。

(function($, window) {
  $(function() {
    
    $('#index').append('<li>メソッド</li>');

  });
})(jQuery, window);


//4.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。
/*5.4.でalertではなく、各文字列の最後にその長さを追加してみましょう。
  例：jQueryのはじめ方[11文字]*/
  
  
(function($, window) {
  $(function() {
    
    $('#index').find('li').each(function(){
    var wordCount = $(this).text().length;
    alert(wordCount);
    
    $(this).append("[");
    $(this).append(wordCount);
    $(this).append("]");
    });  
  });
})(jQuery, window);