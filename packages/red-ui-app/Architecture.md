# Architcture

## Build

The build and packaging is done via [Poi](https://poi.js.org/#/)
Configure the build process via `poi.config.js`, such as adding additional build plugins for [SASS](http://sass-lang.com/) etc.

## Rendering home page

The standard configuration uses `index.ejs`  to render the home page (ie. Single Page Application) via [EJS](http://www.embeddedjs.com/) templating.

The `home.ejs` contains the template for rendering the `node-red` home page.

When developing, please substitute `home.ejs` with `index.ejs` and work from there.
