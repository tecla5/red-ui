import {
  LitElement,
  html
} from 'lit-element';

class StackElement extends LitElement {
  render() {
    return html `
      <div>My Stack</div>
    `
  }
}
customElements.define('red-ui-stack', StackElement)
