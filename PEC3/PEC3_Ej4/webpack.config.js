const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
};
