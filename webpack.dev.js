require("dotenv").load();
var webpack = require("webpack");
var merge = require("webpack-merge");

var mergeCommon = merge.bind(null, require("./webpack.common"));

var app = require("./server/server");

app.start();

module.exports = mergeCommon({
  devtool: "eval-source-map",

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    host: process.env.HOST,
    port: process.env.DEV_PORT,

    proxy: {
      "/api/*": "http://" + process.env.HOST + ":" + process.env.PORT
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});