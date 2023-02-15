import * as dotenv from "dotenv";
dotenv.config({ src: `${root}/.env` });
import path from "path";

import { extractCSS } from "./functions/extractCSS.mjs";
import { getEntries } from "./functions/getEntries.mjs";
import { root } from "./functions/root.mjs";

import { moduleResolver } from "./plugins/moduleResolver.mjs";
import { copyThemeFiles } from "./plugins/copyThemeFiles.mjs";

function config(env) {
  const entry = getEntries();
  return {
    mode: env.MODE || "development",
    entry,
    output: {
      filename: "[name].js",
      path: path.resolve(process.env.DIST, "./assets"),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime", moduleResolver],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: extractCSS().loader,
            },
            { loader: "css-loader", options: { url: false } },
            "sass-loader",
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [copyThemeFiles(process.env.DIST), extractCSS().plugin],
  };
}

export default config;
