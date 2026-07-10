import { merge } from "webpack-merge";
import HtmlWebPackPlugin from "html-webpack-plugin";
import CommonWebpack from "./webpack.common.js";
import webpack from "webpack";
import packageJson from "../package.json" with { type: "json" };

const { dependencies } = packageJson;

const { ModuleFederationPlugin } = webpack.container;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      shared: dependencies,
      exposes: {
        "./DashboardApp": "./src/bootstrap",
      },
    }),
  ],
};

export default merge(CommonWebpack, devConfig);
