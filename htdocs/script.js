let hamburger = document.getElementById("hamburger");
let popout = document.getElementById("popout");

hamburger.addEventListener("click", function () {
  popout.classList.toggle("Popout_Hide");
  popout.classList.toggle("Popout_Show");
  if (hamburger.src.includes("eggShake.gif")) {
    hamburger.src = "assets/eggHatch.gif";
  } else {
    hamburger.src = "assets/eggShake.gif";
  }
});
