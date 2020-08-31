'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabParent = document.querySelector('.tabheader__items');

  //* Скрываем табы на странице.
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade'); //. fade - Убираем класс с анимацией.
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  //* Показываем табы на странице.
  //. в ES6 появилась возможность аргументу в функции назначать стандартное число (Если оно не назначено в вызове функции.)
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade'); //. fade - добавляем класс с анимацией.
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  //* Клик на таб и подставляем нужную нам картинку.
  tabParent.addEventListener('click', (event) => {
    const target = event.target;

    //. Ставим фильтр по нажатию на Таб.
    if (target && target.classList.contains('tabheader__item')) {
      //. Перебираем псевдо массив с Табами.
      tabs.forEach((item, i) => {
        //. Если мы нажали на элемент который совпадает с элементом который мы сейчас перебираем по индексу.
        if (target === item) {
          hideTabContent(); //. Скрываем все остальные.
          showTabContent(i); //. i - это [индекс] который будет совпадать с индексом tabsContent
        }
      });
    }
  });
});
