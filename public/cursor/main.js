customElements.define('cursor-pointer', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
    <style>
      :host(*) {
        cursor: pointer;
      }
    </style>
    ${this.innerHTML}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

customElements.define('cursor-help', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
    <style>
      :host(*) {
        cursor: help;
      }
    </style>
    ${this.innerHTML}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

customElements.define('cursor-not-allowed', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
    <style>
      :host(*) {
        cursor: not-allowed;
      }
    </style>
    ${this.innerHTML}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

customElements.define('cursor-wait', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template')
    template.innerHTML = `
    <style>
      :host(*) {
        cursor: wait;
      }
    </style>
    ${this.innerHTML}
    `

    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
})