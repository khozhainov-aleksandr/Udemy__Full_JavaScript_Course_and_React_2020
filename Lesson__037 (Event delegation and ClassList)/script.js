'use strict';

const buttons = document.querySelectorAll('button'),
  btnWrapper = document.querySelector('body');

//. Показывает в консоли сколько классов есть у этого элемента.
// console.log(buttons[0].classList.length);

//. В круглых скобках указываем индекс класса и в консоли показывает название класса под этим индексом
// console.log(buttons[0].classList.item(1));

//. Добавляем red black и green класс (можно указывать несколько классов через запятую)
// console.log(buttons[0].classList.add('red', 'black', 'green'));

//. Удаляем класс second
// console.log(buttons[0].classList.remove('second'));

//. Если класс есть то toggle добавляет а если нету то добавляет класс
// console.log(buttons[0].classList.toggle('red'));

//. Проверка на наличие класса в элементе.
// if (buttons[0].classList.contains('red')) {
//   console.log('red');
// } else {
//   console.log('Nothing');
// }

//. По нажатию на первую кнопу, добавляет класс red на вторую кнопку.
// buttons[0].addEventListener('click', () => {
// if (!buttons[1].classList.contains('red')) {
//   buttons[1].classList.add('red');
// } else {
//   buttons[1].classList.remove('red');
// }

//. То же самое что и выше (но гибко не настраивается).
//   buttons[1].classList.toggle('red');
// });

//> Делегирование событиями.

//+ Пример с использованием - if else
// btnWrapper.addEventListener('click', (event) => {
//. event.target.tagName === 'BUTTON' - Будет срабатывать по всем кнопкам.
//. event.target.classList.contains('first') - будет срабатывать только на той кнопке у которой есть этот класс.
//. event.target.matches('button.first') - Проверяет на совпадение элемента в скобках, отдает нам true или false в скобках указываем название тега и какой класс
// if (event.target && event.target.matches('button.first')) {
//. При нажатии на кнопку с классом first, добавляем новую кнопку.
// const btn = document.createElement('button');
// btn.classList.add('first', 'red');
// btn.textContent = 'Я появилась !';
// btnWrapper.append(btn);

// console.log('ok');
// }
// });

//+ Пример с использованием - foreEach ( Не работает с динамически созданными элементами )
// buttons.forEach((btn) => {
// btn.addEventListener('click', (event) => {
//. Не создает новую кнопку при нажатии на динамически созданный элемент.
// const btn = document.createElement('button');
// btn.classList.add('first', 'red');
// btn.textContent = 'Я появилась !';
// btnWrapper.append(btn);

// console.log('ok');
// });
// });
