import Promise from 'bluebird';
import rethinkdb from 'rethinkdb';
import protodef from 'rethinkdb/proto-def';
import {configureTcpPolyfill} from './TcpPolyfill';

function connect({host, port, path, secure, wsProtocols, wsBinaryType, db, simulatedLatencyMs, user, password}) {
  configureTcpPolyfill({path, secure, wsProtocols, wsBinaryType, simulatedLatencyMs});
  // Temporarily unset process.browser so rethinkdb uses a TcpConnection
  const oldProcessDotBrowser = process.browser;
  process.browser = false;
  let _user = user;
  let _password = password;
  if (_user === undefined) {
    _user = 'default'
  }
  if (_password === undefined) {
    _password = ''
  }
  const connectOptions = {host, port, db, _user, _password};
  const connectionPromise = Promise.promisify(rethinkdb.connect)(connectOptions);
  process.browser = oldProcessDotBrowser;
  return connectionPromise;
}

const RethinkdbWebsocketClient = {
  rethinkdb,
  protodef,
  Promise,
  connect,
};

export {
  rethinkdb,
  protodef,
  Promise,
  connect,
  RethinkdbWebsocketClient as default,
};
