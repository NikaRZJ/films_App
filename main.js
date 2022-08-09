"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: () => {
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
    },

    detectPersonalLevel: () => {
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
    },

    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while (!personalMovieDB.genres[i - 1]) {
                console.log("Вы ввели некорректные данные");
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach(function (item, index) {
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();