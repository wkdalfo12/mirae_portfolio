$(function(){

//   팝업
$('.maintext').children('a').click(function(){
     $('.popup').slideDown()
     $('.p_left').children('p').children('img').click(function(){
         $('.popup').slideUp()
     })
     return false;
  })

// 오른쪽상단 메뉴아이콘 눌렀을때
$('.top_menu a img').click(function(){
    $('.menunone').slideToggle(500)
    return false;
})

// 메뉴아이콘 안에 메뉴타이틀 클릭했을때
$('.menunone ul li.menunone_t').click(function(){
    $('body,html').stop().animate({
         scrollTop:aa
    },500)
    $('.menunone').css({
        display:'none'
    })
    $('.progress').css({
        display:'block'
    })
    return false;
})
var bb = $('.footer').offset().top
$('.menunone ul li.menunone_b').click(function(){
    $('body,html').stop().animate({
         scrollTop:bb
    },500)
    $('.menunone').css({
        display:'none'
    })
    return false;
})

 // 스크롤내렸을때(skills)
 var skilloffset = $('.body_w').offset().top;
 $(window).scroll(function(){
     var ss = $(this).scrollTop();
       if(ss < skilloffset){
           $('.progress').css({
               display:'block'
           })
       }
 })

  // v눌렀을때
 var aa = $('.body_w').offset().top;
 $('.mainimg').children('.vv').children('a').click(function(){
     $('body,html').stop().animate({
          scrollTop:aa
     },500)
     $('.progress').css({
         display:'block'
     })
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

// 프로젝트 이미지 하버했을때
$('.footer .footer_img a').mouseenter(function(){

    $(this).children('span').addClass('on')
    return false;
})
$('.footer .footer_img a').mouseleave(function(){
    $(this).children('span').removeClass('on')
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
