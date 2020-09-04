'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // TOPIC: Переключение Табов на странице.

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabParent = document.querySelector('.tabheader__items');

  // SECTION: Скрываем табы на странице.
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade'); // NOTE: fade - Убираем класс с анимацией.
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  // SECTION: Показываем табы на странице.
  // NOTE: в ES6 появилась возможность аргументу в функции назначать стандартное число (Если оно не назначено в вызове функции.)
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade'); //. fade - добавляем класс с анимацией.
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  // SECTION: Клик на таб и подставляем нужную нам картинку.
  tabParent.addEventListener('click', (event) => {
    const target = event.target;

    // NOTE: Ставим фильтр по нажатию на Таб.
    if (target && target.classList.contains('tabheader__item')) {
      // NOTE: Перебираем псевдо массив с Табами.
      tabs.forEach((item, i) => {
        // NOTE: Если мы нажали на элемент который совпадает с элементом который мы сейчас перебираем по индексу.
        if (target === item) {
          hideTabContent(); // NOTE: Скрываем все остальные.
          showTabContent(i); // NOTE: i - это [индекс] который будет совпадать с индексом tabsContent
        }
      });
    }
  });

  // TOPIC: Настройка Таймера (Обратный отсчет времени).

  // NOTE: Время окончания таймера.
  const deadline = '2020-12-31';

  // SECTION: Функция между дедлайном и нашим текущим временем.
  function getTimerRemaining(endTime) {
    // NOTE: Получаем сюда разницу в миллисекундах.
    const t = Date.parse(endTime) - Date.parse(new Date());

    // NOTE: Конвертация миллисекунд в нормальное время. (миллисекунды * секунды * минуты * часы)
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    // NOTE: Используем остаток от деления, что бы получить не больше 24 часов.
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    // NOTE: Используем return для того что бы эти переменные использовать за пределами функции.
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  // SECTION: Функция которая добавляет 0 перед числами, когда там меньше 10.
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  // SECTION: Функция которая будет устанавливать таймер на страницу.
  function setClock(selector, endTime) {
    // NOTE: Универсальное обращение к селекторам для возможности повторного использования на странице.
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    // NOTE: Обновляет таймер каждую секунду.
    const timeInterval = setInterval(upDateClock, 1000);

    // NOTE: Запускаем тут функцию для того что бы при обновлении страницы, таймер не моргал.
    upDateClock();

    // SECTION: Функция которая будет обновлять таймер, каждую секунду.
    function upDateClock() {
      // NOTE: Рассчитает время.
      const t = getTimerRemaining(endTime);

      // NOTE: Запишет данные на страницу.
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // NOTE: Если время ушло в отрицательный показатель то таймер больше не обновлять.
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  // NOTE: Запускаем таймер.
  setClock('.timer', deadline);

  // TOPIC: Открытие и закрытие Модального окна.

  const openModals = document.querySelectorAll('[data-modal]');
  const closeModal = document.querySelector('[data-close]');
  const modalWrapper = document.querySelector('.modal');

  // SECTION: Открываем модальное окно.
  openModals.forEach((item) => {
    item.addEventListener('click', openModalWindow);
  });

  // SECTION: Открытие модального окна при скроле в самый низ.
  window.addEventListener('scroll', showModalByScroll);

  // SECTION: Автоматическое Открытие модального окна через заданное время.
  const modalTimerId = setTimeout(openModalWindow, 60000); // NOTE: 1 минута.

  // SECTION: Закрываем модальное окно.
  closeModal.addEventListener('click', closeModalWindow);

  // SECTION: Закрытие модального окна, по клику за его приделами.
  modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
      closeModalWindow();
    }
  });

  // SECTION: Закрытие модального окна по нажатию на кнопку 'esc'.
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModalWindow();
    }
  });

  function openModalWindow() {
    modalWrapper.classList.add('show');
    modalWrapper.classList.remove('hide');
    // NOTE: Отменяем прокрутку страницы, когда открывается модальное окно.
    document.body.style.overflow = 'hidden';
    // NOTE: Если модальное окно открывалось раньше чем истечет время то оно не будет открываться повторно.
    clearInterval(modalTimerId);
  }

  function closeModalWindow() {
    modalWrapper.classList.add('hide');
    modalWrapper.classList.remove('show');
    // NOTE: Когда закрывается модальное окно, сайт снова можно скролить.
    document.body.style.overflow = '';
  }

  function showModalByScroll() {
    const clientScroll = window.pageYOffset + document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (clientScroll >= pageHeight) {
      openModalWindow();
      // NOTE: Удаляем обработчик события, что бы он не сработал второй раз.
      window.removeEventListener('scroll', showModalByScroll);
    }
	}

	// ----------

	// ----------
});
