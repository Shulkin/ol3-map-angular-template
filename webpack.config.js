var path = require("path");
var node_modules_dir = path.join(__dirname, "node_modules");

var config = {
  context: __dirname,
  // main entry point to our application
  entry: "./assets/js/main.js",
  // path for output bundle
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  // build files on changes
  watch: true,
  module: {
    loaders: [
      { // allows to use ES 2015 features
        // run any matched files through the babel loader
        test: /\.js$/,
        // do not look into node_modules
        exclude: [node_modules_dir],
        loader: "babel-loader",
        query: {
          // use es2015 preset
          presets: ["es2015"]
        }
      },
      { // css files will be in bundle
        test: /\.css$/,
        exclude: [node_modules_dir],
        // convert to css first, then apply style
        loader: "style-loader!css-loader"
      }
    ]
  },
  // configure webpack dev-server
  devServer: {
    port: 3001 // default port
  }
};

module.exports = config;
