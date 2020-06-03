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
let questionFirstA = prompt('Один из просмотренных фильмов ?', '');
let questionSecondB = prompt('На сколько оцените его ?', '');
let questionFirstC = prompt('Один из просмотренных фильмов ?', '');
let questionSecondD = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[questionFirstA] = questionSecondB;
personalMovieDB.movies[questionFirstC] = questionSecondD;

console.log(personalMovieDB);


// - не правильно
// let movies = {
// 	first: questionFirst,
// 	second: questionSecond
// };

// console.log(movies.first);
// console.log(movies.second);