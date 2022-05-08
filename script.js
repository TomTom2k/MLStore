import products from './all/data.json' assert {type: 'json'};


// lịch sử mua hàng trước đó
let items;
if(localStorage.getItem('items')) {
    items = localStorage.getItem('items');
} else {
    localStorage.setItem('items','[]');
    items = [];
}


// navbar
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
    btnMenu.parentElement.querySelector(".menu-section").classList.toggle("active");
    btnMenu.querySelector(".fas").classList.toggle("fa-bars");
    btnMenu.querySelector(".fas").classList.toggle("fa-times");
})


// search box
const searchBox = document.getElementById("search-box");

function productHandlerSearch(product) {
    return `
    <a href="../shop/product.html" class="item-block" id=${product.id} onclick="transmittion(this)">
        <img src=${product.image} alt="">
        <div class="name-product">${product.title}</div>
    </a>
    `
};

// truyền thông tin sản phẩm tìm kiếm
window.transmittion = (e) => {
    localStorage.setItem('item', e.id);
}

// đóng mở khung search
searchBox.onfocus = () => {
    searchBox.parentElement.classList.add("active");
};

window.onclick = (e) => {
    if(e.target.closest(".search-box")) return;
    searchBox.parentElement.classList.remove("active");
    searchBox.value = '';
};

// tìm kiếm
searchBox.onkeyup = () => {
    let listProductsSearch = products.map((product) => (product.title.includes(searchBox.value.toUpperCase()) ? productHandlerSearch(product) : ''));
    let searchProducts = searchBox.parentElement.querySelector(".search-block");
    searchProducts.innerHTML = listProductsSearch.join('');
}





// đếm số phần tử của giỏ hàng
window.countItem = () => {
    const cart = document.getElementById("cart");
    let count = JSON.parse(localStorage.getItem("items")).length;
    cart.querySelector(".count").innerHTML = `${count}`
};
countItem();



















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
                <a href="./shop/product.html" class="product hot" id=${product.id} onclick="transmittion(this)">
                    <div class="image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="info-product">
                        <div class="name">${product.title}</div>
                        <div class="price">${product.price} <span>VND</span></div>
                    </div>
                </a>
    `
};
let listProductsHot = products.map((product) => (product.id < 10 ? productHandlerHot(product) : ''));
let hotProducts = document.getElementById("hot");
hotProducts.querySelector(".wrapper").innerHTML = listProductsHot.join('');


function productHandlerSale(product) {
    return `
                <a href="./shop/product.html" class="product sale" id=${product.id} onclick="transmittion(this)">
                    <div class="image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="info-product">
                        <div class="name">${product.title}</div>
                        <div class="price">${product.price}<span>VND</span></div>
                    </div>
                </a>
    `
};
let listProductsSale = products.map((product) => (product.id < 10 ? productHandlerSale(product) : ''));
let saleProducts = document.getElementById("sale");
saleProducts.querySelector(".wrapper").innerHTML = listProductsSale.join('');



function productHandlerNew(product) {
    return `
                <a href="./shop/product.html" class="product new" id=${product.id} onclick="transmittion(this)">
                    <div class="image">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="info-product">
                        <div class="name">${product.title}</div>
                        <div class="price">${product.price}<span>VND</span></div>
                    </div>
                </a>
    `
};
let listProductsNew = products.map((product) => (product.id < 10 ? productHandlerNew(product) : ''));
let newProducts = document.getElementById("new");
newProducts.querySelector(".wrapper").innerHTML = listProductsNew.join('');


