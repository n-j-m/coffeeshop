var fs = require("fs");
var webpack = require("webpack");
var merge = require("webpack-merge");

var mergeCommon = merge.bind(null, require("./webpack.common"));

module.exports = mergeCommon({
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});