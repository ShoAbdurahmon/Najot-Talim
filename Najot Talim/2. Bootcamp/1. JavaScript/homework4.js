// ----- Task 1 ----
/*
function minus_plus(obj){
    a = Object.values(obj);
    result = a[0] - a[1];
    
    return result;
}

console.log(minus_plus({plus: 15, minus: 1}))


// ----- Task 2 -----

function size_of_box(obj){
    value = Object.values(obj)
    result = 1;
    for(i of value){
        result *= i;
    }
    console.log(result+"sm kub")
}

size_of_box({width: 3.5,length: 5, height: 1.5})



// ----- Task 3 -----

function upTo(son){
    jami = 0;
    for(let i = 0; i <= son; i += 1){
        jami += i;
    }
    console.log(jami)
}

upTo(4);
*/
// ----- Task 4 ----- 

let name = {name: "John Doe"}
let age = {age: 20}
let job = {job: "Programmer"}

function allObj(n, a, j){
    let obj = Object.assign(n, a, j);
    return obj;
}

console.log(allObj(name,age,job));


// ----- Task 5 -----

id_arr = [2133242,234234,54645654,2343242,435345,78983454];
merchart_arr = ["bankomat1","bankomat2","bankomat3","bankomat4","bankomat5","bankomat6"];
payment_arr = ["Monety","Card","Bitcoin"];
receipt_arr = ["chilonzor", "Sagbon", "Nurafshon", "Sebzor", "Chig'atoy", "Oqtepa"];
amount_arr = ["10.000 sum","19.000 sum","230.000 sum","40 dollar","2 bitcoin","90.000 sum"];
owner_arr = ["Aziz", "Asal", "Bekzod", "Alisher", "Jasur", "Lola"]



function check(id, merchant, paymentType, receiptstate, amount, cardowner){
    this.id = id_arr[Math.floor(Math.random() * 6)];
    this.merchant = merchart_arr[Math.floor(Math.random() * 6)];
    this.payment = payment_arr[Math.floor(Math.random() * 3)];
    this.receiptstate = receipt_arr[Math.floor(Math.random() * 6)];
    this.amount = amount_arr[Math.floor(Math.random() * 6)];
    this.cardowner = owner_arr[Math.floor(Math.random() * 6)];

    console.log(this);
}


let newCheck = new check();





