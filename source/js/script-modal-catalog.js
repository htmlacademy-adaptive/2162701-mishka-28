//open modal catalog

let button = document.querySelector('.catalog__button-basket');
let modal = document.querySelector('.modal');


button.addEventListener("click", function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
});


/*button.onclick = function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
};*/

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('modal_open');
    document.body.style.overflow = '';
  }
};
