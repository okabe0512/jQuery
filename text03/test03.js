(function($, window) {
  $(function() {
  
    $('body').on('click', function() {
        
      $(this).find('#click_me').css({'color': 'red'});
      
    });
    
  });
})(jQuery, window);
