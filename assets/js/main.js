/*=============== HIỂN THỊ MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== HIỂN THỊ MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu') // Thêm lớp 'show-menu' để hiển thị menu
    })
}

/*===== ẨN MENU =====*/
/* Kiểm tra xem biến có tồn tại không */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu') // Xóa lớp 'show-menu' để ẩn menu
    })
}

/*=============== HIỂN THỊ GIỎ HÀNG ===============*/
const shoppingCart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

/*===== HIỂN THỊ GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartShop) {
    cartShop.addEventListener('click', () => {
        shoppingCart.classList.add('show-cart') // Thêm lớp 'show-cart' để hiển thị giỏ hàng
    })
}

/*===== ẨN GIỎ HÀNG =====*/
/* Kiểm tra xem biến có tồn tại không */
if (cartClose) {
    cartClose.addEventListener('click', () => {
        shoppingCart.classList.remove('show-cart') // Xóa lớp 'show-cart' để ẩn giỏ hàng
    })
}

const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    register = document.getElementById('register'),
    registerButton = document.getElementById('register-link'),
    registerClose = document.getElementById('register-close')

/* Hàm hiển thị hoặc ẩn login/register */
function toggleModal(modal, otherModal, showClass, otherClass) {
    modal.classList.add(showClass) // Thêm lớp để hiển thị modal hiện tại
    otherModal.classList.remove(otherClass) // Xóa lớp của modal khác để ẩn nó
}

/* Hiển thị login và ẩn register nếu đang mở */
if (loginButton) {
    loginButton.addEventListener('click', () => {
        toggleModal(login, register, 'show-login', 'show-register')
    })
}

/* Hiển thị register và ẩn login nếu đang mở */
if (registerButton) {
    registerButton.addEventListener('click', () => {
        toggleModal(register, login, 'show-register', 'show-login')
    })
}

/* Ẩn login */
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login')
    })
}

/* Ẩn register */
if (registerClose) {
    registerClose.addEventListener('click', () => {
        register.classList.remove('show-register')
    })
}

/*=============== SWIPER TRANG CHỦ ===============*/
var homeSwiper = new Swiper(' .home-swiper', {
    spaceBetween: 30, // Khoảng cách giữa các slide
    Loop: 'true', // Cho phép lặp vòng
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Cho phép click vào dấu chấm phân trang
    },
})

/*=============== THAY ĐỔI NỀN HEADER KHI CUỘN ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
        // Khi cuộn trang lớn hơn 50px, thêm lớp 'scroll-header' vào thẻ header
    if (this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header') // Xóa lớp 'scroll-header' nếu không cuộn
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER SẢN PHẨM MỚI ===============*/
var newSwiper = new Swiper(' .new-swiper', {
    spaceBetween: 16, // Khoảng cách giữa các slide
    centeredSlider: true, // Các slide được căn giữa
    slidesPerView: 'auto', // Hiển thị nhiều slide tự động
    Loop: 'true', // Cho phép lặp vòng
})

/*=============== HIỂN THỊ NÚT CUỘN LÊN ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
        // Khi cuộn trang cao hơn 350px, thêm lớp 'show-scroll' để hiển thị nút cuộn lên
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll') // Ẩn nút cuộn lên nếu nhỏ hơn 350px
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
})

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
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler')
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style__switcher').classList.toggle('open') // Bật/tắt bảng chọn style
})

/*=============== ẨN BẢNG CHỌN STYLE KHI CUỘN ===============*/
window.addEventListener('scroll', () => {
    if (document.querySelector('.style__switcher').classList.contains('open')) {
        document.querySelector('.style__switcher').classList.remove('open') // Ẩn bảng chọn style khi cuộn
    }
})

