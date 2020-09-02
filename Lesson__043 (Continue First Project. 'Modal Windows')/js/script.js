'use strict';

window.addEventListener('DOMContentLoaded', () => {
  //+ Переключение Табов на странице.

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

  //+ Настройка Таймера (Обратный отсчет времени).

  //. Время окончания таймера.
  const deadline = '2020-12-31';

  //* Функция между дедлайном и нашим текущим временем.
  function getTimerRemaining(endTime) {
    //. Получаем сюда разницу в миллисекундах.
    const t = Date.parse(endTime) - Date.parse(new Date());

    //. Конвертация миллисекунд в нормальное время. (миллисекунды * секунды * минуты * часы)
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    //. Используем остаток от деления, что бы получить не больше 24 часов.
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    //. Используем return для того что бы эти переменные использовать за пределами функции.
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  //* Функция которая добавляет 0 перед числами, когда там меньше 10.
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  //* Функция которая будет устанавливать таймер на страницу.
  function setClock(selector, endTime) {
    //. Универсальное обращение к селекторам для возможности повторного использования на странице.
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    //. Обновляет таймер каждую секунду.
    const timeInterval = setInterval(upDateClock, 1000);

    //. Запускаем тут функцию для того что бы при обновлении страницы, таймер не моргал.
    upDateClock();

    //* Функция которая будет обновлять таймер, каждую секунду.
    function upDateClock() {
      //. Рассчитает время.
      const t = getTimerRemaining(endTime);

      //. Запишет данные на страницу.
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      //. Если время ушло в отрицательный показатель то таймер больше не обновлять.
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  //. Запускаем таймер.
  setClock('.timer', deadline);

  //+ Открытие и закрытие Модального окна.

  const openModals = document.querySelectorAll('[data-modal]');
  const closeModal = document.querySelector('[data-close]');
  const modalWrapper = document.querySelector('.modal');

  //* Открываем модальное окно.
  openModals.forEach((item) => {
    item.addEventListener('click', () => {
      modalWrapper.classList.add('show');
      modalWrapper.classList.remove('hide');
      //. Отменяем прокрутку страницы, когда открывается модальное окно.
      document.body.style.overflow = 'hidden';
    });
  });

  //* Закрываем модальное окно.
  closeModal.addEventListener('click', closeModalWindow);

  //* Закрытие модального окна, по клику за его приделами.
  modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
      closeModalWindow();
    }
  });

  //* Закрытие модального окна по нажатию на кнопку 'esc'.
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModalWindow();
    }
  });

  function closeModalWindow() {
    modalWrapper.classList.add('hide');
    modalWrapper.classList.remove('show');
    //. Когда закрывается модальное окно, сайт снова можно скролить.
    document.body.style.overflow = '';
  }
});
