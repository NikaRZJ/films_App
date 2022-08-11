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

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    let li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    li.textContent = `${i+1}. ${item}`;
    let div = document.createElement('div');
    div.classList.add('delete');
    movieList.append(li);
    li.append(div);
});


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

poster.style.backgroundImage = 'url("../img/bg.jpg")';