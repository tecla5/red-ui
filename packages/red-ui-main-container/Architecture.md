# Architecture: Main container

The Main container contains the core of the editor, including:

- Palette
- Canvas (also known as the view or main editor)
- Node editor
- Sidebar
- Workspaces

## Build

The build and packaging is done via [Poi](https://poi.js.org/#/)
Configure the build process via `poi.config.js`, such as adding additional build plugins for [SASS](http://sass-lang.com/) etc.

## Dependency management

To update dependencies, please use [lerna](https://lernajs.io/#getting-started) via the `lerna:update` script included.

```bash
$ npm run lerna:update
# lerna info ...
```

This will update and resolve all dependencies via lerna.

See more lerna info in main [Readme](https://github.com/tecla5/red-ui/blob/master/Readme.md)

## Development process

Compose from the following components:

- `Palette` from `red-ui-palette`
- `Editor` from `red-ui-node-editor`
- `Sidebar` from `red-ui-sidebar`
- `Workspace` from `red-ui-workspaces`

This package has been configured with the following dependencies which lerna will resolve:

```txt
  "dependencies": {
    ...
    "@tecla5/red-ui-sidebar": "x",
    "@tecla5/red-ui-canvas": "x",
    "@tecla5/red-ui-palette": "x"
    "@tecla5/red-ui-workspaces": "x"
    ...
  }
```

For starters, each of the top level components should be empty except for a placeholder text with the name of the component.

Add the `Palette`, `Sidebar` and finally the `Canvas` (main editor)

