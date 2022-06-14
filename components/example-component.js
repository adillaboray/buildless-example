import { LitElement, css, html } from "lit"
import sheet from "./example-component.css" assert { type: "css" }

class ExampleComponent extends LitElement {
  static styles = [sheet]
  render() {
    return html`
      <p>Rendering a Lit component. This is cool!<slot></slot></p>
    `
  }
}

customElements.define("example-component", ExampleComponent)