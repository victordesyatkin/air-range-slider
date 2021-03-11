"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: { sourceMap: isDev },
      },
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: isDev ? "[name].css" : "[name].[hash].css",
          chunkFilename: isDev ? "[id].css" : "[id].[hash].css",
          insertAt: {
            after: "title",
          },
        })
      );
    }
    return plugins;
  };

  return {
    entry: "./src/index.ts",
    mode: isProd ? "production" : isDev && "development",
    devtool: isDev && "source-map",

    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },

        {
          test: /\.(s[ca]ss)$/,
          use: [...getStyleLoaders(), "resolve-url-loader", "sass-loader"],
        },
      ],
    },
    plugins: getPlugins(),

    output: {
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[id].[chunkhash].js",
    },

    devServer: {
      hot: true,
      open: true,
      watchContentBase: true,
    },

    resolve: {
      extensions: [".ts", ".js", ".css", ".scss"],
      modules: ["src", "node_modules"],
    },
  };
};
