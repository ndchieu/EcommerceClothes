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
  localStorage.setItem("cart", JSON.stringify(cart));
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
    cartItemsElement.innerHTML = cart
      .map(
        (item) => `
              <div class="cart-item">
                  <img src="${item.image}" alt="${item.title}">
                  <div class="cart-item-info">
                      <h2 class="cart-item-title">${item.title}</h2>
                      <input class="cart-item-quantity" type="number" min="1" value="${
                        item.quantity
                      }" data-id="${item.id}">
                  </div>
                  <h2 class="cart-item-price">$${item.price.toFixed(2)}</h2>
                  <button onclick="showToast(errorMsg)" class="remove-from-cart" data-id="${
                    item.id
                  }">
                     Delete
                  </button>
              </div>
          `
      )
      .join("");

    //Remove Form Cart
    const removeButtons = document.getElementsByClassName("remove-from-cart");
    for (let i = 0; i < removeButtons.length; i++) {
      const removeButton = removeButtons[i]; // Đặt tên biến là button
      removeButton.addEventListener("click", removeFromCart);
    }

    //Quantity Change
    const quantityInputs = document.querySelectorAll(".cart-item-quantity");
    quantityInputs.forEach((input) => {
      input.addEventListener("change", changeQuantity);
    });
  }
}

/*======================= CART TOTAL =======================*/

function calculateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  return total;
}

//Claculate If On Cart Page
// Kiểm tra trang và gọi hàm render
if (window.location.pathname.includes("cart.html")) {
  renderCartItems();
  calculateCartTotal();
} else {
  renderProducts();
}

//Cart Icon Quantity

const cartIcon = document.getElementById("cart-icon");

function updateCartIcon() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartIcon.setAttribute("data-quantity", totalQuantity);
}

updateCartIcon();

function updateCartIconCartChange() {
  updateCartIcon();
}

window.addEventListener("DOMContentLoaded", updateCartIconCartChange);
