let qwe = document.querySelector('.qwe');
let aut = document.querySelector('.aut');
let but = document.querySelector('.but');
let string = 1;
let autGrid = '';
let gratings = 0;
 
    

but.onclick = () =>  {

    while (gratings < +qwe.value){

        if (gratings % 10 == 0) {
            autGrid += '<br>';
            string++; 
        }    
                   
        autGrid += '# ';
        gratings++;            
    } 
   
    aut.innerHTML = autGrid; 
}

// --------------------------------------------------------------------------------------

let qwer = document.querySelector('.qwer');
let autnamber = document.querySelector('.autnamber');
let butnamber = document.querySelector('.butnamber');
let autnambers = '';

butnamber.onclick = () =>  {
    let namber = +qwer.value;
    while (namber >= 0){
        autnambers += namber + ' ';
        namber= namber-1;            
    } 
   autnamber.innerHTML = autnambers ;     
}


// --------------------------------------------------------------------------------------

let butanswer = document.querySelector('.butanswer');

butanswer.onclick = () => {

let qwert;

do{
     qwert = prompt("Решите пример: 2+2*2", 0);
     if (qwert ==  6)continue;
     alert('Ваш ответ' + ' ' + qwert + ' ' + 'неверный');
  } while (qwert != 6);
    alert('Ваш ответ' + ' ' + qwert + ' ' + 'верный');
  
}


// --------------------------------------------------------------------------------------

let qwerty = document.querySelector('.qwerty');
let qwertyTwo = document.querySelector('.qwertytwo');
let autFourNamber = document.querySelector('.autfournamber');
let butFourNamber = document.querySelector('.butfournamber');
let autFourNambers = '';

butFourNamber.onclick = () => {

for (let i = +qwerty.value + 4; i <= +qwertyTwo.value; i+=4){
    
    // console.log(i);
    autFourNambers += i + ' ';
}
    autFourNamber.innerHTML = autFourNambers;
}

