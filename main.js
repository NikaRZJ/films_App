"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
    
start();

// while (!numberOfFilms) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let filmTitle = prompt("Название одного из последних просмотренных фильмов", "");
    
        while (!filmTitle || String(filmTitle).length > 50) {
            filmTitle = prompt("Название одного из последних просмотренных фильмов", "");
        }
    
        let score = prompt("На сколько он вам понравился?", "");
    
        while (!score) {
            score = prompt("На сколько он вам понравился?", "");
        }
            
        personalMovieDB.movies[filmTitle] = score;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else 
        if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else 
            if (personalMovieDB.count > 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
}

detectPersonalLevel(); 

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

