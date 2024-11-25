/*==================== FAD (ACCORDION) ===== ===============*/

const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toogleItem(item); // Mở item đang được nhấp
    if (openItem && openItem !== item) {
      toogleItem(openItem); // Đóng item đã mở nếu có
    }
  });
});

const toogleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open"); // Thêm lớp 'accordion-open'
  }
};
