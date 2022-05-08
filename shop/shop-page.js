import products from '../all/data.json' assert {type: 'json'};

let maxPage = Math.ceil(products.length/12);
let pagination = document.querySelector(".pagination .numbers");
let page = 1;



const prevBtn = document.getElementById("prev"),
nextBtn = document.getElementById("next"),
numbers = document.querySelectorAll(".number");

// tạo trang sau
prevBtn.addEventListener(("click"), () => {
    (page == 1) ? page = maxPage : page--;
    shopProducts.innerHTML = creatListProducts();

})

// tạo trang trước
nextBtn.addEventListener(("click"), () => {
    (page == maxPage) ? page = 1 : page++;
    shopProducts.innerHTML = creatListProducts();

})
// tạo trang theo số trang
window.handlerClick = (e) => {
    page = e.innerHTML;
    shopProducts.innerHTML = creatListProducts();
};

// tạo trang theo filter
const sections = document.querySelectorAll(".section");

window.handlerClickFilter = (e,id) => {
    page = (id % maxPage) + 1;
    sections.forEach((section) => {
        if(section === e) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    })
    shopProducts.innerHTML = creatListProducts();
}



// tạo danh sách sản phảm
function productHandler(product) {
    return `
                <a href="./product.html" class="product" id=${product.id} onclick="transmittion(this)">
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

let shopProducts = document.querySelector(".list-product");

// 
function creatListProducts() {
    // tạo pagination
    pagination.innerHTML = ''
    for(let i = 0; i < maxPage; i++) {
        if(i === page - 1) {
            pagination.innerHTML += `<div class="number active">${i+1}</div>` 
        } else {
            pagination.innerHTML += `<div class="number" onclick="handlerClick(this)">${i+1}</div>`
        }
    }

    let listProducts = products.map((product,index) => ((product.id < 12*page) && (product.id >= 12*page-12)? productHandler(product) : ''));
    return listProducts.join('')
}

shopProducts.innerHTML = creatListProducts();



// truyền item vào giỏ hàng
window.transmittion = (e) => {
    localStorage.setItem('item', e.id);
}

