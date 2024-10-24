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