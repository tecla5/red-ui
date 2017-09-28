# Red UI

Node-red UI for Vue 2.x.

## Lerna project

*Red-UI* is a [lerna](https://lernajs.io/) project.
The project contains multiple related packages that can be managed as a unit.

See [Lerna Getting Started](https://lernajs.io/#getting-started) for typical development workflow.

## Lerna Dependencies

A lerna package can been configured with dependencies such as demonstrated in the `red-ui-app` package:

```txt
  "dependencies": {
    ...
    "@tecla5/red-ui-sidebar": "x",
    "@tecla5/red-ui-canvas": "x",
    "@tecla5/red-ui-palette": "x"
    ...
  }
```

Lerna will link to matching local packages in `red-ui` if available. If not found locally it will resolve via npm registry.

This makes it easy to develop multiple inter-dependent packages simultaneously.

### Lerna quick update

To make lerna easier to use, each package comes with a `lerna:update` script which updates all dependencies via lerna.

From the root folder of any package (such as `/red-ui/packages/red-ui-app`):

```bash
red-ui/packages/red-ui-app $ npm run lerna:update
# lerna info ...
```

This will update and resolve all dependencies via lerna.

Note that dependencies linked locally are linked via symbolic link as if the files are present inside the host project itself.

### Scoped lerna (manual)

To update dependencies of a single project:

remove `package.json.lock`

Delete out all module dependencies in `/node_modules`

`$ lerna clean --scope @tecla5/service-faker`

Bootstrap package, by installing/linking new modules

`$ lerna bootstrap --scope @tecla5/service-faker`

This should also create a brand new `package.json.lock`

## Packages

- `red-ui-app` full app, demonstrating all the components assembled
- `red-ui-canvas` canvas area for drawing node flows
- `red-ui-common` common UI components, used as essential building blocks for more complex UI components
- `red-ui-library` nodes library management
- `red-ui-node-diff` nodes difference visualizer
- `red-ui-node-editor` node editor, form with fields according to node properties
- `red-ui-palette` node palette
- `red-ui-search` search for nodes
- `red-ui-settings` user settings form
- `red-ui-sidebar` sidebar with multiple tabs
- `red-ui-shared` shared assets and logic used across multiple components
- `red-ui-tray` sliding tray panel overlay
- `red-ui-workspaces` workspaces

### Structure

Depending on the complexity of components, some might later be re-grouped to minimize the number of packages.

Some components will be refactored into multiple smaller components to make them easier to manage and work on.

## HTML templates

For the "base" HTML to be used in the components (and main app), please reference `/assets/templates` folder under `/red-ui-shared` package.
