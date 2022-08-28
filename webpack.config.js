const path = require("path");
const webpack = require("webpack");

const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

const bundlePath = path.resolve(__dirname, "dist/");

module.exports = (_env, argv) => {
  let entryPoints = {
    Panel: {
      path: "./src/index.js",
      outputHtml: "index.html",
      build: true,
    },
  };

  let entry = {};

  let plugins = [
    // new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: ["react", "React"],
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
    new Dotenv({
      systemvars: true,
    }),
  ];

  for (name in entryPoints) {
    if (entryPoints[name].build) {
      entry[name] = entryPoints[name].path;
      if (argv.mode === "production") {
        plugins.push(
          new HtmlWebpackPlugin({
            inject: true,
            chunks: [name],
            template: "./template.html",
            filename: entryPoints[name].outputHtml,
          })
        );
      }
    }
  }

  let config = {
    entry,
    optimization: {
      minimize: false, // this setting is default to false to pass review more easily. you can opt to set this to true to compress the bundles, but also expect an email from the review team to get the full source otherwise.
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "img/[name].[ext]",
          },
        },
      ],
    },
    resolve: {
      fallback: {
        buffer: require.resolve("buffer"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        os: require.resolve("os-browserify/browser"),
      },
      extensions: ["*", ".js", ".jsx"],
    },
    output: {
      filename: "[name].bundle.js",
      path: bundlePath,
    },
    plugins,
  };

  if (argv.mode === "production") {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          test: /node_modules/,
          name: false,
        },
      },
      name: false,
    };
  }

  return config;
};
