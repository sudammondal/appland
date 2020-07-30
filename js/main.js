$(document).ready(function () {
  $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
          $(".header").addClass("fixedMenu");
      } else {
          $(".header").removeClass("fixedMenu");
      }
      if ($(window).scrollTop() > 0) {
        $(".header_err").addClass("fixedMenu");
    } else {
        $(".header_err").removeClass("fixedMenu");
    }
  });

  $('.sssyour-class').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
  $('.main_slieda_ttstmonials').slick({
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });
})