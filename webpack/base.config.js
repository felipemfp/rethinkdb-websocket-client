var webpack = require("webpack");
var FunctionModulePlugin = require("webpack/lib/FunctionModulePlugin");
var NodeTemplatePlugin = require("webpack/lib/node/NodeTemplatePlugin");
var TcpPolyfillPlugin = require("./TcpPolyfillPlugin");
var TlsStubPlugin = require("./TlsStubPlugin");

module.exports = function(isBrowser) {
  var nodeNatives = Object.keys(process.binding("natives"));
  var mocks = ["net"];
  if (isBrowser) {
    mocks.push("tls");
  }
  var externals = nodeNatives.filter(function(x) {
    return mocks.indexOf(x) < 0;
  });
  
  var config = {
    entry: ["./src/index"],
    output: {
      library: "RethinkdbWebsocketClient",
      libraryTarget: "umd",
      path: __dirname + "/../dist",
      filename: isBrowser ? "index.js" : "node.js"
    },
    target: 'node',
    plugins: [
      new webpack.ExternalsPlugin("commonjs", externals),
      new webpack.LoaderTargetPlugin("node"),
      new webpack.NormalModuleReplacementPlugin(
        /^net$/,
        __dirname + "/../src/TcpPolyfill.js"
      ),
      new webpack.NormalModuleReplacementPlugin(
        /^tls$/,
        __dirname + "/../src/TlsStub.js"
      )
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    }
  };

  if (!isBrowser) {
    config.plugins.push(new webpack.ProvidePlugin({ WebSocket: "ws" }));
  }

  return config;
};
