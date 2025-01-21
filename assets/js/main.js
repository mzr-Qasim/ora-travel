var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    zoom:true,
    
    autoplay: {
        delay: 7500,
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





/* <div class="content-lists">
                                <ul>
                                    <li>
                                        <div class="content-list-item">
                                                <a href="#" class="link-hover">American Independence Museum</a>
                                                <hr>
                                                <small>8.2 / 10</small>
                                        </div><!-- /.content-list-item -->
                                    </li>  
                                    <li>
                                        <div class="content-list-item">
                                                <a href="#" class="link-hover">Lorem, ipsum dolor.</a>
                                                <hr>
                                                <small>8.2 / 10</small>
                                        </div><!-- /.content-list-item -->
                                    </li>  
                                   
                                    
                                </ul>
                            </div><!-- /.content-lists -->  */












                    //         <nav>
                    //     <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    //         <button class="nav-link active tab-button-style" id="nav-home-tab" data-bs-toggle="tab"
                    //             data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                    //             aria-selected="true">Africa</button>
                    //         <button class="nav-link" id="nav-asia" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    //             type="button" role="tab" aria-controls="nav-asia" aria-selected="false">Asia</button>
                    //         <button class="nav-link" id="nav-north-america" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    //             type="button" role="tab" aria-controls="nav-north-america" aria-selected="false">North
                    //             America</button>
                    //         <button class="nav-link" id="nav-australia" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    //             type="button" role="tab" aria-controls="nav-australia"
                    //             aria-selected="false">Australia</button>
                    //         <button class="nav-link" id="nav-europe" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    //             type="button" role="tab" aria-controls="nav-europe" aria-selected="false">Europe</button>
                    //         <button class="nav-link" id="nav-south-america" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    //             type="button" role="tab" aria-controls="nav-south-america" aria-selected="false">South
                    //             America</button>
                    //     </div>
                    // </nav>


