$(document).ready(function(){
  $("#owl-demo").owlCarousel({
    autoplay: true,
    items: 1,
    center: true,
    loop:true,
    autoplayTimeout: 3500,
    autoplaySpeed: 600,
  });

  $("#owl-question").owlCarousel({
    autoplay: true,
    center: true,
    loop:true,
    autoplayHoverPause: true,
    autoplayTimeout: 2200,
    autoplaySpeed: 600,
    items:3,
    nav:true,
  });

  $("#owl-question-small").owlCarousel({
    autoplay: true,
    center: true,
    loop:true,
    autoplayHoverPause: true,
    autoplayTimeout: 2200,
    autoplaySpeed: 600,
    items:1,
    nav:true,
  });


});
