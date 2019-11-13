// Webpack plugin to intercept require('tls') and call TlsStub.
//
// For all requires where the context (the path to the file issuing the require
// statement) matches the specified regular expression, replace require('tls')
// with TlsStub. This allows the rethinkdb driver to run in the browser, as
// long as the ssl property is not set in r.connect().

class TlsStubPlugin {
  constructor(contextPattern) {
    this.contextPattern = contextPattern;
  }

  apply(compiler) {
    const contextPattern = this.contextPattern;

    compiler.hooks.normalModuleFactory.tap("TlsStubPlugin", function(nmf) {
      nmf.hooks.beforeResolve.tap("TlsStubPlugin", function(result) {
        if (/^tls$/.test(result.request)) {
          if (contextPattern.test(result.context)) {
            result.request = __dirname + "/../src/TlsStub.js";
          }
        }
      });
    });
  }
}

module.exports = TlsStubPlugin;
