const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: "./example/index.js",
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
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ["./src", "./node_modules"],
    extensions: [".js", ".jsx"],
  },
  plugins: [],
}
