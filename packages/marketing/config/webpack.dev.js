import { merge } from "webpack-merge";
import HtmlWebPackPlugin from "html-webpack-plugin";
import CommonWebpack from "./webpack.common.js";
import webpack from "webpack";
import packageJson from "../package.json" with { type: "json" };

const { dependencies } = packageJson;

const { ModuleFederationPlugin } = webpack.container;

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      shared: dependencies,
      exposes: {
        "./Marketing": "./src/bootstrap",
      },
    }),
  ],
};

export default merge(CommonWebpack, devConfig);
