// thêm sản phẩm vào giỏ hàng
let items = JSON.parse(localStorage.getItem('items'));


handlerItem = (item) => {
    return `
            <section class="product" id=${item.id}>
                <div class="remove" onclick="removeItem(this)"></div>
                <div class="image">
                    <img src=${item.image} alt="">
                </div>
                <div class="info-product">
                    <h3>${item.title}</h3>
                    <p>Đơn giá : <span class="price">${item.price}</span></p>
                    <p>Kích cỡ : <span class="size">XL</span></p>
                    <p>Số lượng : <span class="quantity">${item.quantity}</span></p>
                </div>
                <div class="total">
                    <p></p>
                    <div class="confirm-btn"><input type="checkbox" name="" id="" onclick="cals()"></div> 
                </div>
            </section>
    `
}

let bodyCart = document.querySelector(".cart-body");
bodyCart.innerHTML = items.map((item) => handlerItem(item)).join('');

// xóa sản phẩm



// xử lý tính tiền giỏ hàng
let products = document.querySelectorAll(".product");

let totalPill = document.getElementById("total");
totalPill.innerHTML = 0;

// hàm tính tiền mỗi khi click
window.cals = () => {
    totalPill.innerHTML = 0;

    products.forEach((product) => {
        let price = product.querySelector(".price").innerHTML,
        quantity = product.querySelector(".quantity").innerHTML
        let total = product.querySelector(".total p");
        
        total.innerHTML = price * quantity;
        if(product.querySelector(".total input").checked) {
            totalPill.innerHTML = parseInt(totalPill.innerHTML) + parseInt(total.innerHTML)
        }
    });
}

// tính tiền lúc đầu
products.forEach((product) => {
    let price = product.querySelector(".price").innerHTML,
    quantity = product.querySelector(".quantity").innerHTML
    let total = product.querySelector(".total p");
    
    total.innerHTML = price * quantity;
    if(product.querySelector(".total input").checked) {
        totalPill.innerHTML = parseInt(totalPill.innerHTML) + parseInt(total.innerHTML)
    }
});


// xóa sản phẩm
window.removeItem = (e) => {
    let product = e.parentElement.id;
    items = items.filter((item) => item.id != product)
    localStorage.setItem("items", JSON.stringify(items))
    bodyCart.innerHTML = items.map((item) => handlerItem(item)).join('');
    countItem();
}

// Thanh toán
const abateBtn = document.getElementById("abate");
const total = document.getElementById("total")
abateBtn.addEventListener("click", () => {
    if(total.innerHTML == 0) {
        alert("vui lòng chọn sản phẩm")
    }
})
