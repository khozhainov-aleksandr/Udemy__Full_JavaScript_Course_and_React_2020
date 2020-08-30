'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  // Касание элемента.
  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('touch');
    console.log(e.touches);  
  });

  // Передвижение по сенсорному экрану.
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log('move');
  });

  // Срабатывает когда мы убираем палец с экрана.
  box.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('end');
  });
});