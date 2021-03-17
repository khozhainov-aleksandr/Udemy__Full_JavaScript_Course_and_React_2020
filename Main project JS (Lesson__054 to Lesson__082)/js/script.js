'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const JSONServerMenu = 'http://localhost:3000/menu';
  const JSONServerRequest = 'http://localhost:3000/requests';

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
  const deadline = '2021-12-31';

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
  const modalWrapper = document.querySelector('.modal');

  // SECTION: Открываем модальное окно.
  openModals.forEach((item) => {
    item.addEventListener('click', openModalWindow);
  });

  // SECTION: Открытие модального окна при скроле в самый низ.
  window.addEventListener('scroll', showModalByScroll);

  // SECTION: Автоматическое Открытие модального окна через заданное время.
  const modalTimerId = setTimeout(openModalWindow, 60000); // NOTE: 1 минута.

  // SECTION: Закрытие модального окна, по клику за его приделами.
  modalWrapper.addEventListener('click', (event) => {
    // NOTE: Если мы кликаем на подложку ИЛИ если кликаем на крестик то закрывается модальное окно.
    if (event.target === modalWrapper || event.target.getAttribute('data-close') === '') {
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
    const clientScroll =
      window.pageYOffset + document.documentElement.clientHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (clientScroll >= pageHeight) {
      openModalWindow();
      // NOTE: Удаляем обработчик события, что бы он не сработал второй раз.
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  // TOPIC: Используем классы для карточек.

  // SECTION: Создание шаблона для карточек.
  class MenuCard {
    // NOTE: добавляем спрэд оператор в конце ...classes
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      // NOTE: Если classes будет пустым то назначить ему классы по умолчанию.
      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);

    // Ручная обработка ошибки.
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

    // SECTION: Добавляем шаблонные карточки.
  getResource(JSONServerMenu)
    .then(data => {
      data.forEach(({src, alt, title, descr, price}) => {
        new MenuCard(src, alt, title, descr, price, '.menu .container').render();
      });
    });

  // TOPIC: Реализация скрипта отправки данных на сервер.
  const forms = document.querySelectorAll('form');
  const massage = {
    loading:'./icons/spinner.svg',
    success:'Спасибо! Скоро мы с вами свяжемся.',
    failure:'Что-то пошло не так ...'
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMassage = document.createElement('img');
      statusMassage.src = massage.loading;
      statusMassage.textContent = massage.loading;
      statusMassage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.append(statusMassage);
      form.insertAdjacentElement('afterend', statusMassage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData(JSONServerRequest, json)
      // Обработка успешной операции.
      .then(data => {
        console.log(data);
        showThanksModal(massage.success);
        statusMassage.remove();
      })
      // Обработка ошибки.
      .catch(() => {
        showThanksModal(massage.failure);
      })
      // Выполняется всегда, не зависимо как закончился запрос.
      .finally(() => {
        form.reset();
      });
    });
  }

  // TOPIC: Beautiful user alert

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModalWindow();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModalWindow();
    }, 5000);
  }

  // NOTE: Start server: json-server db.json
  // fetch(JSONServerMenu)
  // 	.then(data => data.json())
  // 	.then(res => console.log(res));

  // TOPIC: Slider
  const slidersWrapper = document.querySelector('.offer__slider-wrapper');
  const slidersField = document.querySelector('.offer__slider-inner');
  const sliders = document.querySelectorAll('.offer__slide');
  const slider = document.querySelector('.offer__slider');
  const prev = document.querySelector('.offer__slider-prev');
  const next = document.querySelector('.offer__slider-next');
  const current = document.querySelector('#current');
  const total = document.querySelector('#total');
  const width = window.getComputedStyle(slidersWrapper).width; // Тут мы получаем ширину окошка, показываемого слайдера.
  
  let sliderIndex = 1; // Счетчик отображается от 1 а не как обычно от 0.
  let offset = 0;

  // Если число меньше 10 то добавлять 0.
  if (sliders.length < 10) {
    total.textContent = `0${sliders.length}`;
    current.textContent = `0${sliderIndex}`;
  } else {
    total.textContent = sliders.length;
    current.textContent = sliderIndex;
  }

  slidersField.style.width = 100 * sliders.length + '%'; // что бы каждый слайдер занимал 100% ширины.
  slidersField.style.display = 'flex'; // Слайды выстраиваются в ряд.
  slidersField.style.transition = '0.5s all'; // Задаем анимацию.

  slidersWrapper.style.overflow = 'hidden'; // Убираем то что вылазит за границы экрана.

  sliders.forEach(slider => {
    slider.style.width = 'width'; // Каждому слайду мы задаем свою определенную ширину.
  });

  slider.style.position = 'relative';

  const indicators = document.createElement('ol');
  const dots = [];

  indicators.classList.add('carousel-indicators');

  slider.append(indicators);

  for (let i = 0; i < sliders.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1); // Каждой точке будет назначаться порядковый номер в атрибут.
    dot.classList.add('dot');

    if ( i === 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener('click', () => {
    if (offset === deleteNoteDigits(width) * (sliders.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNoteDigits(width);
    }

    slidersField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex === sliders.length) {
      sliderIndex = 1;
    } else {
      sliderIndex ++;
    }

    addZeroBeforeNumber();

    opacitySelectedDots();
  });

  prev.addEventListener('click', () => {
    if (offset === 0) {
      offset = deleteNoteDigits(width) * (sliders.length - 1);
    } else {
      offset -= deleteNoteDigits(width);
    }

    slidersField.style.transform = `translateX(-${offset}px)`;

    if (sliderIndex === 1) {
      sliderIndex = sliders.length;
    } else {
      sliderIndex --;
    }

    addZeroBeforeNumber();

    opacitySelectedDots();
  });

  // Переключение слайдеров по нажатию на точки (dots)
  dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
      const slideTo = event.target.getAttribute('data-slide-to');

      sliderIndex = slideTo;
      offset = deleteNoteDigits(width) * (slideTo - 1);

      slidersField.style.transform = `translateX(-${offset}px)`;

      addZeroBeforeNumber();

      opacitySelectedDots();
    });
  });

	function deleteNoteDigits(str) {
		return +str.replace(/\D/g, '');
	}

  function opacitySelectedDots() {
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[sliderIndex - 1].style.opacity = 1;
  }

  function addZeroBeforeNumber() {
    if (sliders.length < 10) {
      current.textContent = `0${sliderIndex}`;
    } else {
      current.textContent = sliderIndex;
    }
  }

	// TOPIC: Create calorie calculator






});