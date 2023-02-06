let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("nav");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("Popout_Hide");
  nav.classList.toggle("Popout_Show");
  if (hamburger.src.includes("eggShake.gif")) {
    hamburger.src = "assets/eggHatch.gif";
  } else {
    hamburger.src = "assets/eggShake.gif";
  }
});
