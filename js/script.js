const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const dropMenuGuest = document.querySelector('.drop-menu__no-auth');
const dropMenuUser = document.querySelector('.drop-menu__with-auth');
const profile = document.querySelector('.profile-link');
const dropMenu = document.querySelector('.drop-menu');
const loginLink = document.querySelector('.login-btn');
const registerLink = document.querySelector('.register-btn');
const loginPopupLink = document.querySelector('.popup__link-login');
const registerPopupLink = document.querySelector('.popup__link-register');
const loginOpen = document.querySelector('.popup-login');
const registerOpen = document.querySelector('.popup-register');
const popupOff = document.querySelector('.popup');

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



// Клик по ссылке Log in
loginLink.addEventListener('click', function () {
  loginOpen.classList.add('active');
});

// Клик по ссылке Register
registerLink.addEventListener('click', function () {
  registerOpen.classList.add('active');
});

// Открыта модалка Log in, при клике она закрывается и открывается Register 
loginPopupLink.addEventListener('click', function () {
  registerOpen.classList.remove('active');
  loginOpen.classList.add('active');
});

// Открыта модалка Register, при клике она закрывается и открывается Log in
registerPopupLink.addEventListener('click', function () {
  loginOpen.classList.remove('active');
  registerOpen.classList.add('active');
});


// Кнопка закрытия модального окга
const popupCloseBtn = document.querySelectorAll('.close-popup');
if (popupCloseBtn.length > 0) {
  for (let index = 0; index < popupCloseBtn.length; index++) {
    const el = popupCloseBtn[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

// function popupClose()


// Секция Digital Library Cards
// Sign up
const signUpClick = document.querySelector('.sign-btn');

signUpClick.addEventListener('click', function () {
  registerOpen.classList.add('active');
});

// Login
const loginClick = document.querySelector('.login-btn2');

loginClick.addEventListener('click', function () {
  loginOpen.classList.add('active');
});