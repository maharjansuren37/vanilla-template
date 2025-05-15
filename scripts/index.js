// menu toggle
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', (e) => {
    nav.classList.toggle('show');
})

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