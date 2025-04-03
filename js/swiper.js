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
  const nextButton = document.querySelector(".swiper-button-next");

  const firstSlideIndex = 0;
  const lastSlideIndex = swiper.slides.length - swiper.loopedSlides;

  console.log(
    `Real Index: ${swiper.realIndex}, Last Slide Index: ${lastSlideIndex}`
  );

  if (swiper.realIndex === firstSlideIndex) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "flex";
  }

  if (swiper.realIndex === lastSlideIndex) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "flex";
  }
}
