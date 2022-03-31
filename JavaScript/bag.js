document.querySelector(".men").addEventListener("click", myFunction)
function myFunction(){
    event.preventDefault();
    window.location.href = "mensClothing.html"
}

var bagItems = JSON.parse(localStorage.getItem("bagData"))
bagItems.map(function(elem,index,arr){
    // this is a div box
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

    var btn = document.createElement("button")
    btn.textContent = "REMOVE ITEM"
    btn.setAttribute("class", "removeBtn")
    btn.addEventListener("click", function(){
        removeProduct(elem,index,arr);
    });

    imgBox.append(img)
    prodBox.append(price,name,btn)
    mainBox.append(imgBox,prodBox)
    document.querySelector("#bagProducts").append(mainBox)
})

function removeProduct(elem,index){
    bagItems.splice(index, 1)
    localStorage.setItem("bagData", JSON.stringify(bagItems))
    window.location.reload()
}

var totalPrice = bagItems.reduce(function(sum,elem,index,arr){
    return sum + Number(elem.price);
}, 0);

var length = bagItems.length;
console.log(length)
localStorage.setItem("length", JSON.stringify(length));

document.querySelector("#displayPrice").textContent = totalPrice;
document.querySelector("#cbPrice").textContent = totalPrice;
document.querySelector("#homePage").addEventListener("click", homeFn)
function homeFn(){
    window.location.href = "men.html"
}

document.querySelector("#checkoutBtn").addEventListener("click", checkout)
function checkout(){
    window.location.href = "checkout.html"
}