/*=============== MÀU CHỦ ĐỀ ===============*/
function themeColors() {
    const colorStyle = document.querySelector('.js-color-style'),
        themeColorsContainer = document.querySelector('.js-theme-colors')

    themeColorsContainer.addEventListener('click', ({ target }) => {
        if (target.classList.contains('js-theme-color-item')) {
            localStorage.setItem('color', target.getAttribute('data-js-theme-color'))
            setColors() // Thiết lập màu chủ đề
        }
    })

    function setColors() {
        let path = colorStyle.getAttribute('href').split('/')
        path = path.slice(0, path.length - 1)
        colorStyle.setAttribute(
                'href',
                path.join('/') + '/' + localStorage.getItem('color') + '.css',
            ) // Đặt màu đã chọn

        if (document.querySelector('.js-theme-color-item.active')) {
            document
                .querySelector('.js-theme-color-item.active')
                .classList.remove('active') // Xóa lớp 'active' của màu hiện tại
        }
        document
            .querySelector(
                '[data-js-theme-color=' + localStorage.getItem('color') + ']',
            )
            .classList.add('active') // Thêm lớp 'active' cho màu mới
    }

    if (localStorage.getItem('color') !== null) {
        setColors() // Nếu có màu chủ đề trong localStorage, thiết lập màu đó
    } else {
        const defaultColor = colorStyle
            .getAttribute('href')
            .split('/')
            .pop()
            .split('.')
            .shift()
        document
            .querySelector('[data-js-theme-color' + defaultColor + ']')
            .classList.add('active') // Thiết lập màu mặc định
    }
}

themeColors() // Gọi hàm thiết lập màu chủ đề

/**VALIDATOR */
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}

    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector,
        ).querySelector(options.errorSelector)
        var errorMessage
        var rules = selectorRules[rule.selector]

        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        document.querySelector(rule.selector + ':checked'),
                    )
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add(
                'invalid',
            )
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove(
                'invalid',
            )
        }
        return !errorMessage
    }

    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault()

            var isFormValid = true

            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(
                        values,
                        input,
                    ) {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                ).value
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) return values
                                if (!Array.isArray(values[input.name])) values[input.name] = []
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})

                    options.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }
        }

        options.rules.forEach(function(rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function(inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function() {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector,
                    ).querySelector(options.errorSelector)
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove(
                        'invalid',
                    )
                }
            })
        })
    }
}

// Định nghĩa các rules
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || `Vui lòng nhập trường này`
        },
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ?
                undefined :
                message || `Trường này phải là Email`
        },
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ?
                undefined :
                message || `Vui lòng nhập tối thiểu ${min} ký tự`
        },
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ?
                undefined :
                message || `Giá trị nhập vào không đúng`
        },
    }
}


/**ADD TO CART */
// Mảng sản phẩm
const products = [{
        id: 1,
        title: "Cartoon Jacket",
        tag: "New",
        category: "Jacket",
        image: "assets/img/product-1.png",
        subtitle: "Accessory",
        price: 14.9,
        discounted_price: 25.99,
        description: "This is a description of the product.",
        link: "details.html"
    },
    {
        id: 2,
        title: "Clothing Hat Coat",
        tag: "Sale",
        category: "Coat",
        image: "assets/img/product-2.png",
        subtitle: "Accessory",
        price: 11.9,
        discounted_price: 21.99,
        description: "This is a description of the product.",
        link: "details.html"
    },
    {
        id: 3,
        title: "Fur Jacket",
        tag: "Sale",
        category: "Adidas",
        image: "assets/img/product-3.png",
        subtitle: "Accessory",
        price: 4.9,
        discounted_price: 15.99,
        description: "This is a description of the product.",
        link: "details.html"
    },
    {
        id: 4,
        title: "Fleece Jacket",
        tag: "New",
        category: "Adidas",
        image: "assets/img/product-4.png",
        subtitle: "Accessory",
        price: 7.9,
        discounted_price: 15.99,
        description: "This is a description of the product.",
        link: "details.html"
    },
    {
        id: 5,
        title: "Windbreakr Jacket",
        tag: "New",
        category: "Coat",
        image: "assets/img/product-5.png",
        subtitle: "Accessory",
        price: 109,
        discounted_price: 159.9,
        description: "This is a description of the product.",
        link: "details.html"
    },
    {
        id: 6,
        title: "Adidas Tracksubt",
        tag: "Sale",
        category: "Jacket",
        image: "assets/img/product-6.png",
        subtitle: "Accessory",
        price: 119,
        discounted_price: 159.9,
        description: "This is a description of the product.",
        link: "details.html"
    }
];


// Lấy danh sách sản phẩm và phần tử
const productList = document.getElementById('productList');
const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');

// Lưu trữ sản phẩm trong giỏ hàng vào Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hiển thị sản phẩm trên trang
// Giả sử products là danh sách các sản phẩm bạn có.
document.addEventListener("DOMContentLoaded", () => {
    // Render tất cả sản phẩm ban đầu
    renderProducts();

    // Sự kiện cho ô tìm kiếm
    document.getElementById("searchBar").addEventListener("keyup", (event) => {
        const searchTerm = event.target.value;
        filterProducts(searchTerm);
    });
});

