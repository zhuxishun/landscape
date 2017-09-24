/*
 * Application
 */

(function($){
   if(document.body.scrollTop > 200){
        $(".goback").show();
    }
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".goback").show();
        }else{
            $(".goback").hide();
        }
    });
    $('body').on('click','.goback',function(){
        $('body').animate({scrollTop:0},500);
    })
})(jQuery);
