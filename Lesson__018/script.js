"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из просмотренных фильмов ?', '');
        let b = prompt('На сколько оцените его ?', '');

        if (a !== null && b !== null //x != обозначает что не равно // null возвращает  нам при нажатии на кнопку отмена
            && a !== '' && b !== ''
            && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
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

// detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.private);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre; // Отнимаем - 1 что бы было 0 и не было пустой ячейки в массиве.
		
		// personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // Более правильный вариант записи.
	}
}

writeYourGenres();