'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnShownModel = document.querySelectorAll('.show-modal');

for (let i = 0; i < 3; i++) {
  console.log(
    btnShownModel[i].addEventListener('click', function () {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    })
  );
}

btnCloseModel.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

//how to add key type model./
