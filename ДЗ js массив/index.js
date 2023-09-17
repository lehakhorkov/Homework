let aut = document.querySelector('.aut');
let autEven = document.querySelector('.auteven');
let autSum = document.querySelector('.autsum');
let autMax = document.querySelector('.autmax');
let even = '';
let out = [];
let sum = 0;
let max;
document.querySelector('#butnam').onclick = function () {
    out[0] = +document.querySelector('#number_1').value;
    out[1] = +document.querySelector('#number_2').value;
    out[2] = +document.querySelector('#number_3').value;
    out[3] = +document.querySelector('#number_4').value;
    out[4] = +document.querySelector('#number_5').value;
    out[5] = +document.querySelector('#number_6').value;
    out[6] = +document.querySelector('#number_7').value;
    out[7] = +document.querySelector('#number_8').value;
    out[8] = +document.querySelector('#number_9').value;
    out[9] = +document.querySelector('#number_10').value;
    console.log(out);
    aut.innerHTML = out;
    max = Math.max(out[0], out[1], out[2], out[3], out[4], out[5], out[6], out[7], out[8], out[9]);

    for (let i=0; i < out.length; i++) {
        sum += out[i];                        
        console.log(sum);
        
        if (out[i] % 2 == 0) {
            console.log(out[i]);
            even += out[i]+' ';               
        }          
    }
    autEven.innerHTML = even;
    autSum.innerHTML = sum;
    autMax.innerHTML = max;
}


 




  























// Обьявление массива
// let arr = new Array(......); 1 способ
// let Arr = [];2-й способ

// let arrOne = ['Зима' , 'Весна' , 'Лето' , 'Осень',];// висячая запятая
// console.log(arrOne);
// let a = document.querySelector('#vrem');
// let but = document.querySelector('#but_vr');
// but.onclick = ( ) => {
//     if (a.value == 1 || a.value == 2 || a.value == 12){
//         console.log(arrOne[0]);
//     }
//     else if (a.value == 3 || a.value == 4 || a.value == 5){
//         console.log(arrOne[1]);
//     }
//     else if (a.value == 6 || a.value == 7 || a.value == 8){
//         console.log(arrOne[2]);        
//     }
//     else if (a.value == 9 || a.value == 10 || a.value == 11){
//         console.log(arrOne[3]);
//     }
//     else {
//         console.log('Такого времени года не существует');
//     }
// }

// -----------------------------------------------------------------------
// Изменение значения элементов

// let arrTwo = ["Ян", "Боря", "Марк",];
// console.log(arrTwo);
// let nameInp_one = document.querySelector('#name_1');
// let nameInp_two = document.querySelector('#name_2');
// let but_name = document.querySelector('#but_name');

// but_name.onclick = function () {

//         for (let i=0; i < arrTwo.length; i++) {

//             if (nameInp_one.value === arrTwo[i]){
//                 arrTwo[i] = nameInp_two.value;
//                 break;
//             }
//         }
//         console.log(arrTwo);
// }

// -----------------------------------------------------------------------
// Обход массива с помощью цикла

// let names = ["Саша", "Катя", "Вика","Мария",];
// console.log(names);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let nam_in = document.querySelector('#nam_1');
// let but_in = document.querySelector('#but_nam_1');

// but_in.onclick = () => {
//     for (let i = 0; i < names.length; i++) {

//         if (nam_in.value == names[i]) {

//             // console.log(names[i]);
//            document.querySelector ('.name').innerHTML += names[i];
//            break;
//         }
//     }

// }

// __________________________________________________________________________________



// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
// console.log(mas);
// for (let i=0; i < mas.length; i++) {
//     if (mas[i] % 2 == 0) {
//         console.log(mas[i]);
//     }
// }

// __________________________________________________________________________________

// let out = [];
// document.querySelector('#bt_al').onclick = function () {
//     out[0] = +document.querySelector('#al_1').value;
//     out[1] = +document.querySelector('#al_2').value;
//     out[2] = +document.querySelector('#al_3').value;
//     out[3] = +document.querySelector('#al_4').value;
//     out[4] = +document.querySelector('#al_5').value;
//     out[5] = +document.querySelector('#al_6').value;
//     out[6] = +document.querySelector('#al_7').value;
//     out[7] = +document.querySelector('#al_8').value;
//     out[8] = +document.querySelector('#al_9').value;
//     out[9] = +document.querySelector('#al_10').value;
//     console.log(out);

//     for (let i = 0; i < out.length; i++) {
//         if ((out[i] % 4 == 0 || out[i] % 400 == 0) && out[i] % 100 != 0) {
//             console.log(out[i]);
//         }
//     }

// }

// __________________________________________________________________________________


// let a = +document.querySelector('#al_1').value;
// let b = +document.querySelector('#al_2').value;
// let c = +document.querySelector('#al_3').value;
// let d = +document.querySelector('#al_4').value;



// document.querySelector('#bt_al').onclick = function () {
//     out = [a, b, c, d].filter(out =>(out[i] % 4 == 0 || out[i] % 400 == 0) && out[i] % 100 != 0)
//     console.log(out);
// }
// ОШИБКА


// let out = [1995, 1996, 1997, 1998, 1999,]


