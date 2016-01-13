var path = require("path");

module.exports = {
  APP_PATH: path.resolve(__dirname, "client", "app"),
  BUILD_PATH: path.join(__dirname, "dist", "public")
};