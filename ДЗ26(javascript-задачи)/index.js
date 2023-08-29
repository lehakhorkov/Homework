// Задача №1

let number = document.querySelector('.number');
let butnumber = document.querySelector('.butnumber');

butnumber.onclick = () => {
    if (number.value < 0) {
        alert('Число отрицательное');
    }
    if (number.value > 0 ){
        alert('Число положительное');
    }
    if (number.value == 0 ){
        alert('Ваше число равно 0');
    }
    number.value = '';
}


// Задача №2

let age = document.querySelector('.age');
let butage= document.querySelector('.butage');

butage.onclick = () => {
    if (age.value >= 0 && age.value <= 120){
        alert('Ваш возраст-'+ age.value);
    }
    if (age.value < 0 ){
        alert('Проверьте корректность введенных данных');
    }
    if (age.value > 120 ){
        alert('Проверьте корректность введенных данных');
    }
    age.value = '';
}


// Задача №3

let modul = document.querySelector('.modul');
let butmodul= document.querySelector('.butmodul');

butmodul.onclick = () => {
    if (modul.value >= 0 ){
        alert('Модуль вашего числа равен'+ ' '+ modul.value);
    }
    if (modul.value < 0 ){
        alert('Модуль вашего числа равен'+ ' ' + Math.abs(modul.value));
    }
    modul.value = '';
}


// Задача №4

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let buttime= document.querySelector('.buttime');

buttime.onclick = () => {
    if (hours.value >= 0 && hours.value <=24 && minutes.value >= 0 && minutes.value <= 60 && seconds.value >= 0 && seconds.value <=60){
        alert('Время'+ ' '+ hours.value + ':' + minutes.value + ':' + seconds.value);
    }
    else {
        alert('Проверьте корректность введенных данных');
    }
    hours.value = '', minutes.value = '', seconds.value = '';
}

// Задача №5


let namder1 = document.querySelector('.namder1');
let namder2 = document.querySelector('.namder2');
let sign = document.querySelector('.sign');
let butequality= document.querySelector('.butequality');

butequality.onclick = () => {

    switch (sign.value){
        
        case '+':
            alert(+namder1.value + +namder2.value);
            break;
        case '-':
            alert(namder1.value - namder2.value);  
            break; 
        case '*':
            alert(namder1.value * namder2.value);  
            break;
        case '/':
        alert(namder1.value / namder2.value);  
        break;     
    }
}



// Задача №6


let planet = document.querySelector('.planet');
let butplanet = document.querySelector('.butplanet');

butplanet.onclick = () => {
    
    switch (planet.value){ 

        case('земля'):
            alert('Привет, землянин');            
            break;
        case('Земля'):
            alert('Привет, землянин');            
            break;

        default:
            alert('Привет, инопланетянин');    
    }
    planet.value = '';
}




