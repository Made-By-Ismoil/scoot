let mbButton = document.querySelector(".header__mb-button-box");
let openBurger = document.querySelector(".header__mb-open-burger-button");
let closeBurger = document.querySelector(".header__mb-close-burger-button");
let mbDiv = document.querySelector(".header__mb-div");
let links = document.querySelectorAll(".header__mb-texts");
let btn = document.querySelector(".header__mb-button");
let accardionBoxes = document.querySelectorAll(".faq__accardion-boxes");
let accardionIcons = document.querySelectorAll(".faq__accardion-icons");
let accardionTexts = document.querySelectorAll(".faq__accardion-texts");
mbButton.addEventListener("click", (e) => {
  e.preventDefault();
  mbDiv.classList.toggle("active");
  if (mbDiv.classList.contains("active")) {
    openBurger.style.display = "none";
    closeBurger.style.display = "block";
  } else {
    openBurger.style.display = "block";
    closeBurger.style.display = "none";
  }
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    mbDiv.classList.toggle("active");
  });
});
btn.addEventListener("click", () => {
  mbDiv.classList.toggle("active");
});
accardionBoxes.forEach((item, index) => {
  let accardionBox = accardionBoxes[index];
  let accardionIcon = accardionIcons[index];
  let accardionText = accardionTexts[index];
  item.addEventListener("click", (e) => {
    e.preventDefault();
    accardionBox.classList.toggle("dropdown");
    accardionIcon.classList.toggle("dropdown");
    accardionText.classList.toggle("dropdown");
  });
});