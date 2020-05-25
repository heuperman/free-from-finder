const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: merge(common.output, {
    publicPath: "/free-from-finder/"
  })
});
