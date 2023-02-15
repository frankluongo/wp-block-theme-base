import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import { root } from "../functions/root.mjs";

export function copyThemeFiles(dist) {
  return new CopyPlugin({
    patterns: [
      {
        from: path.resolve(root, "./src/templates"),
        to: path.resolve(dist),
      },
      {
        from: path.resolve(root, "./src/assets"),
        to: path.resolve(dist, "./assets"),
        noErrorOnMissing: true,
      },
    ],
  });
}
