/*======================== DETAILS PRODUCT ========================*/

function renderDetails() {
  // Lấy thông tin sản phẩm từ localStorage
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (product) {
    // Tạo phần tử chứa thông tin chi tiết
    const detailsContainer = document.querySelector(".details__container");

    // Nếu tìm thấy sản phẩm, hiển thị thông tin
    // <div class="details__img-tag">${product.tag}</div>
    detailsContainer.innerHTML = `
              <div class="product__images grid">
                <div class="show-full-img" id="showImgBox">
                    <img src="" id="showImg">
                    <span onclick="closeFullImg()">X</span>
                </div>
                  <div class = "product_img-active">
                       <div class = "product_img-item">
                        <img onclick ="openFullImg(this.src)" id ="productDetailsImg" 
                          src="${product.image}" alt="${product.title}">
                      </div>
                  </div>
                  <div class="product__imgs">
                      <div class = "product_img-item">
                        <img class ="small-img" onclick = "showImgDetails(this.src)" 
                          src="${product.image}" alt="${product.title}">
                      </div>
                       <div class = "product_img-item">
                        <img class ="small-img" onclick = "showImgDetails(this.src)" 
                          src="${product.image2}" alt="${product.title}">
                      </div>
                       <div class = "product_img-item">
                        <img class ="small-img" onclick = "showImgDetails(this.src)"
                          src="${product.image3}" alt="${product.title}">
                      </div>
                       <div class = "product_img-item">
                        <img class ="small-img" onclick = "showImgDetails(this.src)" 
                          src="${product.image4}" alt="${product.title}">
                      </div>
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
                      <span class="details__price">$${product.price.toFixed(
                        2
                      )}</span>
                      <span class="details__discount">$${product.discounted_price.toFixed(
                        2
                      )}</span>
                      <span class="discount__percentage">${calculateDiscountPercentage(
                        product.price,
                        product.discounted_price
                      )}% OFF</span>
                  </div> <br>
                <select class ="details__select">
                      <option value="">Select Size</option>
                      <option value="">XL</option>
                      <option value="">XXL</option>
                      <option value="">Samll</option>
                      <option value="">Large</option>
                </select>
                  <div class="details__description">
                      <h3 class="description__title">Product Details</h3>
                      <div class="description__details">
                          <p>${
                            product.description || "No description available."
                          }</p>
                      </div>
                  </div>
                  <div class="cart__amount">
                      <input class="cart-item-quantity" type="number" min="1" value="1" data-id="${
                        product.id
                      }"> 
                  </div>
                  <a href="#" class="button" data-id="${product.id}
                  "onclick="addToCart(event)">Add To Cart</a>
              </div>
          `;
  }
}

function showDetails(productId) {
  // Tìm sản phẩm theo id
  const product = products.find((item) => item.id === productId);

  // Lưu thông tin sản phẩm vào localStorage
  localStorage.setItem("selectedProduct", JSON.stringify(product));

  // Điều hướng đến trang chi tiết
  window.location.href = "details.html";
}

// Show Image With Details Product

function showImgDetails(smallImg) {
  fullImg = document.getElementById("productDetailsImg");
  fullImg.src = smallImg;
}

// const showImgBox = document.getElementById("showImgBox");
// const showImg = document.getElementById("showImg");

// function openFullImg(image) {
//   if (showImgBox) {
//     // Kiểm tra nếu phần tử tồn tại
//     showImgBox.style.display = "flex";
//     showImg.src = image;
//   }
// }

// function closeFullImg() {
//   if (showImgBox) {
//     // Kiểm tra nếu phần tử tồn tại
//     showImgBox.style.display = "none";
//   }
// }

// Hàm để hiển thị số sao
function renderStars() {
  let starsHtml = "";
  for (let i = 0; i < 4; i++) {
    starsHtml += '<i class="bx bxs-star"></i>';
  }
  starsHtml += '<i class="bx bx-star"></i>';
  return starsHtml;
}

// Hàm để tính phần trăm giảm giá
function calculateDiscountPercentage(originalPrice, discountedPrice) {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

// Gọi hàm renderDetails khi trang được tải
window.onload = renderDetails;
