import products from '../all/data.json' assert {type: 'json'};


// events sections

const slideItems = document.querySelectorAll(".slide-item"),
mainSlide = document.querySelector(".slide-group"),
lengthSlide = slideItems.length,
widthItem = slideItems[0].offsetWidth;

let count = 0;

function prevSlide() {
    (count === 0) ? count = lengthSlide - 1 : count --;
    mainSlide.style.left = `-${widthItem * count}px`;
}

function nextSlide() {
    (count === lengthSlide -1) ? count = 0 : count ++;
    mainSlide.style.left = `-${widthItem * count}px`;
}



function productHandler(product) {
    return `
                <a href="../shop/product.html" class="product">
                    <div class="image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="info-product">
                        <div class="name">${product.title}</div>
                        <div class="price">${product.price}</div>
                    </div>
                    <i class="fas fa-heart left"></i>
                    <i class="fas fa-shopping-cart right"></i>
                </a>
    `
};


let listProducts = products.map((product) => (product.id < 10 ? productHandler(product) : ''));



let hotProducts = document.getElementById("hot");
hotProducts.querySelector(".wrapper").innerHTML = listProducts.join('');

let saleProducts = document.getElementById("sale");
saleProducts.querySelector(".wrapper").innerHTML = listProducts.join('');

let newProducts = document.getElementById("new");
newProducts.querySelector(".wrapper").innerHTML = listProducts.join('');

