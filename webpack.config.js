(function() {
'use strict';

var WEBPACK = require('webpack');
var WEBPACK_COPY = require('copy-webpack-plugin');

module.exports = makeConfig();

function makeConfig() {
  var ENV = process.env.npm_lifecycle_event;
  var DIST_ENV = 'dist';

  var config = { };

  config.entry = {
    app: __dirname + '/cytoscape.js-navigator.js',
  };

  // define the output, append min if building the dist
  config.output = {
    path: './dist',
    filename: 'cytoscape-navigator' + (ENV === DIST_ENV ? '.min' : '')+ '.js',
    libraryTarget: 'umd',
  };

  // ensure these are not packaged with the build
  config.externals = {
    jquery: 'jquery',
    cytoscape: 'cytoscape'
  };

  // copy the css to the dist folder for completeness
  config.plugins = [new WEBPACK_COPY([{
    from: './cytoscape.js-navigator.css',
    to: 'cytoscape-navigator.css',
    toType: 'file'
  }])];


  // if we are building the dist create the minifed version
  if (ENV === DIST_ENV) {
    config.plugins.push(
      new WEBPACK.optimize.UglifyJsPlugin()
    );
  }

  return config;
}

})();
