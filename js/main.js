(function ($) {
    "use strict";    
    // Initiate the wowjs
    new WOW().init();    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
            $('.menu-section').addClass("fixed-nav");
          
        } else {
            $('.back-to-top').fadeOut('slow');
            $('.menu-section').removeClass("fixed-nav");
          
        }
    });
   $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
         return false;
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

$(".help-ok").click(function(){
    $(".help-section").toggle();
  });
  

  $(".single_owl ").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : false,
   
});
$(".product_owl ").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,       
    dots: false,
    loop: true,
    nav : false,
    responsive: {
         0:{
             items:4
         },
         768:{
             items:6
         },
         992:{
             items:9
         }
     }
   
});
$(".gallery_owl ").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,       
    dots: false,
    loop: true,
    nav : false,
    responsive: {
         0:{
             items:1
         },
         768:{
             items:1
         },
         992:{
             items:1
         }
     }
   
});
$(".news_owl ").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,       
    dots: false,
    loop: true,
    nav : false,
    responsive: {
         0:{
             items:1
         },
         768:{
             items:1
         },
         992:{
             items:1
         }
     }
   
});
        // Header carousel
var owl = $('.owl-carousel');
$(".owl-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});
$(document).ready(function(event){
$("button.menu-xs").click(function(){
    $("ul.menu").toggleClass("show");
    $("ul.menu ").attr('id', 'site');
   
});
$("ul.menu").click(function(event){


    if (event.target.nextElementSibling) {
       
    } else {
        $("ul.menu").removeClass("show"); 
   }                   
 });             
   
  });
