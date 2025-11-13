document.addEventListener('DOMContentLoaded', function () {
  // checa existência antes de inicializar
  const el = document.querySelector('.swiper');
  if (!el || typeof Swiper === 'undefined') return;

  const swiper = new Swiper(el, {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 600,
    a11y: {
      enabled: true,
      prevSlideMessage: 'Slide anterior',
      nextSlideMessage: 'Próximo slide',
      paginationBulletMessage: 'Ir para slide {{index}}',
    }
  });
});


//3000, 600