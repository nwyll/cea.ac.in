import "bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import 'animate.css/animate.css'
import "./sass/main.scss";

$(document).ready(function() {
  $(".student_carousel").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 4500,
	autoplayHoverPause: true,
	nav: true,
	dots: false,
	smartSpeed: 350,
	navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $(".news_carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      }
    }
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
         $('nav').removeClass('shrink');
      }
  });
});
