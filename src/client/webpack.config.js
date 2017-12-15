var webpack = require("webpack")
var path = require("path")
// var env = require("../.env.json")
var appUrl = 'http://localhost:8080' // require("./helpers").appUrl

// Define our base config
module.exports = {
  entry: {
    // app: path.resolve(__dirname, "./index.js"),
    app: [
      "babel-polyfill",
      // activate HMR for React
      "react-hot-loader/patch",
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      "webpack-dev-server/client?http://localhost:8080",
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      "webpack/hot/only-dev-server",
      // the entry point of our app
      "./index.js",
    ],
    // tachyons: 'tachyons/css/tachyons.css',
    // index: './stylesheets/bundle.css',
  },
  context: path.resolve(__dirname),
  output: {
    publicPath: appUrl,
    filename: "[name].js",
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
        ]
      },
      // {
      //   test: /\.css$/,
      //   include: path.resolve(__dirname, "node_modules/tailwindcss"),
      //   // include: path.resolve(__dirname, "node_modules/tachyons/css/"),
      //   use: [
      //     {
      //       loader: "style-loader",
      //       options: {
      //         sourceMap: true,
      //       }
      //     },
      //     {
      //       loader: "css-loader",
      //     },
      //     {
      //       loader: "postcss-loader",
      //     },
      //   ]
      // },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "css-loader",
            options: {
              // import: false,
              // minimize: true,
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]-[local][hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
        ]
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      "node_modules",
    ],
    // An array of extensions that should be used to resolve modules
    extensions: [".js", ".css"],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js", // isProd() ? "vendor.bundle.[hash].js" : "vendor.bundle.js",
      minChunks(module) {
        var context = module.context;
        return context && context.indexOf("node_modules") >= 0;
      },
    }),
    // Gives us access to process.env.NODE_ENV
    new webpack.DefinePlugin({
      "process.env": {NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")}
    }),
  ],
  devtool: "inline-eval-cheap-source-map",
  plugins: [
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    historyApiFallback: true,
    hot: true,
    // host: 'http://127.0.0.1',
    inline: true,
    // port: '8080',
    https: false,
    publicPath: appUrl,
  },
}
