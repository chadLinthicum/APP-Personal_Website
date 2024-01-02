// Define the custom element class
class NavComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <ul>
              <li><a href="index.html" class="nav-link">Home</a></li>
              <li>
                <a href="index.html#Games_Container" class="nav-link">Games</a>
              </li>
              <li>
                <a href="index.html#Projects_Container" class="nav-link">Projects</a>
              </li>
              <li>
                <a href="index.html#Music_Container" class="nav-link">Music</a>
              </li>
              <li>
                <a href="index.html#Other_Container" class="nav-link">Other</a>
              </li>
              <li><a href="contact.html" class="nav-link">Contact</a></li>
              <li id="Logo_Min">
                <img src="assets/logo.webp" alt="" />
              </li> 
            </ul> 
        `;
  }
}

// Define the custom element
customElements.define("x-nav", NavComponent);
