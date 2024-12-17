var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    zoom:true,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    effect: "fade",
    simulateTouch: false,
    touchStartPreventDefault: true,
   
});




var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop:true,
  simulateTouch: false,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,

    },
  }

});






var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  loop:true,
  simulateTouch: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
  }

});


$(window).on('scroll', function() {
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    // Check if the element is in the viewport
    var elementTop = $this.offset().top;
    var elementBottom = elementTop + $this.outerHeight();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    if (elementBottom >= windowTop && elementTop <= windowBottom) {
      if (!$this.hasClass('animated')) {
        $this.addClass('animated');
        
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'linear',
          step: function() {
            // Add '+' only if the counter has the 'plus-sign' class
            if ($this.hasClass('plus-sign')) {
              $this.text(Math.floor(this.countNum) + "+");
            } else {
              $this.text(Math.floor(this.countNum));
            }
          },
          complete: function() {
            // Final value with or without '+'
            if ($this.hasClass('plus-sign')) {
              $this.text(this.countNum + "+");
            } else {
              $this.text(this.countNum);
            }
          }
        });
      }
    }
  });
});


