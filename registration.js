const login = document.getElementsByClassName("login")[0];
const form = document.getElementsByClassName("form")[0];
const pass_format = /^[a-zA-Z0-9]+$/
const user_format = /^[a-zA-Z]+$/;

login.addEventListener("click", loginPage);

function loginPage() {
    location.href = "index.html";
}

form.addEventListener("submit", registration)

function registration(e) {
    e.preventDefault();
    let fName = e.target.fName.value;
    let lName = e.target.lName.value;
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    let cpass = e.target.cpass.value;

    if (!user_format.test(fName) || !user_format.test(lName)) {
        alert("Use only alphabet in name");
        return;
    }
    if (!pass_format.test(pass)) {
        alert("Your password should 8 digit");
        return;
    }
    if (pass != cpass) {
        alert("Password and confirm password didn't match");
        return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    alert("Registration successful...");
    location.href = "index.html";
}