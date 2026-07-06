import { merge } from "webpack-merge";
import webpack from "webpack";
import webpackCommon from "./webpack.common.js";
import packageJSON from "../package.json" with { type: "json" };

const { ModuleFederationPlugin } = webpack.container;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      shared: packageJSON.dependencies,
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
    }),
  ],
};

export default merge(webpackCommon, prodConfig);
