var BuildConstants = require("./build-constants");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: BuildConstants.APP_PATH,
  output: {
    path: BuildConstants.BUILD_PATH,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: BuildConstants.APP_PATH
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"],
        include: BuildConstants.APP_PATH
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "{spa}",
      template: "./client/index-template.html"
    })
  ]
};