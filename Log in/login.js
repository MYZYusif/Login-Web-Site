

let form = document.querySelector("form")
let inputs = document.querySelectorAll("input")
let button = document.querySelector("button")
button.addEventListener("click",(event)=>{
    event.preventDefault
    if(form.checkValidity()){
        AddNewUser()
    }else{
        alert("Form Düzgün Deyil!")
    }
}
)
function checkUserFromStorage() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users
}

function AddNewUser() {
    let newUser = {};
    inputs.forEach(input => {
        newUser[input.name]= input.value;
    })
    let users = checkUserFromStorage();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
}

