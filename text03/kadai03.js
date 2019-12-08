/*
1.イベントを学習したときのサンプルで画面のどこをクリックしても「ここをクリック」という文字列「だけ」を赤くするように修正してください。

test03.js

(function($, window) {
  $(function() {
  
    $('body').on('click', function() {
        
      $(this).find('#click_me').css({'color': 'red'});
      
    });
    
  });
})(jQuery, window);



2.フォームの最後のサンプルでメールアドレスとパスワードのチェック処理を「関数」で作成し、#loginをクリックしたときに呼び出すように修正してください。

HTML

<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>jQueryとフォーム</h1>
  <form>
    <dl>
      <dt>メールアドレス</dt>
      <dd><input type="text" id="email"></dd>
      <dt>パスワード</dt>
      <dd><input type="password" id="password"></dd>
    </dl>
    <input type="button" id="login" value="ログイン">
  </form>
  <!-- jQueryの読み込み -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

  <!-- 自作JavaScriptの読み込み -->
  <script src="test05+.js"></script>
</body>
</html>


js

(function($, window) {
  $(function() {
  
    function valEmail(){
      
      var mail = $('#email').val(); //HTMLでValue記述はないが初期値はある
      
      if (mail == '') {
          alert('メールアドレスを入力してください');
        } else if (mail.indexOf('@') < 0) {
          alert('メールアドレスには必ず「@」が必要です');
        } else{
          alert(mail);
        }
    }
    
    function valPass(){
      
      var pass = $('#password').val();
    
      if (pass == '') {
          alert('パスワードを入力してください');
        } else if (pass.length < 6) {
          alert('パスワードは6文字以上です');
        } else{
          alert(pass);
        }
    }
    
    $('#login').on('click', function() {
      valEmail(),
      valPass();
    });
  });
})(jQuery, window);



3.jQueryによるAjaxはajax()以外にget()やpost()、getJSON()メソッドがあります。今回学習した課題をgetJSON()で書き換えてみましょう。

(function($, window) {
  $(function() {
    alert('first');
    $('#get_bank_list').on('click', function(e) {
      alert('click');
      var url = 'https://raw.githubusercontent.com/zengin-code/source-data/master/data/banks.json';

      $.getJSON({
        url: url,
        type: 'get',
        data: {}
      }).done(function(data, status, xhr) {
        alert('done');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).fail(function(data, status, err) {
        alert('fail');
        var result = JSON.stringify(data);
        $('#result').val(result);
      }).always(function() {
        alert('always');
      });

      alert('under getJSON');
    });
    alert('last');
  });
})(jQuery, window);



4.デートピッカーのサンプルにボタンを追加して、そのボタンを押したときにカレンダー表示されるように修正してみましょう。
 
HTML

<html>
<head>
  <meta charset="UTF-8">
  <!-- デフォルトのテーマ  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.4.3/flatpickr.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
</head>
<body>
  <h1>jQueryのデートピッカープラグイン</h1>
  
  <div class="flatpickr input-group" data-id="strap">
    <input type="text" data-input>
    <a class="input-button" title="カレンダー" data-toggle>
      <i class="material-icons">date_range</i>
    </a>
  
  </div>

  <!-- jQueryの読み込み -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

  <!-- デートピッカー用プラグインの読み込み -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.4.3/flatpickr.min.js"></script>

  <!-- デートピッカーの日本語化用JSの読み込み -->
  <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/ja.js"></script>

  <!-- 自作JavaScriptの読み込み -->
  <script src="test08+.js"></script>
</body>
</html>


js

(function($, window) {
  $(function() {
    // ここに処理を書きます
    const config = {
      wrap: true
    };
    flatpickr('.flatpickr', config);

  });
})(jQuery, window);



5.「郵便番号から住所入力するjQueryプラグイン」を参考にして、郵便番号→住所変換で、入力する郵便番号を７桁にまとめるように修正してみましょう。

HTML

<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>jQueryの郵便番号→住所変換プラグイン</h1>

  <dl>
    <dt>郵便番号</dt>
    <dd><input type="text" id="zip1"></dd>
    <dt>都道府県</dt>
    <dd><input type="text" id="pref"></dd>
    <dt>市区町村</dt>
    <dd><input type="text" id="city"></dd>
    <dt>町名等</dt>
    <dd><input type="text" id="street"></dd>
  </dl>

  <!-- jQueryの読み込み -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

  <!-- 郵便番号→住所変換用プラグインの読み込み -->
  <script src="https://jpostal-1006.appspot.com/jquery.jpostal.js"></script>

  <!-- 自作JavaScriptの読み込み -->
  <script src="test09.js"></script>
</body>
</html>


JavaScript

(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#zip1').jpostal({
        postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);



6.さらに「検索」ボタンを追加して、そのボタンを押すまでは「検索しない」ように修正してみましょう

HTML

<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>jQueryの郵便番号→住所変換プラグイン</h1>
  <div class="block">
    <p>郵便番号</p>
    <input type="text" id="zip1">
    <input id="btn" type="button" value="住所検索">
    <p>都道府県</p>
    <input type="text" id="pref">
    <p>市区町村</p>
    <input type="text" id="city">
    <p>町名等</p>
    <input type="text" id="street">
  </div>
  <!-- jQueryの読み込み -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <!-- 郵便番号→住所変換用プラグインの読み込み -->
  <script src="https://jpostal-1006.appspot.com/jquery.jpostal.js"></script>
  <!-- 自作JavaScriptの読み込み -->
  <script src="test09.js"></script>
</body>
</html>


JavaScript

(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#zip1').jpostal({
    		click : '#btn',
        postcode : [
            '#zip1'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);


*/