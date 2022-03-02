require('dotenv').config({ path: './.env' });

// ? Imports
// -----------------------------------------------------------------------
const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// ? Functions
// -----------------------------------------------------------------------

function cssExtract() {
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].css',
  });
  const loader = MiniCssExtractPlugin.loader;
  return { plugin, loader };
}

function getEntrypoints() {
  const scripts = {};
  const files = glob.sync('./src/scripts/*.js');
  files.forEach((file) => {
    const name = getName(file);
    scripts[name] = file;
  });
  return scripts;
}

function getName(file) {
  const beforeJsArr = file.split('.js')[0].split('/');
  const lastItem = beforeJsArr[beforeJsArr.length - 1];
  return lastItem;
}

function themeCopy() {
  return new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './src/templates'),
        to: path.resolve(process.env.DIST),
      },
      {
        from: path.resolve(__dirname, './src/assets'),
        to: path.resolve(process.env.DIST, './assets'),
        noErrorOnMissing: true,
      },
    ],
  });
}

const config = (env) => {
  const entry = getEntrypoints;

  return {
    mode: env.MODE || 'development',
    entry,
    output: {
      filename: '[name].js',
      path: path.resolve(process.env.DIST, './assets'),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                [
                  'module-resolver',
                  {
                    root: ['./'],
                    alias: {
                      '@components': './src/scripts/components',
                    },
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: cssExtract().loader,
            },
            { loader: 'css-loader', options: { url: false } },
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [themeCopy(), cssExtract().plugin],
  };
};

module.exports = (env) => config(env);
