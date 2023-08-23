// Задача №1

let age = document.querySelector('.age');
let butage = document.querySelector('.butage');

butage.onclick = () => {
    if (age.value > 0 && age.value <= 2){
        alert('Ребенок!');
    }
    if (age.value >=12 && age.value < 18){
        alert('Подросток!');
    }
    if (age.value >=18 && age.value < 60){
        alert('Взрослый!');
    }
    if (age.value >=60){
        alert('Пенсионер!');
    }
    age.value = '';
}

// Задача №2

let number = document.querySelector('.number');
let butnumber = document.querySelector('.butnumber');

butnumber.onclick = () => {
    if (number.value == 1){
        alert('!');
    }
    if (number.value == 2){
        alert('@');
    }
    if (number.value == 3){
        alert('#');
    }
    if (number.value == 4){
        alert('$');
    }
    if (number.value == 5){
        alert('%');
    }
    if (number.value == 6){
        alert('^');
    }
    if (number.value == 7){
        alert('&');
    }
    if (number.value == 8){
        alert('*');
    }
    if (number.value == 9){
        alert('( )');
    }
    number.value = '';
}


// Задача №4

let year = document.querySelector('.year');
let butyear = document.querySelector('.butyear');

butyear.onclick = () => {
    if ((!(year.value % 4) && !!(year.value % 100)) || (!(year.value % 400))) {
        alert('Год високосный!');
    }
    else {
        alert('Год невисокосный!');  
    }
    year.value = '';
}


// Задача №7

let money = document.querySelector('.money');
let butmoney = document.querySelector('.butmoney');

butmoney.onclick = () => {
    if (money.value >= 200 && money.value < 300) {
        alert('Сумма к оплате' + ' ' + (money.value - (money.value/100*3)));
    }  
    if (money.value >= 300 && money.value < 500) {
        alert('Сумма к оплате' + ' ' + (money.value - (money.value/100*5)));
    } 
    if (money.value >= 500) {
        alert('Сумма к оплате' + ' ' + (money.value - (money.value/100*7)));
    } 
    money.value = '';
}