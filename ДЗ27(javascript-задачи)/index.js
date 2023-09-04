



let variant_one = document.querySelector('.variant_one');
let variant_two = document.querySelector('.variant_two');
let variant_three = document.querySelector('.variant_three');
let but = document.querySelector('.but');

but.onclick = () =>{
    let one = +variant_one.value;
    let a = 0;

    switch (one){
        case 1:
            a += 0;
            break;

        case 2:
            a += 2;
            break;

        case 3:
            a += 0;
            break;

        default:
            alert('введите цифру от 1 до 3')
    }

    let two = +variant_two.value;
    let b = 0;

    switch (two){
        case 1:
            b += 0;
            break;

        case 2:
            b += 0;
            break;

        case 3:
            b += 2;
            break;

        default:
            alert('введите цифру от 1 до 3')
    }

    let three = +variant_three.value;
    let c = 0;

    switch (three){
        case 1:
            c += 2;
            break;

        case 2:
            c += 0;
            break;

        case 3:
            c += 0;
            break;

        default:
            alert('введите цифру от 1 до 3')
    }

    alert ('Количество набранных вами баллов:' + ' ' + (a + b + c));
}


















// Задача 10

let day = document.querySelector('.day');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let butnext = document.querySelector('.butnext');

butnext.onclick = () => {

    day = +day.value;
    month = +month.value;
    year = +year.value;

if ((year % 4 == 0 || year % 400 == 0) && (year % 100 != 0) ) {

    if (month == 2){

        if (day >= 1 && day <=28 ){
            console.log (day + 1, month, year);
        }
        if (day == 29){
            console.log (day - 28, month + 1, year);
        }
    }


    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
   
        if (day>=1 && day<=30){
            console.log (day + 1, month, year);
        }
        if (day == 31){
            console.log (day - 30, month + 1, year);
        }
        if (month == 12 && day == 31){
            console.log (day - 30, month - 11, year + 1);
        }
        
    }
    if (month == 4 || month == 6 || month == 9 || month == 11 ){
        if (day>=1 && day<=29){
            console.log (day + 1, month, year);
        }
        if (day == 30){
            console.log (day - 29, month + 1, year);
        }
        
    }
}

else {
    if (month == 2){

        if (day >= 1 && day <=27 ){
            console.log (day + 1, month, year);
        }
        if (day == 28){
            console.log (day - 27, month + 1, year);
        }
    }


    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
   
        if (day>=1 && day<=30){
            console.log (day + 1, month, year);
        }
        if (day == 31){
            console.log (day - 30, month + 1, year);
        }
        if (month == 12 && day == 31){
            console.log (day - 30, month - 11, year + 1);
        }
        
    }
    if (month == 4 || month == 6 || month == 9 || month == 11 ){
        if (day>=1 && day<=29){
            console.log (day + 1, month, year);
        }
        if (day == 30){
            console.log (day - 29, month + 1, year);
        }
        
    }

}




}