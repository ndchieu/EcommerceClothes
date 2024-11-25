/*======================== SHOP PRODUCT ========================*/

// Mảng sản phẩm
const products = [
  {
    id: 1,
    title: "Cartoon Jacket",
    tag: "New",
    category: "Jacket",
    image: "assets/img/product-1.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 14.9,
    discounted_price: 25.99,
    description: "This is a description of the product.",
    link: "details.html",
  },
  {
    id: 2,
    title: "Clothing Hat Coat",
    tag: "Sale",
    category: "Coat",
    image: "assets/img/product-2.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 11.9,
    discounted_price: 21.99,
    description: "This is a description of the product.",
    link: "details.html",
  },
  {
    id: 3,
    title: "Fur Jacket",
    tag: "Sale",
    category: "Adidas",
    image: "assets/img/product-3.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 4.9,
    discounted_price: 15.99,
    description: "This is a description of the product.",
    link: "details.html",
  },
  {
    id: 4,
    title: "Fleece Jacket",
    tag: "New",
    category: "Adidas",
    image: "assets/img/product-4.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 7.9,
    discounted_price: 15.99,
    description: "This is a description of the product.",
    link: "details.html",
  },
  {
    id: 5,
    title: "Windbreakr Jacket",
    tag: "New",
    category: "Coat",
    image: "assets/img/product-5.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 109,
    discounted_price: 159.9,
    description: "This is a description of the product.",
    link: "details.html",
  },
  {
    id: 6,
    title: "Adidas Tracksubt",
    tag: "Sale",
    category: "Jacket",
    image: "assets/img/product-6.png",
    image2: "assets/img/product-2.png",
    image3: "assets/img/product-3.png",
    image4: "assets/img/product-4.png",
    subtitle: "Accessory",
    price: 119,
    discounted_price: 159.9,
    description: "This is a description of the product.",
    link: "details.html",
  },
];

// Lấy danh sách sản phẩm và phần tử
const productList = document.getElementById("productList");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");

// Lưu trữ sản phẩm trong giỏ hàng vào Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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
              <div class="shop__content swiper-slide">
                  <div class="shop__tag">${product.tag}</div>
                  <img  onclick="showDetails(${product.id})" src="${
          product.image
        }" alt="${product.title}" class="shop__img">
                  <h3 class="shop__title">${product.title}</h3>
                  <span class="shop__subtitle">${product.subtitle}</span>
                  <div class="shop__prices">
                      <span class="shop__price">$${product.price.toFixed(
                        2
                      )}</span>
                      <span class="shop__discounts">$${product.discounted_price.toFixed(
                        2
                      )}</span>
                  </div>
                  <a href="#" class="add-to-cart button new__button" data-id="${
                    product.id
                  }">
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
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  renderFilteredProducts(filteredProducts);
}

/*======================== SEARCH PRODUCT ====================*/

function renderFilteredProducts(filteredProducts) {
  if (productList) {
    productList.innerHTML = filteredProducts
      .map(
        (product) => `
              <div class="shop__content swiper-slide">
                  <div class="shop__tag">${product.tag}</div>
                  <img  onclick="showDetails(${product.id})"  src="${
          product.image
        }" 
                  alt="${product.title}" class="shop__img">
                  <h3 class="shop__title">${product.title}</h3>
                  <span class="shop__subtitle">${product.subtitle}</span>
                  <div class="shop__prices">
                      <span class="shop__price">$${product.price.toFixed(
                        2
                      )}</span>
                      <span class="shop__discounts">$${product.discounted_price.toFixed(
                        2
                      )}</span>
                  </div>
                  <a href="#" class="add-to-cart button new__button" data-id="${
                    product.id
                  }">
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
