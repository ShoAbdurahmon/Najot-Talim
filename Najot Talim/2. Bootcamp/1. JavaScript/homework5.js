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
    const filtered = user
}


searchUser(2)
