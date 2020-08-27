'use strict';

const promoAdv = document.querySelectorAll('.promo__adv > img');
const promoGenre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

// 1) Удалить все рекламные блоки.
promoAdv.forEach((item) => item.remove());

// 2) Изменить жанр фильма.
promoGenre.textContent = 'драма';

// 3) Изменить задний фон постера.
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице.
// 5) Добавить нумерацию
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