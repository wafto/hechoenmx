'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    app: './client/app/app.js',
    vendor: ['angular', 'angular-ui-router', 'angular-ui-bootstrap', 'jquery']
  },
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loaders: ['ng-annotate', 'babel']
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  resolve: {
    root: [path.join(__dirname, 'client/app')],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.scss', '.html']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};