"use strict";
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ];
    return plugins;
  };

  return {
    entry: './src/index.ts',
    mode: isProduction ? 'production' : 'development',
    optimization: {
      minimize: false,
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      chunkFilename: '[id].[chunkhash].js',
      libraryTarget: 'umd',
      library: 'air-range-slider',
      umdNamedDefine: true,
    },

    devtool: isDevelopment ? 'source-map' : undefined,

    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    plugins: getPlugins(),

    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', 'node_modules'],
    },
  };
};
