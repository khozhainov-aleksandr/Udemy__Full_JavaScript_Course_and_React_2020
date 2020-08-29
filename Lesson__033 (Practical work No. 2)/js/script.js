'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Лоан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkBox = addForm.querySelector('[type="checkbox"]');

  // +++
  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkBox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log(`Добавлен фильм: '${newFilm}' в Любимые фильмы !`);
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => item.remove());
  };

  const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // +++
  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films); // Когда у нас будут удаляться элементы то список будет пересортирован.

    films.forEach((film, item) => {
      // Подставляем item + 1 так как счет начинается с 0 и что бы пользователь видел нумерацию с 1.
      parent.innerHTML += `
      <li class="promo__interactive-item">
        ${item + 1} ${film}
        <div class="delete"></div>
      </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove(); // Удаляем li элемент.
        movieDB.movies.splice(i, 1); // Вырезаем элемент с массива с порядковым номером i.

        // Используем рекурсию для того что бы нумерация списка перестраивалась и сохранялась последовательность.
        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});

// ----------------------------

//   const addInput = document.querySelector('.adding__input');
//   const promoButton = document.querySelector('.add > button');
//   const removeBtns = document.getElementsByClassName('delete');
//   const checkBox = document.querySelector('#checkbox');

//   promoButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     addValueToList();
//     noCheckBoxInput();
//     clearValue();
//     removeListBtn();
//   });

//   function addValueToList() {
//     let inputVal = addInput.value;
//     let cutInput = '';

//     if (inputVal.length > 21) {
//       inputVal.split();
//       cutInput = inputVal.slice(0, 21);
//       inputVal = `${cutInput}...`;
//     }

//     const newLiElement = `
//   <li class="promo__interactive-item">
//     ${inputVal}
//     <div class="delete"></div>
//   </li>`;

//     promoInteractiveList.insertAdjacentHTML('beforeend', newLiElement);
//     sortList();
//   }

//   function noCheckBoxInput() {
//     if (checkBox.checked) {
//       console.log(`Добавлен фильм: '${addInput.value}' в Любимые фильмы !`);
//     }
//   }

//   function clearValue() {
//     addInput.value = '';
//   }

//   function sortList() {
//     const newProtoLists = promoInteractiveList.childNodes;
//     let a = [];
//     for (let oneProtoList of newProtoLists) {
//       if (oneProtoList.nodeName === '#text') {
//         continue;
//       }
//       a.push(oneProtoList);
//     }
//     console.log(a.sort());
//   }

//   function removeListBtn() {
//     for (let removeBtn of removeBtns) {
//       removeBtn.addEventListener('click', (event) => {
//         event.target.parentNode.remove();
//       });
//     }
//   }
// });
