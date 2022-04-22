import products from './all/data.json' assert {type: 'json'};


const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
    btnMenu.parentElement.querySelector(".menu-section").classList.toggle("active");
    btnMenu.querySelector(".fas").classList.toggle("fa-bars");
    btnMenu.querySelector(".fas").classList.toggle("fa-times");
})


// search box
const searchBox = document.getElementById("search-box");

searchBox.onfocus = () => {
    searchBox.parentElement.classList.add("active");
};

searchBox.onblur = () => {
    searchBox.parentElement.classList.remove("active");
};

















// events sections

const slideItems = document.querySelectorAll(".slide-item"),
mainSlide = document.querySelector(".slide-group"),
lengthSlide = slideItems.length,
widthItem = slideItems[0].offsetWidth;

let count = 0;

window.prevSlide = function(e) {
    (count === 0) ? count = lengthSlide - 1 : count --;
    mainSlide.style.left = `-${widthItem * count}px`;
}

window.nextSlide = function(e) {
    (count === lengthSlide -1) ? count = 0 : count ++;
    mainSlide.style.left = `-${widthItem * count}px`;
}



function productHandlerHot(product) {
    return `
                <a href="/shop/product.html" class="product hot">
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
let listProductsHot = products.map((product) => (product.id < 10 ? productHandlerHot(product) : ''));
let hotProducts = document.getElementById("hot");
hotProducts.querySelector(".wrapper").innerHTML = listProductsHot.join('');


function productHandlerSale(product) {
    return `
                <a href="/shop/product.html" class="product sale">
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
let listProductsSale = products.map((product) => (product.id < 10 ? productHandlerSale(product) : ''));
let saleProducts = document.getElementById("sale");
saleProducts.querySelector(".wrapper").innerHTML = listProductsSale.join('');



function productHandlerNew(product) {
    return `
                <a href="/shop/product.html" class="product new">
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
let listProductsNew = products.map((product) => (product.id < 10 ? productHandlerNew(product) : ''));
let newProducts = document.getElementById("new");
newProducts.querySelector(".wrapper").innerHTML = listProductsNew.join('');


