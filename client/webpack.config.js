config = {
  entry: __dirname + "/src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
   devtool: 'source-map'
}

module.exports = config;
