/*=============== PRELOADER ===============*/
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
  }, 900);
});
/*========================= REVIEW =========================*/

const slide = document.getElementById("review-slide");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");

let x = 0;
upArrow.onclick = function () {
  if (x > "-900") {
    x = x - 300;
    slide.style.top = x + "px";
  }
};

downArrow.onclick = function () {
  if (x < 0) {
    x = x + 300;
    slide.style.top = x + "px";
  }
};

const starsContainers = document.querySelectorAll(".stars");

// Tạo mảng các ngôi sao
const stars = [
  '<i class="bx bxs-star" style="color: #FFD700"></i>',
  '<i class="bx bxs-star" style="color: #FFD700"></i>',
  '<i class="bx bxs-star" style="color: #FFD700"></i>',
  '<i class="bx bxs-star" style="color: #FFD700"></i>',
  '<i class="bx bxs-star-half" style="color: #FFD700"></i>',
];

// Gán nội dung HTML vào phần tử
starsContainers.forEach((container) => {
  container.innerHTML = stars.join("");
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
