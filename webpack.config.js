"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProduction
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${path.resolve(__dirname, "dist")}/`,
            },
          }
        : 'style-loader',
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: { sourceMap: isDevelopment },
      },
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ];
    if (isProduction) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: isDevelopment ? "[name].css" : "[name].[hash].css",
          chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
        })
      );
    }
    return plugins;
  };

  return {
    entry: './src/index.ts',
    mode: isProduction ? 'production' : isDevelopment && 'development',
    optimization: {
      minimize: false,
    },
    devtool: isDevelopment && 'source-map',

    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },

        {
          test: /\.(s[ca]ss)$/,
          use: [
            ...getStyleLoaders(),
            'resolve-url-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: getPlugins(),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      chunkFilename: '[id].[hash].js',
    },

    devServer: {
      hot: true,
      open: true,
      watchContentBase: true,
    },

    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss'],
      modules: ['src', 'node_modules'],
    },
  };
};
