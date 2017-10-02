# Architcture

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

Add menu component:

- `Menu` from `red-ui-menu`

This package has been configured with the following dependencies which lerna will resolve:

```txt
  "dependencies": {
    ...
    "@tecla5/red-ui-menu": "x"
    ...
  }
```

Displays the menu to the right, using `red-ui-menu`
