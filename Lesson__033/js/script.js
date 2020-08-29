'use strict';

const promoAdv = document.querySelectorAll('.promo__adv > img');
const promoGenre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoInteractiveItem = document.querySelectorAll(
  '.promo__interactive-item'
);

promoAdv.forEach((item) => item.remove());

promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

const movieDB = {
  movies: [
    'Лоан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

promoInteractiveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((films, item) => {
  promoInteractiveList.innerHTML += `
  <li class="promo__interactive-item">
    ${item + 1} ${films}
    <div class="delete"></div>
  </li>`;
});

// ----------------------------

const addInput = document.querySelector('.adding__input');
const promoButton = document.querySelector('.add > button');
const removeBtns = document.querySelectorAll('li > .delete');

promoButton.addEventListener('click', (event) => {
  event.preventDefault();
  addValueToList();
  clearValue();
});

removeBtns.forEach((removeBtn) => {
  removeBtn.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });
});

function addValueToList() {
  let inputVal = addInput.value;
  let cutInput = '';

  if (inputVal.length > 21) {
    inputVal.split();
    cutInput = inputVal.slice(0, 21);
    inputVal = `${cutInput}...`;
  }

  const newLiElement = `
  <li class="promo__interactive-item">
    ${inputVal}
    <div class="delete"></div>
  </li>`;

  promoInteractiveList.insertAdjacentHTML('beforeend', newLiElement);
}

function clearValue() {
  addInput.value = '';
}
