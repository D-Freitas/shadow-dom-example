class MyCustomComponent extends HTMLElement {
  #alignAttribute = undefined
  #colorAttribute = undefined
  #backgroundColor = undefined
  #container = document.createElement('div')
  #style = document.createElement('style')
  #content = document.createElement('span')

  constructor () {
    super()
    this.#addChildElementsToComponent()
    this.#addAttributesToChilds()
    this.#addStyleToChilds()
    this.#addContentToElements()
  }

  #addChildElementsToComponent () {
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.#style)
    shadow.appendChild(this.#container)
    this.#container.appendChild(this.#content)
  }

  #addAttributesToChilds () {
    this.#container.setAttribute('class', 'container')
    this.#content.setAttribute('class', 'content')
  }

  #addStyleToChilds () {
    this.#alignAttribute = this.getAttribute('align')
    this.#colorAttribute = this.getAttribute('color')
    this.#backgroundColor = this.getAttribute('backgroundColor')
  }

  #addContentToElements () {
    this.#content.innerHTML = 'Hello, world'
    this.#style.textContent = `
      .container {
        position: absolute;
        background-color: #0abde31a;
        border: 4mm ridge ${this.#colorAttribute};
        border-radius: 10px;
        width: 300px;
        height: 300px;
        cursor: pointer;
        transition: box-shadow 0.2s;
        ${this.#alignAttribute === 'center' && `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      }
      
      .content {
        position: absolute;
        color: ${this.#colorAttribute};
        white-space: nowrap;
        font-size: 30px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `
  }
}

export { MyCustomComponent }
