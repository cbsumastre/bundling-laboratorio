const { merge } = require("webpack-merge")
const path = require("node:path")
const Dotenv = require("dotenv-webpack");

const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
              }
            }
          },
          "sass-loader"
        ]
      },
    ],
  },
  stats: "errors-only",
  devtool: 'eval-source-map',
  devServer: {
    static: path.join(__dirname, "./src"),
    port: 8081
  },
  plugins: [
    new Dotenv({
      path: "./dev.env"
    })
  ]
});