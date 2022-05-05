import products from './data.json' assert {type: 'json'};

// thêm header vào trang
const header = document.createElement("header");

header.innerHTML = `
<div class="header-top">
        <div class="logo">
            <h2>ML</h2>
            <p>Store</p>
        </div>
        <div class="search-box">
            <input id="search-box" type="text" placeholder="Bạn muốn tìm">
            <label for="search-box"><i class="fas fa-search"></i></label>
            <div class="search-block">
                <p>Bạn muốn tìm</p>
            </div>
        </div>
    </div>
    <div class="header-bottom">
        <div class="menu">
            <div class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></div>
            <div class="menu-section">
                <a href="../index.html">Trang chủ</a>
                <a href="../shop/shop.html">Cửa hàng</a>
                <a href="../introduce/introduce.html">Giới thiệu</a>
                <a href="../contact/contact.html">Liên hệ</a>
                <a href="../sitemap/sitemap.html">Hướng dẫn</a>

            </div>
        </div>
        <div class="icons">
            <a href="../notification/notification.html"><i class="fas fa-bell"></i></a>
            <a href="../cart/cart.html"><i class="fas fa-shopping-cart" id="cart"><div class="count">1</div></i></a>
            <a href="../login/login.html" class="image-user">
                <img src="../image/avatar.jfif" alt="">
            </a>
        </div>
        
    </div>
`

document.body.appendChild(header)

// nút section cho menu
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


searchBox.onkeyup = () => {
    let listProductsSearch = products.map((product) => (product.title.includes(searchBox.value.toUpperCase()) ? productHandlerSearch(product) : ''));
    let searchProducts = searchBox.parentElement.querySelector(".search-block");
    searchProducts.innerHTML = listProductsSearch.join('');
}



// giỏ hàng
window.countItem = () => {
    const cart = document.getElementById("cart");
    let count = JSON.parse(localStorage.getItem("items")).length;
    cart.querySelector(".count").innerHTML = `${count}`
};

countItem();



// thêm footer vào trang

const footer = document.createElement("footer")

footer.innerHTML = `
<div class="icons">
    <div class="icon-group">
        <i class="fas fa-phone"></i>
        <div class="text">+84 999 999 999</div>
        <div class="text">+84 789 789 789</div>
    </div>

    <div class="icon-group">
        <i class="fas fa-map-marker-alt"></i>
        <div class="text">123/321 đường số 1, quận Bình Chánh</div>
    </div>

    <div class="icon-group">
        <i class="fas fa-comments"></i>
        <div class="text">Nguyễn Minh Luận <br>20122981</div>
        <div class="text">Nguyễn Trường Tuấn Kiệt <br>20048301</div>
    </div>

    <div class="footer">ML Store uy tín, chất lượng, nhiệt tình</div>
</div>
`

document.body.appendChild(footer)




