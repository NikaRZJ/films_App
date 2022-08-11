'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};




const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    poster = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list');

const form = document.querySelector('.add'),
    filmName = document.querySelector('.adding__input');


addMovies();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!filmName.value) {
        return;
    }
    let str = filmName.value;
    if (str.length > 21) {
        str = str.slice(0, 22) + '...';
        // console.log(str);
    }
    movieDB.movies.push(firstCharUp(str));
    const love = document.querySelector('input[type = "checkbox"]');
    if (love.checked) {
        console.log("Добавляем любимый фильм");
        love.checked = false;
    }
    addMovies();
    filmName.value = '';
});






function firstCharUp(str) {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        res += str[i].toLowerCase();
    }
    // console.log(res);
    return res;
}

function addMovies() {
    movieList.innerHTML = "";
    movieDB.movies.sort();
    // console.log(movieDB.movies);
    movieDB.movies.forEach((item, i) => {
        let li = document.createElement('li');
        li.classList.add('promo__interactive-item');
        li.textContent = `${i+1}. ${item}`;
        let div = document.createElement('div');
        div.classList.add('delete');
        movieList.append(li);
        li.append(div);
    });
    deleteFilms();
}


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

poster.style.backgroundImage = 'url("../img/bg.jpg")';



function deleteFilms() {
    let filmItem = document.querySelectorAll('.promo__interactive-item');
    // for (let i = 0; i < filmItem.length; i++) {
    //     filmItem[i].querySelector('.delete').addEventListener('click', () => {
    //         movieDB.movies.splice(i, 1);
    //         filmItem[i].remove();
    //         addMovies();
    //     });
    // }
    filmItem.forEach((item, i) => {
        item.querySelector('.delete').addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            filmItem[i].remove();
            addMovies();
        });
    });
}