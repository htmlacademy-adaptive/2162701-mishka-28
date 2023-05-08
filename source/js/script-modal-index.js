//open modal index

let button = document.querySelector('.week-product__button');
let modal = document.querySelector('.modal');

button.addEventListener("click", function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
});

/*button.onclick = function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
};*/

modal.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('modal_open');
    document.body.style.overflow = '';
  }
};
