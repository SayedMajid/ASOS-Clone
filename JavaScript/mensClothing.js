var mensData = [
    {
        imgUrl: "https://images.asos-media.com/products/asos-design-co-ord-relaxed-shorts-in-blue-with-all-over-wave-print/202300360-1-surftheweb?$n_320w$&wid=317&fit=constrain",
        name: "ASOS DESIGN co-ord relaxed shorts in blue with all over wave print",
        price: "30.00"
    },
    {
        imgUrl: "https://images.asos-media.com/products/asos-design-co-ord-super-oversized-sweatshirt-in-off-white-with-back-fruit-print/202115339-1-starwhite?$n_960w$&wid=952&fit=constrain",
        name: "ASOS DESIGN co-ord super oversized sweatshirt in off white with back fruit print",
        price:"30.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-sling-bag-in-black-paisley/201346440-1-black?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN sling bang in black paisley",
        price:"16.00"
    },
    {
        imgUrl:"https://images.asos-media.com/groups/asos-design-co-ord-in-washed-blue-with-collegiate-print/76639-group-1?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN co ord in washed blue with collegiate print",
        price:"50.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-co-ord-relaxed-shorts-in-washed-blue-with-varsity-print/202201131-1-azureblue?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN Co-ord relaxed shorts with washed blue with varsity print",
        price:"12.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-recycled-hexagon-sunglasses-in-brown/201687336-1-brown?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN recycled hexagon sunglasses in brown",
        price:"26.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-denim-shorts-with-front-pleats-in-mid-wash-with-vintage-tint/201909438-1-blue?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN neckchain with square sandstone pendant in gold tone",
        price:"24.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-neckchain-with-square-sandstone-pendant-in-gold-tone/202109034-1-gold?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN neckchain with square sandstone pendant in gold tone",
        price:"8.50"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-ball-chain-neckchain-with-dogtag-and-blue-monogram-print-pendant-in-real-silver-plate/201517492-1-silver?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN ball chain neckchain with dogtag and blue monogram print pendant in real silver plate",
        price:"12.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-denim-shorts-in-shorter-length-in-washed-black-with-heavy-rips-and-split-hem/201909457-1-black?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN denim shorts in shorter length in washed black with heavy rips and split hem",
        price:"26.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-co-ord-oversized-t-shirt-in-washed-blue-with-collegiate-front-print/202089193-1-azureblue?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN co ord oversized t-shirt in washed blue with collegiate front print",
        price:"24.00"
    },
    {
        imgUrl:"https://images.asos-media.com/products/asos-design-co-ord-relaxed-vest-in-all-over-blue-wave-print/202338991-1-blues?$n_960w$&wid=952&fit=constrain",
        name:"ASOS DESIGN co ord relaxed vest in all over blue wave print",
        price:"20.00"
    }
]

var bagData = JSON.parse(localStorage.getItem("bagData"))||[];

mensData.map(function(elem,index,arr){
    var box = document.createElement("div")
    box.setAttribute("class","prodBox")
    var img = document.createElement("img")
    img.src = elem.imgUrl;
    img.setAttribute("class","prodImg")

    var prodName = document.createElement("p")
    prodName.textContent = elem.name;
    prodName.setAttribute("class", "prodName")

    var price = document.createElement("p")
    price.textContent = elem.price;
    price.setAttribute("class", "price")

    var btn = document.createElement("button")
    btn.textContent = "ADD TO BAG"
    btn.setAttribute("class", "bagBtn")
    btn.addEventListener("click", function(){
        addToBag(elem);
    })

    box.append(img,prodName,price,btn)
    document.querySelector("#container").append(box)
});

function addToBag(elem){
    bagData.push(elem)
    localStorage.setItem("bagData", JSON.stringify(bagData))
}