// Toggle Menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  const dataVisible = nav.getAttribute('data-visible');

  if (dataVisible === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Header
class THeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div>LOGO</div>
                <div>MENU</div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('t-header', THeader);

class TSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ``
    }
}