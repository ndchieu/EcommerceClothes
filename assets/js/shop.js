/*======================== SHOP PRODUCT ========================*/
// Lấy danh sách sản phẩm và phần tử
const productList = document.getElementById("productList");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");

// Lưu trữ sản phẩm trong giỏ hàng vào Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Dữ liệu sản phẩm (sẽ được fetch từ product.json)
let products = [];

// Khi DOM được tải
document.addEventListener("DOMContentLoaded", () => {
  // Fetch dữ liệu từ product.json
  fetch("product.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      products = data; // Lưu dữ liệu vào biến products
      renderProducts(); // Render sản phẩm sau khi lấy dữ liệu
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });

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
                  <a onclick="showToast(successMsg)" href="#"  class="add-to-cart button new__button" data-id="${
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

function renderFilteredProducts(filteredProducts) {
  if (productList) {
    productList.innerHTML = filteredProducts
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
                  <a  onclick="showToast(successMsg)" href="#" class="add-to-cart button new__button" data-id="${
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

let toastBox = document.getElementById("toastBox");
let successMsg =
  '<i class="bx bxs-check-circle"></i> <p style="color: var(--text-color);">The product has been added to the cart</p>';
let errorMsg =
  '<i class="bx bxs-x-circle" ></i> <p style="color: var(--text-color);">Product has been removed from the cart</p>';
let invalidMsg;
('<i class="fa-solid fa-circle-exclamation"></i> You are not logged in yet');
function showToast(msg) {
  let toast = document.createElement("div");
  toast.style = "font-size : 12px ; color: text-color";
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("removed")) {
    toast.classList.add("error");
  }
  if (msg.includes("logged")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
