const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('./config/proxy');

module.exports = {
  entry: './src/index.tsx',
  output: {
    // publicPath: './',
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'], // 默认解析扩展文件
    alias: {
      '@': path.join(__dirname, './', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
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
        use: ['style-loader', 'css-loader']
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
                }
              }
            },
            'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        // use: ['url-loader'],
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 8129,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // use: ['url-loader'],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/',
          }
        }
      }
    ]
  },
  // target: 'web',
  // devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      template: './index.html'
    })
  ],
  stats: {
    children: false,
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal', //  'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
    // compress: true, // gzip 压缩
    contentBase: './dist',
    host: '0.0.0.0',
    progress: true,
    useLocalIp: true, //允许使用ip打开
    port: 8888,
    hot: true,
    proxy,
  },
};