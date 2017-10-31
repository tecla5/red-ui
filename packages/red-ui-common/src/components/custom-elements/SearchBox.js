import {
  LitElement,
  html
} from 'lit-element';

class SearchBoxElement extends LitElement {
  render() {
    return html `
      <div>My SearchBox</div>
    `
  }
}
customElements.define('red-ui-searchbox', SearchBoxElement)
