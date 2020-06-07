"use strict";

// 1
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

// 2
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// 3
for (let i = 0; i < 2; i++) {
	let questionFirstA = prompt('Один из просмотренных фильмов ?', '');
	let questionSecondB = prompt('На сколько оцените его ?', '');

	if (questionFirstA != null && questionSecondB != null //x != обозначает что не равно // null возвращает  нам при нажатии на кнопку отмена
		&& questionFirstA != '' && questionSecondB != ''
		&& questionFirstA.length < 50 && questionSecondB.length < 50) {
			personalMovieDB.movies[questionFirstA] = questionSecondB;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классный зритель');
	} else if (personalMovieDB >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

console.log(personalMovieDB);