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

  // SECTION: Добавляем шаблонные карточки.
  new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    '.menu .container'
  ).render();

	// TOPIC: Реализация скрипта отправки данных на сервер.
	const forms = document.querySelectorAll('form');
	const massage = {
		loading:'./icons/spinner.svg',
		success:'Спасибо! Скоро мы с вами свяжемся.',
		failure:'Что-то пошло не так ...'
	};

	forms.forEach((item) => {
		postData(item);
	});

	function postData(form) {
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

			const object = {};
			formData.forEach(function(value, key) {
				object[key] = value;
			});

			fetch('server.php', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(object)
			}).then(data => data.text())
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

});