let numberOne = document.querySelector('.numberone');
let numberTwo = document.querySelector('.numbertwo');
let butNumber = document.querySelector('.butnumber');

function one () {
    if (+numberOne.value < +numberTwo.value) {
        alert(-1) ;  
    }
    else if (+numberOne.value > +numberTwo.value) {
        alert(1);
    }
    else if (+numberOne.value == +numberTwo.value) {
        alert(0); 
    }
    
}
butNumber.onclick = one;

// --------------------------------------------------------------------

let number_One = document.querySelector('.number_one');
let number_Two = document.querySelector('.number_two');
let number_Three = document.querySelector('.number_three');
let butNum = document.querySelector('.butnum');

function two () {
    alert(number_One.value + number_Two.value + number_Three.value);
         
    }
    
butNum.onclick = two;

// --------------------------------------------------------------------


let perfect = document.querySelector('.perfect');

let butPerfect = document.querySelector('.butperfect');

function wow () {
    let y = 0; 
    for (i =0; i < +perfect.value; i++){

    if(+perfect.value % i == 0){
        y += i;        
    }    
    }

    if(y == +perfect.value){
        alert('совершенное число');
    }
    else{
            alert('число не является совершенным');
        } 
    }
    
butPerfect.onclick = wow;

// --------------------------------------------------------------------


let watch = document.querySelector('.watch');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let butTime = document.querySelector('.buttime');

function clock () {
    
        if (minutes.value == '') {
            alert(watch.value + ':' + '00' + ':' + seconds.value);
        }        
        else if (seconds.value == '') {
            alert(watch.value + ':' + minutes.value + ':' + '00');
        }
        else{
            alert(watch.value + ':' + minutes.value + ':' + seconds.value);
        }
}
    
butTime.onclick = clock;


// --------------------------------------------------------------------



let secondss = document.querySelector('.secondss');
let butTimes = document.querySelector('.buttimes');
let minutess;
let watchs;
let secondsss;
function clocks () {

    
        if (secondss.value >= 60 && secondss.value < 3600) {
            minutess = Math.floor(secondss.value / 60);
            secondsss = Math.floor(secondss.value - (minutess * 60));
            alert('00' + ':' + minutess + ':' + secondsss);
        }   
             
        else if (secondss.value >= 3600) {
            watchs = Math.floor(secondss.value / 3600);
            minutess = Math.floor((secondss.value - (watchs * 3600)) / 60);
            secondsss = Math.floor(secondss.value - (watchs * 3600)-(minutess * 60));
            alert(watchs + ':' + minutess + ':' + secondsss);
        }
        else{
            alert('00' + ':' + '00' + ':' + secondss.value);
        }
}
    
butTimes.onclick = clocks;



