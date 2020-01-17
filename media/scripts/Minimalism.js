$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.cursor-pointer').outerHeight();

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu > header_yuksekligi){$('.cursor-pointer').addClass('yin');} 
        else {$('.cursor-pointer').removeClass('yin');}

        if (kaydirma_cubugu > cubuk_seviye){$('.cursor-pointer').removeClass('chu');} 
        else {$('.cursor-pointer').addClass('chu');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});
$(document).ready((function(_this) {
    return function() {
      var bt;
      bt = $('#back_to_top');
      if ($(document).width() > 480) {
        $(window).scroll(function() {
          var st;
          st = $(window).scrollTop();
          if (st > 30) {
            return bt.css('display', 'block');
          } else {
            return bt.css('display', 'none');
          }
        });
        return bt.click(function() {
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
      }
    };
  })(this));
  
const menuContainer = document.querySelector('.menu-container')
const menus = document.querySelectorAll('.menu-container .menu')
const mask = document.querySelector('.mask')
const latestArticle = document.querySelector('.latest-article')
const openMenu = () => {
  menuContainer.classList.add('open')
  menus.forEach(menu => {
    menu.classList.add('animated', 'fadeInLeft')
  })
  mask.classList.add('open')
}

const closeMenu = () => {
  menuContainer.classList.remove('open')
  menus.forEach(menu => {
    menu.classList.remove('animated', 'fadeInLeft')
  })
  mask.classList.remove('open')
}