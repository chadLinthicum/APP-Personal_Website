"use strict";

// Define the custom element class
class NavPrimaryComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <ul>
          <li><a href="#Home_Container" >Home</a></li>
          <li><a href="#About_Container" >About</a></li>
          <li><a href="#Games_Container" >Games</a></li>
          <li><a href="#Projects_Container" >Projects</a></li>
          <li><a href="#Music_Container" >Music</a></li>
          <li><a href="#Other_Container" >Other</a></li>
          <li><a href="#Contact_Container" >Contact</a></li>
          <li>
              <div id="Nav_Social">
                <a href="https://www.linkedin.com/in/chad-a-linthicum/" target="_blank"
                  ><img
                    class="nav_social_icons"
                    src="assets/social/linkedIn.svg"
                    alt=""
                /></a>
                <a
                  href="https://github.com/chadLinthicum"
                  target="_blank"
                  ><img
                    class="nav_social_icons"
                    src="assets/social/github.svg"
                    alt=""
                /></a>
                <a href="https://www.youtube.com/@Metalvain4" target="_blank"
                  ><img
                    class="nav_social_icons"
                    src="assets/social/youtube.svg"
                    alt=""
                /></a>
              </div>
          </li>
          <li id="Logo_Min_Nav">
            <img src="assets/logo.webp" alt="" />
          </li>
        </ul>
        `;
  }
}

// Define the custom element
customElements.define("x-nav-primary", NavPrimaryComponent);

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");
let nav_social_header = document.getElementById("Nav_Social_Header");

function toggleNav() {
  nav.classList.toggle("popout-hide");
  nav.classList.toggle("popout-show");
  nav_social_header.classList.toggle("popout-hide");

  if (hamburger.src.includes("burger-off.webp")) {
    hamburger.src = "assets/burger-on.webp";
  } else {
    hamburger.src = "assets/burger-off.webp";
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
    if (anchor.id !== "btn_About_Me" && anchor.id !== "anchor_My_Name_Header") {
      toggleNav();
    }
  });
});

//Adds a top spacing to anchor jumps
$(".nav-link").click(function () {
  let headerHeight = document.getElementById("Header").offsetHeight;
  var divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});
