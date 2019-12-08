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