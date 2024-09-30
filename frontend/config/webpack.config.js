const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const basicConfig = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../templates/index.html"),
    }),
  ],
  // mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i, // /\.(js|jsx)/i
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 9000,
  },
};

module.exports = basicConfig;
