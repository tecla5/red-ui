const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  },
  presets: [
    require('poi-preset-bundle-report')()
  ],
  mergeConfig: {
    module: {
      rules: [{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
    }
  },
  resolve: {
    root: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src'),
    ],
    alias: {
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    },
    extensions: ['', '.js', '.json'],
  }
}
