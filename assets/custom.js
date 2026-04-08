document.querySelectorAll('.announcement-bar__swiper').forEach((slider) => {
  const speed = Number(slider.dataset.speed);
  const autoplayEnabled = slider.dataset.autoplay;
  const delay = Number(slider.dataset.delay);

  new Swiper(slider, {
    observer: true,
    observeParents: true,  
    speed: speed,
    loop: true,
    autoplay: autoplayEnabled
      ? { delay: delay }
      : false,
    navigation: {
      nextEl: slider.querySelector('.swiper-button-next'),
      prevEl: slider.querySelector('.swiper-button-prev'),
    }
  });
});

// Search button mobile

const searchBtnMobile = document.querySelector('.site-header-search__icon-mobile')
const searchBtnCloseMobile = document.querySelector('.site-header-search__btnClose')
const mobileSearchWrapper = document.querySelector('.site-header-search__wrapper')

searchBtnMobile.addEventListener('click', () => {
  mobileSearchWrapper.classList.add('open')
})

searchBtnCloseMobile.addEventListener('click', () => {
  mobileSearchWrapper.classList.remove('open')
})

