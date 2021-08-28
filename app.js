const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    720: {
      slidesPerView: 1,
    }
  }
});