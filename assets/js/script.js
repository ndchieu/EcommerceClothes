const products = [{
        id: 1,
        title: "Cartoon Jacket",
        tag: "New",
        image: "assets/img/product-1.png",
        subtitle: "Accessory",
        price: 14.9,
        discounted_price: 25.99,
        link: "details.html"
    },
    {
        id: 2,
        title: "Clothing Hat Coat",
        tag: "Sale",
        image: "assets/img/product-2.png",
        subtitle: "Accessory",
        price: 11.9,
        discounted_price: 21.99,
        link: "details.html"
    },
    {
        id: 3,
        title: "Fur Jacket",
        tag: "Sale",
        image: "assets/img/product-3.png",
        subtitle: "Accessory",
        price: 4.9,
        discounted_price: 15.99,
        link: "details.html"
    },
    {
        id: 4,
        title: "Fleece Jacket",
        tag: "New",
        image: "assets/img/product-4.png",
        subtitle: "Accessory",
        price: 7.9,
        discounted_price: 15.99,
        link: "details.html"
    },
    {
        id: 5,
        title: "Windbreakr Jacket",
        tag: "New",
        image: "assets/img/product-5.png",
        subtitle: "Accessory",
        price: 10.9,
        discounted_price: 15.99,
        link: "details.html"
    },
    {
        id: 6,
        title: "Adidas Tracksubt",
        tag: "Sale",
        image: "assets/img/product-6.png",
        subtitle: "Accessory",
        price: 11.9,
        discounted_price: 15.99,
        link: "details.html"
    }
];

const productList = document.getElementById('productList');

function renderProducts() {
    if (productList) {
        productList.innerHTML = products.map((product) => `
            <div class="shop__content">
                <div class="shop__tag">${product.tag}</div>
                <img src="${product.image}" alt="${product.title}" class="shop__img">
                <h3 class="shop__title">${product.title}</h3>
                <span class="shop__subtitle">${product.subtitle}</span>

                <div class="shop__prices">
                    <span class="shop__price">$${product.price.toFixed(2)}</span>
                    <span class="shop__discounts">$${product.discounted_price.toFixed(2)}</span>
                </div>

                <a href="#" class="button shop__button" data-id ="${product.id}">
                    <i class="bx bx-cart-alt shop__icon"></i> 
                </a>
            </div>
        `).join("");
    }
}

// Gọi hàm để hiển thị sản phẩm
renderProducts();



// Add to cart
function addToCart(event) {
    event.preventDefault(); // Để tránh tải lại trang khi nhấn vào link
    const productID = parseInt(event.target.dataset.id);
    const product = products.find((product) => product.id === productID);

    if (product) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng
        const existingItem = cart.find((item) => item.id === productID);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };
            cart.push(cartItem);
        }

        //Change Add To cart text to added
        event.target.innerText = "Added";
        updateCartIcon();
        renderCartItems();
        saveToLocalStorage();
        calculateCartTotal();
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