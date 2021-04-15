const path = require('path');
const webpackConfigBase = require('./webpack.base.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 压缩
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');


const webpackConfigProd = {
  mode: 'production',
  // 压缩
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: false,
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
