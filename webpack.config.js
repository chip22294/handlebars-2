const path = require('path');

module.exports = {
  entry: './resources/index.js',
  output: {
    path: path.join(__dirname, '/public/dist'),
    publicPath: '/public/dist',
    filename: 'app.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
