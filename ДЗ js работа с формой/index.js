let butCol = document.querySelector('.but_col');
let col = document.querySelector('.col');
let formCol = document.querySelector('.Form');
// Событие нажатия на кнопку

butCol.onclick = () => {
    
    formCol.style.backgroundColor = col.value;
}



let numb = document.querySelector('.numb');
let num = document.querySelector('.num');
let dat = document.querySelector('.dat');
let yea = document.querySelector('.yea');
let cv = document.querySelector('.cv');
let butInf = document.querySelector('.but_inf');



butInf.onclick = () => {
    
    document.querySelector('.info1').innerHTML = numb.value;
    document.querySelector('.info2').innerHTML = num.value;
    document.querySelector('.info3').innerHTML = dat.value;
    document.querySelector('.info4').innerHTML = yea.value;
    document.querySelector('.info5').innerHTML = cv.value;
}