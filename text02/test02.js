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