import { merge } from "webpack-merge";
import CommonWebpack from "./webpack.common.js";
import webpack from "webpack";
import packageJson from "../package.json" with { type: "json" };

const { ModuleFederationPlugin } = webpack.container;
const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      shared: packageJson.dependencies,
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};

export default merge(CommonWebpack, devConfig);
