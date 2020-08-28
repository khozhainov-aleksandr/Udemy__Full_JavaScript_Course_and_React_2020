// const btn = document.querySelector('#btn');

// btn.addEventListener('click', onButtonClick);

// function onButtonClick(event) {
//   console.log(event.target);
// };

// ---


// Отменяет возможность отправки на сервер, командой preventDefault (ссылки перестают работать) 
// event.preventDefault() прописывается в самом верху функции.
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
  event.preventDefault();
});

// ---


// Разбивает псевдо массив на отдельные элементы (кнопки) используется только с querySelectorAll
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', onClickButtons);
});

function onClickButtons() {
  console.log('Click');
}