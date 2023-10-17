const hambElem = document.querySelector(".hamburger-menu");
const hambBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");
const heroLeft = document.getElementById("hero-section-left");
const heroRight = document.getElementById("hero-section-right");
const introLeft = document.getElementById("intro-left");
const introRight = document.getElementById("intro-right");
const guidelinesLeft = document.getElementById("guidelines-left");
const guidelinesRight = document.getElementById("guidelines-right");
const judgingCriteriaLeft = document.getElementById("judging-criteria-left");
const judgingCriteriaRight = document.getElementById("judging-criteria-right");
const frequentAskLeft = document.getElementById("frequently-ask-left");
const frequentAskRight = document.getElementById("frequently-ask-right");
const timetableOne = document.getElementById("timetable-one");
const timetableTwo = document.getElementById("timetable-two");
const timetableThree = document.getElementById("timetable-three");
const timetableFour = document.getElementById("timetable-four");
const timetableFive = document.getElementById("timetable-five");
const timetableSix = document.getElementById("timetable-six");
const privacyLeft = document.getElementById("privacy-left");
const privacyRight = document.getElementById("privacy-right");
const partnerLogo = document.getElementById("partners-logo");

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

const closure = document.querySelectorAll('.mobile-nav a')
closure.forEach(item => item.addEventListener('click', showHamb))

// intro.addEventListener("onmouseover", mouseOverEffect())

let slider = false;

function onScroll() {
  if (!slider) {
    setInterval(() => {
      if (!slider) {
        introLeft.classList.add("open");
        introRight.classList.add("open");
      } else {
        introLeft.classList.remove("open");
        introRight.classList.remove("open");
      }
    }, 300);

    setInterval(() => {
      if (!slider) {
        guidelinesLeft.classList.add("open");
        guidelinesRight.classList.add("open");
      } else {
        guidelinesLeft.classList.remove("open");
        guidelinesRight.classList.remove("open");
      }
    }, 1000);

    setInterval(() => {
      if (!slider) {
        judgingCriteriaRight.classList.add("open");
        judgingCriteriaLeft.classList.add("open");
      } else {
        judgingCriteriaRight.classList.remove("open");
        judgingCriteriaLeft.classList.remove("open");
      }
    }, 2000);

    setInterval(() => {
      if (!slider) {
        frequentAskLeft.classList.add("open");
        frequentAskRight.classList.add("open");
      } else {
        frequentAskLeft.classList.remove("open");
        frequentAskRight.classList.remove("open");
      }
    }, 4000);

    setInterval(() => {
      if (!slider) {
        timetableOne.classList.add("open");
        timetableTwo.classList.add("open");
        timetableThree.classList.add("open");
        timetableFour.classList.add("open");
        timetableFive.classList.add("open");
        timetableSix.classList.add("open");
      } else {
        timetableOne.classList.remove("open");
        timetableTwo.classList.remove("open");
        timetableThree.classList.remove("open");
        timetableFour.classList.remove("open");
        timetableFive.classList.remove("open");
        timetableSix.classList.remove("open");
      }
    }, 5000);

    setInterval(() => {
      if (!slider) {
        partnerLogo.classList.add("open");
      } else {
        partnerLogo.classList.remove("open");
      }
    }, 6000);

    setInterval(() => {
      if (!slider) {
        privacyLeft.classList.add("open");
        privacyRight.classList.add("open");
      } else {
        privacyLeft.classList.remove("open");
        privacyRight.classList.remove("open");
      }
    }, 7000);
  } else {
    introLeft.classList.add("open");
    introRight.classList.add("open");
    guidelinesLeft.classList.add("open");
    guidelinesRight.classList.add("open");
    judgingCriteriaRight.classList.add("open");
    judgingCriteriaLeft.classList.add("open");
    frequentAskLeft.classList.add("open");
    frequentAskRight.classList.add("open");
    timetableOne.classList.add("open");
    timetableTwo.classList.add("open");
    timetableThree.classList.add("open");
    timetableFour.classList.add("open");
    timetableFive.classList.add("open");
    timetableSix.classList.add("open");
  }
}

function heroSec() {
  setInterval(() => {
    if (!slider) {
      heroLeft.classList.add("open");
      heroRight.classList.add("open");
    } else {
      heroLeft.classList.remove("open");
      heroRight.classList.remove("open");
    }
  }, 500);
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

const updateTime = () => {
  const date = new Date()
  const utcTime = date.toISOString().substr(11, 2)
  const utcMinTime = date.toISOString().substr(14, 2);
  const utcSecTime = date.toISOString().substr(17, 2);
  timeUtc.textContent = utcTime ;
  minUtc.textContent = utcMinTime ;
  secUtc.textContent = utcSecTime ;

}
  const minUtc = document.getElementById("timeMin")
  const secUtc = document.getElementById("timeSec")
  const timeUtc = document.getElementById("timer");
  setInterval(updateTime, 1000);