$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixedMenu");
        } else {
            $(".header").removeClass("fixedMenu");
        }
    });
    
});
// $(document).ready(function () {
//     $('.sssyour-class').slick({
//         autoplay: true,
//         arrows: false,
//         slidesToScroll: 1,
//         infinite: true,
//         slidesToShow: 4,
//         dots: true,
//         focusOnSelect: true,
//     });
// });
$('.sssyour-class').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  