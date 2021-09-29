$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
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