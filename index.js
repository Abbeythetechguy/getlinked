const hambElem = document.querySelector(".hamburger-menu");
const hambBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

let showMenu = false;
function showHamb() {
  if (!showMenu) {
    hambBtn.classList.add("open");
    hambBtn.classList.add("open-fixed");
    mobileNav.classList.add("open")

    showMenu = true;
  } else {
    hambBtn.classList.remove("open");
    hambBtn.classList.remove("open-fixed");
    mobileNav.classList.remove("open")

    showMenu = false;
  }
}
