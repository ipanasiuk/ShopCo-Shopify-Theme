function initSwiper(container = document) {
  const sliders = container.querySelectorAll('.announcement-bar__swiper');

  sliders.forEach((slider) => {
    if (slider.swiper) {
      slider.swiper.destroy(true, true);
    }

    const speed = Number(slider.dataset.speed);
    const autoplayEnabled = slider.dataset.autoplay === 'true';
    const delay = Number(slider.dataset.delay);

    console.log(autoplayEnabled)

    new Swiper(slider, {
      observer: true,
      observeParents: true,
      speed,
      loop: true,
      autoplay: autoplayEnabled ? { delay } : false,
      navigation: {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        0: {
          navigation: {
            enabled: false
          }   
        },
        768: {
          navigation: {
            enabled: true
          }          
        }
      }
    });
  });
}

// initial load
initSwiper();

// Shopify editor
document.addEventListener('shopify:section:load', (e) => {
  initSwiper(e.target);
});