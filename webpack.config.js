module.exports = {
    module: {
      rules: [
        {
        //   test: /\.js$/,
        test: /\.js$|jsx/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }