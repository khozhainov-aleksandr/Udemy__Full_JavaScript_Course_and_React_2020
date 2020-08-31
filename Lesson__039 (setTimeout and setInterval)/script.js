'use strict';

//. Фраза Hello, Alex выведется в консоль через 3 секунды (3000 миллисекунд).
/* const timerId = setTimeout(function () {
  console.log('Hello, Alex');
}, 3000); */

const btn = document.querySelector('.btn');
let i = 1;
let timerId;

btn.addEventListener('click', () => {
  //. Функция logger сработает через 3 секунды.
  // timerId = setTimeout(logger, 3000);

  //. Функция logger будет срабатывать с интервалом в 1 секунду.
  timerId = setInterval(logger, 1000);
});

function logger() {
  if (i === 5) {
    //. Сбрасывает работу таймера.
    clearInterval(timerId);
  }
  console.log('Hello, Alex');
  i++;
}

// ! Рекурсивный setTimeout !
//. С использованием рекурсии, функция не выполниться повторно пока не закончит выполняться вся ее внутренняя структура.
/* let id = setTimeout(function log() {
  console.log('Hello!');
  id = setTimeout(log, 500);
}, 500); */
