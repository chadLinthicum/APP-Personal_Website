$(document).ready(function () {
  setMainContentMarginTop();
});

window.onresize = setMainContentMarginTop;

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");

function toggleNav() {
  nav.classList.toggle("popout_hide");
  nav.classList.toggle("popout_show");
  if (hamburger.src.includes("eggShake.gif")) {
    hamburger.src = "assets/eggHatch.gif";
  } else {
    hamburger.src = "assets/eggShake.gif";
  }
}

hamburger.addEventListener("click", function () {
  toggleNav();
});

document.querySelectorAll('a[href^="#"').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    toggleNav();
  });
});

function setMainContentMarginTop() {
  let headerHeight = document.getElementById("Header").offsetHeight;
  let mainMarginTopPx = document.getElementById("Main");
  mainMarginTopPx.style.marginTop = headerHeight + "px";
}
