const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const dropMenuGuest = document.querySelector('.drop-menu__no-auth');
const dropMenuUser = document.querySelector('.drop-menu__with-auth');
const profile = document.querySelector('.profile-link');

burger.addEventListener('click', function () {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
});

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
});

profile.addEventListener('click', function () {
  dropMenuUser.classList.toggle('open-menu');
})

window.addEventListener('click', e => {

  if (!target.closest('.drop-menu')) {
    dropMenuUser.classList.remove('open-menu');
  }
});