function renderProducts() {
    if (productList) {
        productList.innerHTML = products
            .map(
                (product) => `
            <div class="shop__content swiper-slide" onclick="showDetails(${product.id})">
                <div class="shop__tag">${product.tag}</div>
                <img src="${product.image}" alt="${product.title}" class="shop__img">
                <h3 class="shop__title">${product.title}</h3>
                <span class="shop__subtitle">${product.subtitle}</span>
                <div class="shop__prices">
                    <span class="shop__price">$${product.price.toFixed(2)}</span>
                    <span class="shop__discounts">$${product.discounted_price.toFixed(2)}</span>
                </div>
                <a href="#" class="add-to-cart button new__button" data-id="${product.id}">
                    <i class="bx bx-cart-alt new__icon"></i>
                </a>
            </div>
            `
            )
            .join("");
    }

    // Thêm sự kiện cho các nút "Add to Cart"
    const addToCartButtons = document.getElementsByClassName("add-to-cart");
    for (let i = 0; i < addToCartButtons.length; i++) {
        const button = addToCartButtons[i];
        button.addEventListener("click", addToCart);
    }
}


// Hàm để lọc và hiển thị sản phẩm theo từ khóa tìm kiếm
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product => {
        return (
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    renderFilteredProducts(filteredProducts);
}

// Hàm để render sản phẩm đã lọc
function renderFilteredProducts(filteredProducts) {
    if (productList) {
        productList.innerHTML = filteredProducts
            .map(
                (product) => `
            <div class="shop__content swiper-slide">
                <div class="shop__tag">${product.tag}</div>
                <img src="${product.image}" alt="${product.title}" class="shop__img">
                <h3 class="shop__title">${product.title}</h3>
                <span class="shop__subtitle">${product.subtitle}</span>
                <div class="shop__prices">
                    <span class="shop__price">$${product.price.toFixed(2)}</span>
                    <span class="shop__discounts">$${product.discounted_price.toFixed(2)}</span>
                </div>
                <a href="#" class="add-to-cart button new__button" data-id="${product.id}">
                    <i class="bx bx-cart-alt new__icon"></i>
                </a>
            </div>
            `
            )
            .join("");

        // Thêm sự kiện cho các nút "Add to Cart"
        const addToCartButtons = document.getElementsByClassName("add-to-cart");
        for (let i = 0; i < addToCartButtons.length; i++) {
            const button = addToCartButtons[i];
            button.addEventListener("click", addToCart);
        }
    }
}

// Hàm để hiển thị chi tiết sản phẩm
function renderDetails() {
    // Lấy thông tin sản phẩm từ localStorage
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
        // Tạo phần tử chứa thông tin chi tiết
        const detailsContainer = document.querySelector(".details__container");

        // Nếu tìm thấy sản phẩm, hiển thị thông tin
        detailsContainer.innerHTML = `
            <div class="product__images grid">
                <div class="product__img">
                    <div class="details__img-tag">${product.tag}</div>
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product__img">
                    <img src="assets/img/details-2.png" alt="">
                </div>
                <div class="product__img">
                    <img src="assets/img/details-3.png" alt="">
                </div>
                <div class="product__img">
                    <img src="assets/img/details-4.png" alt="">
                </div>
            </div>
            <div class="product__info">
                <p class="details__subtitle">${product.category}</p>
                <h3 class="details__title">${product.title}</h3>

                <div class="rating">
                    <div class="stars">
                        ${renderStars()} <!-- Hàm để hiển thị số sao -->
                    </div>
                    <span class="reviews__count">40 + Reviews</span>
                </div>

                <div class="details__prices">
                    <span class="details__price">$${product.price.toFixed(2)}</span>
                    <span class="details__discount">$${product.discounted_price.toFixed(2)}</span>
                    <span class="discount__percentage">${calculateDiscountPercentage(product.price, product.discounted_price)}% OFF</span>
                </div>

                <div class="details__description">
                    <h3 class="description__title">Product Details</h3>
                    <div class="description__details">
                        <p>${product.description || "No description available."}</p>
                    </div>
                </div>

                <div class="cart__amount">
                    <input class="cart-item-quantity" type="number" min="1" value="1" data-id="${product.id}"> <!-- Sử dụng product.id ở đây -->
                    <i class="bx bx-trash-alt cart__amount-heart"></i>
                </div>
                <a href="#" class="button" data-id="${product.id}" onclick="addToCart(event)">Add To Cart</a>

            </div>
        `;
    }
}


