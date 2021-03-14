'use strict';

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

checkedSetCheckbox();
checkedColorForm();

checkbox.addEventListener('change', setCheckbox);
change.addEventListener('click', changeFormColor);

// ---------- Function ---------- //

function setCheckbox() {
	localStorage.setItem('isChecked', true);
}

function checkedSetCheckbox() {
	if (localStorage.getItem('isChecked')) {
		checkbox.checked = true;
	}
}

function changeFormColor() {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'width';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
}

function checkedColorForm() {
	if (localStorage.getItem('bg') === 'changed') {
		form.style.backgroundColor = 'red';
	}
}