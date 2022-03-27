document.querySelector("#signIn").addEventListener("click", signFn)
function signFn(){
    window.location.href="signIn.html"
}

document.querySelector("form").addEventListener("submit", formFn)
var userCreds = JSON.parse(localStorage.getItem("userCreds"))||[];

function formFn(){
    event.preventDefault()
    var userData = {
        email: document.querySelector("#email").value,
        firstName: document.querySelector("#fName").value,
        lastName: document.querySelector("#lName").value,
        password: document.querySelector("#password").value,
        birthDate: document.querySelector("#date").value,
        birthMonth: document.querySelector("#month").value,
        birthYear: document.querySelector("#year").value,
    }
    userCreds.push(userData)
    localStorage.setItem("userCreds", JSON.stringify(userCreds))
}