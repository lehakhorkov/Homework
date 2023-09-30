let list = [
    
    {product: 'Хлеб', status: 'не куплен' , amount: 0 , },
    {product: 'Соль', status: 'не куплен' , amount: 0 , },
    {product: 'Вода', status: 'не куплен' , amount: 0 , },
    
]
console.log(list);
let out = document.querySelector('.out');
let out_2 = document.querySelector('.out_2');
let products = document.querySelector('#products');
let but_buy = document.querySelector('#but_buy');
let a = '';
let b = '';


but_buy.onclick = () => {
    for (let i = 0; i < list.length; i++) {
 
        if (products.value === list[i].product) {
            list[i].status = 'куплен';
            list[i].amount ++;
            a = list[i].product + ' ' + 'добавлено в список' + "<br>";
            b = (list[0].product + ' ' + list[0].status + ' ' + list[0].amount + "шт." + "<br>" +
                  list[1].product + ' ' + list[1].status + ' ' + list[1].amount + "шт." + "<br>" + 
                  list[2].product + ' ' + list[2].status + ' ' + list[2].amount + "шт." + "<br>");
            console.log(list);
            break;            
        }  
        
    };

    if (products.value != list[0].product && products.value != list[1].product && products.value != list[2].product) {
        alert("Из списка, с большой буквы! Пожалуйста)");
    }

    out.innerHTML = a;
    out_2.innerHTML = b;
}

// ____________________________________________________________________________________


// Задача №2


let out_3 = document.querySelector('.out_3');
let out_4 = document.querySelector('.out_4');
let out_5 = document.querySelector('.out_5');
let out_6 = document.querySelector('.out_6');
let Name = document.querySelector('#name');
let Quantity = document.querySelector('#quantity');
let Price = document.querySelector('#price');
let but_cheque = document.querySelector('#but_cheque');
let q = '';
let totalPrice = 0;
averageCostOneProduct = 0;


let cheque = [];
let w = [];
let z = [];

but_cheque.onclick = () => {

 
    cheque.unshift({name: Name.value, quantity: +Quantity.value , price: +Price.value , });

    console.log(cheque);

    for (let i = 0; i < cheque.length; i++){

     console.log(cheque[i]);   
     
    
        q += cheque[i].name + ' ' + "кол-во:" + ' ' + cheque[i].quantity + "шт." + ' ' + "стоимость:" + ' ' + cheque[i].price + "$" + "<br>";
        
     break;
    }     
    out_3.innerHTML = q;


    for (let i = 0; i < cheque.length; i++){
        
        totalPrice = totalPrice + (cheque[i].quantity * cheque[i].price) ;
        break;       
    }
    out_4.innerHTML = totalPrice + "$";


    

        
        w.push(+Quantity.value * +Price.value);
        console.log(w);
        console.log(Math.max.apply(null, w));
        mostExpensivePurchase = Math.max.apply(null, w);
        out_5.innerHTML = mostExpensivePurchase + "$";



        z.push(+Price.value);
        console.log(z);
        averageCostOneProduct = (nambers) => {
            let sum = 0;
        for (let i = 0; i < nambers.length; i++){
            sum += nambers[i];
        }
        return sum / nambers.length;
    };
        console.log(averageCostOneProduct(z));
        out_6.innerHTML = averageCostOneProduct(z) + "$";

}
    

