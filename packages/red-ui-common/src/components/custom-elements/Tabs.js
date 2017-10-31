import {
  LitElement,
  html
} from 'lit-element';

class TabsElement extends LitElement {
  render() {
    return html `
      <div>My Tabs</div>
    `
  }
}
customElements.define('red-ui-tabs', TabsElement)
