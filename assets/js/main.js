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
  slidesPerView: 4,
  loop:true,
  spaceBetween: 0,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

});






 