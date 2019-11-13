// Webpack plugin to intercept require('net') and call TcpPolyfill.
//
// For all requires where the context (the path to the file issuing the require
// statement) matches the specified regular expression, replace require('net')
// with TcpPolyfill. When used with the rethinkdb driver, TCP connections to
// a rethinkdb database will be proxied through a WebSocket.

class TcpPolyfillPlugin {
  constructor(contextPattern) {
    this.contextPattern = contextPattern;
  }

  apply(compiler) {

    compiler.hooks.normalModuleFactory.tap("TcpPolyfill", (nmv) => {
      
      nmf.plugin("before-resolve", function(result, callback) {
        if (!result) return callback();

        if (/^net$/.test(result.request)) {
          if (contextPattern.test(result.context)) {
            result.request = __dirname + "/../src/TcpPolyfill.js";
          }
        }

        return callback(null, result);
      });

    })
  }
}

module.exports = TcpPolyfillPlugin;
