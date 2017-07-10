$(document).ready(function() {

  $(function() {
    $('a[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.owl-interface').owlCarousel({
    nav:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 1000,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
      0:{
        items:1,
      },
      768:{
        items:3,
      },
      1200:{
        items:5,
      },
    }
  });

  $('.owl-review').owlCarousel({
    items:1,
    nav:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 1000,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  });

});