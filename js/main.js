$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
    })
});

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150) {
            $(".header__nav").addClass("sticky");
        } else $(".header__nav").removeClass("sticky");
    });
});

const btnScrollTop = document.querySelector(".scroll_up");

btnScrollTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < "100") {
      $(btnScrollTop).css({ opacity: "0" });
    } else {
      $(btnScrollTop).css({ opacity: "1" });
    }
  });
});

const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const lock = document.querySelector('body');
    iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      lock.classList.toggle('lock');
    });
  }