$(document).ready(function () {
  setMainContentMarginTop();
});

window.onresize = setMainContentMarginTop;

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");
// let headerHeight = document.getElementById("Header").offsetHeight;

function toggleNav() {
  nav.classList.toggle("popout-hide");
  nav.classList.toggle("popout-show");
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

//Adds a top to anchor jumps
$(".nav-link").click(function () {
  let headerHeight = document.getElementById("Header").offsetHeight;
  var divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});

function talkTest() {
  if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    console.log("talk test ok");
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Good Morning";
    window.speechSynthesis.speak(msg);
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }

}

talkTest();