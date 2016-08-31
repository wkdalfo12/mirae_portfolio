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

// 프로젝트 이미지 하버했을때
// $('.footer .footer_img a').mouseenter(function(){
//     var aa = $(this).index()
//         $('.f_img_none ul li').eq(aa).css({
//             display:'block'
//         }).siblings().css({
//             display:'none'
//         })
// })

 //푸터 top눌렀을떄
 var aa3 = $('body').offset().top;

 $('.f_top').click(function(){
      $('body,html').stop().animate({
           scrollTop:aa3
      },1000)
 })



})