// Hàm để hiển thị số sao
function renderStars() {
    let starsHtml = '';
    for (let i = 0; i < 4; i++) {
        starsHtml += '<i class="bx bxs-star"></i>';
    }
    starsHtml += '<i class="bx bx-star"></i>'; // Một sao chưa đầy
    return starsHtml;
}

// Hàm để tính phần trăm giảm giá
function calculateDiscountPercentage(originalPrice, discountedPrice) {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}


// Gọi hàm renderDetails khi trang được tải
window.onload = renderDetails;


// Add to cart
function addToCart(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a> khi nhấn

    const productID = parseInt(event.target.dataset.id); // Lấy ID sản phẩm từ data-id
    const product = products.find((product) => product.id === productID); // Tìm sản phẩm theo ID

    if (product) {
        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
        const existingItem = cart.find((item) => item.id === productID);

        if (existingItem) {
            existingItem.quantity++; // Tăng số lượng nếu đã tồn tại
        } else {
            // Nếu chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };
            cart.push(cartItem); // Thêm sản phẩm vào giỏ hàng
        }

        // Cập nhật văn bản nút "Add to Cart" thành "Added"
        event.target.innerText = "Added"; // Thay đổi văn bản nút
        event.target.disabled = true; // Vô hiệu hóa nút để không thể thêm lại

        updateCartIcon(); // Cập nhật biểu tượng giỏ hàng
        renderCartItems(); // Hiển thị lại các sản phẩm trong giỏ hàng
        saveToLocalStorage(); // Lưu giỏ hàng vào localStorage
        calculateCartTotal(); // Tính toán tổng giá trị giỏ hàng
    }
}

// Lưu giỏ hàng vào Local Storage
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
//Remove from cart
function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    cart = cart.filter((item) => item.id !== productID);
    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
}

// Quantity Change 

function changeQuantity(event) {
    const productID = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    if (quantity > 0) {
        const cartItem = cart.find((item) => item.id === productID);
        if (cartItem) {
            cartItem.quantity = quantity;
            saveToLocalStorage();
            calculateCartTotal();
            updateCartIcon();
        }
    }
}
// Hiển thị sản phẩm trên trang giỏ hàng
function renderCartItems() {
    if (cartItemsElement) {
        cartItemsElement.innerHTML = cart.map(
            (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h2 class="cart-item-title">${item.title}</h2>
                    <input class="cart-item-quantity" type="number" min="1" value="${item.quantity}" data-id="${item.id}">
                </div>
                <h2 class="cart-item-price">$${item.price.toFixed(2)}</h2>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `
        ).join("");
        //Remove Form Cart
        const removeButtons = document.getElementsByClassName("remove-from-cart");
        for (let i = 0; i < removeButtons.length; i++) {
            const removeButton = removeButtons[i]; // Đặt tên biến là button
            removeButton.addEventListener("click", removeFromCart);
        }

        //Quantity Change 
        const quantityInputs = document.querySelectorAll('.cart-item-quantity');
        quantityInputs.forEach((input) => {
            input.addEventListener('change', changeQuantity);
        });
    }
}

// Calculate total 
function calculateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    return total;
}


//Claculate If On Cart Page
// Kiểm tra trang và gọi hàm render
if (window.location.pathname.includes('cart.html')) {
    renderCartItems();
    calculateCartTotal();
} else {
    renderProducts();
}

//Cart Icon Quantity

const cartIcon = document.getElementById('cart-icon');

function updateCartIcon() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartIcon.setAttribute('data-quantity', totalQuantity);
}

updateCartIcon();

function updateCartIconCartChange() {
    updateCartIcon();
}

window.addEventListener('DOMContentLoaded', updateCartIconCartChange);

function updateCartIcon() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.setAttribute('data-quantity', totalQuantity);
}



/**Review Shop */

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});



function showDetails(productId) {
    // Tìm sản phẩm theo id
    const product = products.find((item) => item.id === productId);

    // Lưu thông tin sản phẩm vào localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // Điều hướng đến trang chi tiết
    window.location.href = "details.html";
}