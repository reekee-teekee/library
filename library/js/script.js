const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
})

nav.addEventListener('click', function (e) {
  if (e.target.matches('a')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
  }
});

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.nav') && !target.closest('.header__burger')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
  }
})

