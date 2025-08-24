document.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);

let swiperElement = null;

function initSwiper() {
  const swiperEl = document.querySelector('.service__swiper');

  if (!swiperEl) return;

  if (window.innerWidth < 768 && !swiperElement) {
    swiperElement = new Swiper(swiperEl, {
      slidesPerView: 'auto',
      centeredSlides: true,
      centeredSlidesBounds: true,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperElement) {
    swiperElement.destroy(true, true);
    swiperElement = null;
  }
}


document.addEventListener("DOMContentLoaded", () => {

  const swiperContainer = document.querySelector(".service__swiper");
  const furtherContainer = document.querySelector(".service__further");
  const furtherText = document.querySelector(".service__further-text");


  furtherContainer.addEventListener("click", (e) => {
    e.preventDefault();

    swiperContainer.classList.toggle("show-all");

    if (swiperContainer.classList.contains ("show-all") ) {
      furtherText.textContent = "Скрыть";
    } else {
      furtherText.textContent = "Показать все";
    }
  });
});