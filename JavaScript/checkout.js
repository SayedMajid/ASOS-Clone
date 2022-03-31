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
    var mainBox = document.createElement("div")
    mainBox.setAttribute("id", "mainBox")

    var imgBox = document.createElement("div")
    imgBox.setAttribute("id", "imgBox")

    var prodBox = document.createElement("div")

    var img = document.createElement("img")
    img.src = elem.imgUrl;
    img.setAttribute("class", "prodImage")

    var price = document.createElement("p")
    price.textContent = elem.price;
    price.setAttribute("class", "prodPrice")

    var name = document.createElement("p")
    name.textContent = elem.name;
    name.setAttribute("class", "prodName")

    imgBox.append(img)
    prodBox.append(price,name)
    mainBox.append(imgBox,prodBox)
    document.querySelector("#itemList").append(mainBox)
});

var totalPrice = bagItems.reduce(function(sum,elem,i,arr){
    return sum + Number(elem.price)
},0);

document.querySelector(".displayPrice").textContent = totalPrice;

document.querySelector("#applyCode").addEventListener("click", promoFn)
function promoFn(){
    var promo = document.querySelector("#promoCode").value
    if(promo == "SPECIAL"){
        var discount = eval(totalPrice * 0.7)
    }
    else{
        alert("Enter valid code")
    }
    document.querySelector(".displayPrice").textContent = discount;
}