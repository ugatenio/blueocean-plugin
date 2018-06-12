const path = require('path');

module.exports = {
  entry: './src/main/js/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  mode: 'development',
  node: {
    global: false,
      dns: "empty",
      net: "empty"
  }
};
