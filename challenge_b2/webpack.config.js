module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  }
}
