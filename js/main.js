let burger_btn = document.querySelector('.burger_btn');
let nav_close = document.querySelector('.nav_close');
let nav = document.querySelector('.nav');

burger_btn.addEventListener('click', () => {
  nav.classList.add('active');
})

nav_close.addEventListener('click', () => {
  nav.classList.remove('active');
})

let homeSwp = new Swiper('.home .swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.home .swp-pagination',
    clickable: true,
  }
})

let homeList = document.querySelectorAll('.home ul li');

if (homeList.length) {
  homeList.forEach((el, elID) => {
    el.onclick = () => {
      homeSwp.slideTo(elID);
      homeList.forEach(i => {
        if (i == el) {
          i.classList.add('active');
        } else {
          i.classList.remove('active');
        }
      })
    }
  })

  homeSwp.on('slideChange', function (e) {
    homeList.forEach((i, idx) => {
      if (idx == homeSwp.realIndex) {
        i.classList.add('active');
      } else {
        i.classList.remove('active');
      }
    })
  });
}

const historySwpRight = new Swiper('.history__swp_right .swiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  direction: 'horizontal',
  loop: true,
  mousewheel: false,
  navigation: {
    nextEl: '.history__swp_right .next-btn'
  },
  breakpoints: {
    1300: {
      slidesPerView: 4,
      direction: 'vertical',
      mousewheel: true,
      spaceBetween: 16,
    },
    740: {
      slidesPerView: 4
    }
  }
});

const historySwpLeft = new Swiper('.history__swp_left .swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  thumbs: {
    swiper: historySwpRight,
  },
});