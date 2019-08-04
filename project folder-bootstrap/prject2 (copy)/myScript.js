$(function(){
  'use strict';
    //   Adjust slider  Height
    var winH    = $(windows).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider').height(winH - (upperH + navH));
  
  
  $('.featured-work ul li').on('click',function(){
    $(this).addclass('active').siblings().removeClass('active');
    console.log($(this).data('class'));
  });
  
  });


