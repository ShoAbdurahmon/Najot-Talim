// ----- Arrays -----
// Elementlarni array ichiga qo'shish
// Element topish
// Elementni delete qlish
// Ajaratish arrayni
// Combining array
/*

// Beginning -> boshiga
const number = [1,2,3,4,5];
number.unshift(1,2);
console.log(number);


// End -> ohiriga
number.push(6,7);
console.log(number);
// Middle -> o'rtasiga

number.splice(3,2,"a","b")
console.log(number)

// Finding index of elements

const index = number.indexOf("a");
console.log(index)

const array = [1,2,31,2,3,1,2121,111,1,1,11,1,1]
console.log(array.lastIndexOf(1))


// Finding if there an element

console.log(array.includes(31))


// Finding elements (referance type)

const courses = [
    {id: 1, name: "nodeJs"},
    {id: 2, name: "flutter"},
    {id: 3, name: ".net"}
]
console.log(courses);

const index1 = courses.indexOf({id: 1, name: "nodeJs"});

console.log(index1);

console.log(courses[0] === {id: 1, name: "nodeJs"})


// ------------------------------------------------

const course = courses.find(function (course){
    console.log("run");
    return course.name = "flutter";
})

console.log(course)


// Arrow function 

const cours = courses.find(cours => cours.name === ".net");
console.log(cours)


const func = (id, status = 'user') => {
    return{
        id,
        status
    }
}

console.log(func())


// Removing elements // Elementlarni o'chirish
const nations = ['Uzbek', 'kazakh','russian','Kirgiz']

// End add:push() remove: pop()
const deleted = nations.pop()
console.log(deleted)
// beginning add: unshift() remove: shift()
nations.shift()
console.log(nations)
// middle add: splice()

nations.splice(1,1);
console.log(nations)



function arr_boshat(array){
    lenght = array.length
    array.splice(0,lenght)
    console.log(array) 
}
arr3 = [1,2,2,3,4,5,5,6,];
arr_boshat(arr3)


function arr2(array){
    array.length = 0;
    console.log(array)
}
arr0 = [1,2,2,3,4,5,5,6];


arr2(arr0)
*/
// Solution 1
const first = [12,3,3,4,4,];
const second = [123,32,32,3]

const combined = first.concat(second)
console.log(combined)



// Solution 2

// spread Operator

function spread(arg1,arg2){
    result = [...arg1,"Abdurahmon",...arg2]
    console.log(result)
}

spread(first,second);



function str(string){
    arr = [];
    for (let i of string){
        arr.push(i)
    }
    console.log(arr)
}

str("Abdurahmon")
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();

sanoq = 1;
user = [
    {
        user_id: sanoq,
        username: "john doe",
        email: "johndoe66@gmail.com",
        password: "32345435",
        date: "2021.10.11"
    }
];

;

function addUser(name, email, password, vaqt = time){
    let obj = {
        user_id: sanoq += 1,
        username: name,
        email: email,
        password: password,
        time: vaqt
    }
    user.push(obj)
    console.log(user)
}

addUser("John", "John@gmail.com","777777")

addUser("Aziz","Jasurov@gmail.com","90900909")



function searchUser(argument){
    if(typeof argument === "string"){
        for (i of user){
            if(i.name === argument || i.email === argument){
                console.log(i)
            }
        }
    }else if(typeof argument === "int"){
        for(i of user){
            if(argument === i.id){
                console.log(i)
            }
        }
    }else{
        console.log("Bunday user Yo'q !!!")
    }
}


searchUser(2)







