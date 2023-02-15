import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function extractCSS() {
  const plugin = new MiniCssExtractPlugin({
    filename: "[name].css",
  });
  const loader = MiniCssExtractPlugin.loader;
  return { plugin, loader };
}
