const bodyHidden = () => {
  document.querySelector('body').style.overflow = 'hidden';
};

const bodyVisible = () => {
  document.querySelector('body').style.overflow = 'visible';
}

let burger_btn = document.querySelector('.burger_btn');
let search_btn = document.querySelector('.header_btns, .search-icon');
let nav_close = document.querySelector('.nav_close');
let nav = document.querySelector('.nav');
let searchBtn = document.querySelector('.search_btn button');
let navLink = document.querySelector('.nav .nav_link');

searchBtn.onclick = () => {
  navLink.classList.add('active');
}

burger_btn.addEventListener('click', () => {
  nav.classList.add('active');
  bodyHidden();
})

search_btn.addEventListener('click', () => {
  nav.classList.add('active');
  bodyHidden();
})

nav_close.addEventListener('click', () => {
  nav.classList.remove('active');
  nav.classList.add('end-active');
  setTimeout(() => {
    nav.classList.remove('end-active');
    bodyVisible();
  }, 400);
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
  // loop: true,
  mousewheel: false,
  navigation: {
    nextEl: '.history__swp_right .next-btn',
    prevEl: '.history__swp_right .prev-btn',
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
