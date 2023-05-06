let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__button');

navMain.classList.remove('main-nav_nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav_closed')) {
    navMain.classList.remove('main-nav_closed');
    navMain.classList.add('main-nav_opened');
  } else {
    navMain.classList.add('main-nav_closed');
    navMain.classList.remove('main-nav_opened');
  }
});

let maps = document.querySelector('.contacts__maps');

maps.classList.remove('contacts__maps_nojs');

//open modal index

let button = document.querySelector('.week-product__button');
let modal = document.querySelector('.modal');

button.onclick = function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('modal');
    modal.classList.add('modal_open');
    document.body.style.overflow = '';
  } else {
    modal.classList.add('modal');
    modal.classList.remove('modal_open');
  }
};
