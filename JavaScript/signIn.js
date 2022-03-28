document.querySelector("#join").addEventListener("click", joinFn)
function joinFn(){
    window.location.href="join.html"
}
document.querySelector("form").addEventListener("submit", signFn)
var registeredUsers = JSON.parse(localStorage.getItem("userCreds"))
function signFn(){
    event.preventDefault()
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var count = 0
    for(var i=0; i<registeredUsers.length; i++){
        if(registeredUsers[i].email == email && registeredUsers[i].password == password){
            window.location.href= "men.html";
            count++;
            break;
        }
    }
    if(count == 0){
        alert("Enter valid email or password")
    }
    else{
        alert("Login Success")
    }
}