// Задача №1

let number = document.querySelector('.number');
let butNumber = document.querySelector('.but_number');

butNumber.onclick = () => {
    alert('Ответ'+'   '+ +number.value * +number.value);
    
    number.value = '';
}



// Задача №2

let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');
let butNumbers = document.querySelector('.but_numbers');

butNumbers.onclick = () => {
    alert('Ответ'+'   '+ (+number1.value + +number2.value)/2);
    number1.value = '';
    number2.value = '';
}


// Задача №3

let length = document.querySelector('.length');
let butLength = document.querySelector('.but_length');

butLength.onclick = () => {
    alert('Площадь квадрата'+'   '+  +length.value * +length.value);
    length.value = '';
}


// Задача №4

const с_kilometer = 0.621371;

let kilometer = document.querySelector('.kilometer');
let butKilometer = document.querySelector('.but_kilometer');

butKilometer.onclick = () => {
    alert(+kilometer.value * +с_kilometer +'  '+'Миль');
    kilometer.value = '';
}


// Задача №5


let value_a = document.querySelector('.value_a');
let value_b = document.querySelector('.value_b');
let butValue = document.querySelector('.but_value');

butValue.onclick = () => {
    alert('x'+' '+'='+' '+ +-value_b.value / +value_a.value);
    value_a.value = '';
    value_b.value = '';
}


// Задача №6
const hours_per_day = 24;
const minutes_per_hour = 60;
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let butTime = document.querySelector('.but_time');

butTime.onclick = () => {
    alert('До следующего дня осталось:'+' '+ (+hours_per_day - +hours.value)+' '+'час(а/ов)'+' '+':'+' '+ (+minutes_per_hour - +minutes.value)+' '+'минут(а/ты)');
    hours.value = '';
    minutes.value = '';
}