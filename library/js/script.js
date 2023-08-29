const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const dropMenuGuest = document.querySelector('.drop-menu__no-auth');
const dropMenuUser = document.querySelector('.drop-menu__with-auth');
const profile = document.querySelector('.profile-link');
const dropMenu = document.querySelector('.drop-menu');
const popupLink = document.querySelector('.popup-link');

burger.addEventListener('click', function () {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
});

nav.addEventListener('click', function (e) {
  if (e.target.matches('a')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
});

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.nav') && !target.closest('.header__burger')) {
    nav.classList.remove('open');
    burger.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
});

profile.addEventListener('click', function () {
  dropMenuGuest.classList.toggle('open-menu');
})

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.drop-menu') && !target.closest('.profile-link')) {
    dropMenu.classList.remove('open-menu');
  }
});

dropMenu.addEventListener('click', function (e) {
  if (e.target.matches('a')) {
    dropMenuGuest.classList.remove('open-menu');
    dropMenuUser.classList.remove('open-menu');
  }
});
