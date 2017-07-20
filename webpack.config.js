const path = require('path');

const config = {
  entry: './public/components/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {include: path.resolve(__dirname, 'public/components'), test:/\.(js)$/, use: 'babel-loader'},
      {test: /\.(css)$/, use: [ 'style-loader', { loader: 'css-loader', options: { url: false } }]}
    ]
  }
}

module.exports = config;
