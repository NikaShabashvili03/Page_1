var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 60,
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
