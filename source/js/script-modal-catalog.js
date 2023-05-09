//open modal catalog

let modal = document.querySelector('.modal');
let button = document.querySelectorAll('.catalog__button-basket');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add('modal_open');
    document.body.style.overflow = '';
  }
};

button.forEach(button => {
  button.addEventListener('click',function () {
  modal.classList.remove('modal_open');
  document.body.style.overflow = 'hidden';
  })
})
