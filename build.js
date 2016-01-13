var fs = require("fs-extra");
var webpack = require("webpack");

var config = require("./webpack.build.js");

function copyPackage() {
  return new Promise(function(resolve, reject) {
    fs.copy("./package.json", "./dist/package.json",
      (err) => err ? reject(err) : resolve());
  });
}

function copyServer() {
  return new Promise(function(resolve, reject) {
    fs.copy("./server", "./dist/server",
      (err) => err ? reject(err) : resolve());
  });
}

fs.emptyDir("./dist", (err) => {
  if (err) throw err;

  Promise.all([
    copyPackage(),
    copyServer()
  ])
  .then(() => {
    webpack(config, (err, stats) => {
      if (err) throw err;
      console.log(stats.toString({ colors: true }));

      console.log("Build complete");
    });
  })
  .catch(err => console.error(err));
});