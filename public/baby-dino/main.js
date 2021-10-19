customElements.define('baby-dino', class extends HTMLElement {
  constructor() {
    super()

    const img = document.createElement('img')
    img.src = 'https://raw.githubusercontent.com/hackclub/dinosaurs/main/cooll-dino.png'
    const shadowRoot = this.attachShadow({mode: 'open'});

    const style = document.createElement('style');
    style.textContent = `
      img { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
    `;

    shadowRoot.appendChild(img);
    shadowRoot.appendChild(style);
  }
})