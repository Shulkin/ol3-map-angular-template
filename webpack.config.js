var path = require("path");
var config = {
  context: __dirname,
  // main entry point to application
  entry: "./assets/js/app.js",
  output: {
    // place output bundle here
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js"
  },
  // watch files for changes
  watch: true,
  module: {
    rules: [{
      // allows to use ES 2015 features
      test: /\.js$/,
      // look only in javascript folder
      include: [path.resolve(__dirname, "assets/js")],
      use: {
        // run through babel
        loader: "babel-loader",
        options: {
          // use es2015 preset
          presets: ["es2015"]
        }
      }
    }, {
      // bundle styles in output file
      test: /\.(sass|scss)$/,
      // look only in css folder
      include: [path.resolve(__dirname, "assets/css")],
      // the order of use is backward!
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  // configure development server
  devServer: {
    // serve content from assets folder
    contentBase: path.resolve(__dirname, "assets"),
    compress: true, // enable gzip compression
    port: 3001 // default port
  }
};
module.exports = config;
