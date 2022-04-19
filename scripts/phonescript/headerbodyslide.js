var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-sprike",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-sprike-button-next",
    prevEl: ".swiper-sprike-button-prev",
  },
});
