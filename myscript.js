$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var postion = target.offset().top;
    $('body,html').animate({
      scrollTop:postion
    },speed,'swing');
    return false;
  });

  //トグルアイコン
  var list = $('.nav-menu-list');
  var icon = $('.fas');
  $(".toggle").on('click',function(){
    // $('.nav-menu-list').slideToggle();
    if(list.hasClass('active')){
      list.removeClass('active');
      list.slideUp();

      icon.removeClass('fa-times');
      icon.addClass('fa-align-justify');
    }else{
      list.addClass('active');
      list.slideDown();

      icon.removeClass('fa-align-justify');
      icon.addClass('fa-times');
    }

  });

  $(window).resize(function(){
    if($(window).width() > 968){
      $('.nav-menu-list').show();
    }else{
      $('.nav-menu-list').hide();
      list.removeClass('active');
      icon.removeClass('fa-times');
      icon.addClass('fa-align-justify');
    }
  })




});
