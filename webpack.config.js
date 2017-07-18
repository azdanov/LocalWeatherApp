const cssnext = require('postcss-cssnext');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const clean = new CleanWebpackPlugin(['js', 'css']);
const html = new HtmlWebpackPlugin({ template: './index.html' });
const extract = new ExtractTextPlugin({
  filename: './css/[name].css',
  disable: isDevelopment,
});
const sync = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: 'http://localhost:8080/',
}, {
  reload: false,
});

module.exports = {
  context: `${__dirname}/src`,
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: ['./styles/styles.pcss', './scripts/scripts.js'],
  output: {
    path: `${__dirname}`,
    filename: './js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', options: { presets: ['es2015'] },
        },
      },
      {
        test: /\.pcss$/,
        use: extract.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  cssnext(),
                ],
              },
            }],
        }),
      },
    ],
  },
  plugins: [
    clean,
    extract,
    html,
    sync,
  ],
};
