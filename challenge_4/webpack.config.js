module.exports = {
  entry: "./client/index.jsx",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
