customElements.define('spin-the-site', class extends HTMLElement {
  constructor () {
    super()
    console.log('creating...')

    let tmpl = document.createElement('template')
    tmpl.innerHTML = `
    <style>
    </style>
    `

    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(tmpl.content.cloneNode(true))
  }
  
})