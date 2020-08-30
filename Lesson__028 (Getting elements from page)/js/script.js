'use strict';

// Так мы получаем только третью кнопку.
// const buttons = document.querySelectorAll('button')[2];

const buttons = document.querySelectorAll('button');

// или можем указывать индекс кнопки возле переменной.
// console.log(buttons[1]);

// Перебирает и показывает все элементы на странице. Используется с querySelectorAll
buttons.forEach((item) => {
  console.log(item);
});
