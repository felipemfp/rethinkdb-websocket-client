import Promise from 'bluebird';
import rethinkdb from 'rethinkdb';
import protodef from 'rethinkdb/proto-def';
import {configureTcpPolyfill} from './TcpPolyfill';

function connect({host, port, path, secure, wsProtocols, db, simulatedLatencyMs, user, password}) {
  configureTcpPolyfill({path, secure, wsProtocols, simulatedLatencyMs});
  // Temporarily unset process.browser so rethinkdb uses a TcpConnection
  const oldProcessDotBrowser = process.browser;
  process.browser = false;
  
  if(user == undefined) {
    user = 'default'
  }
  if(password == undefined) {
    password = ''
  }

  const connectOptions = {host, port, db, user, password};
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
