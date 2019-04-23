import Promise from 'bluebird';
import rethinkdb from 'rethinkdb';
import protodef from 'rethinkdb/proto-def';
import {configureTcpPolyfill, setIsConnected} from './TcpPolyfill';

function connect({host, port, path, secure, wsProtocols, wsBinaryType, db, simulatedLatencyMs, user, password, waitForPacket}) {
  configureTcpPolyfill({path, secure, wsProtocols, wsBinaryType, simulatedLatencyMs, waitForPacket});
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
  const connectOptions = {host, port, db, user: _user, password: _password};
  const connectionPromise = Promise.promisify(rethinkdb.connect)(connectOptions);
  process.browser = oldProcessDotBrowser;
  return connectionPromise.then(connection => {
    setIsConnected();
    return connection;
  });
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
