customElements.define('follow-mouse', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        #target {
          position: fixed;
        }

        #target {
          transform: translate(-50%, -50%);
        }
      </style>
      <div id="target">
      </div>
    `

    while(this.children.length > 0) {
      this
        .shadowRoot
        .querySelector("#target")
        .append(this.children[0])
    }

    document.body.addEventListener('mousemove', e => {
      const target = this.shadowRoot.querySelector("#target");
      target.style.top = `${e.clientY}px`;
      target.style.left = `${e.clientX}px`;
    })
  }
})