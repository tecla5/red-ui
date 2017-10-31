import {
  LitElement,
  html
} from 'lit-element';

class MenuElement extends LitElement {
  render() {
    return html `
      <div>My menu</div>
    `
  }
}
customElements.define('red-ui-menu', MenuElement)
