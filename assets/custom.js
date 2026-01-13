document.querySelectorAll('.announcement-bar__swiper').forEach((slider) => {
  const speed = Number(slider.dataset.slider_speed);
  const autoplayEnabled = slider.dataset.slider_autoplay === 'true';
  const delay = Number(slider.dataset.slider_delay);

  new Swiper(slider, {
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