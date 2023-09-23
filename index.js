const hambElem = document.querySelector(".hamburger-menu");
const hambBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");
// const intro = document.querySelector(".intro");
const introLeft = document.getElementById("intro-left");
const introRight = document.getElementById("intro-right");
const guidelinesLeft = document.getElementById("guidelines-left");
const guidelinesRight = document.getElementById("guidelines-right");
const judgingCriteriaLeft = document.getElementById("judging-criteria-left")
const judgingCriteriaRight = document.getElementById("judging-criteria-right")
const frequentAskLeft = document.getElementById("frequently-ask-left")
const frequentAskRight = document.getElementById("frequently-ask-right")


let frequentlyAskedDropItem1 = document.getElementById(
  "frequently-ask-dropdown-item1"
);
let frequentlyAskedDropItem2 = document.getElementById(
  "frequently-ask-dropdown-item2"
);
let frequentlyAskedDropItem3 = document.getElementById(
  "frequently-ask-dropdown-item3"
);
let frequentlyAskedDropItem4 = document.getElementById(
  "frequently-ask-dropdown-item4"
);
let frequentlyAskedDropItem5 = document.getElementById(
  "frequently-ask-dropdown-item5"
);
let frequentlyAskedDropItem6 = document.getElementById(
  "frequently-ask-dropdown-item6"
);

let showMenu = false;
function showHamb() {
  if (!showMenu) {
    hambElem.classList.add("hamburger-menu-border");
    hambBtn.classList.add("open");
    hambBtn.classList.add("open-fixed");
    mobileNav.classList.add("open");
    mobileNavLinks.forEach((item) => {
      item.classList.add("open");
    });

    showMenu = true;
  } else {
    hambElem.classList.remove("hamburger-menu-border");
    hambBtn.classList.remove("open");
    hambBtn.classList.remove("open-fixed");
    mobileNav.classList.remove("open");
    mobileNavLinks.forEach((item) => {
      item.classList.remove("open");
    });

    showMenu = false;
  }
}

// intro.addEventListener("onmouseover", mouseOverEffect())

let slider = false;
function mouseOverEffect() {
  if (!slider) {
    introLeft.classList.add("open");
    introRight.classList.add("open");
  } else {
    introLeft.classList.remove("open");
    introRight.classList.remove("open");
  }
}
function mouseOverEffet() {
  if (!slider) {
    guidelinesLeft.classList.add("open");
    guidelinesRight.classList.add("open");
  } else {
    guidelinesLeft.classList.remove("open");
    guidelinesRight.classList.remove("open");
  }
}
function judgingHoverOverEffet() {
  if (!slider) {
    judgingCriteriaRight.classList.add("open");
    judgingCriteriaLeft.classList.add("open");
  } else {
    judgingCriteriaRight.classList.remove("open");
    judgingCriteriaLeft.classList.remove("open");
  }
}
function freqOverEffet() {
  if (!slider) {
    frequentAskLeft.classList.add("open");
    frequentAskRight.classList.add("open");
  } else {
    frequentAskLeft.classList.remove("open");
    frequentAskRight.classList.remove("open");
  }
}

function showFAQDropdown() {
  console.log("clicked");
  frequentlyAskedDropItem1.classList.toggle("open");
}
function showFAQDropdown2() {
  frequentlyAskedDropItem2.classList.toggle("open");
}
function showFAQDropdown3() {
  frequentlyAskedDropItem3.classList.toggle("open");
}
function showFAQDropdown4() {
  frequentlyAskedDropItem4.classList.toggle("open");
}
function showFAQDropdown5() {
  frequentlyAskedDropItem5.classList.toggle("open");
}
function showFAQDropdown6() {
  frequentlyAskedDropItem6.classList.toggle("open");
}
