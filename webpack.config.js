(function() {
'use strict';

var WEBPACK = require('webpack');
var WEBPACK_EXTRACT_TEXT = require('extract-text-webpack-plugin');
var WEBPACK_COPY = require('copy-webpack-plugin');

module.exports = makeConfig();

function makeConfig() {
  var ENV = process.env.npm_lifecycle_event;
  var BUILD_ENV = 'build';
  var DIST_ENV = 'dist';

  var config = { };

  config.entry = {
    app: __dirname + '/cytoscape.js-navigator.js',
  };

  // define the loaders for building
  // config.module = {
  //   preLoaders: [ ],
  //   loaders: [
  //     // javascript loader, we use the babel transpiler to allow
  //     // development in modern javascript
  //     {
  //       test: 'cytoscape.js-navigator.js',
  //       loader: 'raw',
  //       exclude: /(node_modules|bower_components)/,
  //     },
  //   ],
  // };


  // define the output, empty if test
  config.output = {
    path: './dist',
    filename: 'cytoscape-navigator' + (ENV === DIST_ENV ? '.min' : '')+ '.js',
    libraryTarget: 'umd',
  };

  config.plugins = [new WEBPACK_COPY([{
    from: './cytoscape.js-navigator.css',
    to: 'cytoscape-navigator.css',
    toType: 'file'
  }])];

  if (ENV === DIST_ENV) {
    config.plugins.push(
      new WEBPACK.optimize.UglifyJsPlugin()
    );
  }

  return config;
}

})();
