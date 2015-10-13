var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  output: {
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['ng-annotate', 'babel']
    }, {
      test: /\.html$/,
      loader: 'raw'
    }]
  },
  resolve: {
    root: [path.join(__dirname, 'client/app')],
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.scss', '.html']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};