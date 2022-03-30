document.querySelector(".men").addEventListener("click", myFunction)
function myFunction(){
    event.preventDefault();
    window.location.href = "mensClothing.html"
}

var bagItems = JSON.parse(localStorage.getItem("bagData"))
bagItems.map(function(elem){
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

    imgBox.append(img)
    prodBox.append(price,name,btn)
    mainBox.append(imgBox,prodBox)
    document.querySelector("#bagProducts").append(mainBox)
})