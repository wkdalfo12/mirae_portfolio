$(function(){
  
//   팝업
$('.maintext').children('a').click(function(){
     $('.popup').slideDown()
     $('.p_left').children('p').children('img').click(function(){
         $('.popup').slideUp()
         
     })
     
     return false;
  })
  
  // v눌렀을때
 var aa = $('.body_w').offset().top;
 
 $('.mainimg').children('.vv').children('a').click(function(){
     $('body,html').stop().animate({
          scrollTop:aa
     },500)
   return false;   
 })
 
 // v2눌렀을때
 var aa2 = $('.footer').offset().top;
 
 $('.body_w').children('.vv').children('a').children('img').click(function(){
      $('body,html').stop().animate({
           scrollTop:aa2
      },500)
      return false;
 })
 
 //푸터 top눌렀을떄
 var aa3 = $('body').offset().top;
 
 $('.f_top').click(function(){
      $('body,html').stop().animate({
           scrollTop:aa3
      },1000)
 })
})


