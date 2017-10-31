# Architecture

The red-ui common components are core building blocks for the main parts of the editor.
The original node-red components are jQuery components and widgets.

We want to turn these components into Custom Elements (ie. Web Components) that are more composable and reusable on the modern web.

We then aim to use these Custom elements to form Vue components that can be assembled in a Vue app.

## Vue with Web Components

- [integrating Vue with Web Components](https://alligator.io/vuejs/vue-integrate-web-components/)
- [Your first Custom Element](https://alligator.io/web-components/your-first-custom-element/)

## Lit-HTML elements

- [lit html from Google](https://malloc.fi/lit-html-javascript-templating-from-polymer-team-google)
- [lit html in detail](https://css-tricks.com/html-templates-via-javascript-template-literals/)

Repos

- [lit-html repo](https://github.com/PolymerLabs/lit-html)
- [lit-element repo](https://github.com/kenchris/lit-element) will be used as the mechanism to build Web Components.

### Writing lit-html custom elements

Simply define a class that extends `LitElement` and provide a `render` method which uses html to render the template as a string literal.

```js
import { LitElement, html } from 'lit-element';

class Panel extends LitElement {
  render() {
    return html`
      <div>My panel</div>
    `
  }
}
customElements.define('red-ui-panel', Panel)
```

## red-ui-common

- build
- dependencies
- components
- controllers
- ...

### Build

The build and packaging is done via [Poi](https://poi.js.org/#/)
Configure the build process via `poi.config.js`, such as adding additional build plugins for [SASS](http://sass-lang.com/) etc.

Already done:

```js
  mergeConfig: {
    module: {
      rules: [{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
    }
  },
```

## Dependency management

To update dependencies, please use [lerna](https://lernajs.io/#getting-started) via the `lerna:update` script included.

```bash
$ npm run lerna:update
# lerna info ...
```

This will update and resolve all dependencies via lerna.

See more lerna info in main [Readme](https://github.com/tecla5/red-ui/blob/master/Readme.md)

## Components

- `CheckboxSet` (deprecated?)
- `EditableList`
- `SearchBox`
- `TypedInput`
- `Menu`
- `Panel`
- `Popover`
- `Stack`
- `Tabs`

## Controllers

The original logic of the components from node-red, using [jQuery](https://api.jqueryui.com) and [jQuery widgets](https://api.jqueryui.com/jquery.widget/)

jQuery widgets

- `CheckboxSet` jQuery widget to display and manage set (group) of checkboxes
- `EditableList` jQuery widget to display and manage editable list (add/remove items)
- `SearchBox` jquery widget to display and manage search box
- `TypedInput` jQuery widget to display and manage a typed input (such as numbers only etc.). See validators

Classes

- `Menu` display and manage menu (in topbar), using menu data from settings
- `Panel` display panel (including drag bar to resize panels)
- `Popover` display and manage popover (modal notification)
- `Stack` display and manage stack of items (used in node palette)
- `Tabs` display and manage tabs (containing flows of nodes)

## Using Jquery widgets

See [Webpack import jQuery UI in ES6](http://code.tonytuan.org/2017/03/webpack-import-jquery-ui-in-es6-syntax.html) on how to add jQuery UI using webpack (Poi) and ES6 imports.

## Font Awesome

The widgets use Font Awesome classes, such as `fa fa-sort-desc` etc. The hosting app needs to import font-awesome for these classes to take effect.

[How to use font-awesome in Vue project](https://www.reddit.com/r/vuejs/comments/6pg1yp/how_to_use_fontawesome_icons_in_your_vue_project/?st=j8bccc15&sh=fd8c0374)

## Status

The `/components` folder contains placeholders for *common* UI components from [red-editor](https://github.com/tecla5/red-editor/tree/master/src/new/ui/common)

## jQuery widgets

Please see [How to use widget factory](https://learn.jquery.com/jquery-ui/widget-factory/how-to-use-the-widget-factory/)

## Architecture

Each Vue `component` should instantiate a `controller` which controls the component. The Vue component itself should for now contain minimal logic necessary and act only as a wrapper.

## App

The `App` component should be used as a playground or sandbox to demonstrate each of the components in action.
