const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: "./src/App.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
