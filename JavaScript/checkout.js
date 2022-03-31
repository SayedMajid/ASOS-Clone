document.querySelector("#toHomePage").addEventListener("click", homeFn)
function homeFn(){
    window.location.href = "men.html"
}
document.querySelector("#checkoutPage").addEventListener("click", checkFn)
function checkFn(){
    event.preventDefault()
    window.location.href = "bag.html"
}
var length = JSON.parse(localStorage.getItem("length"))
document.querySelector("#displayItem").textContent = length

var bagItems = JSON.parse(localStorage.getItem("bagData"))
console.log(bagItems)

bagItems.map(function (elem){
    
})