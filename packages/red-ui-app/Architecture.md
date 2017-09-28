# Architcture

## Build

The build and packaging is done via [Poi](https://poi.js.org/#/)
Configure the build process via `poi.config.js`, such as adding additional build plugins for [SASS](http://sass-lang.com/) etc.

## Rendering home page

The standard configuration uses `index.ejs`  to render the home page (ie. Single Page Application) via [EJS](http://www.embeddedjs.com/) templating.

The `home.ejs` contains the template for rendering the `node-red` home page.

When developing, please substitute `home.ejs` with `index.ejs` and work from there.

## Development process

Use the main components from this and other packages to assemble the full skeleton layout of the application;

- `Header` (this package)
- `Palette` in `red-ui-palette`
- `Canvas` in `red-ui-canvas`
- `Sidebar` in `red-ui-sidebar`

This package has been configured with the following dependencies which lerna will resolve:

```txt
  "dependencies": {
    ...
    "@tecla5/red-ui-sidebar": "x",
    "@tecla5/red-ui-canvas": "x",
    "@tecla5/red-ui-palette": "x"
    ...
  }
```

For starters, each of the top level components should be empty except for a placeholder text with the name of the component.

Start with the `Header`, then the `Palette`, `Sidebar` and finally the `Canvas`
