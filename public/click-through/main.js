customElements.define('click-through', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.index = 1;
    this.total = 0;
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        .hide {
          display: none;
        }
      </style>
      <div id="target"></div>
    `

    let i = 0;
    this.total = this.children.length;
    while (this.children.length > 0) {
      if (i > 0) this.children[0].classList.add("hide");

      this
        .shadowRoot
        .querySelector("#target")
        .append(this.children[0])
      
      i++;
    }

    this.shadowRoot.addEventListener('click', e => {
      const kids = this
        .shadowRoot
        .querySelector("#target")
        .children;
        
      for (let i = 0; i < kids.length; i++) {
        if (i === this.index) kids[i].classList.remove("hide")
        else kids[i].classList.add("hide")
      } 

      this.index = (this.index+1) % this.total;
    })
  }
})