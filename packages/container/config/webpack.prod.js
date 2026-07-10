import { merge } from "webpack-merge";
import webpack from "webpack";
import packageJSON from "../package.json" with { type: "json" };
import CommonWebpack from "./webpack.common.js";

const domain = process.env.PRODUCTION_DOMAIN ?? "kappachungus";

console.log("process domain", process.env.PRODUCTION_DOMAIN);

const { ModuleFederationPlugin } = webpack.container;

console.log("domain is", domain);

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

export default merge(CommonWebpack, prodConfig);
