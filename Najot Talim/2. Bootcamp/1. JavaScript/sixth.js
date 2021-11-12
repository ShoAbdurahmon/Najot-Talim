// Functions
/*
// Function declaration
function say_hi(){
    console.log("walk")
}

say_hi()


// Anonymous Function Expression

let say_hello = function(){
    console.log("Hello, function expression");
}

say_hello()

// Named Function Expression

let go = function wakk(){
    console.log("walk");
}

go()

// Rest Operator

function get_args(lastname, age, ...names){
    console.log(names);

    names.forEach((value,index, array) => {
        console.log(value);
    })

}
get_args("my_name", 23, "John", "Steve", "Doe");



// ES6 (ES 2015)
// Default value


function get_data(name, age, address, status){
    const st = status || "user";
    return{
        name,
        age,
        address,
        states: st
    }
}


const john = get_data("John", 30,"chilonzor");
console.log(john)


const person = {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    get_full_name: function(){
        return `Full name is (this.firstname), &(this.lastname)`
    },
    get getFullName(){
        return `Full name is `
    }
}
console.log(person.get_full_name())
*/


function Users(){
    let user = {
    id: 1,
    firstname: "john",
    lastname: "wick",
    email: "john@gmail.com",
    password: 12323,
    phone: 9989453423,
    status: admin
    }
}


let sanoq = 1
function circle(rad){
    this.id = sanoq += 1;
    this.radius = rad
    this.pi = 3.14;
    return Math.PI * Math.pow(radius)
}

console.log(circle(10))
































