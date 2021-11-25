"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
//создал переменную, поместил в нее ответ на вопрос

const personalMovieDB ={//создал объект
    count: numberOfFilms,//сюда передается первый вопрос
    movies: {},//пустой объект
    actors: {},//пустой объект
    genres: [],//пустой массив
    privat : false//булиновое значение
};
//задал пользователю 2 вопроса по 2 раза
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('на сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('на сколько оцените его?','');
//ответы поместил отдельные переменные, записал ответы в объект movies
      personalMovieDB.movies [a] = b,
      personalMovieDB.movies [c] = d;

      console.log(personalMovieDB);
