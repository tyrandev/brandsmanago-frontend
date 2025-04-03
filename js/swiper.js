var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 18,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverflow: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
