
"use strict";

//let num  =50;

//while (num <=55){//первый вид циклов
    //console.log(num);//говорим коду: пока условие не выполнено, вополняй такието действия
    //num++;
//}

//let num  =50;

//do {//сначала делает, затем проверяет условие
    //console.log(num);
    //num++;
//}

//while (num <=55);

let num=50;

// for (let i = 1; i<8; i++){
    // console.log(num);

// }
for (let i= 1; i<10;i++){
    if(i===6){
        // break; останавливает цикл на 6
        continue;//пропускает в цикле 6
    }
    console.log (i);
}