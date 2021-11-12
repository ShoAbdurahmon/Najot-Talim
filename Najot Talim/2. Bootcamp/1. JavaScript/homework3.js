

let data = [1,2,3,null,2,1,true,5.6,2,34,5,undefined,null,]
function without(data, val1, val2){
    for (i of data){
        if(i === val1 || i === val2){
            data.splice(data.indexOf(i),1);
        }
    }
    console.log(data)
}


without(data,5,null)


"----- homework 2 -----"

function objectToldir(street, city, zipcode){
    let obj = {
        street: street,
        city: city,
        zipcode: zipcode
    }
    console.log(obj) 
}

let st = "Backham";
let cty = "Farg'ona";
let zipc = "123k45";



objectToldir(st, cty, zipc)

" ----- homework 1 -----"

function show_address(adress){
    for (i in adress){
        console.log(adress[i])
    }
}

adres = {
    manzil: "toshkent",
    yosh: 12,
    tel: 99983432432
}

show_address(adres)





function createObj(ism, adrees){
    const obj = {
        ism: ism,
        adrees: adrees
    }
    return obj
}

obj1 = createObj("Aziz", "Nurahshon")

console.log(obj1)


console.log(Object.keys(obj1))

    

name_arr = ["Ali","Bahrom","Umar","Aziz","ILyos","Shodiyor","Ilhom","Habib","Messi","Ronaldo"];
last_arr = ["Botirov","Bekov","Azizov","Johnov","Bernard", "James","Wick", "Valiyev", "Peter", "Tony"];
phone_arr = [97232334,342231,34522454,42352345,24524524,245234524,245234523,2545242,25234523,24352354];
email_arr = ["ali@gmail.com","bahrom@gmail.com","umar@gmail.com","aziz@gmail.com","bernard@gmail.com","ronaldo@gmail.com","messi@gmail.com","peter@gmail.com","tony@gmail.com"]
password_arr = [1111,2222,3333,4444,5555,6666,7777,8888,8999,9900,0909,1212]


function passwordGenerator(passworhashing){

}

function emailGenerator(firstname, lastname){
    for(elements in firstname){
        console.log(firstname[elements]  +"." + lastname[elements] + "@gmail.com")
    }
}
emailGenerator(name_arr, last_arr)

function User(firstname, lastname, phone, email, password){
    
    this.firstname = name_arr[Math.floor(Math.random() * 10)];
    this.lastname = last_arr[Math.floor(Math.random() * 10)]; 
    this.phone = phone_arr[Math.floor(Math.random() * 10)];
    this.email = email_arr[Math.floor(Math.random() * 10)];
    this.password = password_arr[Math.floor(Math.random() * 10)]
    console.log(this)

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
    console.log("Time: ",time)
}    
// let user = new User();




function CreateUser() {
    return {
        firstname: name_arr[Math.floor(Math.random() * 10)],
        lastname: last_arr[Math.floor(Math.random() * 10)],
        phone: phone_arr[Math.floor(Math.random() * 10)],
        email: email_arr[Math.floor(Math.random() * 10)],
        password: password_arr[Math.floor(Math.random() * 10)]
    };
}
  
  // let user1 = new User();
  

for (let i = 0; i < 10 ;i += 1){
    let newUser = new User()
    
}









