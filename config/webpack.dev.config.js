const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config.js');
const proxy = require('./proxy');

const webpackConfigDev = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    useLocalIp: true,
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    inline: true,
    port: 8888,
    proxy,
  }
};


module.exports = merge(webpackConfigBase, webpackConfigDev);
