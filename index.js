const hambElem = document.querySelector(".hamburger-menu");
const hambBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");
// const intro = document.querySelector(".intro");
const introLeft = document.getElementById(".intro-left");
const introRight = document.getElementById(".intro-right");
const guidelinesLeft = document.getElementById(".guidelines-left");
const guidelinesRight = document.getElementById(".guidelines-right");

let showMenu = false;
function showHamb() {
  if (!showMenu) {
    hambBtn.classList.add("open");
    hambBtn.classList.add("open-fixed");
    mobileNav.classList.add("open");
    mobileNavLinks.forEach((item) => {
      item.classList.add("open");
    });

    showMenu = true;
  } else {
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

let slider = false
function mouseOverEffect(){
    if(!slider){
        introLeft.classList.add("open")
        introRight.classList.add("open")
    }else{
        introLeft.classList.remove("open") 
        introRight.classList.remove("open") 
    }

}
function mouseOverEffet(){
    if(!slider){
        guidelinesLeft.classList.add("open")
        guidelinesRight.classList.add("open")
    }else{
        guidelinesLeft.classList.remove("open") 
        guidelinesRight.classList.remove("open") 
    }

}

