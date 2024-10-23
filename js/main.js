let burger_btn = document.querySelector('.burger_btn');
let nav_close = document.querySelector('.nav_close');
let nav = document.querySelector('.nav');

burger_btn.addEventListener('click', () => {
  nav.classList.add('active');
})

nav_close.addEventListener('click', () => {
  nav.classList.remove('active');
})
