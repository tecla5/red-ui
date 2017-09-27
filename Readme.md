# Red UI

Node-red UI for Vue 2.x.

## Lerna project

This is a [lerna](https://lernajs.io/) project.
The project will contain multiple related packages that can be managed as a whole.

See [Lerna Getting Started](https://lernajs.io/#getting-started) for typical development workflow.

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
