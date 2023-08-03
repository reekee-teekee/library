let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('open');
});

/* document.addEventListener('mouseup', function (e) {

  if (!menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});
*/