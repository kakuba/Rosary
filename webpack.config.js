var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: debug ? 'development' : 'production',
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './client/script.js',
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    port: 8100,
    proxy: {
      '/rest': 'http://localhost:8080'
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader', // or MiniCssExtractPlugin.loader
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
      './client/index.html',
      { from: './client/images', to: 'images' },
      { from: './client/mocks', to: 'mocks' }
    ]),
    // new ExtractTextPlugin('style.css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new CopyWebpackPlugin([
      './client/index.html',
      { from: 'images', to: 'images' }
    ]),
    // new ExtractTextPlugin('style.css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJSPlugin({ mangle: false, sourcemap: false })
  ]
};
