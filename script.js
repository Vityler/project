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
// const a = prompt('Один из последних просмотренных фильмов?',''),
    //   b = prompt('на сколько оцените его?',''),
    //   c = prompt('Один из последних просмотренных фильмов?',''),
    //   d = prompt('на сколько оцените его?','');
//ответы поместил отдельные переменные, записал ответы в объект movies
    //   personalMovieDB.movies [a] = b,
    //   personalMovieDB.movies [c] = d;

//снизу сделал то же, что и сверху, только автоматизировал
    for(let i=0; i<2;i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('на сколько оцените его?','');
             
        
        if( a != null && b !=null && a !='' && b != '' && a.length < 50){
            //если пустая строка или больше 50 символов в строке то возвращаемся заново
            //переменная а должна не равняться налл и б не равняться налл
            personalMovieDB.movies [a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;//возвращаемся назад на вопрос и повторяем все заново
        }
      }

      if(personalMovieDB.count<10){
          console.log('просмотрено довольно мало фильмов');

      } else if 
          (personalMovieDB.count >=10 && personalMovieDB.count <30) {
              console.log ( 'вы классический зритель');
          } 
          else if(personalMovieDB.count >=30){
              console.log('вы заядлый киноман!');
          }
      else {
          console.log('произошла ошибка');
          
      }

      console.log(personalMovieDB);
