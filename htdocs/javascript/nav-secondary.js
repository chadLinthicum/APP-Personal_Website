// Define the custom element class
class NavSecondaryComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <ul>
              <li><a href="../../index.html" class="nav-link">Home</a></li>
              <li>
                <a href="../../index.html#Games_Container" class="nav-link">Games</a>
              </li>
              <li>
                <a href="../../index.html#Projects_Container" class="nav-link">Projects</a>
              </li>
              <li>
                <a href="../../index.html#Music_Container" class="nav-link">Music</a>
              </li>
              <li>
                <a href="../../index.html#Other_Container" class="nav-link">Other</a>
              </li>
              <li><a href="contact.html" class="nav-link">Contact</a></li>
              <li id="Logo_Min">
                <img src="../../assets/logo.webp" alt="" />
              </li> 
            </ul> 
        `;
  }
}

// Define the custom element
customElements.define("x-nav-secondary", NavSecondaryComponent);

let hamburger = document.getElementById("Hamburger");
let nav = document.getElementById("Nav");

function toggleNav() {
  nav.classList.toggle("popout-hide");
  nav.classList.toggle("popout-show");
  if (hamburger.src.includes("eggNoHatch.webp")) {
    hamburger.src = "../../assets/eggHatch.gif";
  } else {
    hamburger.src = "../../assets/eggNoHatch.webp";
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

//Adds a top spacing to anchor jumps
$(".nav-link").click(function () {
  let headerHeight = document.getElementById("Header").offsetHeight;
  var divId = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(divId).offset().top - headerHeight,
  });
});
