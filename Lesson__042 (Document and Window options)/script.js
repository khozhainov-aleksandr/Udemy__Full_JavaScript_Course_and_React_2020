'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth; // 386
// const height = box.clientHeight; // 336

//. Получаем полную высоту и ширину элементов как в CSS.
// const width = box.offsetWidth; // 400
// const height = box.offsetHeight; // 350

//. Когда мы получаем полную полосу прокрутки и то что за ее пределами, элемент скрола не входит.
// const width = box.scrollWidth; // 386
// const height = box.scrollHeight; // 1347

// console.log(width, height);

// ---

btn.addEventListener('click', () => {
  //. По нажатию на кнопку раскрывает весь список.
  // box.style.height = box.scrollHei ght + 'px';
  //. Получаем в консоль верхнюю границу пикселей при скроле страницы (643)
  //. Используем для получения информации, на сколько пользователь проскролил страницу.
  // console.log(Math.round(box.scrollTop));
});

//. Выдает нам псевдомассов DOMRect
// console.log(box.getBoundingClientRect());

//. Так мы получаем только одно значение.
// console.log(box.getBoundingClientRect().top);

//. Когда присваиваем 0 то страница подымается в самый верх (используется для стрелки с прокруткой сайта в top)
// console.log(document.documentElement.scrollTop = 0);

//* Перелистывание страницу на указанное количество пикселей, от нашего расположения.
//. Указываем два аргумента X и Y.
// console.log(window.scrollBy(0, 400));

//. Указывает куда переместиться, относительно страницы.
// console.log(window.scrollTo(0, 400));
