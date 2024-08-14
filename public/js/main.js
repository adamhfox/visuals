// hamburger toggle
const hamburgerBtn = document.querySelector(".hamburger"),
  hamburgerOpen = document.querySelector(".hamburger-open"),
  hamburgerClose = document.querySelector(".hamburger-close"),
  closeScreen = document.querySelector(".close-screen");

hamburgerBtn.addEventListener("click", function () {
  hamburgerOpen.classList.toggle("hidden"),
    hamburgerClose.classList.toggle("hidden");
});

closeScreen.addEventListener("click", function () {
  hamburgerOpen.classList.toggle("hidden"),
    hamburgerClose.classList.toggle("hidden");
});
