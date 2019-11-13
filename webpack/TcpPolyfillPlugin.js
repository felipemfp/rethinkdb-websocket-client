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
    const contextPattern = this.contextPattern;

    compiler.hooks.normalModuleFactory.tap("TcpPolyfill", function(nmf) {
      nmf.hooks.beforeResolve.tap("TcpPolyfill", function(result) {
        if (/^net$/.test(result.request)) {
          if (contextPattern.test(result.context)) {
            result.request = __dirname + "/../src/TcpPolyfill.js";
          }
        }
      });
    });
  }
}

module.exports = TcpPolyfillPlugin;
