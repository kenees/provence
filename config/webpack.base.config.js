const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
// 单独导出css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    // publicPath: './',
    filename: 'static/js/app.js',
    path: path.resolve(__dirname, '../build/')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'], // 默认解析扩展文件
    alias: {
      '@': path.join(__dirname, '../', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                  // outputPath: 'static/css/',
                }
              }
            },
            'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        
        // use: ['url-loader'],
        use: {
          loader: 'url-loader?cacheDirectory',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/images/',
            limit: 8129,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // use: ['url-loader'],
        use: {
          loader: 'file-loader?cacheDirectory',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/font/',
          }
        }
      }
    ]
  },

  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: './index.html'
    }),
    
    
    // new CopyWebpackPlugin({
    //   from: __dirname + '/src/assets/js',
    //   to: __dirname + '/build/js',
    // })
    //  单独导出css
    new ExtractTextPlugin('./static/css/styles.css'),
    // 告诉webpack使用那些动态链接库
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('../build/vendors.manifest.json')
    // })
  ],
  
};
