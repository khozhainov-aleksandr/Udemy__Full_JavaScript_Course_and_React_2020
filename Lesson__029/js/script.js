'use strict';

const box = document.querySelector('#box');
const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');

// ---

// Создаем новый элемент на странице (но он еще не появляется на странице)
const div = document.createElement('div');

// Создает текст на странице но он еще не появляется на странице.
// const newText = document.createTextNode('Привет Мир!');

// ---

// Добавляем класс black в созданный элемент div
div.classList.add('black');

// добавляем ново созданный элемент в конец страницы (в самый конец body)
document.body.append(div);

// Тут мы добавляем div элемент в Конец блок с классом wrapper
// wrapper.appendChild(div); // Старый метод.
// wrapper.append(div);

// ---

// Тут мы добавляем div элемент в Начало блок с классом wrapper
// wrapper.prepend(div);

// Вставляем элемент div Перед 2ым элементом
// hearts[1].before(div);

// Вставляем элемент div После 2го элемента
// hearts[1].after(div);

// Старый метод. Вместо 3ох способов выше. Вставляет элемент в родителя wrapper, в круглых скобках первый аргумент это что вы хотим вставить а второй перед каким элементом мы хотим вставить наш div
// wrapper.insertBefore(div, heart[1]);

// ---

// удаляем 3ий элемент (в Круглых скобках после remove не чего указывать не нужно!)
// hearts[2].remove();

// Старый метод, указываем родителя и в скобках указываем какой элемент хотим удалить.
// wrapper.removeChild(hearts[0]);

// ---

// Заменяем один элемент на другой. (заменяемый элемент удаляется)
// hearts[1].replaceWith(btns[4]);

// Старый метод. Первый аргумент указываем на че место хотим поставить элемент, а второй аргумент, какой элемент переместить на новое место.
// wrapper.replaceChild(button[0], hearts[2]);

// ---

// Вставляет верстку на страницу.
div.innerHTML = `<h1>Hello</h1>`;

// Вставляет обычный текст. Используется для работы с пользователем.
// div.textContent = 'Alex';

div.insertAdjacentHTML('afterbegin', `<h2>Hello</h2>`);
// beforebegin - вставляет разметку h2 перед тегом div.
// afterbegin - вставляет во внутрь (в начало) элемента, в самый верх.
// beforeend - вставляет во внутрь (в конец) элемента, в самый низ.
// afterend - вставляет разметку h2 после тега div.