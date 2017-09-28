# Architecture

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

## Components

- `Workspaces` workspaces (ie. projects)

## Controllers

Classes

- `Workspaces` workspaces (ie. projects)

## Design

The Vue `component` should instantiate a `controller` which controls the component. The Vue component itself should for now contain minimal logic necessary and act only as a wrapper.

## Dependencies

The Workspaces are displayed in the sidebar (I think), so as a panel in a tab.

- `Panel` from `red-ui-common` is a panel
- `Tabs` from `red-ui-common` in a tab
