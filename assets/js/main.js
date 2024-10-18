/*=============== HIỂN THỊ MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== HIỂN THỊ MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu') // Thêm lớp 'show-menu' để hiển thị menu
    });
}

/*===== ẨN MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu') // Xóa lớp 'show-menu' để ẩn menu
    });
}

/*=============== HIỂN THỊ GIỎ HÀNG ===============*/
const shoppingCart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

/*===== HIỂN THỊ GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartShop) {
    cartShop.addEventListener("click", () => {
        shoppingCart.classList.add('show-cart') // Thêm lớp 'show-cart' để hiển thị giỏ hàng
    });
}

/*===== ẨN GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartClose) {
    cartClose.addEventListener("click", () => {
        shoppingCart.classList.remove('show-cart') // Xóa lớp 'show-cart' để ẩn giỏ hàng
    });
}

/*=============== HIỂN THỊ LOGIN ===============*/
const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close')

/*===== HIỂN THỊ LOGIN =====*/
/* Kiểm tra xem biến có tồn tại không */
if (loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login') // Thêm lớp 'show-login' để hiển thị đăng nhập
    });
}

/*===== ẨN LOGIN =====*/
/* Kiểm tra xem biến có tồn tại không */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login') // Xóa lớp 'show-login' để ẩn đăng nhập
    });
}

/*=============== SWIPER TRANG CHỦ ===============*/
var homeSwiper = new Swiper(" .home-swiper", {
    spaceBetween: 30, // Khoảng cách giữa các slide
    Loop: 'true', // Cho phép lặp vòng
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Cho phép click vào dấu chấm phân trang
    },
});

/*=============== THAY ĐỔI NỀN HEADER KHI CUỘN ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // Khi cuộn trang lớn hơn 50px, thêm lớp 'scroll-header' vào thẻ header
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header'); // Xóa lớp 'scroll-header' nếu không cuộn
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER SẢN PHẨM MỚI ===============*/
var newSwiper = new Swiper(" .new-swiper", {
    spaceBetween: 16, // Khoảng cách giữa các slide
    centeredSlider: true, // Các slide được căn giữa
    slidesPerView: "auto", // Hiển thị nhiều slide tự động
    Loop: 'true', // Cho phép lặp vòng
});

/*=============== HIỂN THỊ NÚT CUỘN LÊN ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // Khi cuộn trang cao hơn 350px, thêm lớp 'show-scroll' để hiển thị nút cuộn lên
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll'); // Ẩn nút cuộn lên nếu nhỏ hơn 350px
}
window.addEventListener('scroll', scrollUp)

/*=============== HỎI ĐÁP (ACCORDION) ===============*/
const accordionItem = document.querySelectorAll('.questions__item')

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toogleItem(item) // Mở item đang được nhấp
        if (openItem && openItem !== item) {
            toogleItem(openItem) // Đóng item đã mở nếu có
        }
    })
});

const toogleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style') // Xóa style để đóng item
        item.classList.remove('accordion-open') // Xóa lớp 'accordion-open'
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px' // Thêm chiều cao động
        item.classList.add('accordion-open') // Thêm lớp 'accordion-open'
    }
}

/*=============== CHUYỂN ĐỔI PHONG CÁCH GIAO DIỆN ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open"); // Bật/tắt bảng chọn style
});

/*=============== ẨN BẢNG CHỌN STYLE KHI CUỘN ===============*/
window.addEventListener("scroll", () => {
    if (document.querySelector(".style__switcher").classList.contains("open")) {
        document.querySelector(".style__switcher").classList.remove("open"); // Ẩn bảng chọn style khi cuộn
    }
})

/*=============== MÀU CHỦ ĐỀ ===============*/
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors(); // Thiết lập màu chủ đề
        }
    })

    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css"); // Đặt màu đã chọn

        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active"); // Xóa lớp 'active' của màu hiện tại
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active"); // Thêm lớp 'active' cho màu mới
    }

    if (localStorage.getItem("color") !== null) {
        setColors(); // Nếu có màu chủ đề trong localStorage, thiết lập màu đó
    } else {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active"); // Thiết lập màu mặc định
    }
}

themeColors(); // Gọi hàm thiết lập màu chủ đề