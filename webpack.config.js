const path = require("path");
module.exports = {
  entry: "./public/app.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          // To make babel@6 compile ES6 we need es2015 preset.
          presets: ["react", "es2015", "stage-0"],
          plugins: [path.resolve(__dirname, "babelRelayPlugin")]
        }
      }
    ]
  }
};
