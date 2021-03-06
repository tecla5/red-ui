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

- `Search` search box and results display

## Controllers

Classes

- `Search` search box and results display

## Design

The Vue `component` should instantiate a `controller` which controls the component. The Vue component itself should for now contain minimal logic necessary and act only as a wrapper.

## Dependencies

- `SearchBox` from `red-ui-common` displays a search box
