const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./example/example.js",
  output: {
    path: path.resolve(__dirname, "examples-dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "examples-dist"),
    port: "3000",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react-app"],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
}
