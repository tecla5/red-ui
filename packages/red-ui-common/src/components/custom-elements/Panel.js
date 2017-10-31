import {
  LitElement,
  html
} from 'lit-element';

class PanelElement extends LitElement {
  render() {
    return html `
      <div>My panel</div>
    `
  }
}
customElements.define('red-ui-panel', PanelElement)
