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