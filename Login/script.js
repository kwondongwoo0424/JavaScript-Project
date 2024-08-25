const form = document.querySelector("#form")
const usernameBox = document.querySelector("#username")
const passwordBox = document.querySelector("#password")
const checkBox = document.querySelector("#checkBox")
const greeting = document.querySelector("#greeting")
const close_img = document.querySelector("#close_img")
const open_img = document.querySelector("#open_img")
const showPwBox = document.querySelector(".pwInputBox")
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSubmit(event){
    event.preventDefault()
    const ischecked = checkBox.checked;
    const username = usernameBox.value;
    const password = passwordBox.value;
    usernameBox.value = "";
    passwordBox.value = "";
    if (checkBox.checked){
        checkBox.checked=false
    }
    if (ischecked===true){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } 
    paintGreeting(username)
}

function paintGreeting(username){
    greeting.innerHTML = `hello ${username}`;
    greeting.classList.remove('hidden');
}

if (savedUsername != null) {
    paintGreeting(savedUsername)
}

function showPw(){
    showPwBox.type = "";
    close_img.classList.add("hidden")
    open_img.classList.remove("hidden")
}

function hidePw(){
    showPwBox.type = "password";
    close_img.classList.remove("hidden")
    open_img.classList.add("hidden")
}

function PwIsEmpty(){
    let PwLength = parseInt((passwordBox.value).length)
    if (PwLength == 0){
        open_img.classList.add("hidden")
        close_img.classList.add("hidden")
    }else if(open_img.classList.contains('hidden') && (showPwBox.type = "password")){
        close_img.classList.remove("hidden")
    }else if(close_img.classList.contains('hidden') && (showPwBox.type = "")){
        open_img.classList.remove("hidden")
    }
}

close_img.addEventListener('click', showPw)
open_img.addEventListener('click', hidePw)
form.addEventListener("submit", onSubmit)