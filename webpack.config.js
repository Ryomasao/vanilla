const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // bunldeしたjsを読み込むHTMLを生成してくれるプラグイン
    // templateも指定できる。指定しないと、真っ白
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  }
};