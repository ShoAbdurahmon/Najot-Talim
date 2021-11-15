const ids = [];
const username = [];
const gmails = [];
// password

let sanoq = 10;

function create_username(id, username, email , password){
    return {
        id: id,
        username: username,
        email: email,
        password: password
    }
}

function create_user_id(number){
    for(let i = 0;i < number;i += 1){
        sana = Date.now()
        ids.push(sana + i); 
    }
    console.log(ids)
}

function create_name(sanoq){
    for(let i = 1;i <= sanoq;i += 1){
        username.push(`user${i}`)
    }
    console.log(username)
}
function create_mail(sanoq){
    for(let i = 0;i < sanoq; i += 1){
        gmails.push(`${username[i]}@gmail.com`)
    }
    console.log(gmails)
}


username.push(create_username(1,"Abdurahmon" ,"shohusniddinov@gmail.com",1234))
create_user_id(10)
create_name(sanoq)
create_mail(sanoq)
console.log("hello world")





