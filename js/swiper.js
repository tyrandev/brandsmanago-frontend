const swiper = new Swiper(".featured-products", {
  loop: true,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: "auto",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init: function () {
      updateNavigationButtons(this);
    },
    slideChange: function () {
      updateNavigationButtons(this);
    },
  },
});

function updateNavigationButtons(swiper) {
  const prevButton = document.querySelector(".swiper-button-prev");

  const firstSlideIndex = 0;

  console.log(`Real Index: ${swiper.realIndex}`);

  if (swiper.realIndex === firstSlideIndex) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "flex";
  }

}
