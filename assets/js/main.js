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







 