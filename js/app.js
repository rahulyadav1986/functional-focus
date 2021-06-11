window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
});



$('.menu').slicknav({
    label: '',
    prependTo: '.menu_place',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#blog_carousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  dots:false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
jQuery('#testimonials-carousel').owlCarousel({
  loop:true,
  margin:50,
  nav:false,
  dots:true,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
// window.onscroll = function() {myFunction()};

// var menu = document.getElementById("menu");
// var sticky = menu.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     menu.classList.add("sticky");
//   } else {
//     menu.classList.remove("sticky");
//   }
// }

// Add minus icon for collapse element which is open by default
jQuery(".collapse.show").each(function(){
  jQuery(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
});

// Toggle plus minus icon on show hide of collapse element
jQuery(".collapse").on('show.bs.collapse', function(){
  jQuery(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function(){
  jQuery(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
});

// ===== Scroll to Top ==== 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




  


