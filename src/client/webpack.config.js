var webpack = require("webpack")
var path = require("path")
// var env = require("../.env.json")
var appUrl = 'http://localhost:8080' // require("./helpers").appUrl

// Define our base config
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./index.js"),
    // index: [
    //   "babel-polyfill",
    //   // activate HMR for React
    //   "react-hot-loader/patch",
    //   // bundle the client for webpack-dev-server
    //   // and connect to the provided endpoint
    //   "webpack-dev-server/client?http://localhost:3001",
    //   // bundle the client for hot reloading
    //   // only- means to only hot reload for successful updates
    //   "webpack/hot/only-dev-server",
    //   // the entry point of our app
    //   "./index.js",
    // ],
  },
  context: path.resolve(__dirname),
  output: {
    publicPath: appUrl,
    filename: "bundle.js",
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
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      "node_modules",
    ],
    // An array of extensions that should be used to resolve modules
    extensions: [".js"],
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
  // Enable hot reloading in dev
  devServer: {
    contentBase: path.join(__dirname),
    hot: true,
    // historyApiFallback: true,
    // host: 'http://localhost',
    // hot: true,
    // inline: true,
    // port: '3001',
    // https: false,
    // publicPath: appUrl,
  },
}
