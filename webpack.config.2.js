var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/app`,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './script.js',
  devServer: {
    contentBase: `${__dirname}/dist`,
    inline: true,
    hot: true,
    historyApiFallback: true,
    port: 8100
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {
            targets: {
              browsers: ['last 2 versions', 'ie >= 9']
            }
          }], 'react'],
          plugins: [
            'react-html-attrs',
            'transform-runtime',
            'transform-class-properties',
            'transform-decorators-legacy',
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'script.min.js',
    publicPath: '/'
  },
  plugins: debug ? [
    new CopyWebpackPlugin([
      'index.html',
      { from: 'images', to: 'images' },
      { from: 'mocks', to: 'mocks' }
    ]),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new CopyWebpackPlugin([
      'index.html',
      { from: 'images', to: 'images' }
    ]),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJSPlugin({ mangle: false, sourcemap: false })
  ]
};
