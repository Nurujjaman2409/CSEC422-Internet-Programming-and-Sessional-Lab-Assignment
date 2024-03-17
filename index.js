const reg = document.getElementsByClassName("link")[0];
const data = document.getElementById("form");
const btn = document.querySelector(".sgn_btn");


reg.addEventListener("click", register)
function register(){
    location.href = "registration.html"
}

data.addEventListener("submit", login)
function login(e){
    e.preventDefault();
    let user = localStorage.getItem("email")
    let pass = localStorage.getItem("pass")
    let username = e.target.uName.value;
    let password = e.target.pass.value;
    if(username== user && password==pass){
        location.href="home.html";
    }
    else{
        alert("Invalid username & password");
    }
    console.log(username, password);
}