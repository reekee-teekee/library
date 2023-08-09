const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const link = document.querySelector('.menu__item-link')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('open');
  link.classList.toggle('open');
});
