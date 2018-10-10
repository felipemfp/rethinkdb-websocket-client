(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("events"), require("crypto"));
	else if(typeof define === 'function' && define.amd)
		define(["events", "crypto"], factory);
	else if(typeof exports === 'object')
		exports["RethinkdbWebsocketClient"] = factory(require("events"), require("crypto"));
	else
		root["RethinkdbWebsocketClient"] = factory(root["events"], root["crypto"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_51__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bluebird = __webpack_require__(2);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	var _rethinkdb = __webpack_require__(40);

	var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

	var _rethinkdbProtoDef = __webpack_require__(49);

	var _rethinkdbProtoDef2 = _interopRequireDefault(_rethinkdbProtoDef);

	var _TcpPolyfill = __webpack_require__(42);

	function connect(_ref) {
	  var host = _ref.host;
	  var port = _ref.port;
	  var path = _ref.path;
	  var secure = _ref.secure;
	  var wsProtocols = _ref.wsProtocols;
	  var wsBinaryType = _ref.wsBinaryType;
	  var db = _ref.db;
	  var simulatedLatencyMs = _ref.simulatedLatencyMs;
	  var user = _ref.user;
	  var password = _ref.password;

	  (0, _TcpPolyfill.configureTcpPolyfill)({ path: path, secure: secure, wsProtocols: wsProtocols, wsBinaryType: wsBinaryType, simulatedLatencyMs: simulatedLatencyMs });
	  // Temporarily unset process.browser so rethinkdb uses a TcpConnection
	  var oldProcessDotBrowser = process.browser;
	  process.browser = false;
	  var _user = user;
	  var _password = password;
	  if (_user === undefined) {
	    _user = 'default';
	  }
	  if (_password === undefined) {
	    _password = '';
	  }
	  var connectOptions = { host: host, port: port, db: db, user: _user, password: _password };
	  var connectionPromise = _bluebird2['default'].promisify(_rethinkdb2['default'].connect)(connectOptions);
	  process.browser = oldProcessDotBrowser;
	  return connectionPromise;
	}

	var RethinkdbWebsocketClient = {
	  rethinkdb: _rethinkdb2['default'],
	  protodef: _rethinkdbProtoDef2['default'],
	  Promise: _bluebird2['default'],
	  connect: connect
	};

	exports.rethinkdb = _rethinkdb2['default'];
	exports.protodef = _rethinkdbProtoDef2['default'];
	exports.Promise = _bluebird2['default'];
	exports.connect = connect;
	exports['default'] = RethinkdbWebsocketClient;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var old;
	if (typeof Promise !== "undefined") old = Promise;
	function noConflict() {
	    try { if (Promise === bluebird) Promise = old; }
	    catch (e) {}
	    return bluebird;
	}
	var bluebird = __webpack_require__(3)();
	bluebird.noConflict = noConflict;
	module.exports = bluebird;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function() {
	var makeSelfResolutionError = function () {
	    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/LhFpo0\u000a");
	};
	var reflect = function() {
	    return new Promise.PromiseInspection(this._target());
	};
	var apiRejection = function(msg) {
	    return Promise.reject(new TypeError(msg));
	};

	var util = __webpack_require__(4);

	var getDomain;
	if (util.isNode) {
	    getDomain = function() {
	        var ret = process.domain;
	        if (ret === undefined) ret = null;
	        return ret;
	    };
	} else {
	    getDomain = function() {
	        return null;
	    };
	}
	util.notEnumerableProp(Promise, "_getDomain", getDomain);

	var UNDEFINED_BINDING = {};
	var async = __webpack_require__(6);
	var errors = __webpack_require__(9);
	var TypeError = Promise.TypeError = errors.TypeError;
	Promise.RangeError = errors.RangeError;
	Promise.CancellationError = errors.CancellationError;
	Promise.TimeoutError = errors.TimeoutError;
	Promise.OperationalError = errors.OperationalError;
	Promise.RejectionError = errors.OperationalError;
	Promise.AggregateError = errors.AggregateError;
	var INTERNAL = function(){};
	var APPLY = {};
	var NEXT_FILTER = {e: null};
	var tryConvertToPromise = __webpack_require__(10)(Promise, INTERNAL);
	var PromiseArray =
	    __webpack_require__(11)(Promise, INTERNAL,
	                                    tryConvertToPromise, apiRejection);
	var CapturedTrace = __webpack_require__(12)();
	var isDebugging = __webpack_require__(13)(Promise, CapturedTrace);
	 /*jshint unused:false*/
	var createContext =
	    __webpack_require__(14)(Promise, CapturedTrace, isDebugging);
	var CatchFilter = __webpack_require__(15)(NEXT_FILTER);
	var PromiseResolver = __webpack_require__(16);
	var nodebackForPromise = PromiseResolver._nodebackForPromise;
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;

	function Promise(resolver) {
	    if (typeof resolver !== "function") {
	        throw new TypeError("the promise constructor requires a resolver function\u000a\u000a    See http://goo.gl/EC22Yn\u000a");
	    }
	    if (this.constructor !== Promise) {
	        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/KsIlge\u000a");
	    }
	    this._bitField = 0;
	    this._fulfillmentHandler0 = undefined;
	    this._rejectionHandler0 = undefined;
	    this._progressHandler0 = undefined;
	    this._promise0 = undefined;
	    this._receiver0 = undefined;
	    this._settledValue = undefined;
	    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
	}

	Promise.prototype.toString = function () {
	    return "[object Promise]";
	};

	Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	    var len = arguments.length;
	    if (len > 1) {
	        var catchInstances = new Array(len - 1),
	            j = 0, i;
	        for (i = 0; i < len - 1; ++i) {
	            var item = arguments[i];
	            if (typeof item === "function") {
	                catchInstances[j++] = item;
	            } else {
	                return Promise.reject(
	                    new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a"));
	            }
	        }
	        catchInstances.length = j;
	        fn = arguments[i];
	        var catchFilter = new CatchFilter(catchInstances, fn, this);
	        return this._then(undefined, catchFilter.doFilter, undefined,
	            catchFilter, undefined);
	    }
	    return this._then(undefined, fn, undefined, undefined, undefined);
	};

	Promise.prototype.reflect = function () {
	    return this._then(reflect, reflect, undefined, this, undefined);
	};

	Promise.prototype.then = function (didFulfill, didReject, didProgress) {
	    if (isDebugging() && arguments.length > 0 &&
	        typeof didFulfill !== "function" &&
	        typeof didReject !== "function") {
	        var msg = ".then() only accepts functions but was passed: " +
	                util.classString(didFulfill);
	        if (arguments.length > 1) {
	            msg += ", " + util.classString(didReject);
	        }
	        this._warn(msg);
	    }
	    return this._then(didFulfill, didReject, didProgress,
	        undefined, undefined);
	};

	Promise.prototype.done = function (didFulfill, didReject, didProgress) {
	    var promise = this._then(didFulfill, didReject, didProgress,
	        undefined, undefined);
	    promise._setIsFinal();
	};

	Promise.prototype.spread = function (didFulfill, didReject) {
	    return this.all()._then(didFulfill, didReject, undefined, APPLY, undefined);
	};

	Promise.prototype.isCancellable = function () {
	    return !this.isResolved() &&
	        this._cancellable();
	};

	Promise.prototype.toJSON = function () {
	    var ret = {
	        isFulfilled: false,
	        isRejected: false,
	        fulfillmentValue: undefined,
	        rejectionReason: undefined
	    };
	    if (this.isFulfilled()) {
	        ret.fulfillmentValue = this.value();
	        ret.isFulfilled = true;
	    } else if (this.isRejected()) {
	        ret.rejectionReason = this.reason();
	        ret.isRejected = true;
	    }
	    return ret;
	};

	Promise.prototype.all = function () {
	    return new PromiseArray(this).promise();
	};

	Promise.prototype.error = function (fn) {
	    return this.caught(util.originatesFromRejection, fn);
	};

	Promise.getNewLibraryCopy = module.exports;

	Promise.is = function (val) {
	    return val instanceof Promise;
	};

	Promise.fromNode = function(fn) {
	    var ret = new Promise(INTERNAL);
	    var result = tryCatch(fn)(nodebackForPromise(ret));
	    if (result === errorObj) {
	        ret._rejectCallback(result.e, true, true);
	    }
	    return ret;
	};

	Promise.all = function (promises) {
	    return new PromiseArray(promises).promise();
	};

	Promise.defer = Promise.pending = function () {
	    var promise = new Promise(INTERNAL);
	    return new PromiseResolver(promise);
	};

	Promise.cast = function (obj) {
	    var ret = tryConvertToPromise(obj);
	    if (!(ret instanceof Promise)) {
	        var val = ret;
	        ret = new Promise(INTERNAL);
	        ret._fulfillUnchecked(val);
	    }
	    return ret;
	};

	Promise.resolve = Promise.fulfilled = Promise.cast;

	Promise.reject = Promise.rejected = function (reason) {
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._rejectCallback(reason, true);
	    return ret;
	};

	Promise.setScheduler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    var prev = async._schedule;
	    async._schedule = fn;
	    return prev;
	};

	Promise.prototype._then = function (
	    didFulfill,
	    didReject,
	    didProgress,
	    receiver,
	    internalData
	) {
	    var haveInternalData = internalData !== undefined;
	    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

	    if (!haveInternalData) {
	        ret._propagateFrom(this, 4 | 1);
	        ret._captureStackTrace();
	    }

	    var target = this._target();
	    if (target !== this) {
	        if (receiver === undefined) receiver = this._boundTo;
	        if (!haveInternalData) ret._setIsMigrated();
	    }

	    var callbackIndex = target._addCallbacks(didFulfill,
	                                             didReject,
	                                             didProgress,
	                                             ret,
	                                             receiver,
	                                             getDomain());

	    if (target._isResolved() && !target._isSettlePromisesQueued()) {
	        async.invoke(
	            target._settlePromiseAtPostResolution, target, callbackIndex);
	    }

	    return ret;
	};

	Promise.prototype._settlePromiseAtPostResolution = function (index) {
	    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
	    this._settlePromiseAt(index);
	};

	Promise.prototype._length = function () {
	    return this._bitField & 131071;
	};

	Promise.prototype._isFollowingOrFulfilledOrRejected = function () {
	    return (this._bitField & 939524096) > 0;
	};

	Promise.prototype._isFollowing = function () {
	    return (this._bitField & 536870912) === 536870912;
	};

	Promise.prototype._setLength = function (len) {
	    this._bitField = (this._bitField & -131072) |
	        (len & 131071);
	};

	Promise.prototype._setFulfilled = function () {
	    this._bitField = this._bitField | 268435456;
	};

	Promise.prototype._setRejected = function () {
	    this._bitField = this._bitField | 134217728;
	};

	Promise.prototype._setFollowing = function () {
	    this._bitField = this._bitField | 536870912;
	};

	Promise.prototype._setIsFinal = function () {
	    this._bitField = this._bitField | 33554432;
	};

	Promise.prototype._isFinal = function () {
	    return (this._bitField & 33554432) > 0;
	};

	Promise.prototype._cancellable = function () {
	    return (this._bitField & 67108864) > 0;
	};

	Promise.prototype._setCancellable = function () {
	    this._bitField = this._bitField | 67108864;
	};

	Promise.prototype._unsetCancellable = function () {
	    this._bitField = this._bitField & (~67108864);
	};

	Promise.prototype._setIsMigrated = function () {
	    this._bitField = this._bitField | 4194304;
	};

	Promise.prototype._unsetIsMigrated = function () {
	    this._bitField = this._bitField & (~4194304);
	};

	Promise.prototype._isMigrated = function () {
	    return (this._bitField & 4194304) > 0;
	};

	Promise.prototype._receiverAt = function (index) {
	    var ret = index === 0
	        ? this._receiver0
	        : this[
	            index * 5 - 5 + 4];
	    if (ret === UNDEFINED_BINDING) {
	        return undefined;
	    } else if (ret === undefined && this._isBound()) {
	        return this._boundValue();
	    }
	    return ret;
	};

	Promise.prototype._promiseAt = function (index) {
	    return index === 0
	        ? this._promise0
	        : this[index * 5 - 5 + 3];
	};

	Promise.prototype._fulfillmentHandlerAt = function (index) {
	    return index === 0
	        ? this._fulfillmentHandler0
	        : this[index * 5 - 5 + 0];
	};

	Promise.prototype._rejectionHandlerAt = function (index) {
	    return index === 0
	        ? this._rejectionHandler0
	        : this[index * 5 - 5 + 1];
	};

	Promise.prototype._boundValue = function() {
	    var ret = this._boundTo;
	    if (ret !== undefined) {
	        if (ret instanceof Promise) {
	            if (ret.isFulfilled()) {
	                return ret.value();
	            } else {
	                return undefined;
	            }
	        }
	    }
	    return ret;
	};

	Promise.prototype._migrateCallbacks = function (follower, index) {
	    var fulfill = follower._fulfillmentHandlerAt(index);
	    var reject = follower._rejectionHandlerAt(index);
	    var progress = follower._progressHandlerAt(index);
	    var promise = follower._promiseAt(index);
	    var receiver = follower._receiverAt(index);
	    if (promise instanceof Promise) promise._setIsMigrated();
	    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	    this._addCallbacks(fulfill, reject, progress, promise, receiver, null);
	};

	Promise.prototype._addCallbacks = function (
	    fulfill,
	    reject,
	    progress,
	    promise,
	    receiver,
	    domain
	) {
	    var index = this._length();

	    if (index >= 131071 - 5) {
	        index = 0;
	        this._setLength(0);
	    }

	    if (index === 0) {
	        this._promise0 = promise;
	        if (receiver !== undefined) this._receiver0 = receiver;
	        if (typeof fulfill === "function" && !this._isCarryingStackTrace()) {
	            this._fulfillmentHandler0 =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this._rejectionHandler0 =
	                domain === null ? reject : domain.bind(reject);
	        }
	        if (typeof progress === "function") {
	            this._progressHandler0 =
	                domain === null ? progress : domain.bind(progress);
	        }
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] = promise;
	        this[base + 4] = receiver;
	        if (typeof fulfill === "function") {
	            this[base + 0] =
	                domain === null ? fulfill : domain.bind(fulfill);
	        }
	        if (typeof reject === "function") {
	            this[base + 1] =
	                domain === null ? reject : domain.bind(reject);
	        }
	        if (typeof progress === "function") {
	            this[base + 2] =
	                domain === null ? progress : domain.bind(progress);
	        }
	    }
	    this._setLength(index + 1);
	    return index;
	};

	Promise.prototype._setProxyHandlers = function (receiver, promiseSlotValue) {
	    var index = this._length();

	    if (index >= 131071 - 5) {
	        index = 0;
	        this._setLength(0);
	    }
	    if (index === 0) {
	        this._promise0 = promiseSlotValue;
	        this._receiver0 = receiver;
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] = promiseSlotValue;
	        this[base + 4] = receiver;
	    }
	    this._setLength(index + 1);
	};

	Promise.prototype._proxyPromiseArray = function (promiseArray, index) {
	    this._setProxyHandlers(promiseArray, index);
	};

	Promise.prototype._resolveCallback = function(value, shouldBind) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    if (value === this)
	        return this._rejectCallback(makeSelfResolutionError(), false, true);
	    var maybePromise = tryConvertToPromise(value, this);
	    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

	    var propagationFlags = 1 | (shouldBind ? 4 : 0);
	    this._propagateFrom(maybePromise, propagationFlags);
	    var promise = maybePromise._target();
	    if (promise._isPending()) {
	        var len = this._length();
	        for (var i = 0; i < len; ++i) {
	            promise._migrateCallbacks(this, i);
	        }
	        this._setFollowing();
	        this._setLength(0);
	        this._setFollowee(promise);
	    } else if (promise._isFulfilled()) {
	        this._fulfillUnchecked(promise._value());
	    } else {
	        this._rejectUnchecked(promise._reason(),
	            promise._getCarriedStackTrace());
	    }
	};

	Promise.prototype._rejectCallback =
	function(reason, synchronous, shouldNotMarkOriginatingFromRejection) {
	    if (!shouldNotMarkOriginatingFromRejection) {
	        util.markAsOriginatingFromRejection(reason);
	    }
	    var trace = util.ensureErrorObject(reason);
	    var hasStack = trace === reason;
	    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	    this._reject(reason, hasStack ? undefined : trace);
	};

	Promise.prototype._resolveFromResolver = function (resolver) {
	    var promise = this;
	    this._captureStackTrace();
	    this._pushContext();
	    var synchronous = true;
	    var r = tryCatch(resolver)(function(value) {
	        if (promise === null) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }, function (reason) {
	        if (promise === null) return;
	        promise._rejectCallback(reason, synchronous);
	        promise = null;
	    });
	    synchronous = false;
	    this._popContext();

	    if (r !== undefined && r === errorObj && promise !== null) {
	        promise._rejectCallback(r.e, true, true);
	        promise = null;
	    }
	};

	Promise.prototype._settlePromiseFromHandler = function (
	    handler, receiver, value, promise
	) {
	    if (promise._isRejected()) return;
	    promise._pushContext();
	    var x;
	    if (receiver === APPLY && !this._isRejected()) {
	        x = tryCatch(handler).apply(this._boundValue(), value);
	    } else {
	        x = tryCatch(handler).call(receiver, value);
	    }
	    promise._popContext();

	    if (x === errorObj || x === promise || x === NEXT_FILTER) {
	        var err = x === promise ? makeSelfResolutionError() : x.e;
	        promise._rejectCallback(err, false, true);
	    } else {
	        promise._resolveCallback(x);
	    }
	};

	Promise.prototype._target = function() {
	    var ret = this;
	    while (ret._isFollowing()) ret = ret._followee();
	    return ret;
	};

	Promise.prototype._followee = function() {
	    return this._rejectionHandler0;
	};

	Promise.prototype._setFollowee = function(promise) {
	    this._rejectionHandler0 = promise;
	};

	Promise.prototype._cleanValues = function () {
	    if (this._cancellable()) {
	        this._cancellationParent = undefined;
	    }
	};

	Promise.prototype._propagateFrom = function (parent, flags) {
	    if ((flags & 1) > 0 && parent._cancellable()) {
	        this._setCancellable();
	        this._cancellationParent = parent;
	    }
	    if ((flags & 4) > 0 && parent._isBound()) {
	        this._setBoundTo(parent._boundTo);
	    }
	};

	Promise.prototype._fulfill = function (value) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._fulfillUnchecked(value);
	};

	Promise.prototype._reject = function (reason, carriedStackTrace) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._rejectUnchecked(reason, carriedStackTrace);
	};

	Promise.prototype._settlePromiseAt = function (index) {
	    var promise = this._promiseAt(index);
	    var isPromise = promise instanceof Promise;

	    if (isPromise && promise._isMigrated()) {
	        promise._unsetIsMigrated();
	        return async.invoke(this._settlePromiseAt, this, index);
	    }
	    var handler = this._isFulfilled()
	        ? this._fulfillmentHandlerAt(index)
	        : this._rejectionHandlerAt(index);

	    var carriedStackTrace =
	        this._isCarryingStackTrace() ? this._getCarriedStackTrace() : undefined;
	    var value = this._settledValue;
	    var receiver = this._receiverAt(index);
	    this._clearCallbackDataAtIndex(index);

	    if (typeof handler === "function") {
	        if (!isPromise) {
	            handler.call(receiver, value, promise);
	        } else {
	            this._settlePromiseFromHandler(handler, receiver, value, promise);
	        }
	    } else if (receiver instanceof PromiseArray) {
	        if (!receiver._isResolved()) {
	            if (this._isFulfilled()) {
	                receiver._promiseFulfilled(value, promise);
	            }
	            else {
	                receiver._promiseRejected(value, promise);
	            }
	        }
	    } else if (isPromise) {
	        if (this._isFulfilled()) {
	            promise._fulfill(value);
	        } else {
	            promise._reject(value, carriedStackTrace);
	        }
	    }

	    if (index >= 4 && (index & 31) === 4)
	        async.invokeLater(this._setLength, this, 0);
	};

	Promise.prototype._clearCallbackDataAtIndex = function(index) {
	    if (index === 0) {
	        if (!this._isCarryingStackTrace()) {
	            this._fulfillmentHandler0 = undefined;
	        }
	        this._rejectionHandler0 =
	        this._progressHandler0 =
	        this._receiver0 =
	        this._promise0 = undefined;
	    } else {
	        var base = index * 5 - 5;
	        this[base + 3] =
	        this[base + 4] =
	        this[base + 0] =
	        this[base + 1] =
	        this[base + 2] = undefined;
	    }
	};

	Promise.prototype._isSettlePromisesQueued = function () {
	    return (this._bitField &
	            -1073741824) === -1073741824;
	};

	Promise.prototype._setSettlePromisesQueued = function () {
	    this._bitField = this._bitField | -1073741824;
	};

	Promise.prototype._unsetSettlePromisesQueued = function () {
	    this._bitField = this._bitField & (~-1073741824);
	};

	Promise.prototype._queueSettlePromises = function() {
	    async.settlePromises(this);
	    this._setSettlePromisesQueued();
	};

	Promise.prototype._fulfillUnchecked = function (value) {
	    if (value === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err, undefined);
	    }
	    this._setFulfilled();
	    this._settledValue = value;
	    this._cleanValues();

	    if (this._length() > 0) {
	        this._queueSettlePromises();
	    }
	};

	Promise.prototype._rejectUncheckedCheckError = function (reason) {
	    var trace = util.ensureErrorObject(reason);
	    this._rejectUnchecked(reason, trace === reason ? undefined : trace);
	};

	Promise.prototype._rejectUnchecked = function (reason, trace) {
	    if (reason === this) {
	        var err = makeSelfResolutionError();
	        this._attachExtraTrace(err);
	        return this._rejectUnchecked(err);
	    }
	    this._setRejected();
	    this._settledValue = reason;
	    this._cleanValues();

	    if (this._isFinal()) {
	        async.throwLater(function(e) {
	            if ("stack" in e) {
	                async.invokeFirst(
	                    CapturedTrace.unhandledRejection, undefined, e);
	            }
	            throw e;
	        }, trace === undefined ? reason : trace);
	        return;
	    }

	    if (trace !== undefined && trace !== reason) {
	        this._setCarriedStackTrace(trace);
	    }

	    if (this._length() > 0) {
	        this._queueSettlePromises();
	    } else {
	        this._ensurePossibleRejectionHandled();
	    }
	};

	Promise.prototype._settlePromises = function () {
	    this._unsetSettlePromisesQueued();
	    var len = this._length();
	    for (var i = 0; i < len; i++) {
	        this._settlePromiseAt(i);
	    }
	};


	util.notEnumerableProp(Promise,
	                       "_makeSelfResolutionError",
	                       makeSelfResolutionError);

	__webpack_require__(17)(Promise, PromiseArray);
	__webpack_require__(18)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	__webpack_require__(19)(Promise, INTERNAL, tryConvertToPromise);
	__webpack_require__(20)(Promise, NEXT_FILTER, tryConvertToPromise);
	__webpack_require__(21)(Promise);
	__webpack_require__(22)(Promise);
	__webpack_require__(23)(Promise, PromiseArray, tryConvertToPromise, INTERNAL);
	Promise.version = "2.11.0";
	Promise.Promise = Promise;
	__webpack_require__(24)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
	__webpack_require__(25)(Promise);
	__webpack_require__(26)(Promise, apiRejection, tryConvertToPromise, createContext);
	__webpack_require__(27)(Promise, apiRejection, INTERNAL, tryConvertToPromise);
	__webpack_require__(28)(Promise);
	__webpack_require__(29)(Promise);
	__webpack_require__(30)(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	__webpack_require__(31)(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	__webpack_require__(32)(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL);
	__webpack_require__(33)(Promise, PromiseArray);
	__webpack_require__(34)(Promise, PromiseArray, apiRejection);
	__webpack_require__(35)(Promise, INTERNAL);
	__webpack_require__(36)(Promise);
	__webpack_require__(37)(Promise, INTERNAL);
	__webpack_require__(38)(Promise, INTERNAL);
	__webpack_require__(39)(Promise, INTERNAL);
	                                                         
	    util.toFastProperties(Promise);                                          
	    util.toFastProperties(Promise.prototype);                                
	    function fillTypes(value) {                                              
	        var p = new Promise(INTERNAL);                                       
	        p._fulfillmentHandler0 = value;                                      
	        p._rejectionHandler0 = value;                                        
	        p._progressHandler0 = value;                                         
	        p._promise0 = value;                                                 
	        p._receiver0 = value;                                                
	        p._settledValue = value;                                             
	    }                                                                        
	    // Complete slack tracking, opt out of field-type tracking and           
	    // stabilize map                                                         
	    fillTypes({a: 1});                                                       
	    fillTypes({b: 2});                                                       
	    fillTypes({c: 3});                                                       
	    fillTypes(1);                                                            
	    fillTypes(function(){});                                                 
	    fillTypes(undefined);                                                    
	    fillTypes(false);                                                        
	    fillTypes(new Promise(INTERNAL));                                        
	    CapturedTrace.setBounds(async.firstLineError, util.lastLineError);       
	    return Promise;                                                          

	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var es5 = __webpack_require__(5);
	var canEvaluate = typeof navigator == "undefined";
	var haveGetters = (function(){
	    try {
	        var o = {};
	        es5.defineProperty(o, "f", {
	            get: function () {
	                return 3;
	            }
	        });
	        return o.f === 3;
	    }
	    catch (e) {
	        return false;
	    }

	})();

	var errorObj = {e: {}};
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        var target = tryCatchTarget;
	        tryCatchTarget = null;
	        return target.apply(this, arguments);
	    } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}

	var inherits = function(Child, Parent) {
	    var hasProp = {}.hasOwnProperty;

	    function T() {
	        this.constructor = Child;
	        this.constructor$ = Parent;
	        for (var propertyName in Parent.prototype) {
	            if (hasProp.call(Parent.prototype, propertyName) &&
	                propertyName.charAt(propertyName.length-1) !== "$"
	           ) {
	                this[propertyName + "$"] = Parent.prototype[propertyName];
	            }
	        }
	    }
	    T.prototype = Parent.prototype;
	    Child.prototype = new T();
	    return Child.prototype;
	};


	function isPrimitive(val) {
	    return val == null || val === true || val === false ||
	        typeof val === "string" || typeof val === "number";

	}

	function isObject(value) {
	    return !isPrimitive(value);
	}

	function maybeWrapAsError(maybeError) {
	    if (!isPrimitive(maybeError)) return maybeError;

	    return new Error(safeToString(maybeError));
	}

	function withAppended(target, appendee) {
	    var len = target.length;
	    var ret = new Array(len + 1);
	    var i;
	    for (i = 0; i < len; ++i) {
	        ret[i] = target[i];
	    }
	    ret[i] = appendee;
	    return ret;
	}

	function getDataPropertyOrDefault(obj, key, defaultValue) {
	    if (es5.isES5) {
	        var desc = Object.getOwnPropertyDescriptor(obj, key);

	        if (desc != null) {
	            return desc.get == null && desc.set == null
	                    ? desc.value
	                    : defaultValue;
	        }
	    } else {
	        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	    }
	}

	function notEnumerableProp(obj, name, value) {
	    if (isPrimitive(obj)) return obj;
	    var descriptor = {
	        value: value,
	        configurable: true,
	        enumerable: false,
	        writable: true
	    };
	    es5.defineProperty(obj, name, descriptor);
	    return obj;
	}

	function thrower(r) {
	    throw r;
	}

	var inheritedDataKeys = (function() {
	    var excludedPrototypes = [
	        Array.prototype,
	        Object.prototype,
	        Function.prototype
	    ];

	    var isExcludedProto = function(val) {
	        for (var i = 0; i < excludedPrototypes.length; ++i) {
	            if (excludedPrototypes[i] === val) {
	                return true;
	            }
	        }
	        return false;
	    };

	    if (es5.isES5) {
	        var getKeys = Object.getOwnPropertyNames;
	        return function(obj) {
	            var ret = [];
	            var visitedKeys = Object.create(null);
	            while (obj != null && !isExcludedProto(obj)) {
	                var keys;
	                try {
	                    keys = getKeys(obj);
	                } catch (e) {
	                    return ret;
	                }
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (visitedKeys[key]) continue;
	                    visitedKeys[key] = true;
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	                    if (desc != null && desc.get == null && desc.set == null) {
	                        ret.push(key);
	                    }
	                }
	                obj = es5.getPrototypeOf(obj);
	            }
	            return ret;
	        };
	    } else {
	        var hasProp = {}.hasOwnProperty;
	        return function(obj) {
	            if (isExcludedProto(obj)) return [];
	            var ret = [];

	            /*jshint forin:false */
	            enumeration: for (var key in obj) {
	                if (hasProp.call(obj, key)) {
	                    ret.push(key);
	                } else {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (hasProp.call(excludedPrototypes[i], key)) {
	                            continue enumeration;
	                        }
	                    }
	                    ret.push(key);
	                }
	            }
	            return ret;
	        };
	    }

	})();

	var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	function isClass(fn) {
	    try {
	        if (typeof fn === "function") {
	            var keys = es5.names(fn.prototype);

	            var hasMethods = es5.isES5 && keys.length > 1;
	            var hasMethodsOtherThanConstructor = keys.length > 0 &&
	                !(keys.length === 1 && keys[0] === "constructor");
	            var hasThisAssignmentAndStaticMethods =
	                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

	            if (hasMethods || hasMethodsOtherThanConstructor ||
	                hasThisAssignmentAndStaticMethods) {
	                return true;
	            }
	        }
	        return false;
	    } catch (e) {
	        return false;
	    }
	}

	function toFastProperties(obj) {
	    /*jshint -W027,-W055,-W031*/
	    function f() {}
	    f.prototype = obj;
	    var l = 8;
	    while (l--) new f();
	    return obj;
	    eval(obj);
	}

	var rident = /^[a-z$_][a-z$_0-9]*$/i;
	function isIdentifier(str) {
	    return rident.test(str);
	}

	function filledRange(count, prefix, suffix) {
	    var ret = new Array(count);
	    for(var i = 0; i < count; ++i) {
	        ret[i] = prefix + i + suffix;
	    }
	    return ret;
	}

	function safeToString(obj) {
	    try {
	        return obj + "";
	    } catch (e) {
	        return "[no string representation]";
	    }
	}

	function markAsOriginatingFromRejection(e) {
	    try {
	        notEnumerableProp(e, "isOperational", true);
	    }
	    catch(ignore) {}
	}

	function originatesFromRejection(e) {
	    if (e == null) return false;
	    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
	        e["isOperational"] === true);
	}

	function canAttachTrace(obj) {
	    return obj instanceof Error && es5.propertyIsWritable(obj, "stack");
	}

	var ensureErrorObject = (function() {
	    if (!("stack" in new Error())) {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            try {throw new Error(safeToString(value));}
	            catch(err) {return err;}
	        };
	    } else {
	        return function(value) {
	            if (canAttachTrace(value)) return value;
	            return new Error(safeToString(value));
	        };
	    }
	})();

	function classString(obj) {
	    return {}.toString.call(obj);
	}

	function copyDescriptors(from, to, filter) {
	    var keys = es5.names(from);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        if (filter(key)) {
	            try {
	                es5.defineProperty(to, key, es5.getDescriptor(from, key));
	            } catch (ignore) {}
	        }
	    }
	}

	var ret = {
	    isClass: isClass,
	    isIdentifier: isIdentifier,
	    inheritedDataKeys: inheritedDataKeys,
	    getDataPropertyOrDefault: getDataPropertyOrDefault,
	    thrower: thrower,
	    isArray: es5.isArray,
	    haveGetters: haveGetters,
	    notEnumerableProp: notEnumerableProp,
	    isPrimitive: isPrimitive,
	    isObject: isObject,
	    canEvaluate: canEvaluate,
	    errorObj: errorObj,
	    tryCatch: tryCatch,
	    inherits: inherits,
	    withAppended: withAppended,
	    maybeWrapAsError: maybeWrapAsError,
	    toFastProperties: toFastProperties,
	    filledRange: filledRange,
	    toString: safeToString,
	    canAttachTrace: canAttachTrace,
	    ensureErrorObject: ensureErrorObject,
	    originatesFromRejection: originatesFromRejection,
	    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	    classString: classString,
	    copyDescriptors: copyDescriptors,
	    hasDevTools: typeof chrome !== "undefined" && chrome &&
	                 typeof chrome.loadTimes === "function",
	    isNode: typeof process !== "undefined" &&
	        classString(process).toLowerCase() === "[object process]"
	};
	ret.isRecentNode = ret.isNode && (function() {
	    var version = process.versions.node.split(".").map(Number);
	    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
	})();

	if (ret.isNode) ret.toFastProperties(process);

	try {throw new Error(); } catch (e) {ret.lastLineError = e;}
	module.exports = ret;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var isES5 = (function(){
	    "use strict";
	    return this === undefined;
	})();

	if (isES5) {
	    module.exports = {
	        freeze: Object.freeze,
	        defineProperty: Object.defineProperty,
	        getDescriptor: Object.getOwnPropertyDescriptor,
	        keys: Object.keys,
	        names: Object.getOwnPropertyNames,
	        getPrototypeOf: Object.getPrototypeOf,
	        isArray: Array.isArray,
	        isES5: isES5,
	        propertyIsWritable: function(obj, prop) {
	            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	            return !!(!descriptor || descriptor.writable || descriptor.set);
	        }
	    };
	} else {
	    var has = {}.hasOwnProperty;
	    var str = {}.toString;
	    var proto = {}.constructor.prototype;

	    var ObjectKeys = function (o) {
	        var ret = [];
	        for (var key in o) {
	            if (has.call(o, key)) {
	                ret.push(key);
	            }
	        }
	        return ret;
	    };

	    var ObjectGetDescriptor = function(o, key) {
	        return {value: o[key]};
	    };

	    var ObjectDefineProperty = function (o, key, desc) {
	        o[key] = desc.value;
	        return o;
	    };

	    var ObjectFreeze = function (obj) {
	        return obj;
	    };

	    var ObjectGetPrototypeOf = function (obj) {
	        try {
	            return Object(obj).constructor.prototype;
	        }
	        catch (e) {
	            return proto;
	        }
	    };

	    var ArrayIsArray = function (obj) {
	        try {
	            return str.call(obj) === "[object Array]";
	        }
	        catch(e) {
	            return false;
	        }
	    };

	    module.exports = {
	        isArray: ArrayIsArray,
	        keys: ObjectKeys,
	        names: ObjectKeys,
	        defineProperty: ObjectDefineProperty,
	        getDescriptor: ObjectGetDescriptor,
	        freeze: ObjectFreeze,
	        getPrototypeOf: ObjectGetPrototypeOf,
	        isES5: isES5,
	        propertyIsWritable: function() {
	            return true;
	        }
	    };
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var firstLineError;
	try {throw new Error(); } catch (e) {firstLineError = e;}
	var schedule = __webpack_require__(7);
	var Queue = __webpack_require__(8);
	var util = __webpack_require__(4);

	function Async() {
	    this._isTickUsed = false;
	    this._lateQueue = new Queue(16);
	    this._normalQueue = new Queue(16);
	    this._trampolineEnabled = true;
	    var self = this;
	    this.drainQueues = function () {
	        self._drainQueues();
	    };
	    this._schedule =
	        schedule.isStatic ? schedule(this.drainQueues) : schedule;
	}

	Async.prototype.disableTrampolineIfNecessary = function() {
	    if (util.hasDevTools) {
	        this._trampolineEnabled = false;
	    }
	};

	Async.prototype.enableTrampoline = function() {
	    if (!this._trampolineEnabled) {
	        this._trampolineEnabled = true;
	        this._schedule = function(fn) {
	            setTimeout(fn, 0);
	        };
	    }
	};

	Async.prototype.haveItemsQueued = function () {
	    return this._normalQueue.length() > 0;
	};

	Async.prototype.throwLater = function(fn, arg) {
	    if (arguments.length === 1) {
	        arg = fn;
	        fn = function () { throw arg; };
	    }
	    if (typeof setTimeout !== "undefined") {
	        setTimeout(function() {
	            fn(arg);
	        }, 0);
	    } else try {
	        this._schedule(function() {
	            fn(arg);
	        });
	    } catch (e) {
	        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
	    }
	};

	function AsyncInvokeLater(fn, receiver, arg) {
	    this._lateQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncInvoke(fn, receiver, arg) {
	    this._normalQueue.push(fn, receiver, arg);
	    this._queueTick();
	}

	function AsyncSettlePromises(promise) {
	    this._normalQueue._pushOne(promise);
	    this._queueTick();
	}

	if (!util.hasDevTools) {
	    Async.prototype.invokeLater = AsyncInvokeLater;
	    Async.prototype.invoke = AsyncInvoke;
	    Async.prototype.settlePromises = AsyncSettlePromises;
	} else {
	    if (schedule.isStatic) {
	        schedule = function(fn) { setTimeout(fn, 0); };
	    }
	    Async.prototype.invokeLater = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvokeLater.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                setTimeout(function() {
	                    fn.call(receiver, arg);
	                }, 100);
	            });
	        }
	    };

	    Async.prototype.invoke = function (fn, receiver, arg) {
	        if (this._trampolineEnabled) {
	            AsyncInvoke.call(this, fn, receiver, arg);
	        } else {
	            this._schedule(function() {
	                fn.call(receiver, arg);
	            });
	        }
	    };

	    Async.prototype.settlePromises = function(promise) {
	        if (this._trampolineEnabled) {
	            AsyncSettlePromises.call(this, promise);
	        } else {
	            this._schedule(function() {
	                promise._settlePromises();
	            });
	        }
	    };
	}

	Async.prototype.invokeFirst = function (fn, receiver, arg) {
	    this._normalQueue.unshift(fn, receiver, arg);
	    this._queueTick();
	};

	Async.prototype._drainQueue = function(queue) {
	    while (queue.length() > 0) {
	        var fn = queue.shift();
	        if (typeof fn !== "function") {
	            fn._settlePromises();
	            continue;
	        }
	        var receiver = queue.shift();
	        var arg = queue.shift();
	        fn.call(receiver, arg);
	    }
	};

	Async.prototype._drainQueues = function () {
	    this._drainQueue(this._normalQueue);
	    this._reset();
	    this._drainQueue(this._lateQueue);
	};

	Async.prototype._queueTick = function () {
	    if (!this._isTickUsed) {
	        this._isTickUsed = true;
	        this._schedule(this.drainQueues);
	    }
	};

	Async.prototype._reset = function () {
	    this._isTickUsed = false;
	};

	module.exports = new Async();
	module.exports.firstLineError = firstLineError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var schedule;
	var util = __webpack_require__(4);
	var noAsyncScheduler = function() {
	    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/m3OTXk\u000a");
	};
	if (util.isNode && typeof MutationObserver === "undefined") {
	    var GlobalSetImmediate = global.setImmediate;
	    var ProcessNextTick = process.nextTick;
	    schedule = util.isRecentNode
	                ? function(fn) { GlobalSetImmediate.call(global, fn); }
	                : function(fn) { ProcessNextTick.call(process, fn); };
	} else if ((typeof MutationObserver !== "undefined") &&
	          !(typeof window !== "undefined" &&
	            window.navigator &&
	            window.navigator.standalone)) {
	    schedule = function(fn) {
	        var div = document.createElement("div");
	        var observer = new MutationObserver(fn);
	        observer.observe(div, {attributes: true});
	        return function() { div.classList.toggle("foo"); };
	    };
	    schedule.isStatic = true;
	} else if (typeof setImmediate !== "undefined") {
	    schedule = function (fn) {
	        setImmediate(fn);
	    };
	} else if (typeof setTimeout !== "undefined") {
	    schedule = function (fn) {
	        setTimeout(fn, 0);
	    };
	} else {
	    schedule = noAsyncScheduler;
	}
	module.exports = schedule;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	function arrayMove(src, srcIndex, dst, dstIndex, len) {
	    for (var j = 0; j < len; ++j) {
	        dst[j + dstIndex] = src[j + srcIndex];
	        src[j + srcIndex] = void 0;
	    }
	}

	function Queue(capacity) {
	    this._capacity = capacity;
	    this._length = 0;
	    this._front = 0;
	}

	Queue.prototype._willBeOverCapacity = function (size) {
	    return this._capacity < size;
	};

	Queue.prototype._pushOne = function (arg) {
	    var length = this.length();
	    this._checkCapacity(length + 1);
	    var i = (this._front + length) & (this._capacity - 1);
	    this[i] = arg;
	    this._length = length + 1;
	};

	Queue.prototype._unshiftOne = function(value) {
	    var capacity = this._capacity;
	    this._checkCapacity(this.length() + 1);
	    var front = this._front;
	    var i = (((( front - 1 ) &
	                    ( capacity - 1) ) ^ capacity ) - capacity );
	    this[i] = value;
	    this._front = i;
	    this._length = this.length() + 1;
	};

	Queue.prototype.unshift = function(fn, receiver, arg) {
	    this._unshiftOne(arg);
	    this._unshiftOne(receiver);
	    this._unshiftOne(fn);
	};

	Queue.prototype.push = function (fn, receiver, arg) {
	    var length = this.length() + 3;
	    if (this._willBeOverCapacity(length)) {
	        this._pushOne(fn);
	        this._pushOne(receiver);
	        this._pushOne(arg);
	        return;
	    }
	    var j = this._front + length - 3;
	    this._checkCapacity(length);
	    var wrapMask = this._capacity - 1;
	    this[(j + 0) & wrapMask] = fn;
	    this[(j + 1) & wrapMask] = receiver;
	    this[(j + 2) & wrapMask] = arg;
	    this._length = length;
	};

	Queue.prototype.shift = function () {
	    var front = this._front,
	        ret = this[front];

	    this[front] = undefined;
	    this._front = (front + 1) & (this._capacity - 1);
	    this._length--;
	    return ret;
	};

	Queue.prototype.length = function () {
	    return this._length;
	};

	Queue.prototype._checkCapacity = function (size) {
	    if (this._capacity < size) {
	        this._resizeTo(this._capacity << 1);
	    }
	};

	Queue.prototype._resizeTo = function (capacity) {
	    var oldCapacity = this._capacity;
	    this._capacity = capacity;
	    var front = this._front;
	    var length = this._length;
	    var moveItemsCount = (front + length) & (oldCapacity - 1);
	    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	};

	module.exports = Queue;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var es5 = __webpack_require__(5);
	var Objectfreeze = es5.freeze;
	var util = __webpack_require__(4);
	var inherits = util.inherits;
	var notEnumerableProp = util.notEnumerableProp;

	function subError(nameProperty, defaultMessage) {
	    function SubError(message) {
	        if (!(this instanceof SubError)) return new SubError(message);
	        notEnumerableProp(this, "message",
	            typeof message === "string" ? message : defaultMessage);
	        notEnumerableProp(this, "name", nameProperty);
	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, this.constructor);
	        } else {
	            Error.call(this);
	        }
	    }
	    inherits(SubError, Error);
	    return SubError;
	}

	var _TypeError, _RangeError;
	var Warning = subError("Warning", "warning");
	var CancellationError = subError("CancellationError", "cancellation error");
	var TimeoutError = subError("TimeoutError", "timeout error");
	var AggregateError = subError("AggregateError", "aggregate error");
	try {
	    _TypeError = TypeError;
	    _RangeError = RangeError;
	} catch(e) {
	    _TypeError = subError("TypeError", "type error");
	    _RangeError = subError("RangeError", "range error");
	}

	var methods = ("join pop push shift unshift slice filter forEach some " +
	    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

	for (var i = 0; i < methods.length; ++i) {
	    if (typeof Array.prototype[methods[i]] === "function") {
	        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	    }
	}

	es5.defineProperty(AggregateError.prototype, "length", {
	    value: 0,
	    configurable: false,
	    writable: true,
	    enumerable: true
	});
	AggregateError.prototype["isOperational"] = true;
	var level = 0;
	AggregateError.prototype.toString = function() {
	    var indent = Array(level * 4 + 1).join(" ");
	    var ret = "\n" + indent + "AggregateError of:" + "\n";
	    level++;
	    indent = Array(level * 4 + 1).join(" ");
	    for (var i = 0; i < this.length; ++i) {
	        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	        var lines = str.split("\n");
	        for (var j = 0; j < lines.length; ++j) {
	            lines[j] = indent + lines[j];
	        }
	        str = lines.join("\n");
	        ret += str + "\n";
	    }
	    level--;
	    return ret;
	};

	function OperationalError(message) {
	    if (!(this instanceof OperationalError))
	        return new OperationalError(message);
	    notEnumerableProp(this, "name", "OperationalError");
	    notEnumerableProp(this, "message", message);
	    this.cause = message;
	    this["isOperational"] = true;

	    if (message instanceof Error) {
	        notEnumerableProp(this, "message", message.message);
	        notEnumerableProp(this, "stack", message.stack);
	    } else if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, this.constructor);
	    }

	}
	inherits(OperationalError, Error);

	var errorTypes = Error["__BluebirdErrorTypes__"];
	if (!errorTypes) {
	    errorTypes = Objectfreeze({
	        CancellationError: CancellationError,
	        TimeoutError: TimeoutError,
	        OperationalError: OperationalError,
	        RejectionError: OperationalError,
	        AggregateError: AggregateError
	    });
	    notEnumerableProp(Error, "__BluebirdErrorTypes__", errorTypes);
	}

	module.exports = {
	    Error: Error,
	    TypeError: _TypeError,
	    RangeError: _RangeError,
	    CancellationError: errorTypes.CancellationError,
	    OperationalError: errorTypes.OperationalError,
	    TimeoutError: errorTypes.TimeoutError,
	    AggregateError: errorTypes.AggregateError,
	    Warning: Warning
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(4);
	var errorObj = util.errorObj;
	var isObject = util.isObject;

	function tryConvertToPromise(obj, context) {
	    if (isObject(obj)) {
	        if (obj instanceof Promise) {
	            return obj;
	        }
	        else if (isAnyBluebirdPromise(obj)) {
	            var ret = new Promise(INTERNAL);
	            obj._then(
	                ret._fulfillUnchecked,
	                ret._rejectUncheckedCheckError,
	                ret._progressUnchecked,
	                ret,
	                null
	            );
	            return ret;
	        }
	        var then = util.tryCatch(getThen)(obj);
	        if (then === errorObj) {
	            if (context) context._pushContext();
	            var ret = Promise.reject(then.e);
	            if (context) context._popContext();
	            return ret;
	        } else if (typeof then === "function") {
	            return doThenable(obj, then, context);
	        }
	    }
	    return obj;
	}

	function getThen(obj) {
	    return obj.then;
	}

	var hasProp = {}.hasOwnProperty;
	function isAnyBluebirdPromise(obj) {
	    return hasProp.call(obj, "_promise0");
	}

	function doThenable(x, then, context) {
	    var promise = new Promise(INTERNAL);
	    var ret = promise;
	    if (context) context._pushContext();
	    promise._captureStackTrace();
	    if (context) context._popContext();
	    var synchronous = true;
	    var result = util.tryCatch(then).call(x,
	                                        resolveFromThenable,
	                                        rejectFromThenable,
	                                        progressFromThenable);
	    synchronous = false;
	    if (promise && result === errorObj) {
	        promise._rejectCallback(result.e, true, true);
	        promise = null;
	    }

	    function resolveFromThenable(value) {
	        if (!promise) return;
	        promise._resolveCallback(value);
	        promise = null;
	    }

	    function rejectFromThenable(reason) {
	        if (!promise) return;
	        promise._rejectCallback(reason, synchronous, true);
	        promise = null;
	    }

	    function progressFromThenable(value) {
	        if (!promise) return;
	        if (typeof promise._progress === "function") {
	            promise._progress(value);
	        }
	    }
	    return ret;
	}

	return tryConvertToPromise;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise,
	    apiRejection) {
	var util = __webpack_require__(4);
	var isArray = util.isArray;

	function toResolutionValue(val) {
	    switch(val) {
	    case -2: return [];
	    case -3: return {};
	    }
	}

	function PromiseArray(values) {
	    var promise = this._promise = new Promise(INTERNAL);
	    var parent;
	    if (values instanceof Promise) {
	        parent = values;
	        promise._propagateFrom(parent, 1 | 4);
	    }
	    this._values = values;
	    this._length = 0;
	    this._totalResolved = 0;
	    this._init(undefined, -2);
	}
	PromiseArray.prototype.length = function () {
	    return this._length;
	};

	PromiseArray.prototype.promise = function () {
	    return this._promise;
	};

	PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	    var values = tryConvertToPromise(this._values, this._promise);
	    if (values instanceof Promise) {
	        values = values._target();
	        this._values = values;
	        if (values._isFulfilled()) {
	            values = values._value();
	            if (!isArray(values)) {
	                var err = new Promise.TypeError("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
	                this.__hardReject__(err);
	                return;
	            }
	        } else if (values._isPending()) {
	            values._then(
	                init,
	                this._reject,
	                undefined,
	                this,
	                resolveValueIfEmpty
	           );
	            return;
	        } else {
	            this._reject(values._reason());
	            return;
	        }
	    } else if (!isArray(values)) {
	        this._promise._reject(apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a")._reason());
	        return;
	    }

	    if (values.length === 0) {
	        if (resolveValueIfEmpty === -5) {
	            this._resolveEmptyArray();
	        }
	        else {
	            this._resolve(toResolutionValue(resolveValueIfEmpty));
	        }
	        return;
	    }
	    var len = this.getActualLength(values.length);
	    this._length = len;
	    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	    var promise = this._promise;
	    for (var i = 0; i < len; ++i) {
	        var isResolved = this._isResolved();
	        var maybePromise = tryConvertToPromise(values[i], promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (isResolved) {
	                maybePromise._ignoreRejections();
	            } else if (maybePromise._isPending()) {
	                maybePromise._proxyPromiseArray(this, i);
	            } else if (maybePromise._isFulfilled()) {
	                this._promiseFulfilled(maybePromise._value(), i);
	            } else {
	                this._promiseRejected(maybePromise._reason(), i);
	            }
	        } else if (!isResolved) {
	            this._promiseFulfilled(maybePromise, i);
	        }
	    }
	};

	PromiseArray.prototype._isResolved = function () {
	    return this._values === null;
	};

	PromiseArray.prototype._resolve = function (value) {
	    this._values = null;
	    this._promise._fulfill(value);
	};

	PromiseArray.prototype.__hardReject__ =
	PromiseArray.prototype._reject = function (reason) {
	    this._values = null;
	    this._promise._rejectCallback(reason, false, true);
	};

	PromiseArray.prototype._promiseProgressed = function (progressValue, index) {
	    this._promise._progress({
	        index: index,
	        value: progressValue
	    });
	};


	PromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};

	PromiseArray.prototype._promiseRejected = function (reason, index) {
	    this._totalResolved++;
	    this._reject(reason);
	};

	PromiseArray.prototype.shouldCopyValues = function () {
	    return true;
	};

	PromiseArray.prototype.getActualLength = function (len) {
	    return len;
	};

	return PromiseArray;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function() {
	var async = __webpack_require__(6);
	var util = __webpack_require__(4);
	var bluebirdFramePattern =
	    /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/;
	var stackFramePattern = null;
	var formatStack = null;
	var indentStackFrames = false;
	var warn;

	function CapturedTrace(parent) {
	    this._parent = parent;
	    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	    captureStackTrace(this, CapturedTrace);
	    if (length > 32) this.uncycle();
	}
	util.inherits(CapturedTrace, Error);

	CapturedTrace.prototype.uncycle = function() {
	    var length = this._length;
	    if (length < 2) return;
	    var nodes = [];
	    var stackToIndex = {};

	    for (var i = 0, node = this; node !== undefined; ++i) {
	        nodes.push(node);
	        node = node._parent;
	    }
	    length = this._length = i;
	    for (var i = length - 1; i >= 0; --i) {
	        var stack = nodes[i].stack;
	        if (stackToIndex[stack] === undefined) {
	            stackToIndex[stack] = i;
	        }
	    }
	    for (var i = 0; i < length; ++i) {
	        var currentStack = nodes[i].stack;
	        var index = stackToIndex[currentStack];
	        if (index !== undefined && index !== i) {
	            if (index > 0) {
	                nodes[index - 1]._parent = undefined;
	                nodes[index - 1]._length = 1;
	            }
	            nodes[i]._parent = undefined;
	            nodes[i]._length = 1;
	            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

	            if (index < length - 1) {
	                cycleEdgeNode._parent = nodes[index + 1];
	                cycleEdgeNode._parent.uncycle();
	                cycleEdgeNode._length =
	                    cycleEdgeNode._parent._length + 1;
	            } else {
	                cycleEdgeNode._parent = undefined;
	                cycleEdgeNode._length = 1;
	            }
	            var currentChildLength = cycleEdgeNode._length + 1;
	            for (var j = i - 2; j >= 0; --j) {
	                nodes[j]._length = currentChildLength;
	                currentChildLength++;
	            }
	            return;
	        }
	    }
	};

	CapturedTrace.prototype.parent = function() {
	    return this._parent;
	};

	CapturedTrace.prototype.hasParent = function() {
	    return this._parent !== undefined;
	};

	CapturedTrace.prototype.attachExtraTrace = function(error) {
	    if (error.__stackCleaned__) return;
	    this.uncycle();
	    var parsed = CapturedTrace.parseStackAndMessage(error);
	    var message = parsed.message;
	    var stacks = [parsed.stack];

	    var trace = this;
	    while (trace !== undefined) {
	        stacks.push(cleanStack(trace.stack.split("\n")));
	        trace = trace._parent;
	    }
	    removeCommonRoots(stacks);
	    removeDuplicateOrEmptyJumps(stacks);
	    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	    util.notEnumerableProp(error, "__stackCleaned__", true);
	};

	function reconstructStack(message, stacks) {
	    for (var i = 0; i < stacks.length - 1; ++i) {
	        stacks[i].push("From previous event:");
	        stacks[i] = stacks[i].join("\n");
	    }
	    if (i < stacks.length) {
	        stacks[i] = stacks[i].join("\n");
	    }
	    return message + "\n" + stacks.join("\n");
	}

	function removeDuplicateOrEmptyJumps(stacks) {
	    for (var i = 0; i < stacks.length; ++i) {
	        if (stacks[i].length === 0 ||
	            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
	            stacks.splice(i, 1);
	            i--;
	        }
	    }
	}

	function removeCommonRoots(stacks) {
	    var current = stacks[0];
	    for (var i = 1; i < stacks.length; ++i) {
	        var prev = stacks[i];
	        var currentLastIndex = current.length - 1;
	        var currentLastLine = current[currentLastIndex];
	        var commonRootMeetPoint = -1;

	        for (var j = prev.length - 1; j >= 0; --j) {
	            if (prev[j] === currentLastLine) {
	                commonRootMeetPoint = j;
	                break;
	            }
	        }

	        for (var j = commonRootMeetPoint; j >= 0; --j) {
	            var line = prev[j];
	            if (current[currentLastIndex] === line) {
	                current.pop();
	                currentLastIndex--;
	            } else {
	                break;
	            }
	        }
	        current = prev;
	    }
	}

	function cleanStack(stack) {
	    var ret = [];
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        var isTraceLine = stackFramePattern.test(line) ||
	            "    (No stack trace)" === line;
	        var isInternalFrame = isTraceLine && shouldIgnore(line);
	        if (isTraceLine && !isInternalFrame) {
	            if (indentStackFrames && line.charAt(0) !== " ") {
	                line = "    " + line;
	            }
	            ret.push(line);
	        }
	    }
	    return ret;
	}

	function stackFramesAsArray(error) {
	    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	    for (var i = 0; i < stack.length; ++i) {
	        var line = stack[i];
	        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	            break;
	        }
	    }
	    if (i > 0) {
	        stack = stack.slice(i);
	    }
	    return stack;
	}

	CapturedTrace.parseStackAndMessage = function(error) {
	    var stack = error.stack;
	    var message = error.toString();
	    stack = typeof stack === "string" && stack.length > 0
	                ? stackFramesAsArray(error) : ["    (No stack trace)"];
	    return {
	        message: message,
	        stack: cleanStack(stack)
	    };
	};

	CapturedTrace.formatAndLogError = function(error, title) {
	    if (typeof console !== "undefined") {
	        var message;
	        if (typeof error === "object" || typeof error === "function") {
	            var stack = error.stack;
	            message = title + formatStack(stack, error);
	        } else {
	            message = title + String(error);
	        }
	        if (typeof warn === "function") {
	            warn(message);
	        } else if (typeof console.log === "function" ||
	            typeof console.log === "object") {
	            console.log(message);
	        }
	    }
	};

	CapturedTrace.unhandledRejection = function (reason) {
	    CapturedTrace.formatAndLogError(reason, "^--- With additional stack trace: ");
	};

	CapturedTrace.isSupported = function () {
	    return typeof captureStackTrace === "function";
	};

	CapturedTrace.fireRejectionEvent =
	function(name, localHandler, reason, promise) {
	    var localEventFired = false;
	    try {
	        if (typeof localHandler === "function") {
	            localEventFired = true;
	            if (name === "rejectionHandled") {
	                localHandler(promise);
	            } else {
	                localHandler(reason, promise);
	            }
	        }
	    } catch (e) {
	        async.throwLater(e);
	    }

	    var globalEventFired = false;
	    try {
	        globalEventFired = fireGlobalEvent(name, reason, promise);
	    } catch (e) {
	        globalEventFired = true;
	        async.throwLater(e);
	    }

	    var domEventFired = false;
	    if (fireDomEvent) {
	        try {
	            domEventFired = fireDomEvent(name.toLowerCase(), {
	                reason: reason,
	                promise: promise
	            });
	        } catch (e) {
	            domEventFired = true;
	            async.throwLater(e);
	        }
	    }

	    if (!globalEventFired && !localEventFired && !domEventFired &&
	        name === "unhandledRejection") {
	        CapturedTrace.formatAndLogError(reason, "Unhandled rejection ");
	    }
	};

	function formatNonError(obj) {
	    var str;
	    if (typeof obj === "function") {
	        str = "[function " +
	            (obj.name || "anonymous") +
	            "]";
	    } else {
	        str = obj.toString();
	        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	        if (ruselessToString.test(str)) {
	            try {
	                var newStr = JSON.stringify(obj);
	                str = newStr;
	            }
	            catch(e) {

	            }
	        }
	        if (str.length === 0) {
	            str = "(empty array)";
	        }
	    }
	    return ("(<" + snip(str) + ">, no stack trace)");
	}

	function snip(str) {
	    var maxChars = 41;
	    if (str.length < maxChars) {
	        return str;
	    }
	    return str.substr(0, maxChars - 3) + "...";
	}

	var shouldIgnore = function() { return false; };
	var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	function parseLineInfo(line) {
	    var matches = line.match(parseLineInfoRegex);
	    if (matches) {
	        return {
	            fileName: matches[1],
	            line: parseInt(matches[2], 10)
	        };
	    }
	}
	CapturedTrace.setBounds = function(firstLineError, lastLineError) {
	    if (!CapturedTrace.isSupported()) return;
	    var firstStackLines = firstLineError.stack.split("\n");
	    var lastStackLines = lastLineError.stack.split("\n");
	    var firstIndex = -1;
	    var lastIndex = -1;
	    var firstFileName;
	    var lastFileName;
	    for (var i = 0; i < firstStackLines.length; ++i) {
	        var result = parseLineInfo(firstStackLines[i]);
	        if (result) {
	            firstFileName = result.fileName;
	            firstIndex = result.line;
	            break;
	        }
	    }
	    for (var i = 0; i < lastStackLines.length; ++i) {
	        var result = parseLineInfo(lastStackLines[i]);
	        if (result) {
	            lastFileName = result.fileName;
	            lastIndex = result.line;
	            break;
	        }
	    }
	    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
	        firstFileName !== lastFileName || firstIndex >= lastIndex) {
	        return;
	    }

	    shouldIgnore = function(line) {
	        if (bluebirdFramePattern.test(line)) return true;
	        var info = parseLineInfo(line);
	        if (info) {
	            if (info.fileName === firstFileName &&
	                (firstIndex <= info.line && info.line <= lastIndex)) {
	                return true;
	            }
	        }
	        return false;
	    };
	};

	var captureStackTrace = (function stackDetection() {
	    var v8stackFramePattern = /^\s*at\s*/;
	    var v8stackFormatter = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if (error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    if (typeof Error.stackTraceLimit === "number" &&
	        typeof Error.captureStackTrace === "function") {
	        Error.stackTraceLimit = Error.stackTraceLimit + 6;
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        var captureStackTrace = Error.captureStackTrace;

	        shouldIgnore = function(line) {
	            return bluebirdFramePattern.test(line);
	        };
	        return function(receiver, ignoreUntil) {
	            Error.stackTraceLimit = Error.stackTraceLimit + 6;
	            captureStackTrace(receiver, ignoreUntil);
	            Error.stackTraceLimit = Error.stackTraceLimit - 6;
	        };
	    }
	    var err = new Error();

	    if (typeof err.stack === "string" &&
	        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	        stackFramePattern = /@/;
	        formatStack = v8stackFormatter;
	        indentStackFrames = true;
	        return function captureStackTrace(o) {
	            o.stack = new Error().stack;
	        };
	    }

	    var hasStackAfterThrow;
	    try { throw new Error(); }
	    catch(e) {
	        hasStackAfterThrow = ("stack" in e);
	    }
	    if (!("stack" in err) && hasStackAfterThrow &&
	        typeof Error.stackTraceLimit === "number") {
	        stackFramePattern = v8stackFramePattern;
	        formatStack = v8stackFormatter;
	        return function captureStackTrace(o) {
	            Error.stackTraceLimit = Error.stackTraceLimit + 6;
	            try { throw new Error(); }
	            catch(e) { o.stack = e.stack; }
	            Error.stackTraceLimit = Error.stackTraceLimit - 6;
	        };
	    }

	    formatStack = function(stack, error) {
	        if (typeof stack === "string") return stack;

	        if ((typeof error === "object" ||
	            typeof error === "function") &&
	            error.name !== undefined &&
	            error.message !== undefined) {
	            return error.toString();
	        }
	        return formatNonError(error);
	    };

	    return null;

	})([]);

	var fireDomEvent;
	var fireGlobalEvent = (function() {
	    if (util.isNode) {
	        return function(name, reason, promise) {
	            if (name === "rejectionHandled") {
	                return process.emit(name, promise);
	            } else {
	                return process.emit(name, reason, promise);
	            }
	        };
	    } else {
	        var customEventWorks = false;
	        var anyEventWorks = true;
	        try {
	            var ev = new self.CustomEvent("test");
	            customEventWorks = ev instanceof CustomEvent;
	        } catch (e) {}
	        if (!customEventWorks) {
	            try {
	                var event = document.createEvent("CustomEvent");
	                event.initCustomEvent("testingtheevent", false, true, {});
	                self.dispatchEvent(event);
	            } catch (e) {
	                anyEventWorks = false;
	            }
	        }
	        if (anyEventWorks) {
	            fireDomEvent = function(type, detail) {
	                var event;
	                if (customEventWorks) {
	                    event = new self.CustomEvent(type, {
	                        detail: detail,
	                        bubbles: false,
	                        cancelable: true
	                    });
	                } else if (self.dispatchEvent) {
	                    event = document.createEvent("CustomEvent");
	                    event.initCustomEvent(type, false, true, detail);
	                }

	                return event ? !self.dispatchEvent(event) : false;
	            };
	        }

	        var toWindowMethodNameMap = {};
	        toWindowMethodNameMap["unhandledRejection"] = ("on" +
	            "unhandledRejection").toLowerCase();
	        toWindowMethodNameMap["rejectionHandled"] = ("on" +
	            "rejectionHandled").toLowerCase();

	        return function(name, reason, promise) {
	            var methodName = toWindowMethodNameMap[name];
	            var method = self[methodName];
	            if (!method) return false;
	            if (name === "rejectionHandled") {
	                method.call(self, promise);
	            } else {
	                method.call(self, reason, promise);
	            }
	            return true;
	        };
	    }
	})();

	if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	    warn = function (message) {
	        console.warn(message);
	    };
	    if (util.isNode && process.stderr.isTTY) {
	        warn = function(message) {
	            process.stderr.write("\u001b[31m" + message + "\u001b[39m\n");
	        };
	    } else if (!util.isNode && typeof (new Error().stack) === "string") {
	        warn = function(message) {
	            console.warn("%c" + message, "color: red");
	        };
	    }
	}

	return CapturedTrace;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, CapturedTrace) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(6);
	var Warning = __webpack_require__(9).Warning;
	var util = __webpack_require__(4);
	var canAttachTrace = util.canAttachTrace;
	var unhandledRejectionHandled;
	var possiblyUnhandledRejection;
	var debugging = false || (util.isNode &&
	                    (!!process.env["BLUEBIRD_DEBUG"] ||
	                     process.env["NODE_ENV"] === "development"));

	if (util.isNode && process.env["BLUEBIRD_DEBUG"] == 0) debugging = false;

	if (debugging) {
	    async.disableTrampolineIfNecessary();
	}

	Promise.prototype._ignoreRejections = function() {
	    this._unsetRejectionIsUnhandled();
	    this._bitField = this._bitField | 16777216;
	};

	Promise.prototype._ensurePossibleRejectionHandled = function () {
	    if ((this._bitField & 16777216) !== 0) return;
	    this._setRejectionIsUnhandled();
	    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	};

	Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	    CapturedTrace.fireRejectionEvent("rejectionHandled",
	                                  unhandledRejectionHandled, undefined, this);
	};

	Promise.prototype._notifyUnhandledRejection = function () {
	    if (this._isRejectionUnhandled()) {
	        var reason = this._getCarriedStackTrace() || this._settledValue;
	        this._setUnhandledRejectionIsNotified();
	        CapturedTrace.fireRejectionEvent("unhandledRejection",
	                                      possiblyUnhandledRejection, reason, this);
	    }
	};

	Promise.prototype._setUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField | 524288;
	};

	Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	    this._bitField = this._bitField & (~524288);
	};

	Promise.prototype._isUnhandledRejectionNotified = function () {
	    return (this._bitField & 524288) > 0;
	};

	Promise.prototype._setRejectionIsUnhandled = function () {
	    this._bitField = this._bitField | 2097152;
	};

	Promise.prototype._unsetRejectionIsUnhandled = function () {
	    this._bitField = this._bitField & (~2097152);
	    if (this._isUnhandledRejectionNotified()) {
	        this._unsetUnhandledRejectionIsNotified();
	        this._notifyUnhandledRejectionIsHandled();
	    }
	};

	Promise.prototype._isRejectionUnhandled = function () {
	    return (this._bitField & 2097152) > 0;
	};

	Promise.prototype._setCarriedStackTrace = function (capturedTrace) {
	    this._bitField = this._bitField | 1048576;
	    this._fulfillmentHandler0 = capturedTrace;
	};

	Promise.prototype._isCarryingStackTrace = function () {
	    return (this._bitField & 1048576) > 0;
	};

	Promise.prototype._getCarriedStackTrace = function () {
	    return this._isCarryingStackTrace()
	        ? this._fulfillmentHandler0
	        : undefined;
	};

	Promise.prototype._captureStackTrace = function () {
	    if (debugging) {
	        this._trace = new CapturedTrace(this._peekContext());
	    }
	    return this;
	};

	Promise.prototype._attachExtraTrace = function (error, ignoreSelf) {
	    if (debugging && canAttachTrace(error)) {
	        var trace = this._trace;
	        if (trace !== undefined) {
	            if (ignoreSelf) trace = trace._parent;
	        }
	        if (trace !== undefined) {
	            trace.attachExtraTrace(error);
	        } else if (!error.__stackCleaned__) {
	            var parsed = CapturedTrace.parseStackAndMessage(error);
	            util.notEnumerableProp(error, "stack",
	                parsed.message + "\n" + parsed.stack.join("\n"));
	            util.notEnumerableProp(error, "__stackCleaned__", true);
	        }
	    }
	};

	Promise.prototype._warn = function(message) {
	    var warning = new Warning(message);
	    var ctx = this._peekContext();
	    if (ctx) {
	        ctx.attachExtraTrace(warning);
	    } else {
	        var parsed = CapturedTrace.parseStackAndMessage(warning);
	        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	    }
	    CapturedTrace.formatAndLogError(warning, "");
	};

	Promise.onPossiblyUnhandledRejection = function (fn) {
	    var domain = getDomain();
	    possiblyUnhandledRejection =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.onUnhandledRejectionHandled = function (fn) {
	    var domain = getDomain();
	    unhandledRejectionHandled =
	        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
	                                 : undefined;
	};

	Promise.longStackTraces = function () {
	    if (async.haveItemsQueued() &&
	        debugging === false
	   ) {
	        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/DT1qyG\u000a");
	    }
	    debugging = CapturedTrace.isSupported();
	    if (debugging) {
	        async.disableTrampolineIfNecessary();
	    }
	};

	Promise.hasLongStackTraces = function () {
	    return debugging && CapturedTrace.isSupported();
	};

	if (!CapturedTrace.isSupported()) {
	    Promise.longStackTraces = function(){};
	    debugging = false;
	}

	return function() {
	    return debugging;
	};
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise, CapturedTrace, isDebugging) {
	var contextStack = [];
	function Context() {
	    this._trace = new CapturedTrace(peekContext());
	}
	Context.prototype._pushContext = function () {
	    if (!isDebugging()) return;
	    if (this._trace !== undefined) {
	        contextStack.push(this._trace);
	    }
	};

	Context.prototype._popContext = function () {
	    if (!isDebugging()) return;
	    if (this._trace !== undefined) {
	        contextStack.pop();
	    }
	};

	function createContext() {
	    if (isDebugging()) return new Context();
	}

	function peekContext() {
	    var lastIndex = contextStack.length - 1;
	    if (lastIndex >= 0) {
	        return contextStack[lastIndex];
	    }
	    return undefined;
	}

	Promise.prototype._peekContext = peekContext;
	Promise.prototype._pushContext = Context.prototype._pushContext;
	Promise.prototype._popContext = Context.prototype._popContext;

	return createContext;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(NEXT_FILTER) {
	var util = __webpack_require__(4);
	var errors = __webpack_require__(9);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var keys = __webpack_require__(5).keys;
	var TypeError = errors.TypeError;

	function CatchFilter(instances, callback, promise) {
	    this._instances = instances;
	    this._callback = callback;
	    this._promise = promise;
	}

	function safePredicate(predicate, e) {
	    var safeObject = {};
	    var retfilter = tryCatch(predicate).call(safeObject, e);

	    if (retfilter === errorObj) return retfilter;

	    var safeKeys = keys(safeObject);
	    if (safeKeys.length) {
	        errorObj.e = new TypeError("Catch filter must inherit from Error or be a simple predicate function\u000a\u000a    See http://goo.gl/o84o68\u000a");
	        return errorObj;
	    }
	    return retfilter;
	}

	CatchFilter.prototype.doFilter = function (e) {
	    var cb = this._callback;
	    var promise = this._promise;
	    var boundTo = promise._boundValue();
	    for (var i = 0, len = this._instances.length; i < len; ++i) {
	        var item = this._instances[i];
	        var itemIsErrorType = item === Error ||
	            (item != null && item.prototype instanceof Error);

	        if (itemIsErrorType && e instanceof item) {
	            var ret = tryCatch(cb).call(boundTo, e);
	            if (ret === errorObj) {
	                NEXT_FILTER.e = ret.e;
	                return NEXT_FILTER;
	            }
	            return ret;
	        } else if (typeof item === "function" && !itemIsErrorType) {
	            var shouldHandle = safePredicate(item, e);
	            if (shouldHandle === errorObj) {
	                e = errorObj.e;
	                break;
	            } else if (shouldHandle) {
	                var ret = tryCatch(cb).call(boundTo, e);
	                if (ret === errorObj) {
	                    NEXT_FILTER.e = ret.e;
	                    return NEXT_FILTER;
	                }
	                return ret;
	            }
	        }
	    }
	    NEXT_FILTER.e = e;
	    return NEXT_FILTER;
	};

	return CatchFilter;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(4);
	var maybeWrapAsError = util.maybeWrapAsError;
	var errors = __webpack_require__(9);
	var TimeoutError = errors.TimeoutError;
	var OperationalError = errors.OperationalError;
	var haveGetters = util.haveGetters;
	var es5 = __webpack_require__(5);

	function isUntypedError(obj) {
	    return obj instanceof Error &&
	        es5.getPrototypeOf(obj) === Error.prototype;
	}

	var rErrorKey = /^(?:name|message|stack|cause)$/;
	function wrapAsOperationalError(obj) {
	    var ret;
	    if (isUntypedError(obj)) {
	        ret = new OperationalError(obj);
	        ret.name = obj.name;
	        ret.message = obj.message;
	        ret.stack = obj.stack;
	        var keys = es5.keys(obj);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!rErrorKey.test(key)) {
	                ret[key] = obj[key];
	            }
	        }
	        return ret;
	    }
	    util.markAsOriginatingFromRejection(obj);
	    return obj;
	}

	function nodebackForPromise(promise) {
	    return function(err, value) {
	        if (promise === null) return;

	        if (err) {
	            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	            promise._attachExtraTrace(wrapped);
	            promise._reject(wrapped);
	        } else if (arguments.length > 2) {
	            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	            promise._fulfill(args);
	        } else {
	            promise._fulfill(value);
	        }

	        promise = null;
	    };
	}


	var PromiseResolver;
	if (!haveGetters) {
	    PromiseResolver = function (promise) {
	        this.promise = promise;
	        this.asCallback = nodebackForPromise(promise);
	        this.callback = this.asCallback;
	    };
	}
	else {
	    PromiseResolver = function (promise) {
	        this.promise = promise;
	    };
	}
	if (haveGetters) {
	    var prop = {
	        get: function() {
	            return nodebackForPromise(this.promise);
	        }
	    };
	    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
	    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
	}

	PromiseResolver._nodebackForPromise = nodebackForPromise;

	PromiseResolver.prototype.toString = function () {
	    return "[object PromiseResolver]";
	};

	PromiseResolver.prototype.resolve =
	PromiseResolver.prototype.fulfill = function (value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._resolveCallback(value);
	};

	PromiseResolver.prototype.reject = function (reason) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._rejectCallback(reason);
	};

	PromiseResolver.prototype.progress = function (value) {
	    if (!(this instanceof PromiseResolver)) {
	        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\u000a\u000a    See http://goo.gl/sdkXL9\u000a");
	    }
	    this.promise._progress(value);
	};

	PromiseResolver.prototype.cancel = function (err) {
	    this.promise.cancel(err);
	};

	PromiseResolver.prototype.timeout = function () {
	    this.reject(new TimeoutError("timeout"));
	};

	PromiseResolver.prototype.isResolved = function () {
	    return this.promise.isResolved();
	};

	PromiseResolver.prototype.toJSON = function () {
	    return this.promise.toJSON();
	};

	module.exports = PromiseResolver;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, PromiseArray) {
	var util = __webpack_require__(4);
	var async = __webpack_require__(6);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	Promise.prototype.progressed = function (handler) {
	    return this._then(undefined, undefined, handler, undefined, undefined);
	};

	Promise.prototype._progress = function (progressValue) {
	    if (this._isFollowingOrFulfilledOrRejected()) return;
	    this._target()._progressUnchecked(progressValue);

	};

	Promise.prototype._progressHandlerAt = function (index) {
	    return index === 0
	        ? this._progressHandler0
	        : this[(index << 2) + index - 5 + 2];
	};

	Promise.prototype._doProgressWith = function (progression) {
	    var progressValue = progression.value;
	    var handler = progression.handler;
	    var promise = progression.promise;
	    var receiver = progression.receiver;

	    var ret = tryCatch(handler).call(receiver, progressValue);
	    if (ret === errorObj) {
	        if (ret.e != null &&
	            ret.e.name !== "StopProgressPropagation") {
	            var trace = util.canAttachTrace(ret.e)
	                ? ret.e : new Error(util.toString(ret.e));
	            promise._attachExtraTrace(trace);
	            promise._progress(ret.e);
	        }
	    } else if (ret instanceof Promise) {
	        ret._then(promise._progress, null, null, promise, undefined);
	    } else {
	        promise._progress(ret);
	    }
	};


	Promise.prototype._progressUnchecked = function (progressValue) {
	    var len = this._length();
	    var progress = this._progress;
	    for (var i = 0; i < len; i++) {
	        var handler = this._progressHandlerAt(i);
	        var promise = this._promiseAt(i);
	        if (!(promise instanceof Promise)) {
	            var receiver = this._receiverAt(i);
	            if (typeof handler === "function") {
	                handler.call(receiver, progressValue, promise);
	            } else if (receiver instanceof PromiseArray &&
	                       !receiver._isResolved()) {
	                receiver._promiseProgressed(progressValue, promise);
	            }
	            continue;
	        }

	        if (typeof handler === "function") {
	            async.invoke(this._doProgressWith, this, {
	                handler: handler,
	                promise: promise,
	                receiver: this._receiverAt(i),
	                value: progressValue
	            });
	        } else {
	            async.invoke(progress, promise, progressValue);
	        }
	    }
	};
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(4);
	var tryCatch = util.tryCatch;

	Promise.method = function (fn) {
	    if (typeof fn !== "function") {
	        throw new Promise.TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    return function () {
	        var ret = new Promise(INTERNAL);
	        ret._captureStackTrace();
	        ret._pushContext();
	        var value = tryCatch(fn).apply(this, arguments);
	        ret._popContext();
	        ret._resolveFromSyncValue(value);
	        return ret;
	    };
	};

	Promise.attempt = Promise["try"] = function (fn, args, ctx) {
	    if (typeof fn !== "function") {
	        return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    var ret = new Promise(INTERNAL);
	    ret._captureStackTrace();
	    ret._pushContext();
	    var value = util.isArray(args)
	        ? tryCatch(fn).apply(ctx, args)
	        : tryCatch(fn).call(ctx, args);
	    ret._popContext();
	    ret._resolveFromSyncValue(value);
	    return ret;
	};

	Promise.prototype._resolveFromSyncValue = function (value) {
	    if (value === util.errorObj) {
	        this._rejectCallback(value.e, false, true);
	    } else {
	        this._resolveCallback(value, true);
	    }
	};
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL, tryConvertToPromise) {
	var rejectThis = function(_, e) {
	    this._reject(e);
	};

	var targetRejected = function(e, context) {
	    context.promiseRejectionQueued = true;
	    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	};

	var bindingResolved = function(thisArg, context) {
	    if (this._isPending()) {
	        this._resolveCallback(context.target);
	    }
	};

	var bindingRejected = function(e, context) {
	    if (!context.promiseRejectionQueued) this._reject(e);
	};

	Promise.prototype.bind = function (thisArg) {
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);
	    ret._propagateFrom(this, 1);
	    var target = this._target();

	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        var context = {
	            promiseRejectionQueued: false,
	            promise: ret,
	            target: target,
	            bindingPromise: maybePromise
	        };
	        target._then(INTERNAL, targetRejected, ret._progress, ret, context);
	        maybePromise._then(
	            bindingResolved, bindingRejected, ret._progress, ret, context);
	    } else {
	        ret._resolveCallback(target);
	    }
	    return ret;
	};

	Promise.prototype._setBoundTo = function (obj) {
	    if (obj !== undefined) {
	        this._bitField = this._bitField | 131072;
	        this._boundTo = obj;
	    } else {
	        this._bitField = this._bitField & (~131072);
	    }
	};

	Promise.prototype._isBound = function () {
	    return (this._bitField & 131072) === 131072;
	};

	Promise.bind = function (thisArg, value) {
	    var maybePromise = tryConvertToPromise(thisArg);
	    var ret = new Promise(INTERNAL);

	    ret._setBoundTo(maybePromise);
	    if (maybePromise instanceof Promise) {
	        maybePromise._then(function() {
	            ret._resolveCallback(value);
	        }, ret._reject, ret._progress, ret, null);
	    } else {
	        ret._resolveCallback(value);
	    }
	    return ret;
	};
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, NEXT_FILTER, tryConvertToPromise) {
	var util = __webpack_require__(4);
	var isPrimitive = util.isPrimitive;
	var thrower = util.thrower;

	function returnThis() {
	    return this;
	}
	function throwThis() {
	    throw this;
	}
	function return$(r) {
	    return function() {
	        return r;
	    };
	}
	function throw$(r) {
	    return function() {
	        throw r;
	    };
	}
	function promisedFinally(ret, reasonOrValue, isFulfilled) {
	    var then;
	    if (isPrimitive(reasonOrValue)) {
	        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
	    } else {
	        then = isFulfilled ? returnThis : throwThis;
	    }
	    return ret._then(then, thrower, undefined, reasonOrValue, undefined);
	}

	function finallyHandler(reasonOrValue) {
	    var promise = this.promise;
	    var handler = this.handler;

	    var ret = promise._isBound()
	                    ? handler.call(promise._boundValue())
	                    : handler();

	    if (ret !== undefined) {
	        var maybePromise = tryConvertToPromise(ret, promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            return promisedFinally(maybePromise, reasonOrValue,
	                                    promise.isFulfilled());
	        }
	    }

	    if (promise.isRejected()) {
	        NEXT_FILTER.e = reasonOrValue;
	        return NEXT_FILTER;
	    } else {
	        return reasonOrValue;
	    }
	}

	function tapHandler(value) {
	    var promise = this.promise;
	    var handler = this.handler;

	    var ret = promise._isBound()
	                    ? handler.call(promise._boundValue(), value)
	                    : handler(value);

	    if (ret !== undefined) {
	        var maybePromise = tryConvertToPromise(ret, promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            return promisedFinally(maybePromise, value, true);
	        }
	    }
	    return value;
	}

	Promise.prototype._passThroughHandler = function (handler, isFinally) {
	    if (typeof handler !== "function") return this.then();

	    var promiseAndHandler = {
	        promise: this,
	        handler: handler
	    };

	    return this._then(
	            isFinally ? finallyHandler : tapHandler,
	            isFinally ? finallyHandler : undefined, undefined,
	            promiseAndHandler, undefined);
	};

	Promise.prototype.lastly =
	Promise.prototype["finally"] = function (handler) {
	    return this._passThroughHandler(handler, true);
	};

	Promise.prototype.tap = function (handler) {
	    return this._passThroughHandler(handler, false);
	};
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(4);
	var isPrimitive = util.isPrimitive;

	module.exports = function(Promise) {
	var returner = function () {
	    return this;
	};
	var thrower = function () {
	    throw this;
	};
	var returnUndefined = function() {};
	var throwUndefined = function() {
	    throw undefined;
	};

	var wrapper = function (value, action) {
	    if (action === 1) {
	        return function () {
	            throw value;
	        };
	    } else if (action === 2) {
	        return function () {
	            return value;
	        };
	    }
	};


	Promise.prototype["return"] =
	Promise.prototype.thenReturn = function (value) {
	    if (value === undefined) return this.then(returnUndefined);

	    if (isPrimitive(value)) {
	        return this._then(
	            wrapper(value, 2),
	            undefined,
	            undefined,
	            undefined,
	            undefined
	       );
	    } else if (value instanceof Promise) {
	        value._ignoreRejections();
	    }
	    return this._then(returner, undefined, undefined, value, undefined);
	};

	Promise.prototype["throw"] =
	Promise.prototype.thenThrow = function (reason) {
	    if (reason === undefined) return this.then(throwUndefined);

	    if (isPrimitive(reason)) {
	        return this._then(
	            wrapper(reason, 1),
	            undefined,
	            undefined,
	            undefined,
	            undefined
	       );
	    }
	    return this._then(thrower, undefined, undefined, reason, undefined);
	};
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	function PromiseInspection(promise) {
	    if (promise !== undefined) {
	        promise = promise._target();
	        this._bitField = promise._bitField;
	        this._settledValue = promise._settledValue;
	    }
	    else {
	        this._bitField = 0;
	        this._settledValue = undefined;
	    }
	}

	PromiseInspection.prototype.value = function () {
	    if (!this.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
	    }
	    return this._settledValue;
	};

	PromiseInspection.prototype.error =
	PromiseInspection.prototype.reason = function () {
	    if (!this.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
	    }
	    return this._settledValue;
	};

	PromiseInspection.prototype.isFulfilled =
	Promise.prototype._isFulfilled = function () {
	    return (this._bitField & 268435456) > 0;
	};

	PromiseInspection.prototype.isRejected =
	Promise.prototype._isRejected = function () {
	    return (this._bitField & 134217728) > 0;
	};

	PromiseInspection.prototype.isPending =
	Promise.prototype._isPending = function () {
	    return (this._bitField & 402653184) === 0;
	};

	PromiseInspection.prototype.isResolved =
	Promise.prototype._isResolved = function () {
	    return (this._bitField & 402653184) > 0;
	};

	Promise.prototype.isPending = function() {
	    return this._target()._isPending();
	};

	Promise.prototype.isRejected = function() {
	    return this._target()._isRejected();
	};

	Promise.prototype.isFulfilled = function() {
	    return this._target()._isFulfilled();
	};

	Promise.prototype.isResolved = function() {
	    return this._target()._isResolved();
	};

	Promise.prototype._value = function() {
	    return this._settledValue;
	};

	Promise.prototype._reason = function() {
	    this._unsetRejectionIsUnhandled();
	    return this._settledValue;
	};

	Promise.prototype.value = function() {
	    var target = this._target();
	    if (!target.isFulfilled()) {
	        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/hc1DLj\u000a");
	    }
	    return target._settledValue;
	};

	Promise.prototype.reason = function() {
	    var target = this._target();
	    if (!target.isRejected()) {
	        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/hPuiwB\u000a");
	    }
	    target._unsetRejectionIsUnhandled();
	    return target._settledValue;
	};


	Promise.PromiseInspection = PromiseInspection;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
	var util = __webpack_require__(4);
	var canEvaluate = util.canEvaluate;
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var reject;

	if (true) {
	if (canEvaluate) {
	    var thenCallback = function(i) {
	        return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	    };

	    var caller = function(count) {
	        var values = [];
	        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
	        return new Function("holder", "                                      \n\
	            'use strict';                                                    \n\
	            var callback = holder.fn;                                        \n\
	            return callback(values);                                         \n\
	            ".replace(/values/g, values.join(", ")));
	    };
	    var thenCallbacks = [];
	    var callers = [undefined];
	    for (var i = 1; i <= 5; ++i) {
	        thenCallbacks.push(thenCallback(i));
	        callers.push(caller(i));
	    }

	    var Holder = function(total, fn) {
	        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
	        this.fn = fn;
	        this.total = total;
	        this.now = 0;
	    };

	    Holder.prototype.callers = callers;
	    Holder.prototype.checkFulfillment = function(promise) {
	        var now = this.now;
	        now++;
	        var total = this.total;
	        if (now >= total) {
	            var handler = this.callers[total];
	            promise._pushContext();
	            var ret = tryCatch(handler)(this);
	            promise._popContext();
	            if (ret === errorObj) {
	                promise._rejectCallback(ret.e, false, true);
	            } else {
	                promise._resolveCallback(ret);
	            }
	        } else {
	            this.now = now;
	        }
	    };

	    var reject = function (reason) {
	        this._reject(reason);
	    };
	}
	}

	Promise.join = function () {
	    var last = arguments.length - 1;
	    var fn;
	    if (last > 0 && typeof arguments[last] === "function") {
	        fn = arguments[last];
	        if (true) {
	            if (last < 6 && canEvaluate) {
	                var ret = new Promise(INTERNAL);
	                ret._captureStackTrace();
	                var holder = new Holder(last, fn);
	                var callbacks = thenCallbacks;
	                for (var i = 0; i < last; ++i) {
	                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                    if (maybePromise instanceof Promise) {
	                        maybePromise = maybePromise._target();
	                        if (maybePromise._isPending()) {
	                            maybePromise._then(callbacks[i], reject,
	                                               undefined, ret, holder);
	                        } else if (maybePromise._isFulfilled()) {
	                            callbacks[i].call(ret,
	                                              maybePromise._value(), holder);
	                        } else {
	                            ret._reject(maybePromise._reason());
	                        }
	                    } else {
	                        callbacks[i].call(ret, maybePromise, holder);
	                    }
	                }
	                return ret;
	            }
	        }
	    }
	    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
	    if (fn) args.pop();
	    var ret = new PromiseArray(args).promise();
	    return fn !== undefined ? ret.spread(fn) : ret;
	};

	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(6);
	var util = __webpack_require__(4);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	var PENDING = {};
	var EMPTY_ARRAY = [];

	function MappingPromiseArray(promises, fn, limit, _filter) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._preservedValues = _filter === INTERNAL
	        ? new Array(this.length())
	        : null;
	    this._limit = limit;
	    this._inFlight = 0;
	    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
	    async.invoke(init, this, undefined);
	}
	util.inherits(MappingPromiseArray, PromiseArray);
	function init() {this._init$(undefined, -2);}

	MappingPromiseArray.prototype._init = function () {};

	MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var limit = this._limit;
	    if (values[index] === PENDING) {
	        values[index] = value;
	        if (limit >= 1) {
	            this._inFlight--;
	            this._drainQueue();
	            if (this._isResolved()) return;
	        }
	    } else {
	        if (limit >= 1 && this._inFlight >= limit) {
	            values[index] = value;
	            this._queue.push(index);
	            return;
	        }
	        if (preservedValues !== null) preservedValues[index] = value;

	        var callback = this._callback;
	        var receiver = this._promise._boundValue();
	        this._promise._pushContext();
	        var ret = tryCatch(callback).call(receiver, value, index, length);
	        this._promise._popContext();
	        if (ret === errorObj) return this._reject(ret.e);

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (maybePromise._isPending()) {
	                if (limit >= 1) this._inFlight++;
	                values[index] = PENDING;
	                return maybePromise._proxyPromiseArray(this, index);
	            } else if (maybePromise._isFulfilled()) {
	                ret = maybePromise._value();
	            } else {
	                return this._reject(maybePromise._reason());
	            }
	        }
	        values[index] = ret;
	    }
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= length) {
	        if (preservedValues !== null) {
	            this._filter(values, preservedValues);
	        } else {
	            this._resolve(values);
	        }

	    }
	};

	MappingPromiseArray.prototype._drainQueue = function () {
	    var queue = this._queue;
	    var limit = this._limit;
	    var values = this._values;
	    while (queue.length > 0 && this._inFlight < limit) {
	        if (this._isResolved()) return;
	        var index = queue.pop();
	        this._promiseFulfilled(values[index], index);
	    }
	};

	MappingPromiseArray.prototype._filter = function (booleans, values) {
	    var len = values.length;
	    var ret = new Array(len);
	    var j = 0;
	    for (var i = 0; i < len; ++i) {
	        if (booleans[i]) ret[j++] = values[i];
	    }
	    ret.length = j;
	    this._resolve(ret);
	};

	MappingPromiseArray.prototype.preservedValues = function () {
	    return this._preservedValues;
	};

	function map(promises, fn, options, _filter) {
	    var limit = typeof options === "object" && options !== null
	        ? options.concurrency
	        : 0;
	    limit = typeof limit === "number" &&
	        isFinite(limit) && limit >= 1 ? limit : 0;
	    return new MappingPromiseArray(promises, fn, limit, _filter);
	}

	Promise.prototype.map = function (fn, options) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

	    return map(this, fn, options, null).promise();
	};

	Promise.map = function (promises, fn, options, _filter) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    return map(promises, fn, options, _filter).promise();
	};


	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise) {
	var errors = __webpack_require__(9);
	var async = __webpack_require__(6);
	var CancellationError = errors.CancellationError;

	Promise.prototype._cancel = function (reason) {
	    if (!this.isCancellable()) return this;
	    var parent;
	    var promiseToReject = this;
	    while ((parent = promiseToReject._cancellationParent) !== undefined &&
	        parent.isCancellable()) {
	        promiseToReject = parent;
	    }
	    this._unsetCancellable();
	    promiseToReject._target()._rejectCallback(reason, false, true);
	};

	Promise.prototype.cancel = function (reason) {
	    if (!this.isCancellable()) return this;
	    if (reason === undefined) reason = new CancellationError();
	    async.invokeLater(this._cancel, this, reason);
	    return this;
	};

	Promise.prototype.cancellable = function () {
	    if (this._cancellable()) return this;
	    async.enableTrampoline();
	    this._setCancellable();
	    this._cancellationParent = undefined;
	    return this;
	};

	Promise.prototype.uncancellable = function () {
	    var ret = this.then();
	    ret._unsetCancellable();
	    return ret;
	};

	Promise.prototype.fork = function (didFulfill, didReject, didProgress) {
	    var ret = this._then(didFulfill, didReject, didProgress,
	                         undefined, undefined);

	    ret._setCancellable();
	    ret._cancellationParent = undefined;
	    return ret;
	};
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function (Promise, apiRejection, tryConvertToPromise,
	    createContext) {
	    var TypeError = __webpack_require__(9).TypeError;
	    var inherits = __webpack_require__(4).inherits;
	    var PromiseInspection = Promise.PromiseInspection;

	    function inspectionMapper(inspections) {
	        var len = inspections.length;
	        for (var i = 0; i < len; ++i) {
	            var inspection = inspections[i];
	            if (inspection.isRejected()) {
	                return Promise.reject(inspection.error());
	            }
	            inspections[i] = inspection._settledValue;
	        }
	        return inspections;
	    }

	    function thrower(e) {
	        setTimeout(function(){throw e;}, 0);
	    }

	    function castPreservingDisposable(thenable) {
	        var maybePromise = tryConvertToPromise(thenable);
	        if (maybePromise !== thenable &&
	            typeof thenable._isDisposable === "function" &&
	            typeof thenable._getDisposer === "function" &&
	            thenable._isDisposable()) {
	            maybePromise._setDisposable(thenable._getDisposer());
	        }
	        return maybePromise;
	    }
	    function dispose(resources, inspection) {
	        var i = 0;
	        var len = resources.length;
	        var ret = Promise.defer();
	        function iterator() {
	            if (i >= len) return ret.resolve();
	            var maybePromise = castPreservingDisposable(resources[i++]);
	            if (maybePromise instanceof Promise &&
	                maybePromise._isDisposable()) {
	                try {
	                    maybePromise = tryConvertToPromise(
	                        maybePromise._getDisposer().tryDispose(inspection),
	                        resources.promise);
	                } catch (e) {
	                    return thrower(e);
	                }
	                if (maybePromise instanceof Promise) {
	                    return maybePromise._then(iterator, thrower,
	                                              null, null, null);
	                }
	            }
	            iterator();
	        }
	        iterator();
	        return ret.promise;
	    }

	    function disposerSuccess(value) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = value;
	        inspection._bitField = 268435456;
	        return dispose(this, inspection).thenReturn(value);
	    }

	    function disposerFail(reason) {
	        var inspection = new PromiseInspection();
	        inspection._settledValue = reason;
	        inspection._bitField = 134217728;
	        return dispose(this, inspection).thenThrow(reason);
	    }

	    function Disposer(data, promise, context) {
	        this._data = data;
	        this._promise = promise;
	        this._context = context;
	    }

	    Disposer.prototype.data = function () {
	        return this._data;
	    };

	    Disposer.prototype.promise = function () {
	        return this._promise;
	    };

	    Disposer.prototype.resource = function () {
	        if (this.promise().isFulfilled()) {
	            return this.promise().value();
	        }
	        return null;
	    };

	    Disposer.prototype.tryDispose = function(inspection) {
	        var resource = this.resource();
	        var context = this._context;
	        if (context !== undefined) context._pushContext();
	        var ret = resource !== null
	            ? this.doDispose(resource, inspection) : null;
	        if (context !== undefined) context._popContext();
	        this._promise._unsetDisposable();
	        this._data = null;
	        return ret;
	    };

	    Disposer.isDisposer = function (d) {
	        return (d != null &&
	                typeof d.resource === "function" &&
	                typeof d.tryDispose === "function");
	    };

	    function FunctionDisposer(fn, promise, context) {
	        this.constructor$(fn, promise, context);
	    }
	    inherits(FunctionDisposer, Disposer);

	    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	        var fn = this.data();
	        return fn.call(resource, resource, inspection);
	    };

	    function maybeUnwrapDisposer(value) {
	        if (Disposer.isDisposer(value)) {
	            this.resources[this.index]._setDisposable(value);
	            return value.promise();
	        }
	        return value;
	    }

	    Promise.using = function () {
	        var len = arguments.length;
	        if (len < 2) return apiRejection(
	                        "you must pass at least 2 arguments to Promise.using");
	        var fn = arguments[len - 1];
	        if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");

	        var input;
	        var spreadArgs = true;
	        if (len === 2 && Array.isArray(arguments[0])) {
	            input = arguments[0];
	            len = input.length;
	            spreadArgs = false;
	        } else {
	            input = arguments;
	            len--;
	        }
	        var resources = new Array(len);
	        for (var i = 0; i < len; ++i) {
	            var resource = input[i];
	            if (Disposer.isDisposer(resource)) {
	                var disposer = resource;
	                resource = resource.promise();
	                resource._setDisposable(disposer);
	            } else {
	                var maybePromise = tryConvertToPromise(resource);
	                if (maybePromise instanceof Promise) {
	                    resource =
	                        maybePromise._then(maybeUnwrapDisposer, null, null, {
	                            resources: resources,
	                            index: i
	                    }, undefined);
	                }
	            }
	            resources[i] = resource;
	        }

	        var promise = Promise.settle(resources)
	            .then(inspectionMapper)
	            .then(function(vals) {
	                promise._pushContext();
	                var ret;
	                try {
	                    ret = spreadArgs
	                        ? fn.apply(undefined, vals) : fn.call(undefined,  vals);
	                } finally {
	                    promise._popContext();
	                }
	                return ret;
	            })
	            ._then(
	                disposerSuccess, disposerFail, undefined, resources, undefined);
	        resources.promise = promise;
	        return promise;
	    };

	    Promise.prototype._setDisposable = function (disposer) {
	        this._bitField = this._bitField | 262144;
	        this._disposer = disposer;
	    };

	    Promise.prototype._isDisposable = function () {
	        return (this._bitField & 262144) > 0;
	    };

	    Promise.prototype._getDisposer = function () {
	        return this._disposer;
	    };

	    Promise.prototype._unsetDisposable = function () {
	        this._bitField = this._bitField & (~262144);
	        this._disposer = undefined;
	    };

	    Promise.prototype.disposer = function (fn) {
	        if (typeof fn === "function") {
	            return new FunctionDisposer(fn, this, createContext());
	        }
	        throw new TypeError();
	    };

	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          apiRejection,
	                          INTERNAL,
	                          tryConvertToPromise) {
	var errors = __webpack_require__(9);
	var TypeError = errors.TypeError;
	var util = __webpack_require__(4);
	var errorObj = util.errorObj;
	var tryCatch = util.tryCatch;
	var yieldHandlers = [];

	function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	    for (var i = 0; i < yieldHandlers.length; ++i) {
	        traceParent._pushContext();
	        var result = tryCatch(yieldHandlers[i])(value);
	        traceParent._popContext();
	        if (result === errorObj) {
	            traceParent._pushContext();
	            var ret = Promise.reject(errorObj.e);
	            traceParent._popContext();
	            return ret;
	        }
	        var maybePromise = tryConvertToPromise(result, traceParent);
	        if (maybePromise instanceof Promise) return maybePromise;
	    }
	    return null;
	}

	function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	    var promise = this._promise = new Promise(INTERNAL);
	    promise._captureStackTrace();
	    this._stack = stack;
	    this._generatorFunction = generatorFunction;
	    this._receiver = receiver;
	    this._generator = undefined;
	    this._yieldHandlers = typeof yieldHandler === "function"
	        ? [yieldHandler].concat(yieldHandlers)
	        : yieldHandlers;
	}

	PromiseSpawn.prototype.promise = function () {
	    return this._promise;
	};

	PromiseSpawn.prototype._run = function () {
	    this._generator = this._generatorFunction.call(this._receiver);
	    this._receiver =
	        this._generatorFunction = undefined;
	    this._next(undefined);
	};

	PromiseSpawn.prototype._continue = function (result) {
	    if (result === errorObj) {
	        return this._promise._rejectCallback(result.e, false, true);
	    }

	    var value = result.value;
	    if (result.done === true) {
	        this._promise._resolveCallback(value);
	    } else {
	        var maybePromise = tryConvertToPromise(value, this._promise);
	        if (!(maybePromise instanceof Promise)) {
	            maybePromise =
	                promiseFromYieldHandler(maybePromise,
	                                        this._yieldHandlers,
	                                        this._promise);
	            if (maybePromise === null) {
	                this._throw(
	                    new TypeError(
	                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/4Y4pDk\u000a\u000a".replace("%s", value) +
	                        "From coroutine:\u000a" +
	                        this._stack.split("\n").slice(1, -7).join("\n")
	                    )
	                );
	                return;
	            }
	        }
	        maybePromise._then(
	            this._next,
	            this._throw,
	            undefined,
	            this,
	            null
	       );
	    }
	};

	PromiseSpawn.prototype._throw = function (reason) {
	    this._promise._attachExtraTrace(reason);
	    this._promise._pushContext();
	    var result = tryCatch(this._generator["throw"])
	        .call(this._generator, reason);
	    this._promise._popContext();
	    this._continue(result);
	};

	PromiseSpawn.prototype._next = function (value) {
	    this._promise._pushContext();
	    var result = tryCatch(this._generator.next).call(this._generator, value);
	    this._promise._popContext();
	    this._continue(result);
	};

	Promise.coroutine = function (generatorFunction, options) {
	    if (typeof generatorFunction !== "function") {
	        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
	    }
	    var yieldHandler = Object(options).yieldHandler;
	    var PromiseSpawn$ = PromiseSpawn;
	    var stack = new Error().stack;
	    return function () {
	        var generator = generatorFunction.apply(this, arguments);
	        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
	                                      stack);
	        spawn._generator = generator;
	        spawn._next(undefined);
	        return spawn.promise();
	    };
	};

	Promise.coroutine.addYieldHandler = function(fn) {
	    if (typeof fn !== "function") throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    yieldHandlers.push(fn);
	};

	Promise.spawn = function (generatorFunction) {
	    if (typeof generatorFunction !== "function") {
	        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/6Vqhm0\u000a");
	    }
	    var spawn = new PromiseSpawn(generatorFunction, this);
	    var ret = spawn.promise();
	    spawn._run(Promise.spawn);
	    return ret;
	};
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise) {
	var util = __webpack_require__(4);
	var async = __webpack_require__(6);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;

	function spreadAdapter(val, nodeback) {
	    var promise = this;
	    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	    var ret =
	        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	function successAdapter(val, nodeback) {
	    var promise = this;
	    var receiver = promise._boundValue();
	    var ret = val === undefined
	        ? tryCatch(nodeback).call(receiver, null)
	        : tryCatch(nodeback).call(receiver, null, val);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}
	function errorAdapter(reason, nodeback) {
	    var promise = this;
	    if (!reason) {
	        var target = promise._target();
	        var newReason = target._getCarriedStackTrace();
	        newReason.cause = reason;
	        reason = newReason;
	    }
	    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	    if (ret === errorObj) {
	        async.throwLater(ret.e);
	    }
	}

	Promise.prototype.asCallback =
	Promise.prototype.nodeify = function (nodeback, options) {
	    if (typeof nodeback == "function") {
	        var adapter = successAdapter;
	        if (options !== undefined && Object(options).spread) {
	            adapter = spreadAdapter;
	        }
	        this._then(
	            adapter,
	            errorAdapter,
	            undefined,
	            this,
	            nodeback
	        );
	    }
	    return this;
	};
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var cr = Object.create;
	if (cr) {
	    var callerCache = cr(null);
	    var getterCache = cr(null);
	    callerCache[" size"] = getterCache[" size"] = 0;
	}

	module.exports = function(Promise) {
	var util = __webpack_require__(4);
	var canEvaluate = util.canEvaluate;
	var isIdentifier = util.isIdentifier;

	var getMethodCaller;
	var getGetter;
	if (true) {
	var makeMethodCaller = function (methodName) {
	    return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	};

	var makeGetter = function (propertyName) {
	    return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	};

	var getCompiled = function(name, compiler, cache) {
	    var ret = cache[name];
	    if (typeof ret !== "function") {
	        if (!isIdentifier(name)) {
	            return null;
	        }
	        ret = compiler(name);
	        cache[name] = ret;
	        cache[" size"]++;
	        if (cache[" size"] > 512) {
	            var keys = Object.keys(cache);
	            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
	            cache[" size"] = keys.length - 256;
	        }
	    }
	    return ret;
	};

	getMethodCaller = function(name) {
	    return getCompiled(name, makeMethodCaller, callerCache);
	};

	getGetter = function(name) {
	    return getCompiled(name, makeGetter, getterCache);
	};
	}

	function ensureMethod(obj, methodName) {
	    var fn;
	    if (obj != null) fn = obj[methodName];
	    if (typeof fn !== "function") {
	        var message = "Object " + util.classString(obj) + " has no method '" +
	            util.toString(methodName) + "'";
	        throw new Promise.TypeError(message);
	    }
	    return fn;
	}

	function caller(obj) {
	    var methodName = this.pop();
	    var fn = ensureMethod(obj, methodName);
	    return fn.apply(obj, this);
	}
	Promise.prototype.call = function (methodName) {
	    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
	    if (true) {
	        if (canEvaluate) {
	            var maybeCaller = getMethodCaller(methodName);
	            if (maybeCaller !== null) {
	                return this._then(
	                    maybeCaller, undefined, undefined, args, undefined);
	            }
	        }
	    }
	    args.push(methodName);
	    return this._then(caller, undefined, undefined, args, undefined);
	};

	function namedGetter(obj) {
	    return obj[this];
	}
	function indexedGetter(obj) {
	    var index = +this;
	    if (index < 0) index = Math.max(0, index + obj.length);
	    return obj[index];
	}
	Promise.prototype.get = function (propertyName) {
	    var isIndex = (typeof propertyName === "number");
	    var getter;
	    if (!isIndex) {
	        if (canEvaluate) {
	            var maybeGetter = getGetter(propertyName);
	            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	        } else {
	            getter = namedGetter;
	        }
	    } else {
	        getter = indexedGetter;
	    }
	    return this._then(getter, undefined, undefined, propertyName, undefined);
	};
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	var util = __webpack_require__(4);
	var isObject = util.isObject;
	var es5 = __webpack_require__(5);

	function PropertiesPromiseArray(obj) {
	    var keys = es5.keys(obj);
	    var len = keys.length;
	    var values = new Array(len * 2);
	    for (var i = 0; i < len; ++i) {
	        var key = keys[i];
	        values[i] = obj[key];
	        values[i + len] = key;
	    }
	    this.constructor$(values);
	}
	util.inherits(PropertiesPromiseArray, PromiseArray);

	PropertiesPromiseArray.prototype._init = function () {
	    this._init$(undefined, -3) ;
	};

	PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    this._values[index] = value;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        var val = {};
	        var keyOffset = this.length();
	        for (var i = 0, len = this.length(); i < len; ++i) {
	            val[this._values[i + keyOffset]] = this._values[i];
	        }
	        this._resolve(val);
	    }
	};

	PropertiesPromiseArray.prototype._promiseProgressed = function (value, index) {
	    this._promise._progress({
	        key: this._values[index + this.length()],
	        value: value
	    });
	};

	PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	    return false;
	};

	PropertiesPromiseArray.prototype.getActualLength = function (len) {
	    return len >> 1;
	};

	function props(promises) {
	    var ret;
	    var castValue = tryConvertToPromise(promises);

	    if (!isObject(castValue)) {
	        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/OsFKC8\u000a");
	    } else if (castValue instanceof Promise) {
	        ret = castValue._then(
	            Promise.props, undefined, undefined, undefined, undefined);
	    } else {
	        ret = new PropertiesPromiseArray(castValue).promise();
	    }

	    if (castValue instanceof Promise) {
	        ret._propagateFrom(castValue, 4);
	    }
	    return ret;
	}

	Promise.prototype.props = function () {
	    return props(this);
	};

	Promise.props = function (promises) {
	    return props(promises);
	};
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(
	    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	var isArray = __webpack_require__(4).isArray;

	var raceLater = function (promise) {
	    return promise.then(function(array) {
	        return race(array, promise);
	    });
	};

	function race(promises, parent) {
	    var maybePromise = tryConvertToPromise(promises);

	    if (maybePromise instanceof Promise) {
	        return raceLater(maybePromise);
	    } else if (!isArray(promises)) {
	        return apiRejection("expecting an array, a promise or a thenable\u000a\u000a    See http://goo.gl/s8MMhc\u000a");
	    }

	    var ret = new Promise(INTERNAL);
	    if (parent !== undefined) {
	        ret._propagateFrom(parent, 4 | 1);
	    }
	    var fulfill = ret._fulfill;
	    var reject = ret._reject;
	    for (var i = 0, len = promises.length; i < len; ++i) {
	        var val = promises[i];

	        if (val === undefined && !(i in promises)) {
	            continue;
	        }

	        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	    }
	    return ret;
	}

	Promise.race = function (promises) {
	    return race(promises, undefined);
	};

	Promise.prototype.race = function () {
	    return race(this, undefined);
	};

	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise,
	                          PromiseArray,
	                          apiRejection,
	                          tryConvertToPromise,
	                          INTERNAL) {
	var getDomain = Promise._getDomain;
	var async = __webpack_require__(6);
	var util = __webpack_require__(4);
	var tryCatch = util.tryCatch;
	var errorObj = util.errorObj;
	function ReductionPromiseArray(promises, fn, accum, _each) {
	    this.constructor$(promises);
	    this._promise._captureStackTrace();
	    this._preservedValues = _each === INTERNAL ? [] : null;
	    this._zerothIsAccum = (accum === undefined);
	    this._gotAccum = false;
	    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
	    this._valuesPhase = undefined;
	    var maybePromise = tryConvertToPromise(accum, this._promise);
	    var rejected = false;
	    var isPromise = maybePromise instanceof Promise;
	    if (isPromise) {
	        maybePromise = maybePromise._target();
	        if (maybePromise._isPending()) {
	            maybePromise._proxyPromiseArray(this, -1);
	        } else if (maybePromise._isFulfilled()) {
	            accum = maybePromise._value();
	            this._gotAccum = true;
	        } else {
	            this._reject(maybePromise._reason());
	            rejected = true;
	        }
	    }
	    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
	    var domain = getDomain();
	    this._callback = domain === null ? fn : domain.bind(fn);
	    this._accum = accum;
	    if (!rejected) async.invoke(init, this, undefined);
	}
	function init() {
	    this._init$(undefined, -5);
	}
	util.inherits(ReductionPromiseArray, PromiseArray);

	ReductionPromiseArray.prototype._init = function () {};

	ReductionPromiseArray.prototype._resolveEmptyArray = function () {
	    if (this._gotAccum || this._zerothIsAccum) {
	        this._resolve(this._preservedValues !== null
	                        ? [] : this._accum);
	    }
	};

	ReductionPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var values = this._values;
	    values[index] = value;
	    var length = this.length();
	    var preservedValues = this._preservedValues;
	    var isEach = preservedValues !== null;
	    var gotAccum = this._gotAccum;
	    var valuesPhase = this._valuesPhase;
	    var valuesPhaseIndex;
	    if (!valuesPhase) {
	        valuesPhase = this._valuesPhase = new Array(length);
	        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
	            valuesPhase[valuesPhaseIndex] = 0;
	        }
	    }
	    valuesPhaseIndex = valuesPhase[index];

	    if (index === 0 && this._zerothIsAccum) {
	        this._accum = value;
	        this._gotAccum = gotAccum = true;
	        valuesPhase[index] = ((valuesPhaseIndex === 0)
	            ? 1 : 2);
	    } else if (index === -1) {
	        this._accum = value;
	        this._gotAccum = gotAccum = true;
	    } else {
	        if (valuesPhaseIndex === 0) {
	            valuesPhase[index] = 1;
	        } else {
	            valuesPhase[index] = 2;
	            this._accum = value;
	        }
	    }
	    if (!gotAccum) return;

	    var callback = this._callback;
	    var receiver = this._promise._boundValue();
	    var ret;

	    for (var i = this._reducingIndex; i < length; ++i) {
	        valuesPhaseIndex = valuesPhase[i];
	        if (valuesPhaseIndex === 2) {
	            this._reducingIndex = i + 1;
	            continue;
	        }
	        if (valuesPhaseIndex !== 1) return;
	        value = values[i];
	        this._promise._pushContext();
	        if (isEach) {
	            preservedValues.push(value);
	            ret = tryCatch(callback).call(receiver, value, i, length);
	        }
	        else {
	            ret = tryCatch(callback)
	                .call(receiver, this._accum, value, i, length);
	        }
	        this._promise._popContext();

	        if (ret === errorObj) return this._reject(ret.e);

	        var maybePromise = tryConvertToPromise(ret, this._promise);
	        if (maybePromise instanceof Promise) {
	            maybePromise = maybePromise._target();
	            if (maybePromise._isPending()) {
	                valuesPhase[i] = 4;
	                return maybePromise._proxyPromiseArray(this, i);
	            } else if (maybePromise._isFulfilled()) {
	                ret = maybePromise._value();
	            } else {
	                return this._reject(maybePromise._reason());
	            }
	        }

	        this._reducingIndex = i + 1;
	        this._accum = ret;
	    }

	    this._resolve(isEach ? preservedValues : this._accum);
	};

	function reduce(promises, fn, initialValue, _each) {
	    if (typeof fn !== "function") return apiRejection("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	    return array.promise();
	}

	Promise.prototype.reduce = function (fn, initialValue) {
	    return reduce(this, fn, initialValue, null);
	};

	Promise.reduce = function (promises, fn, initialValue, _each) {
	    return reduce(promises, fn, initialValue, _each);
	};
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	    function(Promise, PromiseArray) {
	var PromiseInspection = Promise.PromiseInspection;
	var util = __webpack_require__(4);

	function SettledPromiseArray(values) {
	    this.constructor$(values);
	}
	util.inherits(SettledPromiseArray, PromiseArray);

	SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	    this._values[index] = inspection;
	    var totalResolved = ++this._totalResolved;
	    if (totalResolved >= this._length) {
	        this._resolve(this._values);
	    }
	};

	SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 268435456;
	    ret._settledValue = value;
	    this._promiseResolved(index, ret);
	};
	SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	    var ret = new PromiseInspection();
	    ret._bitField = 134217728;
	    ret._settledValue = reason;
	    this._promiseResolved(index, ret);
	};

	Promise.settle = function (promises) {
	    return new SettledPromiseArray(promises).promise();
	};

	Promise.prototype.settle = function () {
	    return new SettledPromiseArray(this).promise();
	};
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports =
	function(Promise, PromiseArray, apiRejection) {
	var util = __webpack_require__(4);
	var RangeError = __webpack_require__(9).RangeError;
	var AggregateError = __webpack_require__(9).AggregateError;
	var isArray = util.isArray;


	function SomePromiseArray(values) {
	    this.constructor$(values);
	    this._howMany = 0;
	    this._unwrap = false;
	    this._initialized = false;
	}
	util.inherits(SomePromiseArray, PromiseArray);

	SomePromiseArray.prototype._init = function () {
	    if (!this._initialized) {
	        return;
	    }
	    if (this._howMany === 0) {
	        this._resolve([]);
	        return;
	    }
	    this._init$(undefined, -5);
	    var isArrayResolved = isArray(this._values);
	    if (!this._isResolved() &&
	        isArrayResolved &&
	        this._howMany > this._canPossiblyFulfill()) {
	        this._reject(this._getRangeError(this.length()));
	    }
	};

	SomePromiseArray.prototype.init = function () {
	    this._initialized = true;
	    this._init();
	};

	SomePromiseArray.prototype.setUnwrap = function () {
	    this._unwrap = true;
	};

	SomePromiseArray.prototype.howMany = function () {
	    return this._howMany;
	};

	SomePromiseArray.prototype.setHowMany = function (count) {
	    this._howMany = count;
	};

	SomePromiseArray.prototype._promiseFulfilled = function (value) {
	    this._addFulfilled(value);
	    if (this._fulfilled() === this.howMany()) {
	        this._values.length = this.howMany();
	        if (this.howMany() === 1 && this._unwrap) {
	            this._resolve(this._values[0]);
	        } else {
	            this._resolve(this._values);
	        }
	    }

	};
	SomePromiseArray.prototype._promiseRejected = function (reason) {
	    this._addRejected(reason);
	    if (this.howMany() > this._canPossiblyFulfill()) {
	        var e = new AggregateError();
	        for (var i = this.length(); i < this._values.length; ++i) {
	            e.push(this._values[i]);
	        }
	        this._reject(e);
	    }
	};

	SomePromiseArray.prototype._fulfilled = function () {
	    return this._totalResolved;
	};

	SomePromiseArray.prototype._rejected = function () {
	    return this._values.length - this.length();
	};

	SomePromiseArray.prototype._addRejected = function (reason) {
	    this._values.push(reason);
	};

	SomePromiseArray.prototype._addFulfilled = function (value) {
	    this._values[this._totalResolved++] = value;
	};

	SomePromiseArray.prototype._canPossiblyFulfill = function () {
	    return this.length() - this._rejected();
	};

	SomePromiseArray.prototype._getRangeError = function (count) {
	    var message = "Input array must contain at least " +
	            this._howMany + " items but contains only " + count + " items";
	    return new RangeError(message);
	};

	SomePromiseArray.prototype._resolveEmptyArray = function () {
	    this._reject(this._getRangeError(0));
	};

	function some(promises, howMany) {
	    if ((howMany | 0) !== howMany || howMany < 0) {
	        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/1wAmHx\u000a");
	    }
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(howMany);
	    ret.init();
	    return promise;
	}

	Promise.some = function (promises, howMany) {
	    return some(promises, howMany);
	};

	Promise.prototype.some = function (howMany) {
	    return some(this, howMany);
	};

	Promise._SomePromiseArray = SomePromiseArray;
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var THIS = {};
	var util = __webpack_require__(4);
	var nodebackForPromise = __webpack_require__(16)
	    ._nodebackForPromise;
	var withAppended = util.withAppended;
	var maybeWrapAsError = util.maybeWrapAsError;
	var canEvaluate = util.canEvaluate;
	var TypeError = __webpack_require__(9).TypeError;
	var defaultSuffix = "Async";
	var defaultPromisified = {__isPromisified__: true};
	var noCopyProps = [
	    "arity",    "length",
	    "name",
	    "arguments",
	    "caller",
	    "callee",
	    "prototype",
	    "__isPromisified__"
	];
	var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

	var defaultFilter = function(name) {
	    return util.isIdentifier(name) &&
	        name.charAt(0) !== "_" &&
	        name !== "constructor";
	};

	function propsFilter(key) {
	    return !noCopyPropsPattern.test(key);
	}

	function isPromisified(fn) {
	    try {
	        return fn.__isPromisified__ === true;
	    }
	    catch (e) {
	        return false;
	    }
	}

	function hasPromisified(obj, key, suffix) {
	    var val = util.getDataPropertyOrDefault(obj, key + suffix,
	                                            defaultPromisified);
	    return val ? isPromisified(val) : false;
	}
	function checkValid(ret, suffix, suffixRegexp) {
	    for (var i = 0; i < ret.length; i += 2) {
	        var key = ret[i];
	        if (suffixRegexp.test(key)) {
	            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	            for (var j = 0; j < ret.length; j += 2) {
	                if (ret[j] === keyWithoutAsyncSuffix) {
	                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/iWrZbw\u000a"
	                        .replace("%s", suffix));
	                }
	            }
	        }
	    }
	}

	function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	    var keys = util.inheritedDataKeys(obj);
	    var ret = [];
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var value = obj[key];
	        var passesDefaultFilter = filter === defaultFilter
	            ? true : defaultFilter(key, value, obj);
	        if (typeof value === "function" &&
	            !isPromisified(value) &&
	            !hasPromisified(obj, key, suffix) &&
	            filter(key, value, obj, passesDefaultFilter)) {
	            ret.push(key, value);
	        }
	    }
	    checkValid(ret, suffix, suffixRegexp);
	    return ret;
	}

	var escapeIdentRegex = function(str) {
	    return str.replace(/([$])/, "\\$");
	};

	var makeNodePromisifiedEval;
	if (true) {
	var switchCaseArgumentOrder = function(likelyArgumentCount) {
	    var ret = [likelyArgumentCount];
	    var min = Math.max(0, likelyArgumentCount - 1 - 3);
	    for(var i = likelyArgumentCount - 1; i >= min; --i) {
	        ret.push(i);
	    }
	    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
	        ret.push(i);
	    }
	    return ret;
	};

	var argumentSequence = function(argumentCount) {
	    return util.filledRange(argumentCount, "_arg", "");
	};

	var parameterDeclaration = function(parameterCount) {
	    return util.filledRange(
	        Math.max(parameterCount, 3), "_arg", "");
	};

	var parameterCount = function(fn) {
	    if (typeof fn.length === "number") {
	        return Math.max(Math.min(fn.length, 1023 + 1), 0);
	    }
	    return 0;
	};

	makeNodePromisifiedEval =
	function(callback, receiver, originalName, fn) {
	    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

	    function generateCallForArgumentCount(count) {
	        var args = argumentSequence(count).join(", ");
	        var comma = count > 0 ? ", " : "";
	        var ret;
	        if (shouldProxyThis) {
	            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	        } else {
	            ret = receiver === undefined
	                ? "ret = callback({{args}}, nodeback); break;\n"
	                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	        }
	        return ret.replace("{{args}}", args).replace(", ", comma);
	    }

	    function generateArgumentSwitchCase() {
	        var ret = "";
	        for (var i = 0; i < argumentOrder.length; ++i) {
	            ret += "case " + argumentOrder[i] +":" +
	                generateCallForArgumentCount(argumentOrder[i]);
	        }

	        ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", (shouldProxyThis
	                                ? "ret = callback.apply(this, args);\n"
	                                : "ret = callback.apply(receiver, args);\n"));
	        return ret;
	    }

	    var getFunctionCode = typeof callback === "string"
	                                ? ("this != null ? this['"+callback+"'] : fn")
	                                : "fn";

	    return new Function("Promise",
	                        "fn",
	                        "receiver",
	                        "withAppended",
	                        "maybeWrapAsError",
	                        "nodebackForPromise",
	                        "tryCatch",
	                        "errorObj",
	                        "notEnumerableProp",
	                        "INTERNAL","'use strict';                            \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise);                      \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	        "
	        .replace("Parameters", parameterDeclaration(newParameterCount))
	        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
	        .replace("[GetFunctionCode]", getFunctionCode))(
	            Promise,
	            fn,
	            receiver,
	            withAppended,
	            maybeWrapAsError,
	            nodebackForPromise,
	            util.tryCatch,
	            util.errorObj,
	            util.notEnumerableProp,
	            INTERNAL
	        );
	};
	}

	function makeNodePromisifiedClosure(callback, receiver, _, fn) {
	    var defaultThis = (function() {return this;})();
	    var method = callback;
	    if (typeof method === "string") {
	        callback = fn;
	    }
	    function promisified() {
	        var _receiver = receiver;
	        if (receiver === THIS) _receiver = this;
	        var promise = new Promise(INTERNAL);
	        promise._captureStackTrace();
	        var cb = typeof method === "string" && this !== defaultThis
	            ? this[method] : callback;
	        var fn = nodebackForPromise(promise);
	        try {
	            cb.apply(_receiver, withAppended(arguments, fn));
	        } catch(e) {
	            promise._rejectCallback(maybeWrapAsError(e), true, true);
	        }
	        return promise;
	    }
	    util.notEnumerableProp(promisified, "__isPromisified__", true);
	    return promisified;
	}

	var makeNodePromisified = canEvaluate
	    ? makeNodePromisifiedEval
	    : makeNodePromisifiedClosure;

	function promisifyAll(obj, suffix, filter, promisifier) {
	    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	    var methods =
	        promisifiableMethods(obj, suffix, suffixRegexp, filter);

	    for (var i = 0, len = methods.length; i < len; i+= 2) {
	        var key = methods[i];
	        var fn = methods[i+1];
	        var promisifiedKey = key + suffix;
	        if (promisifier === makeNodePromisified) {
	            obj[promisifiedKey] =
	                makeNodePromisified(key, THIS, key, fn, suffix);
	        } else {
	            var promisified = promisifier(fn, function() {
	                return makeNodePromisified(key, THIS, key, fn, suffix);
	            });
	            util.notEnumerableProp(promisified, "__isPromisified__", true);
	            obj[promisifiedKey] = promisified;
	        }
	    }
	    util.toFastProperties(obj);
	    return obj;
	}

	function promisify(callback, receiver) {
	    return makeNodePromisified(callback, receiver, undefined, callback);
	}

	Promise.promisify = function (fn, receiver) {
	    if (typeof fn !== "function") {
	        throw new TypeError("fn must be a function\u000a\u000a    See http://goo.gl/916lJJ\u000a");
	    }
	    if (isPromisified(fn)) {
	        return fn;
	    }
	    var ret = promisify(fn, arguments.length < 2 ? THIS : receiver);
	    util.copyDescriptors(fn, ret, propsFilter);
	    return ret;
	};

	Promise.promisifyAll = function (target, options) {
	    if (typeof target !== "function" && typeof target !== "object") {
	        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/9ITlV0\u000a");
	    }
	    options = Object(options);
	    var suffix = options.suffix;
	    if (typeof suffix !== "string") suffix = defaultSuffix;
	    var filter = options.filter;
	    if (typeof filter !== "function") filter = defaultFilter;
	    var promisifier = options.promisifier;
	    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

	    if (!util.isIdentifier(suffix)) {
	        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/8FZo5V\u000a");
	    }

	    var keys = util.inheritedDataKeys(target);
	    for (var i = 0; i < keys.length; ++i) {
	        var value = target[keys[i]];
	        if (keys[i] !== "constructor" &&
	            util.isClass(value)) {
	            promisifyAll(value.prototype, suffix, filter, promisifier);
	            promisifyAll(value, suffix, filter, promisifier);
	        }
	    }

	    return promisifyAll(target, suffix, filter, promisifier);
	};
	};



/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise) {
	var SomePromiseArray = Promise._SomePromiseArray;
	function any(promises) {
	    var ret = new SomePromiseArray(promises);
	    var promise = ret.promise();
	    ret.setHowMany(1);
	    ret.setUnwrap();
	    ret.init();
	    return promise;
	}

	Promise.any = function (promises) {
	    return any(promises);
	};

	Promise.prototype.any = function () {
	    return any(this);
	};

	};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseReduce = Promise.reduce;

	Promise.prototype.each = function (fn) {
	    return PromiseReduce(this, fn, null, INTERNAL);
	};

	Promise.each = function (promises, fn) {
	    return PromiseReduce(promises, fn, null, INTERNAL);
	};
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var util = __webpack_require__(4);
	var TimeoutError = Promise.TimeoutError;

	var afterTimeout = function (promise, message) {
	    if (!promise.isPending()) return;
	    
	    var err;
	    if(!util.isPrimitive(message) && (message instanceof Error)) {
	        err = message;
	    } else {
	        if (typeof message !== "string") {
	            message = "operation timed out";
	        }
	        err = new TimeoutError(message);
	    }
	    util.markAsOriginatingFromRejection(err);
	    promise._attachExtraTrace(err);
	    promise._cancel(err);
	};

	var afterValue = function(value) { return delay(+this).thenReturn(value); };
	var delay = Promise.delay = function (value, ms) {
	    if (ms === undefined) {
	        ms = value;
	        value = undefined;
	        var ret = new Promise(INTERNAL);
	        setTimeout(function() { ret._fulfill(); }, ms);
	        return ret;
	    }
	    ms = +ms;
	    return Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
	};

	Promise.prototype.delay = function (ms) {
	    return delay(this, ms);
	};

	function successClear(value) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    return value;
	}

	function failureClear(reason) {
	    var handle = this;
	    if (handle instanceof Number) handle = +handle;
	    clearTimeout(handle);
	    throw reason;
	}

	Promise.prototype.timeout = function (ms, message) {
	    ms = +ms;
	    var ret = this.then().cancellable();
	    ret._cancellationParent = this;
	    var handle = setTimeout(function timeoutTimeout() {
	        afterTimeout(ret, message);
	    }, ms);
	    return ret._then(successClear, failureClear, undefined, handle, undefined);
	};

	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	module.exports = function(Promise, INTERNAL) {
	var PromiseMap = Promise.map;

	Promise.prototype.filter = function (fn, options) {
	    return PromiseMap(this, fn, options, INTERNAL);
	};

	Promise.filter = function (promises, fn, options) {
	    return PromiseMap(promises, fn, options, INTERNAL);
	};
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	var error, net, rethinkdb;

	net = __webpack_require__(41);

	rethinkdb = __webpack_require__(52);

	error = __webpack_require__(48);

	rethinkdb.connect = net.connect;

	rethinkdb.Error = error;

	rethinkdb._bluebird = __webpack_require__(2);

	module.exports = rethinkdb;

	module.exports.net = net;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	var Connection, HANDSHAKE_AUTHFAIL, HANDSHAKE_SUCCESS, HttpConnection, Promise, TcpConnection, ar, aropt, crypto, cursors, err, events, mkAtom, mkErr, net, pbkdf2_cache, protoProtocol, protoQueryType, protoResponseType, protoVersion, protoVersionNumber, protodef, r, tls, util, varar,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	net = __webpack_require__(42);

	tls = __webpack_require__(45);

	events = __webpack_require__(46);

	util = __webpack_require__(47);

	err = __webpack_require__(48);

	cursors = __webpack_require__(50);

	protodef = __webpack_require__(49);

	crypto = __webpack_require__(51);

	protoVersion = protodef.VersionDummy.Version.V1_0;

	protoVersionNumber = 0;

	protoProtocol = protodef.VersionDummy.Protocol.JSON;

	protoQueryType = protodef.Query.QueryType;

	protoResponseType = protodef.Response.ResponseType;

	r = __webpack_require__(52);

	Promise = __webpack_require__(2);

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	mkAtom = util.mkAtom;

	mkErr = util.mkErr;

	HANDSHAKE_SUCCESS = "SUCCESS";

	HANDSHAKE_AUTHFAIL = "ERROR: Incorrect authorization key.\n";

	Connection = (function(superClass) {
	  extend(Connection, superClass);

	  Connection.prototype.DEFAULT_HOST = 'localhost';

	  Connection.prototype.DEFAULT_PORT = 28015;

	  Connection.prototype.DEFAULT_AUTH_KEY = '';

	  Connection.prototype.DEFAULT_TIMEOUT = 20;

	  function Connection(host, callback) {
	    var conCallback, errCallback;
	    if (typeof host === 'undefined') {
	      host = {};
	    } else if (typeof host === 'string') {
	      host = {
	        host: host
	      };
	    }
	    this.host = host.host || this.DEFAULT_HOST;
	    this.port = host.port || this.DEFAULT_PORT;
	    this.db = host.db;
	    this.authKey = host.authKey || this.DEFAULT_AUTH_KEY;
	    this.timeout = host.timeout || this.DEFAULT_TIMEOUT;
	    if (typeof host.ssl === 'boolean' && host.ssl) {
	      this.ssl = {};
	    } else if (typeof host.ssl === 'object') {
	      this.ssl = host.ssl;
	    } else {
	      this.ssl = false;
	    }
	    this.outstandingCallbacks = {};
	    this.nextToken = 1;
	    this.open = false;
	    this.closing = false;
	    this.buffer = new Buffer(0);
	    this._events = this._events || {};
	    errCallback = (function(_this) {
	      return function(e) {
	        _this.removeListener('connect', conCallback);
	        if (e instanceof err.ReqlError) {
	          return callback(e);
	        } else {
	          return callback(new err.ReqlDriverError("Could not connect to " + _this.host + ":" + _this.port + ".\n" + e.message));
	        }
	      };
	    })(this);
	    this.once('error', errCallback);
	    conCallback = (function(_this) {
	      return function() {
	        _this.removeListener('error', errCallback);
	        _this.open = true;
	        return callback(null, _this);
	      };
	    })(this);
	    this.once('connect', conCallback);
	    this._closePromise = null;
	  }

	  Connection.prototype._data = function(buf) {
	    var response, responseBuffer, responseLength, results, token;
	    this.buffer = Buffer.concat([this.buffer, buf]);
	    results = [];
	    while (this.buffer.length >= 12) {
	      token = this.buffer.readUInt32LE(0) + 0x100000000 * this.buffer.readUInt32LE(4);
	      responseLength = this.buffer.readUInt32LE(8);
	      if (!(this.buffer.length >= (12 + responseLength))) {
	        break;
	      }
	      responseBuffer = this.buffer.slice(12, responseLength + 12);
	      response = JSON.parse(responseBuffer);
	      this._processResponse(response, token);
	      results.push(this.buffer = this.buffer.slice(12 + responseLength));
	    }
	    return results;
	  };

	  Connection.prototype._delQuery = function(token) {
	    return delete this.outstandingCallbacks[token];
	  };

	  Connection.prototype._processResponse = function(response, token) {
	    var cb, cursor, errType, feed, k, len1, note, opts, profile, ref, ref1, root;
	    profile = response.p;
	    if (this.outstandingCallbacks[token] != null) {
	      ref = this.outstandingCallbacks[token], cb = ref.cb, root = ref.root, cursor = ref.cursor, opts = ref.opts, feed = ref.feed;
	      if (cursor != null) {
	        cursor._addResponse(response);
	        if (cursor._endFlag && cursor._outstandingRequests === 0) {
	          return this._delQuery(token);
	        }
	      } else if (cb != null) {
	        switch (response.t) {
	          case protoResponseType.COMPILE_ERROR:
	            cb(mkErr(err.ReqlServerCompileError, response, root));
	            return this._delQuery(token);
	          case protoResponseType.CLIENT_ERROR:
	            cb(mkErr(err.ReqlDriverError, response, root));
	            return this._delQuery(token);
	          case protoResponseType.RUNTIME_ERROR:
	            errType = util.errorClass(response.e);
	            cb(mkErr(errType, response, root));
	            return this._delQuery(token);
	          case protoResponseType.SUCCESS_ATOM:
	            response = mkAtom(response, opts);
	            if (Array.isArray(response)) {
	              response = cursors.makeIterable(response);
	            }
	            if (profile != null) {
	              response = {
	                profile: profile,
	                value: response
	              };
	            }
	            cb(null, response);
	            return this._delQuery(token);
	          case protoResponseType.SUCCESS_PARTIAL:
	            cursor = null;
	            ref1 = response.n;
	            for (k = 0, len1 = ref1.length; k < len1; k++) {
	              note = ref1[k];
	              switch (note) {
	                case protodef.Response.ResponseNote.SEQUENCE_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.Feed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.UNIONED_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.UnionedFeed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.ATOM_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.AtomFeed(this, token, opts, root);
	                  }
	                  break;
	                case protodef.Response.ResponseNote.ORDER_BY_LIMIT_FEED:
	                  if (cursor == null) {
	                    cursor = new cursors.OrderByLimitFeed(this, token, opts, root);
	                  }
	              }
	            }
	            if (cursor == null) {
	              cursor = new cursors.Cursor(this, token, opts, root);
	            }
	            this.outstandingCallbacks[token].cursor = cursor;
	            if (profile != null) {
	              return cb(null, {
	                profile: profile,
	                value: cursor._addResponse(response)
	              });
	            } else {
	              return cb(null, cursor._addResponse(response));
	            }
	            break;
	          case protoResponseType.SUCCESS_SEQUENCE:
	            cursor = new cursors.Cursor(this, token, opts, root);
	            this._delQuery(token);
	            if (profile != null) {
	              return cb(null, {
	                profile: profile,
	                value: cursor._addResponse(response)
	              });
	            } else {
	              return cb(null, cursor._addResponse(response));
	            }
	            break;
	          case protoResponseType.WAIT_COMPLETE:
	            this._delQuery(token);
	            return cb(null, null);
	          case protoResponseType.SERVER_INFO:
	            this._delQuery(token);
	            response = mkAtom(response, opts);
	            return cb(null, response);
	          default:
	            return cb(new err.ReqlDriverError("Unknown response type"));
	        }
	      }
	    } else {

	    }
	  };

	  Connection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, key, noreplyWait, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      if (Object.prototype.toString.call(opts) !== '[object Object]') {
	        throw new err.ReqlDriverError("First argument to two-argument `close` must be an object.");
	      }
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else if (typeof optsOrCallback === 'function') {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      opts = optsOrCallback;
	      cb = null;
	    }
	    for (key in opts) {
	      if (!hasProp.call(opts, key)) continue;
	      if (key !== 'noreplyWait') {
	        throw new err.ReqlDriverError("First argument to two-argument `close` must be { noreplyWait: <bool> }.");
	      }
	    }
	    if (this._closePromise != null) {
	      return this._closePromise.nodeify(cb);
	    }
	    this.closing = true;
	    noreplyWait = ((opts.noreplyWait == null) || opts.noreplyWait) && this.open;
	    return this._closePromise = new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(err, result) {
	          _this.open = false;
	          _this.closing = false;
	          _this.cancel();
	          if (err != null) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        if (noreplyWait) {
	          return _this.noreplyWait(wrappedCb);
	        } else {
	          return wrappedCb();
	        }
	      };
	    })(this)).nodeify(cb);
	  });

	  Connection.prototype.noreplyWait = varar(0, 1, function(callback) {
	    var query, token;
	    if (!this.open) {
	      return new Promise(function(resolve, reject) {
	        return reject(new err.ReqlDriverError("Connection is closed."));
	      }).nodeify(callback);
	    }
	    token = this.nextToken++;
	    query = {};
	    query.type = protoQueryType.NOREPLY_WAIT;
	    query.token = token;
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(err, result) {
	          if (err) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        _this.outstandingCallbacks[token] = {
	          cb: wrappedCb,
	          root: null,
	          opts: null
	        };
	        return _this._sendQuery(query);
	      };
	    })(this)).nodeify(callback);
	  });

	  Connection.prototype.server = varar(0, 1, function(callback) {
	    var query, token;
	    if (!this.open) {
	      return new Promise(function(resolve, reject) {
	        return reject(new err.ReqlDriverError("Connection is closed."));
	      }).nodeify(callback);
	    }
	    token = this.nextToken++;
	    query = {};
	    query.type = protoQueryType.SERVER_INFO;
	    query.token = token;
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(err, result) {
	          if (err) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        _this.outstandingCallbacks[token] = {
	          cb: wrappedCb,
	          root: null,
	          opts: null
	        };
	        return _this._sendQuery(query);
	      };
	    })(this)).nodeify(callback);
	  });

	  Connection.prototype.cancel = ar(function() {
	    var key, ref, response, value;
	    response = {
	      t: protoResponseType.RUNTIME_ERROR,
	      r: ["Connection is closed."],
	      b: []
	    };
	    ref = this.outstandingCallbacks;
	    for (key in ref) {
	      if (!hasProp.call(ref, key)) continue;
	      value = ref[key];
	      if (value.cursor != null) {
	        value.cursor._addResponse(response);
	      } else if (value.cb != null) {
	        value.cb(mkErr(util.errorClass(response.e), response, value.root));
	      }
	    }
	    return this.outstandingCallbacks = {};
	  });

	  Connection.prototype.reconnect = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (typeof optsOrCallback === "function") {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      if (optsOrCallback != null) {
	        opts = optsOrCallback;
	      } else {
	        opts = {};
	      }
	      cb = callback;
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var closeCb;
	        closeCb = function(err) {
	          return _this.constructor.call(_this, {
	            host: _this.host,
	            port: _this.port,
	            timeout: _this.timeout,
	            authKey: _this.authKey
	          }, function(err, conn) {
	            if (err != null) {
	              return reject(err);
	            } else {
	              return resolve(conn);
	            }
	          });
	        };
	        return _this.close(opts, closeCb);
	      };
	    })(this)).nodeify(cb);
	  });

	  Connection.prototype.use = ar(function(db) {
	    return this.db = db;
	  });

	  Connection.prototype.isOpen = function() {
	    return this.open && !this.closing;
	  };

	  Connection.prototype._start = function(term, cb, opts) {
	    var key, query, token, value;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    token = this.nextToken++;
	    query = {};
	    query.global_optargs = {};
	    query.type = protoQueryType.START;
	    query.query = term.build();
	    query.token = token;
	    for (key in opts) {
	      if (!hasProp.call(opts, key)) continue;
	      value = opts[key];
	      query.global_optargs[util.fromCamelCase(key)] = r.expr(value).build();
	    }
	    if ((opts.db != null) || (this.db != null)) {
	      query.global_optargs.db = r.db(opts.db || this.db).build();
	    }
	    if (opts.noreply != null) {
	      query.global_optargs['noreply'] = r.expr(!!opts.noreply).build();
	    }
	    if (opts.profile != null) {
	      query.global_optargs['profile'] = r.expr(!!opts.profile).build();
	    }
	    if ((opts.noreply == null) || !opts.noreply) {
	      this.outstandingCallbacks[token] = {
	        cb: cb,
	        root: term,
	        opts: opts
	      };
	    }
	    this._sendQuery(query);
	    if ((opts.noreply != null) && opts.noreply && typeof cb === 'function') {
	      return cb(null);
	    }
	  };

	  Connection.prototype._continueQuery = function(token) {
	    var query;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    query = {
	      type: protoQueryType.CONTINUE,
	      token: token
	    };
	    return this._sendQuery(query);
	  };

	  Connection.prototype._endQuery = function(token) {
	    var query;
	    if (!this.open) {
	      throw new err.ReqlDriverError("Connection is closed.");
	    }
	    query = {
	      type: protoQueryType.STOP,
	      token: token
	    };
	    return this._sendQuery(query);
	  };

	  Connection.prototype._sendQuery = function(query) {
	    var data;
	    data = [query.type];
	    if (!(query.query === void 0)) {
	      data.push(query.query);
	      if ((query.global_optargs != null) && Object.keys(query.global_optargs).length > 0) {
	        data.push(query.global_optargs);
	      }
	    }
	    return this._writeQuery(query.token, JSON.stringify(data));
	  };

	  return Connection;

	})(events.EventEmitter);

	pbkdf2_cache = {};

	TcpConnection = (function(superClass) {
	  extend(TcpConnection, superClass);

	  TcpConnection.isAvailable = function() {
	    return !process.browser;
	  };

	  function TcpConnection(host, callback) {
	    var timeout;
	    if (!TcpConnection.isAvailable()) {
	      throw new err.ReqlDriverError("TCP sockets are not available in this environment");
	    }
	    TcpConnection.__super__.constructor.call(this, host, callback);
	    if (this.ssl) {
	      this.ssl.host = this.host;
	      this.ssl.port = this.port;
	      this.rawSocket = tls.connect(this.ssl);
	    } else {
	      this.rawSocket = net.connect(this.port, this.host);
	    }
	    this.rawSocket.setNoDelay();
	    this.rawSocket.setKeepAlive(true);
	    timeout = setTimeout(((function(_this) {
	      return function() {
	        _this.rawSocket.destroy();
	        return _this.emit('error', new err.ReqlTimeoutError("Could not connect to " + _this.host + ":" + _this.port + ", operation timed out."));
	      };
	    })(this)), this.timeout * 1000);
	    this.rawSocket.once('error', (function(_this) {
	      return function() {
	        return clearTimeout(timeout);
	      };
	    })(this));
	    this.rawSocket.once('connect', (function(_this) {
	      return function() {
	        var auth_i, auth_r, auth_salt, client_first_message_bare, compare_digest, handshake_callback, handshake_error, max, message, min, nullbyte, pbkdf2_hmac, protocol, r_string, server_first_message, server_signature, state, version, xor_bytes;
	        version = new Buffer(4);
	        version.writeUInt32LE(protoVersion, 0);
	        protocol = new Buffer(4);
	        protocol.writeUInt32LE(protoProtocol, 0);
	        r_string = new Buffer(crypto.randomBytes(18)).toString('base64');
	        _this.rawSocket.user = host["user"];
	        _this.rawSocket.password = host["password"];
	        if (_this.rawSocket.user === void 0) {
	          _this.rawSocket.user = "admin";
	        }
	        if (_this.rawSocket.password === void 0) {
	          _this.rawSocket.password = "";
	        }
	        client_first_message_bare = "n=" + _this.rawSocket.user + ",r=" + r_string;
	        message = JSON.stringify({
	          protocol_version: protoVersionNumber,
	          authentication_method: "SCRAM-SHA-256",
	          authentication: "n,," + client_first_message_bare
	        });
	        nullbyte = new Buffer('\0', "binary");
	        _this.rawSocket.write(Buffer.concat([version, Buffer(message.toString()), nullbyte]));
	        state = 1;
	        min = 0;
	        max = 0;
	        server_first_message = "";
	        server_signature = "";
	        auth_r = "";
	        auth_salt = "";
	        auth_i = 0;
	        xor_bytes = function(a, b) {
	          var i, k, len, ref, res;
	          res = [];
	          len = Math.min(a.length, b.length);
	          for (i = k = 0, ref = len; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
	            res.push(a[i] ^ b[i]);
	          }
	          return new Buffer(res);
	        };
	        pbkdf2_hmac = function(password, salt, iterations) {
	          var c, cache_string, k, mac, ref, t, u;
	          cache_string = password.toString("base64") + "," + salt.toString("base64") + "," + iterations.toString();
	          if (pbkdf2_cache[cache_string]) {
	            return pbkdf2_cache[cache_string];
	          }
	          mac = crypto.createHmac("sha256", password);
	          mac.update(salt);
	          mac.update("\x00\x00\x00\x01");
	          u = mac.digest();
	          t = u;
	          for (c = k = 0, ref = iterations - 1; 0 <= ref ? k < ref : k > ref; c = 0 <= ref ? ++k : --k) {
	            mac = crypto.createHmac("sha256", password);
	            mac.update(t);
	            t = mac.digest();
	            u = xor_bytes(u, t);
	          }
	          pbkdf2_cache[cache_string] = u;
	          return u;
	        };
	        compare_digest = function(a, b) {
	          var i, k, left, len, ref, result, right;
	          left = void 0;
	          right = b;
	          result = void 0;
	          if (a.length === b.length) {
	            left = a;
	            result = 0;
	          }
	          if (a.length !== b.length) {
	            left = b;
	            result = 1;
	          }
	          len = Math.min(left.length, right.length);
	          for (i = k = 0, ref = len; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
	            result |= left[i] ^ right[i];
	          }
	          return result === 0;
	        };
	        handshake_error = function(code, message) {
	          if ((10 <= code && code <= 20)) {
	            return _this.emit('error', new err.ReqlAuthError(message));
	          } else {
	            return _this.emit('error', new err.ReqlDriverError(message));
	          }
	        };
	        handshake_callback = function(buf) {
	          var auth_message, authentication, b, client_final_message_without_proof, client_key, client_proof, client_signature, error1, first_equals, i, item, j, json_error, k, l, len1, len2, ref, ref1, salted_password, server_key, server_reply, status_buf, status_str, stored_key, v;
	          _this.buffer = Buffer.concat([_this.buffer, buf]);
	          j = 0;
	          ref = _this.buffer;
	          for (i = k = 0, len1 = ref.length; k < len1; i = ++k) {
	            b = ref[i];
	            if (b === 0) {
	              status_buf = _this.buffer.slice(j, i);
	              j = i + 1;
	              status_str = status_buf.toString();
	              try {
	                server_reply = JSON.parse(status_str);
	              } catch (error1) {
	                json_error = error1;
	                throw new err.ReqlDriverError(status_str);
	              }
	              if (state === 1) {
	                if (!server_reply.success) {
	                  handshake_error(server_reply.error_code, server_reply.error);
	                  return;
	                }
	                min = server_reply.min_protocol_version;
	                max = server_reply.max_protocol_version;
	                if (min > protoVersionNumber || max < protoVersionNumber) {
	                  throw new err.ReqlDriverError("Unsupported protocol version " + protoVersionNumber + ", expected between " + min + " and " + max + ".");
	                }
	                state = 2;
	              } else if (state === 2) {
	                if (!server_reply.success) {
	                  handshake_error(server_reply.error_code, server_reply.error);
	                  return;
	                }
	                authentication = {};
	                server_first_message = server_reply.authentication;
	                ref1 = server_first_message.split(",");
	                for (l = 0, len2 = ref1.length; l < len2; l++) {
	                  item = ref1[l];
	                  i = item.indexOf("=");
	                  authentication[item.slice(0, i)] = item.slice(i + 1);
	                }
	                auth_r = authentication.r;
	                auth_salt = new Buffer(authentication.s, 'base64');
	                auth_i = parseInt(authentication.i);
	                if (!(auth_r.substr(0, r_string.length) === r_string)) {
	                  throw new err.ReqlAuthError("Invalid nonce from server");
	                }
	                client_final_message_without_proof = "c=biws,r=" + auth_r;
	                salted_password = pbkdf2_hmac(_this.rawSocket.password, auth_salt, auth_i);
	                client_key = crypto.createHmac("sha256", salted_password).update("Client Key").digest();
	                stored_key = crypto.createHash("sha256").update(client_key).digest();
	                auth_message = client_first_message_bare + "," + server_first_message + "," + client_final_message_without_proof;
	                client_signature = crypto.createHmac("sha256", stored_key).update(auth_message).digest();
	                client_proof = xor_bytes(client_key, client_signature);
	                server_key = crypto.createHmac("sha256", salted_password).update("Server Key").digest();
	                server_signature = crypto.createHmac("sha256", server_key).update(auth_message).digest();
	                state = 3;
	                message = JSON.stringify({
	                  authentication: client_final_message_without_proof + ",p=" + client_proof.toString("base64")
	                });
	                nullbyte = new Buffer('\0', "binary");
	                _this.rawSocket.write(Buffer.concat([Buffer(message.toString()), nullbyte]));
	              } else if (state === 3) {
	                if (!server_reply.success) {
	                  handshake_error(server_reply.error_code, server_reply.error);
	                  return;
	                }
	                first_equals = server_reply.authentication.indexOf('=');
	                v = server_reply.authentication.slice(first_equals + 1);
	                if (!compare_digest(v, server_signature.toString("base64"))) {
	                  throw new err.ReqlAuthError("Invalid server signature");
	                }
	                state = 4;
	                _this.rawSocket.removeListener('data', handshake_callback);
	                _this.rawSocket.on('data', function(buf) {
	                  return _this._data(buf);
	                });
	                clearTimeout(timeout);
	                _this.emit('connect');
	              } else {
	                throw new err.ReqlDriverError("Unexpected handshake state");
	              }
	            }
	          }
	          return _this.buffer = _this.buffer.slice(j + 1);
	        };
	        return _this.rawSocket.on('data', handshake_callback);
	      };
	    })(this));
	    this.rawSocket.on('error', (function(_this) {
	      return function(err) {
	        return _this.emit('error', err);
	      };
	    })(this));
	    this.rawSocket.on('close', (function(_this) {
	      return function() {
	        if (_this.isOpen()) {
	          _this.close({
	            noreplyWait: false
	          });
	        }
	        return _this.emit('close');
	      };
	    })(this));
	    this.rawSocket.on('timeout', (function(_this) {
	      return function() {
	        _this.open = false;
	        return _this.emit('timeout');
	      };
	    })(this));
	  }

	  TcpConnection.prototype.clientPort = function() {
	    return this.rawSocket.localPort;
	  };

	  TcpConnection.prototype.clientAddress = function() {
	    return this.rawSocket.localAddress;
	  };

	  TcpConnection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else if (typeof optsOrCallback === "function") {
	      opts = {};
	      cb = optsOrCallback;
	    } else {
	      opts = {};
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var wrappedCb;
	        wrappedCb = function(error, result) {
	          var cleanupSocket, closeCb, ref;
	          closeCb = function() {
	            if (error != null) {
	              return reject(error);
	            } else {
	              return resolve(result);
	            }
	          };
	          cleanupSocket = function() {
	            var ref;
	            closeCb();
	            if ((ref = _this.rawSocket) != null) {
	              ref.removeAllListeners();
	            }
	            _this.rawSocket = null;
	            return _this.emit("close");
	          };
	          if (_this.rawSocket != null) {
	            if (_this.rawSocket.readyState === 'closed') {
	              return cleanupSocket();
	            } else {
	              if ((ref = _this.rawSocket) != null) {
	                ref.once("close", cleanupSocket);
	              }
	              return _this.rawSocket.end();
	            }
	          } else {
	            return process.nextTick(closeCb);
	          }
	        };
	        return TcpConnection.__super__.close.call(_this, opts, wrappedCb);
	      };
	    })(this)).nodeify(cb);
	  });

	  TcpConnection.prototype.cancel = function() {
	    this.rawSocket.destroy();
	    return TcpConnection.__super__.cancel.call(this);
	  };

	  TcpConnection.prototype._writeQuery = function(token, data) {
	    var tokenBuf;
	    tokenBuf = new Buffer(8);
	    tokenBuf.writeUInt32LE(token & 0xFFFFFFFF, 0);
	    tokenBuf.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4);
	    this.rawSocket.write(tokenBuf);
	    return this.write(new Buffer(data));
	  };

	  TcpConnection.prototype.write = function(chunk) {
	    var lengthBuffer;
	    lengthBuffer = new Buffer(4);
	    lengthBuffer.writeUInt32LE(chunk.length, 0);
	    this.rawSocket.write(lengthBuffer);
	    return this.rawSocket.write(chunk);
	  };

	  return TcpConnection;

	})(Connection);

	HttpConnection = (function(superClass) {
	  extend(HttpConnection, superClass);

	  HttpConnection.prototype.DEFAULT_PROTOCOL = 'http';

	  HttpConnection.isAvailable = function() {
	    return typeof XMLHttpRequest !== "undefined";
	  };

	  function HttpConnection(host, callback) {
	    var protocol, url, xhr;
	    if (!HttpConnection.isAvailable()) {
	      throw new err.ReqlDriverError("XMLHttpRequest is not available in this environment");
	    }
	    HttpConnection.__super__.constructor.call(this, host, callback);
	    protocol = host.protocol === 'https' ? 'https' : this.DEFAULT_PROTOCOL;
	    url = protocol + "://" + this.host + ":" + this.port + host.pathname + "ajax/reql/";
	    xhr = new XMLHttpRequest;
	    xhr.open("POST", url + ("open-new-connection?cacheBuster=" + (Math.random())), true);
	    xhr.responseType = "text";
	    xhr.onreadystatechange = (function(_this) {
	      return function(e) {
	        if (xhr.readyState === 4) {
	          if (xhr.status === 200) {
	            _this._url = url;
	            _this._connId = xhr.response;
	            return _this.emit('connect');
	          } else {
	            return _this.emit('error', new err.ReqlDriverError("XHR error, http status " + xhr.status + "."));
	          }
	        }
	      };
	    })(this);
	    xhr.send();
	    this.xhr = xhr;
	  }

	  HttpConnection.prototype.cancel = function() {
	    var xhr;
	    if (this._connId != null) {
	      this.xhr.abort();
	      xhr = new XMLHttpRequest;
	      xhr.open("POST", this._url + "close-connection?conn_id=" + this._connId, true);
	      xhr.responseType = "arraybuffer";
	      xhr.send();
	      this._url = null;
	      this._connId = null;
	      return HttpConnection.__super__.cancel.call(this);
	    }
	  };

	  HttpConnection.prototype.close = varar(0, 2, function(optsOrCallback, callback) {
	    var cb, opts;
	    if (callback != null) {
	      opts = optsOrCallback;
	      cb = callback;
	    } else if (Object.prototype.toString.call(optsOrCallback) === '[object Object]') {
	      opts = optsOrCallback;
	      cb = null;
	    } else {
	      opts = {};
	      cb = optsOrCallback;
	    }
	    if (!((cb == null) || typeof cb === 'function')) {
	      throw new err.ReqlDriverError("Final argument to `close` must be a callback function or object.");
	    }
	    return HttpConnection.__super__.close.call(this, opts, cb);
	  });

	  HttpConnection.prototype._writeQuery = function(token, data) {
	    var buf;
	    buf = new Buffer(encodeURI(data).split(/%..|./).length - 1 + 8);
	    buf.writeUInt32LE(token & 0xFFFFFFFF, 0);
	    buf.writeUInt32LE(Math.floor(token / 0xFFFFFFFF), 4);
	    buf.write(data, 8);
	    return this.write(buf, token);
	  };

	  HttpConnection.prototype.write = function(chunk, token) {
	    var i, view, xhr;
	    xhr = new XMLHttpRequest;
	    xhr.open("POST", this._url + "?conn_id=" + this._connId, true);
	    xhr.responseType = "arraybuffer";
	    xhr.onreadystatechange = (function(_this) {
	      return function(e) {
	        var b, buf;
	        if (xhr.readyState === 4 && xhr.status === 200) {
	          buf = new Buffer((function() {
	            var k, len1, ref, results;
	            ref = new Uint8Array(xhr.response);
	            results = [];
	            for (k = 0, len1 = ref.length; k < len1; k++) {
	              b = ref[k];
	              results.push(b);
	            }
	            return results;
	          })());
	          return _this._data(buf);
	        }
	      };
	    })(this);
	    xhr.onerror = (function(_this) {
	      return function(e) {
	        return _this.outstandingCallbacks[token].cb(new Error("This HTTP connection is not open"));
	      };
	    })(this);
	    view = new Uint8Array(chunk.length);
	    i = 0;
	    while (i < chunk.length) {
	      view[i] = chunk[i];
	      i++;
	    }
	    xhr.send(view);
	    return this.xhr = xhr;
	  };

	  return HttpConnection;

	})(Connection);

	module.exports.isConnection = function(connection) {
	  return connection instanceof Connection;
	};

	module.exports.connect = varar(0, 2, function(hostOrCallback, callback) {
	  var host;
	  if (typeof hostOrCallback === 'function') {
	    host = {};
	    callback = hostOrCallback;
	  } else {
	    host = hostOrCallback || {};
	  }
	  return new Promise(function(resolve, reject) {
	    var create_connection, wrappedCb;
	    if ((host.authKey != null) && ((host.password != null) || (host.user != null) || (host.username != null))) {
	      throw new err.ReqlDriverError("Cannot use both authKey and password");
	    }
	    if (host.user && host.username) {
	      throw new err.ReqlDriverError("Cannot use both user and username");
	    } else if (host.authKey) {
	      host.user = "admin";
	      host.password = host.authKey;
	    } else {
	      if (host.username != null) {
	        host.user = host.username;
	      }
	    }
	    create_connection = (function(_this) {
	      return function(host, callback) {
	        if (TcpConnection.isAvailable()) {
	          return new TcpConnection(host, callback);
	        } else if (HttpConnection.isAvailable()) {
	          return new HttpConnection(host, callback);
	        } else {
	          throw new err.ReqlDriverError("Neither TCP nor HTTP avaiable in this environment");
	        }
	      };
	    })(this);
	    wrappedCb = function(err, result) {
	      if (err) {
	        return reject(err);
	      } else {
	        return resolve(result);
	      }
	    };
	    return create_connection(host, wrappedCb);
	  }).nodeify(callback);
	});

	module.exports.Connection = Connection;

	module.exports.HttpConnection = HttpConnection;

	module.exports.TcpConnection = TcpConnection;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.configureTcpPolyfill = configureTcpPolyfill;
	exports.Socket = Socket;
	exports.connect = connect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _blobToBuffer = __webpack_require__(43);

	var _blobToBuffer2 = _interopRequireDefault(_blobToBuffer);

	var _eventemitter2 = __webpack_require__(44);

	var _eventemitter22 = _interopRequireDefault(_eventemitter2);

	var tcpPolyfillOptions = {
	  path: '/',
	  secure: false,
	  wsProtocols: undefined,
	  wsBinaryType: undefined,
	  simulatedLatencyMs: undefined
	};

	var notImpl = function notImpl(name) {
	  return function () {
	    throw new Error('Not implemented in TcpPolyfill: ' + name);
	  };
	};

	function configureTcpPolyfill(options) {
	  tcpPolyfillOptions.path = options.path;
	  tcpPolyfillOptions.secure = options.secure;
	  tcpPolyfillOptions.wsProtocols = options.wsProtocols;
	  tcpPolyfillOptions.wsBinaryType = options.wsBinaryType;
	  tcpPolyfillOptions.simulatedLatencyMs = options.simulatedLatencyMs;
	}

	function Socket(options) {
	  var _this = this;

	  if (!(this instanceof Socket)) {
	    return new Socket(options);
	  }

	  var emitter = new _eventemitter22['default']({});
	  ['on', 'once', 'removeListener', 'emit', 'addListener', 'removeAllListeners', 'setMaxListeners', 'listeners'].forEach(function (method) {
	    _this[method] = emitter[method].bind(emitter);
	  });

	  var ws = null;

	  this.connect = function (port, host, connectListener) {
	    _this._simulatedLatencyMs = tcpPolyfillOptions.simulatedLatencyMs;
	    var protocol = tcpPolyfillOptions.secure ? 'wss' : 'ws';
	    var path = tcpPolyfillOptions.path;
	    var url = protocol + '://' + host + ':' + port + path;
	    ws = new WebSocket(url, tcpPolyfillOptions.wsProtocols);

	    if (tcpPolyfillOptions.wsBinaryType) {
	      ws.binaryType = tcpPolyfillOptions.wsBinaryType;
	    }

	    if (connectListener) {
	      emitter.on('connect', connectListener);
	    }

	    ws.onopen = function (event) {
	      emitter.emit('connect');
	    };

	    ws.onclose = function (event) {
	      emitter.emit('end');
	      emitter.emit('close');
	    };

	    ws.onerror = function (event) {
	      emitter.emit('error', event);
	    };

	    ws.onmessage = function (event) {
	      var data = event.data;

	      // Handle incoming message as base64 if ws.protocol is set to base64
	      // or if it's not set at all and we are in a problematic React Native
	      // environment per:
	      //
	      // https://tools.ietf.org/html/rfc6455#section-11.3.4
	      // https://tools.ietf.org/html/rfc3864
	      //
	      // We check if this process is running inside React Native by using navigator.product:
	      //
	      // https://github.com/facebook/react-native/commit/3c65e62183ce05893be0822da217cb803b121c61

	      var base64SetByWsClient = typeof data === 'string' && ws.protocol === 'base64';

	      var base64SetByUser = tcpPolyfillOptions.wsProtocols && tcpPolyfillOptions.wsProtocols.constructor === Array && tcpPolyfillOptions.wsProtocols.indexOf('base64') >= 0;

	      var isRN = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

	      var base64Workaround = isRN && base64SetByUser && !ws.protocol;

	      var handleBase64 = base64SetByWsClient || base64Workaround;

	      if (typeof Blob !== 'undefined' && data instanceof Blob) {
	        (0, _blobToBuffer2['default'])(data, function (err, buffer) {
	          if (err) {
	            throw err;
	          }
	          emitter.emit('data', buffer);
	        });
	      } else if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
	        emitter.emit('data', Buffer.from(data));
	      } else if (handleBase64) {
	        emitter.emit('data', new Buffer(data, 'base64'));
	      } else {
	        emitter.emit('data', data);
	      }
	    };
	  };

	  this.end = function (data) {
	    if (data !== undefined) {
	      _this.write(data);
	    }
	    ws.close();
	  };

	  this.destroy = function () {
	    ws.close();
	  };

	  this.write = function (data) {
	    // Convert data (string or node.js Buffer) to ArrayBuffer or base64 string
	    // for WebSocket
	    var outgoingMessage = null;
	    if (ws.protocol === 'base64') {
	      outgoingMessage = new Buffer(data).toString('base64');
	    } else {
	      var arrayBuffer = new ArrayBuffer(data.length);
	      var view = new Uint8Array(arrayBuffer);
	      for (var i = 0; i < data.length; ++i) {
	        view[i] = data[i];
	      }
	      outgoingMessage = arrayBuffer;
	    }
	    var delay = _this._simulatedLatencyMs;
	    if (typeof delay === 'number' && delay > 0) {
	      setTimeout(function () {
	        return ws.send(outgoingMessage);
	      }, delay);
	    } else {
	      ws.send(outgoingMessage);
	    }
	  };

	  this.setNoDelay = function (noDelay) {};
	  this.setKeepAlive = function (enable, initialDelay) {};

	  var notImplMethods = ['setEncoding', 'pause', 'resume', 'setTimeout', 'address', 'unref', 'ref'];
	  notImplMethods.forEach(function (name) {
	    _this[name] = notImpl(name);
	  });
	}

	function connect() {
	  var opts = {};
	  if (arguments[0] && typeof arguments[0] === 'object') {
	    opts.port = arguments[0].port;
	    opts.host = arguments[0].host;
	    opts.connectListener = arguments[1];
	  } else if (Number(arguments[0]) > 0) {
	    opts.port = arguments[0];
	    opts.host = arguments[1];
	    opts.connectListener = arguments[2];
	  } else {
	    throw new Error('Unsupported arguments for net.connect');
	  }
	  var socket = new Socket();
	  socket.connect(opts.port, opts.host, opts.connectListener);
	  return socket;
	}

	var createConnection = connect;

	exports.createConnection = createConnection;
	var createServer = notImpl('createServer');

	exports.createServer = createServer;
	// This is wrong, but irrelevant for connecting via websocket
	var isIPv4 = function isIPv4(input) {
	  return true;
	};
	exports.isIPv4 = isIPv4;
	var isIPv6 = function isIPv6(input) {
	  return false;
	};
	exports.isIPv6 = isIPv6;
	var isIP = function isIP(input) {
	  return isIPv4(input) ? 4 : isIPv6(input) ? 6 : 0;
	};
	exports.isIP = isIP;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/* global Blob, FileReader */

	module.exports = function blobToBuffer (blob, cb) {
	  if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
	    throw new Error('first argument must be a Blob')
	  }
	  if (typeof cb !== 'function') {
	    throw new Error('second argument must be a function')
	  }

	  var reader = new FileReader()

	  function onLoadEnd (e) {
	    reader.removeEventListener('loadend', onLoadEnd, false)
	    if (e.error) cb(e.error)
	    else cb(null, Buffer.from(reader.result))
	  }

	  reader.addEventListener('loadend', onLoadEnd, false)
	  reader.readAsArrayBuffer(blob)
	}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!function(undefined) {

	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;

	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }

	  function configure(conf) {
	    if (conf) {

	      this._conf = conf;

	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);

	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }

	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }

	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }

	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }

	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }

	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }

	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }

	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }

	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }

	    return listeners;
	  }

	  function growListenerTree(type, listener) {

	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }

	    var tree = this.listenerTree;
	    var name = type.shift();

	    while (name) {

	      if (!tree[name]) {
	        tree[name] = {};
	      }

	      tree = tree[name];

	      if (type.length === 0) {

	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else if(typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        }
	        else if (isArray(tree._listeners)) {

	          tree._listeners.push(listener);

	          if (!tree._listeners.warned) {

	            var m = defaultMaxListeners;

	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }

	            if (m > 0 && tree._listeners.length > m) {

	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' +
	                            'leak detected. %d listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit.',
	                            tree._listeners.length);
	              console.trace();
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }

	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.

	  EventEmitter.prototype.delimiter = '.';

	  EventEmitter.prototype.setMaxListeners = function(n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };

	  EventEmitter.prototype.event = '';

	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };

	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;

	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }

	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }

	    listener._origin = fn;

	    this.on(event, listener);

	    return self;
	  };

	  EventEmitter.prototype.emit = function() {

	    this._events || init.call(this);

	    var type = arguments[0];

	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) { return false; }
	    }

	    // Loop through the *_all* functions and invoke them.
	    if (this._all) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        this._all[i].apply(this, args);
	      }
	    }

	    // If there is no 'error' event listener then throw.
	    if (type === 'error') {

	      if (!this._all &&
	        !this._events.error &&
	        !(this.wildcard && this.listenerTree.error)) {

	        if (arguments[1] instanceof Error) {
	          throw arguments[1]; // Unhandled 'error' event
	        } else {
	          throw new Error("Uncaught, unspecified 'error' event.");
	        }
	        return false;
	      }
	    }

	    var handler;

	    if(this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    }
	    else {
	      handler = this._events[type];
	    }

	    if (typeof handler === 'function') {
	      this.event = type;
	      if (arguments.length === 1) {
	        handler.call(this);
	      }
	      else if (arguments.length > 1)
	        switch (arguments.length) {
	          case 2:
	            handler.call(this, arguments[1]);
	            break;
	          case 3:
	            handler.call(this, arguments[1], arguments[2]);
	            break;
	          // slower
	          default:
	            var l = arguments.length;
	            var args = new Array(l - 1);
	            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
	            handler.apply(this, args);
	        }
	      return true;
	    }
	    else if (handler) {
	      var l = arguments.length;
	      var args = new Array(l - 1);
	      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

	      var listeners = handler.slice();
	      for (var i = 0, l = listeners.length; i < l; i++) {
	        this.event = type;
	        listeners[i].apply(this, args);
	      }
	      return (listeners.length > 0) || !!this._all;
	    }
	    else {
	      return !!this._all;
	    }

	  };

	  EventEmitter.prototype.on = function(type, listener) {

	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }

	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);

	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);

	    if(this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }

	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else if(typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    }
	    else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);

	      // Check for listener leak
	      if (!this._events[type].warned) {

	        var m = defaultMaxListeners;

	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }

	        if (m > 0 && this._events[type].length > m) {

	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' +
	                        'leak detected. %d listeners added. ' +
	                        'Use emitter.setMaxListeners() to increase limit.',
	                        this._events[type].length);
	          console.trace();
	        }
	      }
	    }
	    return this;
	  };

	  EventEmitter.prototype.onAny = function(fn) {

	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }

	    if(!this._all) {
	      this._all = [];
	    }

	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };

	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	  EventEmitter.prototype.off = function(type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }

	    var handlers,leafs=[];

	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }

	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {

	        var position = -1;

	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }

	        if (position < 0) {
	          continue;
	        }

	        if(this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this._events[type].splice(position, 1);
	        }

	        if (handlers.length === 0) {
	          if(this.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this._events[type];
	          }
	        }
	        return this;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this._events[type];
	        }
	      }
	    }

	    return this;
	  };

	  EventEmitter.prototype.offAny = function(fn) {
	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          return this;
	        }
	      }
	    } else {
	      this._all = [];
	    }
	    return this;
	  };

	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }

	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else {
	      if (!this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };

	  EventEmitter.prototype.listeners = function(type) {
	    if(this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }

	    this._events || init.call(this);

	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };

	  EventEmitter.prototype.listenersAny = function() {

	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }

	  };

	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    exports.EventEmitter2 = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.connect = connect;

	function connect() {
	  throw new Error('TlsStub does not implement tls.connect()');
	}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	var convertPseudotype, err, errorClass, mkAtom, mkErr, mkSeq, plural, protoErrorType, protodef, recursivelyConvertPseudotype,
	  slice = [].slice;

	err = __webpack_require__(48);

	protodef = __webpack_require__(49);

	protoErrorType = protodef.Response.ErrorType;

	plural = function(number) {
	  if (number === 1) {
	    return "";
	  } else {
	    return "s";
	  }
	};

	module.exports.ar = function(fun) {
	  return function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (args.length !== fun.length) {
	      throw new err.ReqlDriverCompileError("Expected " + fun.length + " argument" + (plural(fun.length)) + " but found " + args.length + ".");
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.varar = function(min, max, fun) {
	  return function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (((min != null) && args.length < min) || ((max != null) && args.length > max)) {
	      if ((min != null) && (max == null)) {
	        throw new err.ReqlDriverCompileError("Expected " + min + " or more arguments but found " + args.length + ".");
	      }
	      if ((max != null) && (min == null)) {
	        throw new err.ReqlDriverCompileError("Expected " + max + " or fewer arguments but found " + args.length + ".");
	      }
	      throw new err.ReqlDriverCompileError("Expected between " + min + " and " + max + " arguments but found " + args.length + ".");
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.aropt = function(fun) {
	  return function() {
	    var args, expectedPosArgs, numPosArgs, perhapsOptDict;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    expectedPosArgs = fun.length - 1;
	    perhapsOptDict = args[expectedPosArgs];
	    if ((perhapsOptDict != null) && (Object.prototype.toString.call(perhapsOptDict) !== '[object Object]')) {
	      perhapsOptDict = null;
	    }
	    numPosArgs = args.length - (perhapsOptDict != null ? 1 : 0);
	    if (expectedPosArgs !== numPosArgs) {
	      if (expectedPosArgs !== 1) {
	        throw new err.ReqlDriverCompileError("Expected " + expectedPosArgs + " arguments (not including options) but found " + numPosArgs + ".");
	      } else {
	        throw new err.ReqlDriverCompileError("Expected " + expectedPosArgs + " argument (not including options) but found " + numPosArgs + ".");
	      }
	    }
	    return fun.apply(this, args);
	  };
	};

	module.exports.toArrayBuffer = function(node_buffer) {
	  var arr, i, j, len, value;
	  arr = new Uint8Array(new ArrayBuffer(node_buffer.length));
	  for (i = j = 0, len = node_buffer.length; j < len; i = ++j) {
	    value = node_buffer[i];
	    arr[i] = value;
	  }
	  return arr.buffer;
	};

	module.exports.fromCamelCase = function(token) {
	  return token.replace(/[A-Z]/g, (function(_this) {
	    return function(match) {
	      return "_" + match.toLowerCase();
	    };
	  })(this));
	};

	module.exports.toCamelCase = function(token) {
	  return token.replace(/_[a-z]/g, (function(_this) {
	    return function(match) {
	      return match[1].toUpperCase();
	    };
	  })(this));
	};

	convertPseudotype = function(obj, opts) {
	  var i, j, len, ref, results;
	  switch (obj['$reql_type$']) {
	    case 'TIME':
	      switch (opts.timeFormat) {
	        case 'native':
	        case void 0:
	          if (obj['epoch_time'] == null) {
	            throw new err.ReqlDriverError("pseudo-type TIME " + obj + " object missing expected field 'epoch_time'.");
	          }
	          return new Date(obj['epoch_time'] * 1000);
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown timeFormat run option " + opts.timeFormat + ".");
	      }
	      break;
	    case 'GROUPED_DATA':
	      switch (opts.groupFormat) {
	        case 'native':
	        case void 0:
	          ref = obj['data'];
	          results = [];
	          for (j = 0, len = ref.length; j < len; j++) {
	            i = ref[j];
	            results.push({
	              group: i[0],
	              reduction: i[1]
	            });
	          }
	          return results;
	          break;
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown groupFormat run option " + opts.groupFormat + ".");
	      }
	      break;
	    case 'BINARY':
	      switch (opts.binaryFormat) {
	        case 'native':
	        case void 0:
	          if (obj['data'] == null) {
	            throw new err.ReqlDriverError("pseudo-type BINARY object missing expected field 'data'.");
	          }
	          return new Buffer(obj['data'], 'base64');
	        case 'raw':
	          return obj;
	        default:
	          throw new err.ReqlDriverError("Unknown binaryFormat run option " + opts.binaryFormat + ".");
	      }
	      break;
	    default:
	      return obj;
	  }
	};

	recursivelyConvertPseudotype = function(obj, opts) {
	  var i, j, key, len, value;
	  if (Array.isArray(obj)) {
	    for (i = j = 0, len = obj.length; j < len; i = ++j) {
	      value = obj[i];
	      obj[i] = recursivelyConvertPseudotype(value, opts);
	    }
	  } else if (obj && typeof obj === 'object') {
	    for (key in obj) {
	      value = obj[key];
	      obj[key] = recursivelyConvertPseudotype(value, opts);
	    }
	    obj = convertPseudotype(obj, opts);
	  }
	  return obj;
	};

	mkAtom = function(response, opts) {
	  return recursivelyConvertPseudotype(response.r[0], opts);
	};

	mkSeq = function(response, opts) {
	  return recursivelyConvertPseudotype(response.r, opts);
	};

	mkErr = function(ErrClass, response, root) {
	  return new ErrClass(mkAtom(response), root, response.b);
	};

	errorClass = (function(_this) {
	  return function(errorType) {
	    switch (errorType) {
	      case protoErrorType.QUERY_LOGIC:
	        return err.ReqlQueryLogicError;
	      case protoErrorType.NON_EXISTENCE:
	        return err.ReqlNonExistenceError;
	      case protoErrorType.RESOURCE_LIMIT:
	        return err.ReqlResourceLimitError;
	      case protoErrorType.USER:
	        return err.ReqlUserError;
	      case protoErrorType.INTERNAL:
	        return err.ReqlInternalError;
	      case protoErrorType.OP_FAILED:
	        return err.ReqlOpFailedError;
	      case protoErrorType.OP_INDETERMINATE:
	        return err.ReqlOpIndeterminateError;
	      case protoErrorType.PERMISSION_ERROR:
	        return err.ReqlPermissionError;
	      default:
	        return err.ReqlRuntimeError;
	    }
	  };
	})(this);

	module.exports.recursivelyConvertPseudotype = recursivelyConvertPseudotype;

	module.exports.mkAtom = mkAtom;

	module.exports.mkSeq = mkSeq;

	module.exports.mkErr = mkErr;

	module.exports.errorClass = errorClass;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	var ReqlAuthError, ReqlAvailabilityError, ReqlCompileError, ReqlDriverCompileError, ReqlDriverError, ReqlError, ReqlInternalError, ReqlNonExistenceError, ReqlOpFailedError, ReqlOpIndeterminateError, ReqlPermissionError, ReqlQueryLogicError, ReqlQueryPrinter, ReqlResourceLimitError, ReqlRuntimeError, ReqlServerCompileError, ReqlTimeoutError, ReqlUserError,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	ReqlError = (function(superClass) {
	  extend(ReqlError, superClass);

	  function ReqlError(msg, term, frames) {
	    this.name = this.constructor.name;
	    this.msg = msg;
	    this.frames = frames != null ? frames.slice(0) : void 0;
	    if (term != null) {
	      if (msg[msg.length - 1] === '.') {
	        this.message = (msg.slice(0, msg.length - 1)) + " in:\n" + (ReqlQueryPrinter.prototype.printQuery(term)) + "\n" + (ReqlQueryPrinter.prototype.printCarrots(term, frames));
	      } else {
	        this.message = msg + " in:\n" + (ReqlQueryPrinter.prototype.printQuery(term)) + "\n" + (ReqlQueryPrinter.prototype.printCarrots(term, frames));
	      }
	    } else {
	      this.message = "" + msg;
	    }
	    if (Error.captureStackTrace != null) {
	      Error.captureStackTrace(this, this);
	    }
	  }

	  return ReqlError;

	})(Error);

	ReqlCompileError = (function(superClass) {
	  extend(ReqlCompileError, superClass);

	  function ReqlCompileError() {
	    return ReqlCompileError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlCompileError;

	})(ReqlError);

	ReqlDriverCompileError = (function(superClass) {
	  extend(ReqlDriverCompileError, superClass);

	  function ReqlDriverCompileError() {
	    return ReqlDriverCompileError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlDriverCompileError;

	})(ReqlCompileError);

	ReqlServerCompileError = (function(superClass) {
	  extend(ReqlServerCompileError, superClass);

	  function ReqlServerCompileError() {
	    return ReqlServerCompileError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlServerCompileError;

	})(ReqlCompileError);

	ReqlDriverError = (function(superClass) {
	  extend(ReqlDriverError, superClass);

	  function ReqlDriverError() {
	    return ReqlDriverError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlDriverError;

	})(ReqlError);

	ReqlAuthError = (function(superClass) {
	  extend(ReqlAuthError, superClass);

	  function ReqlAuthError() {
	    return ReqlAuthError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlAuthError;

	})(ReqlDriverError);

	ReqlRuntimeError = (function(superClass) {
	  extend(ReqlRuntimeError, superClass);

	  function ReqlRuntimeError() {
	    return ReqlRuntimeError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlRuntimeError;

	})(ReqlError);

	ReqlQueryLogicError = (function(superClass) {
	  extend(ReqlQueryLogicError, superClass);

	  function ReqlQueryLogicError() {
	    return ReqlQueryLogicError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlQueryLogicError;

	})(ReqlRuntimeError);

	ReqlNonExistenceError = (function(superClass) {
	  extend(ReqlNonExistenceError, superClass);

	  function ReqlNonExistenceError() {
	    return ReqlNonExistenceError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlNonExistenceError;

	})(ReqlQueryLogicError);

	ReqlResourceLimitError = (function(superClass) {
	  extend(ReqlResourceLimitError, superClass);

	  function ReqlResourceLimitError() {
	    return ReqlResourceLimitError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlResourceLimitError;

	})(ReqlRuntimeError);

	ReqlUserError = (function(superClass) {
	  extend(ReqlUserError, superClass);

	  function ReqlUserError() {
	    return ReqlUserError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlUserError;

	})(ReqlRuntimeError);

	ReqlInternalError = (function(superClass) {
	  extend(ReqlInternalError, superClass);

	  function ReqlInternalError() {
	    return ReqlInternalError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlInternalError;

	})(ReqlRuntimeError);

	ReqlTimeoutError = (function(superClass) {
	  extend(ReqlTimeoutError, superClass);

	  function ReqlTimeoutError() {
	    return ReqlTimeoutError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlTimeoutError;

	})(ReqlError);

	ReqlAvailabilityError = (function(superClass) {
	  extend(ReqlAvailabilityError, superClass);

	  function ReqlAvailabilityError() {
	    return ReqlAvailabilityError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlAvailabilityError;

	})(ReqlRuntimeError);

	ReqlOpFailedError = (function(superClass) {
	  extend(ReqlOpFailedError, superClass);

	  function ReqlOpFailedError() {
	    return ReqlOpFailedError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlOpFailedError;

	})(ReqlAvailabilityError);

	ReqlOpIndeterminateError = (function(superClass) {
	  extend(ReqlOpIndeterminateError, superClass);

	  function ReqlOpIndeterminateError() {
	    return ReqlOpIndeterminateError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlOpIndeterminateError;

	})(ReqlAvailabilityError);

	ReqlPermissionError = (function(superClass) {
	  extend(ReqlPermissionError, superClass);

	  function ReqlPermissionError() {
	    return ReqlPermissionError.__super__.constructor.apply(this, arguments);
	  }

	  return ReqlPermissionError;

	})(ReqlRuntimeError);

	ReqlQueryPrinter = (function() {
	  var carrotMarker, carrotify, composeCarrots, composeTerm, joinTree;

	  function ReqlQueryPrinter() {}

	  ReqlQueryPrinter.prototype.printQuery = function(term) {
	    var tree;
	    tree = composeTerm(term);
	    return joinTree(tree);
	  };

	  composeTerm = function(term) {
	    var arg, args, key, optargs, ref;
	    args = (function() {
	      var j, len, ref, results;
	      ref = term.args;
	      results = [];
	      for (j = 0, len = ref.length; j < len; j++) {
	        arg = ref[j];
	        results.push(composeTerm(arg));
	      }
	      return results;
	    })();
	    optargs = {};
	    ref = term.optargs;
	    for (key in ref) {
	      if (!hasProp.call(ref, key)) continue;
	      arg = ref[key];
	      optargs[key] = composeTerm(arg);
	    }
	    return term.compose(args, optargs);
	  };

	  ReqlQueryPrinter.prototype.printCarrots = function(term, frames) {
	    var tree;
	    if (frames.length === 0) {
	      tree = [carrotify(composeTerm(term))];
	    } else {
	      tree = composeCarrots(term, frames);
	    }
	    return (joinTree(tree)).replace(/[^\^]/g, ' ');
	  };

	  composeCarrots = function(term, frames) {
	    var arg, args, frame, i, key, optargs, ref;
	    frame = frames.shift();
	    args = (function() {
	      var j, len, ref, results;
	      ref = term.args;
	      results = [];
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        arg = ref[i];
	        if (frame === i) {
	          results.push(composeCarrots(arg, frames));
	        } else {
	          results.push(composeTerm(arg));
	        }
	      }
	      return results;
	    })();
	    optargs = {};
	    ref = term.optargs;
	    for (key in ref) {
	      if (!hasProp.call(ref, key)) continue;
	      arg = ref[key];
	      if (frame === key) {
	        optargs[key] = composeCarrots(arg, frames);
	      } else {
	        optargs[key] = composeTerm(arg);
	      }
	    }
	    if (frame != null) {
	      return term.compose(args, optargs);
	    } else {
	      return carrotify(term.compose(args, optargs));
	    }
	  };

	  carrotMarker = {};

	  carrotify = function(tree) {
	    return [carrotMarker, tree];
	  };

	  joinTree = function(tree) {
	    var j, len, str, term;
	    str = '';
	    for (j = 0, len = tree.length; j < len; j++) {
	      term = tree[j];
	      if (Array.isArray(term)) {
	        if (term.length === 2 && term[0] === carrotMarker) {
	          str += (joinTree(term[1])).replace(/./g, '^');
	        } else {
	          str += joinTree(term);
	        }
	      } else {
	        str += term;
	      }
	    }
	    return str;
	  };

	  return ReqlQueryPrinter;

	})();

	module.exports = {
	  ReqlError: ReqlError,
	  ReqlCompileError: ReqlCompileError,
	  RqlCompileError: ReqlCompileError,
	  ReqlServerCompileError: ReqlServerCompileError,
	  ReqlDriverCompileError: ReqlDriverCompileError,
	  RqlClientError: ReqlDriverError,
	  ReqlRuntimeError: ReqlRuntimeError,
	  RqlRuntimeError: ReqlRuntimeError,
	  RqlServerError: ReqlRuntimeError,
	  ReqlQueryLogicError: ReqlQueryLogicError,
	  ReqlNonExistenceError: ReqlNonExistenceError,
	  ReqlResourceLimitError: ReqlResourceLimitError,
	  ReqlUserError: ReqlUserError,
	  ReqlInternalError: ReqlInternalError,
	  ReqlTimeoutError: ReqlTimeoutError,
	  ReqlAvailabilityError: ReqlAvailabilityError,
	  ReqlOpFailedError: ReqlOpFailedError,
	  ReqlOpIndeterminateError: ReqlOpIndeterminateError,
	  ReqlPermissionError: ReqlPermissionError,
	  ReqlDriverError: ReqlDriverError,
	  RqlDriverError: ReqlDriverError,
	  ReqlAuthError: ReqlAuthError,
	  printQuery: ReqlQueryPrinter.prototype.printQuery
	};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// DO NOT EDIT
	// Autogenerated by convert_protofile

	module.exports = {
		VersionDummy: {
			Version: {
				V0_1: 1063369270,
				V0_2: 1915781601,
				V0_3: 1601562686,
				V0_4: 1074539808,
				V1_0: 885177795
			},
			
			Protocol: {
				PROTOBUF: 656407617,
				JSON: 2120839367
			}
		},
		
		Query: {
			QueryType: {
				START: 1,
				CONTINUE: 2,
				STOP: 3,
				NOREPLY_WAIT: 4,
				SERVER_INFO: 5
			},
			
			AssocPair: {}
		},
		
		Frame: {
			FrameType: {
				POS: 1,
				OPT: 2
			}
		},
		
		Backtrace: {},
		
		Response: {
			ResponseType: {
				SUCCESS_ATOM: 1,
				SUCCESS_SEQUENCE: 2,
				SUCCESS_PARTIAL: 3,
				WAIT_COMPLETE: 4,
				SERVER_INFO: 5,
				CLIENT_ERROR: 16,
				COMPILE_ERROR: 17,
				RUNTIME_ERROR: 18
			},
			
			ErrorType: {
				INTERNAL: 1000000,
				RESOURCE_LIMIT: 2000000,
				QUERY_LOGIC: 3000000,
				NON_EXISTENCE: 3100000,
				OP_FAILED: 4100000,
				OP_INDETERMINATE: 4200000,
				USER: 5000000,
				PERMISSION_ERROR: 6000000
			},
			
			ResponseNote: {
				SEQUENCE_FEED: 1,
				ATOM_FEED: 2,
				ORDER_BY_LIMIT_FEED: 3,
				UNIONED_FEED: 4,
				INCLUDES_STATES: 5
			}
		},
		
		Datum: {
			DatumType: {
				R_NULL: 1,
				R_BOOL: 2,
				R_NUM: 3,
				R_STR: 4,
				R_ARRAY: 5,
				R_OBJECT: 6,
				R_JSON: 7
			},
			
			AssocPair: {}
		},
		
		Term: {
			TermType: {
				DATUM: 1,
				MAKE_ARRAY: 2,
				MAKE_OBJ: 3,
				VAR: 10,
				JAVASCRIPT: 11,
				UUID: 169,
				HTTP: 153,
				ERROR: 12,
				IMPLICIT_VAR: 13,
				DB: 14,
				TABLE: 15,
				GET: 16,
				GET_ALL: 78,
				EQ: 17,
				NE: 18,
				LT: 19,
				LE: 20,
				GT: 21,
				GE: 22,
				NOT: 23,
				ADD: 24,
				SUB: 25,
				MUL: 26,
				DIV: 27,
				MOD: 28,
				FLOOR: 183,
				CEIL: 184,
				ROUND: 185,
				APPEND: 29,
				PREPEND: 80,
				DIFFERENCE: 95,
				SET_INSERT: 88,
				SET_INTERSECTION: 89,
				SET_UNION: 90,
				SET_DIFFERENCE: 91,
				SLICE: 30,
				SKIP: 70,
				LIMIT: 71,
				OFFSETS_OF: 87,
				CONTAINS: 93,
				GET_FIELD: 31,
				KEYS: 94,
				VALUES: 186,
				OBJECT: 143,
				HAS_FIELDS: 32,
				WITH_FIELDS: 96,
				PLUCK: 33,
				WITHOUT: 34,
				MERGE: 35,
				BETWEEN_DEPRECATED: 36,
				BETWEEN: 182,
				REDUCE: 37,
				MAP: 38,
				FOLD: 187,
				FILTER: 39,
				CONCAT_MAP: 40,
				ORDER_BY: 41,
				DISTINCT: 42,
				COUNT: 43,
				IS_EMPTY: 86,
				UNION: 44,
				NTH: 45,
				BRACKET: 170,
				INNER_JOIN: 48,
				OUTER_JOIN: 49,
				EQ_JOIN: 50,
				ZIP: 72,
				RANGE: 173,
				INSERT_AT: 82,
				DELETE_AT: 83,
				CHANGE_AT: 84,
				SPLICE_AT: 85,
				COERCE_TO: 51,
				TYPE_OF: 52,
				UPDATE: 53,
				DELETE: 54,
				REPLACE: 55,
				INSERT: 56,
				DB_CREATE: 57,
				DB_DROP: 58,
				DB_LIST: 59,
				TABLE_CREATE: 60,
				TABLE_DROP: 61,
				TABLE_LIST: 62,
				CONFIG: 174,
				STATUS: 175,
				WAIT: 177,
				RECONFIGURE: 176,
				REBALANCE: 179,
				SYNC: 138,
				GRANT: 188,
				INDEX_CREATE: 75,
				INDEX_DROP: 76,
				INDEX_LIST: 77,
				INDEX_STATUS: 139,
				INDEX_WAIT: 140,
				INDEX_RENAME: 156,
				FUNCALL: 64,
				BRANCH: 65,
				OR: 66,
				AND: 67,
				FOR_EACH: 68,
				FUNC: 69,
				ASC: 73,
				DESC: 74,
				INFO: 79,
				MATCH: 97,
				UPCASE: 141,
				DOWNCASE: 142,
				SAMPLE: 81,
				DEFAULT: 92,
				JSON: 98,
				TO_JSON_STRING: 172,
				ISO8601: 99,
				TO_ISO8601: 100,
				EPOCH_TIME: 101,
				TO_EPOCH_TIME: 102,
				NOW: 103,
				IN_TIMEZONE: 104,
				DURING: 105,
				DATE: 106,
				TIME_OF_DAY: 126,
				TIMEZONE: 127,
				YEAR: 128,
				MONTH: 129,
				DAY: 130,
				DAY_OF_WEEK: 131,
				DAY_OF_YEAR: 132,
				HOURS: 133,
				MINUTES: 134,
				SECONDS: 135,
				TIME: 136,
				MONDAY: 107,
				TUESDAY: 108,
				WEDNESDAY: 109,
				THURSDAY: 110,
				FRIDAY: 111,
				SATURDAY: 112,
				SUNDAY: 113,
				JANUARY: 114,
				FEBRUARY: 115,
				MARCH: 116,
				APRIL: 117,
				MAY: 118,
				JUNE: 119,
				JULY: 120,
				AUGUST: 121,
				SEPTEMBER: 122,
				OCTOBER: 123,
				NOVEMBER: 124,
				DECEMBER: 125,
				LITERAL: 137,
				GROUP: 144,
				SUM: 145,
				AVG: 146,
				MIN: 147,
				MAX: 148,
				SPLIT: 149,
				UNGROUP: 150,
				RANDOM: 151,
				CHANGES: 152,
				ARGS: 154,
				BINARY: 155,
				GEOJSON: 157,
				TO_GEOJSON: 158,
				POINT: 159,
				LINE: 160,
				POLYGON: 161,
				DISTANCE: 162,
				INTERSECTS: 163,
				INCLUDES: 164,
				CIRCLE: 165,
				GET_INTERSECTING: 166,
				FILL: 167,
				GET_NEAREST: 168,
				POLYGON_SUB: 171,
				MINVAL: 180,
				MAXVAL: 181
			},
			
			AssocPair: {}
		}
	}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	var ArrayResult, AtomFeed, Cursor, EventEmitter, Feed, IterableResult, OrderByLimitFeed, Promise, UnionedFeed, ar, aropt, error, mkErr, protoResponseType, setImmediate, util, varar,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  slice = [].slice,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	error = __webpack_require__(48);

	util = __webpack_require__(47);

	protoResponseType = __webpack_require__(49).Response.ResponseType;

	Promise = __webpack_require__(2);

	EventEmitter = __webpack_require__(46).EventEmitter;

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	mkErr = util.mkErr;

	if (typeof setImmediate === "undefined" || setImmediate === null) {
	  setImmediate = function(cb) {
	    return setTimeout(cb, 0);
	  };
	}

	IterableResult = (function() {
	  IterableResult.prototype.stackSize = 100;

	  function IterableResult(conn, token, opts, root) {
	    this._eachCb = bind(this._eachCb, this);
	    this._conn = conn;
	    this._token = token;
	    this._opts = opts;
	    this._root = root;
	    this._responses = [];
	    this._responseIndex = 0;
	    this._outstandingRequests = 1;
	    this._iterations = 0;
	    this._endFlag = false;
	    this._contFlag = false;
	    this._closeAsap = false;
	    this._cont = null;
	    this._cbQueue = [];
	    this._closeCb = null;
	    this._closeCbPromise = null;
	    this.next = this._next;
	  }

	  IterableResult.prototype._addResponse = function(response) {
	    if (response.t === this._type || response.t === protoResponseType.SUCCESS_SEQUENCE) {
	      if (response.r.length > 0) {
	        this._responses.push(response);
	      }
	    } else {
	      this._responses.push(response);
	    }
	    this._outstandingRequests -= 1;
	    if (response.t !== this._type) {
	      this._endFlag = true;
	      if (this._closeCb != null) {
	        switch (response.t) {
	          case protoResponseType.COMPILE_ERROR:
	            this._closeCb(mkErr(error.ReqlServerCompileError, response, this._root));
	            break;
	          case protoResponseType.CLIENT_ERROR:
	            this._closeCb(mkErr(error.ReqlClientError, response, this._root));
	            break;
	          case protoResponseType.RUNTIME_ERROR:
	            this._closeCb(mkErr(util.errorClass(response.e), response, this._root));
	            break;
	          default:
	            this._closeCb();
	        }
	      }
	    }
	    this._contFlag = false;
	    if (this._closeAsap === false) {
	      this._promptNext();
	    } else {
	      this.close(this._closeCb);
	    }
	    return this;
	  };

	  IterableResult.prototype._getCallback = function() {
	    var cb, immediateCb;
	    this._iterations += 1;
	    cb = this._cbQueue.shift();
	    if (this._iterations % this.stackSize === this.stackSize - 1) {
	      immediateCb = (function(err, row) {
	        return setImmediate(function() {
	          return cb(err, row);
	        });
	      });
	      return immediateCb;
	    } else {
	      return cb;
	    }
	  };

	  IterableResult.prototype._handleRow = function() {
	    var cb, response, row;
	    response = this._responses[0];
	    row = util.recursivelyConvertPseudotype(response.r[this._responseIndex], this._opts);
	    cb = this._getCallback();
	    this._responseIndex += 1;
	    if (this._responseIndex === response.r.length) {
	      this._responses.shift();
	      this._responseIndex = 0;
	    }
	    return cb(null, row);
	  };

	  IterableResult.prototype.bufferEmpty = function() {
	    return this._responses.length === 0 || this._responses[0].r.length <= this._responseIndex;
	  };

	  IterableResult.prototype._promptNext = function() {
	    var cb, errType, response;
	    if (this._closeCbPromise != null) {
	      cb = this._getCallback();
	      cb(new error.ReqlDriverError("Cursor is closed."));
	    }
	    while (this._cbQueue[0] != null) {
	      if (this.bufferEmpty() === true) {
	        if (this._endFlag === true) {
	          cb = this._getCallback();
	          cb(new error.ReqlDriverError("No more rows in the cursor."));
	        } else if (this._responses.length <= 1) {
	          this._promptCont();
	        }
	        return;
	      } else {
	        response = this._responses[0];
	        if (this._responses.length === 1) {
	          this._promptCont();
	        }
	        switch (response.t) {
	          case protoResponseType.SUCCESS_PARTIAL:
	            this._handleRow();
	            break;
	          case protoResponseType.SUCCESS_SEQUENCE:
	            if (response.r.length === 0) {
	              this._responses.shift();
	            } else {
	              this._handleRow();
	            }
	            break;
	          case protoResponseType.COMPILE_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(mkErr(error.ReqlServerCompileError, response, this._root));
	            break;
	          case protoResponseType.CLIENT_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(mkErr(error.ReqlClientError, response, this._root));
	            break;
	          case protoResponseType.RUNTIME_ERROR:
	            this._responses.shift();
	            cb = this._getCallback();
	            errType = util.errorClass(response.e);
	            cb(mkErr(errType, response, this._root));
	            break;
	          default:
	            this._responses.shift();
	            cb = this._getCallback();
	            cb(new error.ReqlDriverError("Unknown response type for cursor"));
	        }
	      }
	    }
	  };

	  IterableResult.prototype._promptCont = function() {
	    if ((!this._contFlag) && (!this._endFlag) && this._conn.isOpen()) {
	      this._contFlag = true;
	      this._outstandingRequests += 1;
	      return this._conn._continueQuery(this._token);
	    }
	  };

	  IterableResult.prototype.hasNext = function() {
	    throw new error.ReqlDriverError("The `hasNext` command has been removed since 1.13. Use `next` instead.");
	  };

	  IterableResult.prototype._next = varar(0, 1, function(cb) {
	    var fn;
	    if ((cb != null) && typeof cb !== "function") {
	      throw new error.ReqlDriverError("First argument to `next` must be a function or undefined.");
	    }
	    fn = (function(_this) {
	      return function(cb) {
	        _this._cbQueue.push(cb);
	        return _this._promptNext();
	      };
	    })(this);
	    return Promise.fromNode(fn).nodeify(cb);
	  });

	  IterableResult.prototype.close = varar(0, 1, function(cb) {
	    if (this._closeCbPromise != null) {
	      if (this._closeCbPromise.isPending()) {
	        this._closeCbPromise = this._closeCbPromise.nodeify(cb);
	      } else {
	        this._closeCbPromise = Promise.resolve().nodeify(cb);
	      }
	    } else {
	      if (this._endFlag) {
	        this._closeCbPromise = Promise.resolve().nodeify(cb);
	        this._responses = [];
	        this._responseIndex = 0;
	      } else {
	        this._closeCbPromise = new Promise((function(_this) {
	          return function(resolve, reject) {
	            _this._closeCb = function(err) {
	              _this._responses = [];
	              _this._responseIndex = 0;
	              while (_this._cbQueue.length > 0) {
	                _this._cbQueue.shift();
	              }
	              _this._outstandingRequests = 0;
	              if (err) {
	                return reject(err);
	              } else {
	                return resolve();
	              }
	            };
	            _this._closeAsap = true;
	            _this._outstandingRequests += 1;
	            return _this._conn._endQuery(_this._token);
	          };
	        })(this)).nodeify(cb);
	      }
	    }
	    return this._closeCbPromise;
	  });

	  IterableResult.prototype.each = varar(1, 2, function(cb, onFinished) {
	    var nextCb, self;
	    if (typeof cb !== 'function') {
	      throw new error.ReqlDriverError("First argument to each must be a function.");
	    }
	    if ((onFinished != null) && typeof onFinished !== 'function') {
	      throw new error.ReqlDriverError("Optional second argument to each must be a function.");
	    }
	    self = this;
	    nextCb = (function(_this) {
	      return function(err, data) {
	        if (err != null) {
	          if (err.message === 'No more rows in the cursor.') {
	            return typeof onFinished === "function" ? onFinished() : void 0;
	          } else {
	            return cb(err);
	          }
	        } else if (cb(null, data) !== false) {
	          return _this._next(nextCb);
	        } else {
	          return typeof onFinished === "function" ? onFinished() : void 0;
	        }
	      };
	    })(this);
	    return this._next(nextCb);
	  });

	  IterableResult.prototype.eachAsync = varar(1, 3, function(cb, errCb, options) {
	    var nextCb, pending, resPromise, userCb;
	    if (options == null) {
	      options = {
	        concurrency: 1
	      };
	    }
	    if (typeof cb !== 'function') {
	      throw new error.ReqlDriverError('First argument to eachAsync must be a function.');
	    }
	    if (errCb != null) {
	      if (typeof errCb === 'object') {
	        options = errCb;
	        errCb = void 0;
	      } else if (typeof errCb !== 'function') {
	        throw new error.ReqlDriverError("Optional second argument to eachAsync must be a function or `options` object");
	      }
	    }
	    if (!(options && typeof options.concurrency === 'number' && options.concurrency > 0)) {
	      throw new error.ReqlDriverError("Optional `options.concurrency` argument to eachAsync must be a positive number");
	    }
	    pending = [];
	    userCb = function(data) {
	      var doneChecking, handlerArg, handlerCalled, ret;
	      if (cb.length <= 1) {
	        ret = Promise.resolve(cb(data));
	      } else {
	        handlerCalled = false;
	        doneChecking = false;
	        handlerArg = void 0;
	        ret = Promise.fromNode(function(handler) {
	          var asyncRet;
	          asyncRet = cb(data, function(err) {
	            handlerCalled = true;
	            if (doneChecking) {
	              return handler(err);
	            } else {
	              return handlerArg = err;
	            }
	          });
	          if (asyncRet !== void 0) {
	            handler(new error.ReqlDriverError("A two-argument row handler for eachAsync may only return undefined."));
	          } else if (handlerCalled) {
	            handler(handlerArg);
	          }
	          return doneChecking = true;
	        });
	      }
	      return ret.then(function(data) {
	        if (data === void 0 || typeof data === Promise) {
	          return data;
	        }
	        throw new error.ReqlDriverError("Row handler for eachAsync may only return a Promise or undefined.");
	      });
	    };
	    nextCb = (function(_this) {
	      return function() {
	        if (_this._closeCbPromise != null) {
	          return Promise.resolve().then(function(data) {
	            throw new error.ReqlDriverError("Cursor is closed.");
	          });
	        } else {
	          return _this._next().then(function(data) {
	            if (pending.length < options.concurrency) {
	              return data;
	            }
	            return Promise.any(pending)["catch"](Promise.AggregateError, function(errs) {
	              throw errs[0];
	            })["return"](data);
	          }).then(function(data) {
	            var p;
	            p = userCb(data).then(function() {
	              return pending.splice(pending.indexOf(p), 1);
	            });
	            return pending.push(p);
	          }).then(nextCb)["catch"](function(err) {
	            if ((err != null ? err.message : void 0) !== 'No more rows in the cursor.') {
	              throw err;
	            }
	            return Promise.all(pending);
	          });
	        }
	      };
	    })(this);
	    resPromise = nextCb().then(function() {
	      if (errCb != null) {
	        return errCb(null);
	      }
	    })["catch"](function(err) {
	      if (errCb != null) {
	        return errCb(err);
	      }
	      throw err;
	    });
	    if (errCb == null) {
	      return resPromise;
	    }
	    return null;
	  });

	  IterableResult.prototype._each = IterableResult.prototype.each;

	  IterableResult.prototype._eachAsync = IterableResult.prototype.eachAsync;

	  IterableResult.prototype.toArray = varar(0, 1, function(cb) {
	    var results, wrapper;
	    if ((cb != null) && typeof cb !== 'function') {
	      throw new error.ReqlDriverCompileError("First argument to `toArray` must be a function or undefined.");
	    }
	    results = [];
	    wrapper = (function(_this) {
	      return function(res) {
	        results.push(res);
	        return void 0;
	      };
	    })(this);
	    return this.eachAsync(wrapper).then((function(_this) {
	      return function() {
	        return results;
	      };
	    })(this)).nodeify(cb);
	  });

	  IterableResult.prototype._makeEmitter = function() {
	    this.emitter = new EventEmitter;
	    this.each = function() {
	      throw new error.ReqlDriverError("You cannot use the cursor interface and the EventEmitter interface at the same time.");
	    };
	    return this.next = function() {
	      throw new error.ReqlDriverError("You cannot use the cursor interface and the EventEmitter interface at the same time.");
	    };
	  };

	  IterableResult.prototype.addListener = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.addListener(event, listener);
	  };

	  IterableResult.prototype.on = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.on(event, listener);
	  };

	  IterableResult.prototype.once = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.once(event, listener);
	  };

	  IterableResult.prototype.removeListener = function(event, listener) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.removeListener(event, listener);
	  };

	  IterableResult.prototype.removeAllListeners = function(event) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.removeAllListeners(event);
	  };

	  IterableResult.prototype.setMaxListeners = function(n) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.setMaxListeners(n);
	  };

	  IterableResult.prototype.listeners = function(event) {
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return this.emitter.listeners(event);
	  };

	  IterableResult.prototype.emit = function() {
	    var args, ref;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.emitter == null) {
	      this._makeEmitter();
	      setImmediate((function(_this) {
	        return function() {
	          return _this._each(_this._eachCb);
	        };
	      })(this));
	    }
	    return (ref = this.emitter).emit.apply(ref, args);
	  };

	  IterableResult.prototype._eachCb = function(err, data) {
	    if (err != null) {
	      return this.emitter.emit('error', err);
	    } else {
	      return this.emitter.emit('data', data);
	    }
	  };

	  return IterableResult;

	})();

	Cursor = (function(superClass) {
	  extend(Cursor, superClass);

	  function Cursor() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    Cursor.__super__.constructor.apply(this, arguments);
	  }

	  Cursor.prototype.toString = ar(function() {
	    return "[object Cursor]";
	  });

	  return Cursor;

	})(IterableResult);

	Feed = (function(superClass) {
	  extend(Feed, superClass);

	  function Feed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    Feed.__super__.constructor.apply(this, arguments);
	  }

	  Feed.prototype.hasNext = function() {
	    throw new error.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  Feed.prototype.toArray = function() {
	    throw new error.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  Feed.prototype.toString = ar(function() {
	    return "[object Feed]";
	  });

	  return Feed;

	})(IterableResult);

	UnionedFeed = (function(superClass) {
	  extend(UnionedFeed, superClass);

	  function UnionedFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    UnionedFeed.__super__.constructor.apply(this, arguments);
	  }

	  UnionedFeed.prototype.hasNext = function() {
	    throw new error.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  UnionedFeed.prototype.toArray = function() {
	    throw new error.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  UnionedFeed.prototype.toString = ar(function() {
	    return "[object UnionedFeed]";
	  });

	  return UnionedFeed;

	})(IterableResult);

	AtomFeed = (function(superClass) {
	  extend(AtomFeed, superClass);

	  function AtomFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    AtomFeed.__super__.constructor.apply(this, arguments);
	  }

	  AtomFeed.prototype.hasNext = function() {
	    throw new error.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  AtomFeed.prototype.toArray = function() {
	    throw new error.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  AtomFeed.prototype.toString = ar(function() {
	    return "[object AtomFeed]";
	  });

	  return AtomFeed;

	})(IterableResult);

	OrderByLimitFeed = (function(superClass) {
	  extend(OrderByLimitFeed, superClass);

	  function OrderByLimitFeed() {
	    this._type = protoResponseType.SUCCESS_PARTIAL;
	    OrderByLimitFeed.__super__.constructor.apply(this, arguments);
	  }

	  OrderByLimitFeed.prototype.hasNext = function() {
	    throw new error.ReqlDriverError("`hasNext` is not available for feeds.");
	  };

	  OrderByLimitFeed.prototype.toArray = function() {
	    throw new error.ReqlDriverError("`toArray` is not available for feeds.");
	  };

	  OrderByLimitFeed.prototype.toString = ar(function() {
	    return "[object OrderByLimitFeed]";
	  });

	  return OrderByLimitFeed;

	})(IterableResult);

	ArrayResult = (function(superClass) {
	  extend(ArrayResult, superClass);

	  function ArrayResult() {
	    return ArrayResult.__super__.constructor.apply(this, arguments);
	  }

	  ArrayResult.prototype._hasNext = ar(function() {
	    if (this.__index == null) {
	      this.__index = 0;
	    }
	    return this.__index < this.length;
	  });

	  ArrayResult.prototype._next = varar(0, 1, function(cb) {
	    var fn;
	    fn = (function(_this) {
	      return function(cb) {
	        var self;
	        if (_this._closeCbPromise != null) {
	          cb(new error.ReqlDriverError("Cursor is closed."));
	        }
	        if (_this._hasNext() === true) {
	          self = _this;
	          if (self.__index % _this.stackSize === _this.stackSize - 1) {
	            return setImmediate(function() {
	              return cb(null, self[self.__index++]);
	            });
	          } else {
	            return cb(null, self[self.__index++]);
	          }
	        } else {
	          return cb(new error.ReqlDriverError("No more rows in the cursor."));
	        }
	      };
	    })(this);
	    return Promise.fromNode(fn).nodeify(cb);
	  });

	  ArrayResult.prototype.toArray = varar(0, 1, function(cb) {
	    var fn;
	    fn = (function(_this) {
	      return function(cb) {
	        if (_this._closeCbPromise != null) {
	          cb(new error.ReqlDriverError("Cursor is closed."));
	        }
	        if (_this.__index != null) {
	          return cb(null, _this.slice(_this.__index, _this.length));
	        } else {
	          return cb(null, _this);
	        }
	      };
	    })(this);
	    return Promise.fromNode(fn).nodeify(cb);
	  });

	  ArrayResult.prototype.close = varar(0, 1, function(cb) {
	    this.length = 0;
	    this.__index = 0;
	    this._closeCbPromise = Promise.resolve().nodeify(cb);
	    return this._closeCbPromise;
	  });

	  ArrayResult.prototype.makeIterable = function(response) {
	    var method, name, ref;
	    response.__proto__ = {};
	    ref = ArrayResult.prototype;
	    for (name in ref) {
	      method = ref[name];
	      if (name !== 'constructor') {
	        if (name === '_next') {
	          response.__proto__['next'] = method;
	          response.__proto__['_next'] = method;
	        } else {
	          response.__proto__[name] = method;
	        }
	      }
	    }
	    response.__proto__.__proto__ = [].__proto__;
	    return response;
	  };

	  return ArrayResult;

	})(IterableResult);

	module.exports.Cursor = Cursor;

	module.exports.Feed = Feed;

	module.exports.AtomFeed = AtomFeed;

	module.exports.OrderByLimitFeed = OrderByLimitFeed;

	module.exports.makeIterable = ArrayResult.prototype.makeIterable;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = require("crypto");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	var Add, And, Append, Args, Asc, Avg, Between, Binary, Bracket, Branch, Ceil, ChangeAt, Changes, Circle, CoerceTo, ConcatMap, Config, Contains, Count, DatumTerm, Day, DayOfWeek, DayOfYear, Db, DbCreate, DbDrop, DbList, Default, Delete, DeleteAt, Desc, Difference, Distance, Distinct, Div, Downcase, During, EpochTime, Eq, EqJoin, Fill, Filter, Floor, Fold, ForEach, FunCall, Func, Ge, Geojson, Get, GetAll, GetField, GetIntersecting, GetNearest, Grant, Group, Gt, HasFields, Hours, Http, ISO8601, ImplicitVar, InTimezone, Includes, IndexCreate, IndexDrop, IndexList, IndexRename, IndexStatus, IndexWait, Info, InnerJoin, Insert, InsertAt, Intersects, IsEmpty, JavaScript, Json, Keys, Le, Limit, Line, Literal, Lt, MakeArray, MakeObject, Map, Match, Max, Merge, Min, Minutes, Mod, Month, Mul, Ne, Not, Now, Nth, Object_, OffsetsOf, Or, OrderBy, OuterJoin, Pluck, Point, Polygon, PolygonSub, Prepend, Promise, RDBConstant, RDBOp, RDBVal, RQLDate, Random, Range, Rebalance, Reconfigure, Reduce, Replace, Round, Sample, Seconds, SetDifference, SetInsert, SetIntersection, SetUnion, Skip, Slice, SpliceAt, Split, Status, Sub, Sum, Sync, Table, TableCreate, TableDrop, TableList, TermBase, Time, TimeOfDay, Timezone, ToEpochTime, ToGeojson, ToISO8601, ToJsonString, TypeOf, UUID, Ungroup, Union, Upcase, Update, UserError, Values, Var, Wait, WithFields, Without, Year, Zip, ar, aropt, err, funcWrap, hasImplicit, intsp, intspallargs, kved, net, protoTermType, rethinkdb, shouldWrap, translateBackOptargs, translateOptargs, util, varar,
	  slice = [].slice,
	  hasProp = {}.hasOwnProperty,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	util = __webpack_require__(47);

	err = __webpack_require__(48);

	net = __webpack_require__(41);

	protoTermType = __webpack_require__(49).Term.TermType;

	Promise = __webpack_require__(2);

	ar = util.ar;

	varar = util.varar;

	aropt = util.aropt;

	rethinkdb = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return rethinkdb.expr.apply(rethinkdb, args);
	};

	funcWrap = function(val) {
	  var ivarScan;
	  if (val === void 0) {
	    return val;
	  }
	  val = rethinkdb.expr(val);
	  ivarScan = function(node) {
	    var k, v;
	    if (!(node instanceof TermBase)) {
	      return false;
	    }
	    if (node instanceof ImplicitVar) {
	      return true;
	    }
	    if ((node.args.map(ivarScan)).some(function(a) {
	      return a;
	    })) {
	      return true;
	    }
	    if (((function() {
	      var ref, results;
	      ref = node.optargs;
	      results = [];
	      for (k in ref) {
	        if (!hasProp.call(ref, k)) continue;
	        v = ref[k];
	        results.push(v);
	      }
	      return results;
	    })()).map(ivarScan).some(function(a) {
	      return a;
	    })) {
	      return true;
	    }
	    return false;
	  };
	  if (ivarScan(val)) {
	    return new Func({}, function(x) {
	      return val;
	    });
	  }
	  return val;
	};

	hasImplicit = function(args) {
	  var arg, j, len;
	  if (Array.isArray(args)) {
	    for (j = 0, len = args.length; j < len; j++) {
	      arg = args[j];
	      if (hasImplicit(arg) === true) {
	        return true;
	      }
	    }
	  } else if (args === 'r.row') {
	    return true;
	  }
	  return false;
	};

	TermBase = (function() {
	  TermBase.prototype.showRunWarning = true;

	  function TermBase() {
	    var self;
	    if ({}.__proto__ !== void 0) {
	      self = ar(function(field) {
	        return self.bracket(field);
	      });
	      self.__proto__ = this.__proto__;
	      return self;
	    } else {
	      return this;
	    }
	  }

	  TermBase.prototype.run = function(connection, options, callback) {
	    if (net.isConnection(connection) === true) {
	      if (typeof options === "function") {
	        if (callback === void 0) {
	          callback = options;
	          options = {};
	        } else {
	          return Promise.reject(new err.ReqlDriverError("Second argument to `run` cannot be a function if a third argument is provided.")).nodeify(options);
	        }
	      }
	    } else if ((connection != null ? connection.constructor : void 0) === Object) {
	      if (this.showRunWarning === true) {
	        if (typeof process !== "undefined" && process !== null) {
	          process.stderr.write("RethinkDB warning: This syntax is deprecated. Please use `run(connection[, options], callback)`.");
	        }
	        this.showRunWarning = false;
	      }
	      callback = options;
	      options = connection;
	      connection = connection.connection;
	      delete options["connection"];
	    }
	    if (options == null) {
	      options = {};
	    }
	    if ((callback != null) && typeof callback !== 'function') {
	      return Promise.reject(new err.ReqlDriverError("If provided, the callback must be a function. Please use `run(connection[, options][, callback])"));
	    }
	    if (net.isConnection(connection) === false) {
	      return Promise.reject(new err.ReqlDriverError("First argument to `run` must be an open connection.")).nodeify(callback);
	    }
	    return new Promise((function(_this) {
	      return function(resolve, reject) {
	        var e, error, wrappedCb;
	        wrappedCb = function(err, result) {
	          if (err != null) {
	            return reject(err);
	          } else {
	            return resolve(result);
	          }
	        };
	        try {
	          return connection._start(_this, wrappedCb, options);
	        } catch (error) {
	          e = error;
	          return wrappedCb(e);
	        }
	      };
	    })(this)).nodeify(callback);
	  };

	  TermBase.prototype.toString = function() {
	    return err.printQuery(this);
	  };

	  return TermBase;

	})();

	RDBVal = (function(superClass) {
	  extend(RDBVal, superClass);

	  function RDBVal() {
	    return RDBVal.__super__.constructor.apply(this, arguments);
	  }

	  RDBVal.prototype.eq = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Eq, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ne = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ne, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.lt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Lt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.le = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Le, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.gt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Gt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ge = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ge, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.not = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Not, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.add = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Add, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.sub = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sub, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.mul = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Mul, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.div = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Div, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.mod = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Mod, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.floor = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Floor, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ceil = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ceil, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.round = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Round, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.append = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Append, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.prepend = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Prepend, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.difference = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Difference, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setInsert = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetInsert, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setUnion = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetUnion, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setIntersection = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetIntersection, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.setDifference = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SetDifference, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.slice = varar(1, 3, function(left, right_or_opts, opts) {
	    if (opts != null) {
	      return new Slice(opts, this, left, right_or_opts);
	    } else if (typeof right_or_opts !== 'undefined') {
	      if ((Object.prototype.toString.call(right_or_opts) === '[object Object]') && !(right_or_opts instanceof TermBase)) {
	        return new Slice(right_or_opts, this, left);
	      } else {
	        return new Slice({}, this, left, right_or_opts);
	      }
	    } else {
	      return new Slice({}, this, left);
	    }
	  });

	  RDBVal.prototype.skip = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Skip, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.limit = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Limit, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getField = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(GetField, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.contains = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Contains, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.insertAt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InsertAt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.spliceAt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(SpliceAt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.deleteAt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DeleteAt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.changeAt = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ChangeAt, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.offsetsOf = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OffsetsOf, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.hasFields = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(HasFields, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.withFields = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(WithFields, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.keys = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Keys, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.values = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Values, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.changes = aropt(function(opts) {
	    return new Changes(opts, this);
	  });

	  RDBVal.prototype.pluck = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Pluck, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.without = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Without, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.merge = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Merge, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.between = aropt(function(left, right, opts) {
	    return new Between(opts, this, left, right);
	  });

	  RDBVal.prototype.reduce = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Reduce, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.map = varar(1, null, function() {
	    var args, funcArg, j;
	    args = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), funcArg = arguments[j++];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Map, [{}, this].concat(slice.call(args), [funcWrap(funcArg)]), function(){});
	  });

	  RDBVal.prototype.fold = aropt(function(baseArg, accFuncArg, opts) {
	    return new Fold(opts, this, baseArg, funcWrap(accFuncArg));
	  });

	  RDBVal.prototype.filter = aropt(function(predicate, opts) {
	    return new Filter(opts, this, funcWrap(predicate));
	  });

	  RDBVal.prototype.concatMap = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ConcatMap, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.distinct = aropt(function(opts) {
	    return new Distinct(opts, this);
	  });

	  RDBVal.prototype.count = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Count, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.union = function() {
	    var attr, attrs, attrsAndOpts, opts, perhapsOptDict;
	    attrsAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    attrs = attrsAndOpts;
	    perhapsOptDict = attrsAndOpts[attrsAndOpts.length - 1];
	    if (perhapsOptDict && (Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase)) {
	      opts = perhapsOptDict;
	      attrs = attrsAndOpts.slice(0, attrsAndOpts.length - 1);
	    }
	    attrs = (function() {
	      var j, len, results;
	      results = [];
	      for (j = 0, len = attrs.length; j < len; j++) {
	        attr = attrs[j];
	        if (attr instanceof Asc || attr instanceof Desc) {
	          results.push(attr);
	        } else {
	          results.push(funcWrap(attr));
	        }
	      }
	      return results;
	    })();
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Union, [opts, this].concat(slice.call(attrs)), function(){});
	  };

	  RDBVal.prototype.nth = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Nth, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.bracket = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Bracket, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toJSON = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToJsonString, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toJsonString = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToJsonString, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.match = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Match, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.split = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Split, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.upcase = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Upcase, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.downcase = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Downcase, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.isEmpty = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IsEmpty, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.innerJoin = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InnerJoin, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.outerJoin = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OuterJoin, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.eqJoin = aropt(function(left_attr, right, opts) {
	    return new EqJoin(opts, this, funcWrap(left_attr), right);
	  });

	  RDBVal.prototype.zip = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Zip, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.coerceTo = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(CoerceTo, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.ungroup = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Ungroup, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.typeOf = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TypeOf, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.update = aropt(function(func, opts) {
	    return new Update(opts, this, funcWrap(func));
	  });

	  RDBVal.prototype["delete"] = aropt(function(opts) {
	    return new Delete(opts, this);
	  });

	  RDBVal.prototype.replace = aropt(function(func, opts) {
	    return new Replace(opts, this, funcWrap(func));
	  });

	  RDBVal.prototype["do"] = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(FunCall, [{}, funcWrap(args.slice(-1)[0]), this].concat(slice.call(args.slice(0, -1))), function(){});
	  };

	  RDBVal.prototype["default"] = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Default, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.or = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Or, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.and = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(And, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.branch = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Branch, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.forEach = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ForEach, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.sum = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sum, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.avg = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Avg, [{}, this].concat(slice.call(args.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.info = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Info, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.sample = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sample, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.group = function() {
	    var fields, fieldsAndOpts, opts, perhapsOptDict;
	    fieldsAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    fields = fieldsAndOpts;
	    if (fieldsAndOpts.length > 0) {
	      perhapsOptDict = fieldsAndOpts[fieldsAndOpts.length - 1];
	      if (perhapsOptDict && (Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase)) {
	        opts = perhapsOptDict;
	        fields = fieldsAndOpts.slice(0, fieldsAndOpts.length - 1);
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Group, [opts, this].concat(slice.call(fields.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.orderBy = function() {
	    var attr, attrs, attrsAndOpts, opts, perhapsOptDict;
	    attrsAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    attrs = attrsAndOpts;
	    perhapsOptDict = attrsAndOpts[attrsAndOpts.length - 1];
	    if (perhapsOptDict && (Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase)) {
	      opts = perhapsOptDict;
	      attrs = attrsAndOpts.slice(0, attrsAndOpts.length - 1);
	    }
	    attrs = (function() {
	      var j, len, results;
	      results = [];
	      for (j = 0, len = attrs.length; j < len; j++) {
	        attr = attrs[j];
	        if (attr instanceof Asc || attr instanceof Desc) {
	          results.push(attr);
	        } else {
	          results.push(funcWrap(attr));
	        }
	      }
	      return results;
	    })();
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(OrderBy, [opts, this].concat(slice.call(attrs)), function(){});
	  };

	  RDBVal.prototype.toGeojson = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToGeojson, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.distance = aropt(function(g, opts) {
	    return new Distance(opts, this, g);
	  });

	  RDBVal.prototype.intersects = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Intersects, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.includes = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Includes, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.fill = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Fill, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.polygonSub = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(PolygonSub, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.tableCreate = aropt(function(tblName, opts) {
	    return new TableCreate(opts, this, tblName);
	  });

	  RDBVal.prototype.tableDrop = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TableDrop, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.tableList = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TableList, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.config = function() {
	    return new Config({}, this);
	  };

	  RDBVal.prototype.status = function() {
	    return new Status({}, this);
	  };

	  RDBVal.prototype.wait = aropt(function(opts) {
	    return new Wait(opts, this);
	  });

	  RDBVal.prototype.table = aropt(function(tblName, opts) {
	    return new Table(opts, this, tblName);
	  });

	  RDBVal.prototype.get = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Get, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getAll = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length > 1) {
	      perhapsOptDict = keysAndOpts[keysAndOpts.length - 1];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = keysAndOpts.slice(0, keysAndOpts.length - 1);
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(GetAll, [opts, this].concat(slice.call(keys)), function(){});
	  };

	  RDBVal.prototype.min = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length === 1) {
	      perhapsOptDict = keysAndOpts[0];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = [];
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Min, [opts, this].concat(slice.call(keys.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.max = function() {
	    var keys, keysAndOpts, opts, perhapsOptDict;
	    keysAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    opts = {};
	    keys = keysAndOpts;
	    if (keysAndOpts.length === 1) {
	      perhapsOptDict = keysAndOpts[0];
	      if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	        opts = perhapsOptDict;
	        keys = [];
	      }
	    }
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Max, [opts, this].concat(slice.call(keys.map(funcWrap))), function(){});
	  };

	  RDBVal.prototype.insert = aropt(function(doc, opts) {
	    return new Insert(opts, this, rethinkdb.expr(doc));
	  });

	  RDBVal.prototype.indexCreate = varar(1, 3, function(name, defun_or_opts, opts) {
	    if (opts != null) {
	      return new IndexCreate(opts, this, name, funcWrap(defun_or_opts));
	    } else if (defun_or_opts != null) {
	      if ((Object.prototype.toString.call(defun_or_opts) === '[object Object]') && !(typeof defun_or_opts === 'function') && !(defun_or_opts instanceof TermBase)) {
	        return new IndexCreate(defun_or_opts, this, name);
	      } else {
	        return new IndexCreate({}, this, name, funcWrap(defun_or_opts));
	      }
	    } else {
	      return new IndexCreate({}, this, name);
	    }
	  });

	  RDBVal.prototype.indexDrop = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexDrop, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexList = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexList, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexStatus = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexStatus, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexWait = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(IndexWait, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.indexRename = aropt(function(old_name, new_name, opts) {
	    return new IndexRename(opts, this, old_name, new_name);
	  });

	  RDBVal.prototype.reconfigure = function(opts) {
	    return new Reconfigure(opts, this);
	  };

	  RDBVal.prototype.rebalance = function() {
	    return new Rebalance({}, this);
	  };

	  RDBVal.prototype.sync = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Sync, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.grant = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Grant, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toISO8601 = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToISO8601, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.toEpochTime = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(ToEpochTime, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.inTimezone = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(InTimezone, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.during = aropt(function(t2, t3, opts) {
	    return new During(opts, this, t2, t3);
	  });

	  RDBVal.prototype.date = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(RQLDate, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.timeOfDay = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(TimeOfDay, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.timezone = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Timezone, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.year = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Year, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.month = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Month, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.day = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Day, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.dayOfWeek = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DayOfWeek, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.dayOfYear = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(DayOfYear, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.hours = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Hours, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.minutes = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Minutes, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.seconds = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(Seconds, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.uuid = function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(UUID, [{}, this].concat(slice.call(args)), function(){});
	  };

	  RDBVal.prototype.getIntersecting = aropt(function(g, opts) {
	    return new GetIntersecting(opts, this, g);
	  });

	  RDBVal.prototype.getNearest = aropt(function(g, opts) {
	    return new GetNearest(opts, this, g);
	  });

	  return RDBVal;

	})(TermBase);

	DatumTerm = (function(superClass) {
	  extend(DatumTerm, superClass);

	  DatumTerm.prototype.args = [];

	  DatumTerm.prototype.optargs = {};

	  function DatumTerm(val) {
	    var self;
	    self = DatumTerm.__super__.constructor.call(this);
	    self.data = val;
	    return self;
	  }

	  DatumTerm.prototype.compose = function() {
	    switch (typeof this.data) {
	      case 'string':
	        return '"' + this.data + '"';
	      default:
	        return '' + this.data;
	    }
	  };

	  DatumTerm.prototype.build = function() {
	    if (typeof this.data === 'number') {
	      if (!isFinite(this.data)) {
	        throw new TypeError("Illegal non-finite number `" + this.data.toString() + "`.");
	      }
	    }
	    return this.data;
	  };

	  return DatumTerm;

	})(RDBVal);

	translateBackOptargs = function(optargs) {
	  var key, result, val;
	  result = {};
	  for (key in optargs) {
	    if (!hasProp.call(optargs, key)) continue;
	    val = optargs[key];
	    result[util.toCamelCase(key)] = val;
	  }
	  return result;
	};

	translateOptargs = function(optargs) {
	  var key, result, val;
	  result = {};
	  for (key in optargs) {
	    if (!hasProp.call(optargs, key)) continue;
	    val = optargs[key];
	    if (key === void 0 || val === void 0) {
	      continue;
	    }
	    result[util.fromCamelCase(key)] = rethinkdb.expr(val);
	  }
	  return result;
	};

	RDBOp = (function(superClass) {
	  extend(RDBOp, superClass);

	  function RDBOp() {
	    var arg, args, i, optargs, self;
	    optargs = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    self = RDBOp.__super__.constructor.call(this);
	    self.args = (function() {
	      var j, len, results;
	      results = [];
	      for (i = j = 0, len = args.length; j < len; i = ++j) {
	        arg = args[i];
	        if (arg !== void 0) {
	          results.push(rethinkdb.expr(arg));
	        } else {
	          throw new err.ReqlDriverCompileError("Argument " + i + " to " + (this.st || this.mt) + " may not be `undefined`.");
	        }
	      }
	      return results;
	    }).call(this);
	    self.optargs = translateOptargs(optargs);
	    return self;
	  }

	  RDBOp.prototype.build = function() {
	    var add_opts, arg, j, key, len, opts, ref, ref1, res, val;
	    res = [this.tt, []];
	    ref = this.args;
	    for (j = 0, len = ref.length; j < len; j++) {
	      arg = ref[j];
	      res[1].push(arg.build());
	    }
	    opts = {};
	    add_opts = false;
	    ref1 = this.optargs;
	    for (key in ref1) {
	      if (!hasProp.call(ref1, key)) continue;
	      val = ref1[key];
	      add_opts = true;
	      opts[key] = val.build();
	    }
	    if (add_opts) {
	      res.push(opts);
	    }
	    return res;
	  };

	  RDBOp.prototype.compose = function(args, optargs) {
	    if (this.st) {
	      return ['r.', this.st, '(', intspallargs(args, optargs), ')'];
	    } else {
	      if (shouldWrap(this.args[0])) {
	        args[0] = ['r(', args[0], ')'];
	      }
	      return [args[0], '.', this.mt, '(', intspallargs(args.slice(1), optargs), ')'];
	    }
	  };

	  return RDBOp;

	})(RDBVal);

	RDBConstant = (function(superClass) {
	  extend(RDBConstant, superClass);

	  function RDBConstant() {
	    return RDBConstant.__super__.constructor.apply(this, arguments);
	  }

	  RDBConstant.prototype.compose = function(args, optargs) {
	    return ['r.', this.st];
	  };

	  return RDBConstant;

	})(RDBOp);

	intsp = function(seq) {
	  var e, j, len, ref, res;
	  if (seq[0] == null) {
	    return [];
	  }
	  res = [seq[0]];
	  ref = seq.slice(1);
	  for (j = 0, len = ref.length; j < len; j++) {
	    e = ref[j];
	    res.push(', ', e);
	  }
	  return res;
	};

	kved = function(optargs) {
	  var k, v;
	  return [
	    '{', intsp((function() {
	      var results;
	      results = [];
	      for (k in optargs) {
	        if (!hasProp.call(optargs, k)) continue;
	        v = optargs[k];
	        results.push([JSON.stringify(k), ': ', v]);
	      }
	      return results;
	    })()), '}'
	  ];
	};

	intspallargs = function(args, optargs) {
	  var argrepr;
	  argrepr = [];
	  if (args.length > 0) {
	    argrepr.push(intsp(args));
	  }
	  if (Object.keys(optargs).length > 0) {
	    if (argrepr.length > 0) {
	      argrepr.push(', ');
	    }
	    argrepr.push(kved(translateBackOptargs(optargs)));
	  }
	  return argrepr;
	};

	shouldWrap = function(arg) {
	  return arg instanceof DatumTerm || arg instanceof MakeArray || arg instanceof MakeObject;
	};

	MakeArray = (function(superClass) {
	  extend(MakeArray, superClass);

	  function MakeArray() {
	    return MakeArray.__super__.constructor.apply(this, arguments);
	  }

	  MakeArray.prototype.tt = protoTermType.MAKE_ARRAY;

	  MakeArray.prototype.st = '[...]';

	  MakeArray.prototype.compose = function(args) {
	    return ['[', intsp(args), ']'];
	  };

	  return MakeArray;

	})(RDBOp);

	MakeObject = (function(superClass) {
	  extend(MakeObject, superClass);

	  MakeObject.prototype.tt = protoTermType.MAKE_OBJ;

	  MakeObject.prototype.st = '{...}';

	  function MakeObject(obj, nestingDepth) {
	    var key, self, val;
	    if (nestingDepth == null) {
	      nestingDepth = 20;
	    }
	    self = MakeObject.__super__.constructor.call(this, {});
	    self.optargs = {};
	    for (key in obj) {
	      if (!hasProp.call(obj, key)) continue;
	      val = obj[key];
	      if (typeof val === 'undefined') {
	        throw new err.ReqlDriverCompileError("Object field '" + key + "' may not be undefined");
	      }
	      self.optargs[key] = rethinkdb.expr(val, nestingDepth - 1);
	    }
	    return self;
	  }

	  MakeObject.prototype.compose = function(args, optargs) {
	    return kved(optargs);
	  };

	  MakeObject.prototype.build = function() {
	    var key, ref, res, val;
	    res = {};
	    ref = this.optargs;
	    for (key in ref) {
	      if (!hasProp.call(ref, key)) continue;
	      val = ref[key];
	      res[key] = val.build();
	    }
	    return res;
	  };

	  return MakeObject;

	})(RDBOp);

	Var = (function(superClass) {
	  extend(Var, superClass);

	  function Var() {
	    return Var.__super__.constructor.apply(this, arguments);
	  }

	  Var.prototype.tt = protoTermType.VAR;

	  Var.prototype.compose = function(args) {
	    return ['var_' + args];
	  };

	  return Var;

	})(RDBOp);

	JavaScript = (function(superClass) {
	  extend(JavaScript, superClass);

	  function JavaScript() {
	    return JavaScript.__super__.constructor.apply(this, arguments);
	  }

	  JavaScript.prototype.tt = protoTermType.JAVASCRIPT;

	  JavaScript.prototype.st = 'js';

	  return JavaScript;

	})(RDBOp);

	Http = (function(superClass) {
	  extend(Http, superClass);

	  function Http() {
	    return Http.__super__.constructor.apply(this, arguments);
	  }

	  Http.prototype.tt = protoTermType.HTTP;

	  Http.prototype.st = 'http';

	  return Http;

	})(RDBOp);

	Json = (function(superClass) {
	  extend(Json, superClass);

	  function Json() {
	    return Json.__super__.constructor.apply(this, arguments);
	  }

	  Json.prototype.tt = protoTermType.JSON;

	  Json.prototype.st = 'json';

	  return Json;

	})(RDBOp);

	Binary = (function(superClass) {
	  extend(Binary, superClass);

	  Binary.prototype.tt = protoTermType.BINARY;

	  Binary.prototype.st = 'binary';

	  function Binary(data) {
	    var self;
	    if (data instanceof TermBase) {
	      self = Binary.__super__.constructor.call(this, {}, data);
	    } else if (data instanceof Buffer) {
	      self = Binary.__super__.constructor.call(this);
	      self.base64_data = data.toString("base64");
	    } else {
	      throw new TypeError("Parameter to `r.binary` must be a Buffer object or RQL query.");
	    }
	    return self;
	  }

	  Binary.prototype.compose = function() {
	    if (this.args.length === 0) {
	      return 'r.binary(<data>)';
	    } else {
	      return Binary.__super__.compose.apply(this, arguments);
	    }
	  };

	  Binary.prototype.build = function() {
	    if (this.args.length === 0) {
	      return {
	        '$reql_type$': 'BINARY',
	        'data': this.base64_data
	      };
	    } else {
	      return Binary.__super__.build.apply(this, arguments);
	    }
	  };

	  return Binary;

	})(RDBOp);

	Args = (function(superClass) {
	  extend(Args, superClass);

	  function Args() {
	    return Args.__super__.constructor.apply(this, arguments);
	  }

	  Args.prototype.tt = protoTermType.ARGS;

	  Args.prototype.st = 'args';

	  return Args;

	})(RDBOp);

	UserError = (function(superClass) {
	  extend(UserError, superClass);

	  function UserError() {
	    return UserError.__super__.constructor.apply(this, arguments);
	  }

	  UserError.prototype.tt = protoTermType.ERROR;

	  UserError.prototype.st = 'error';

	  return UserError;

	})(RDBOp);

	Random = (function(superClass) {
	  extend(Random, superClass);

	  function Random() {
	    return Random.__super__.constructor.apply(this, arguments);
	  }

	  Random.prototype.tt = protoTermType.RANDOM;

	  Random.prototype.st = 'random';

	  return Random;

	})(RDBOp);

	ImplicitVar = (function(superClass) {
	  extend(ImplicitVar, superClass);

	  function ImplicitVar() {
	    return ImplicitVar.__super__.constructor.apply(this, arguments);
	  }

	  ImplicitVar.prototype.tt = protoTermType.IMPLICIT_VAR;

	  ImplicitVar.prototype.compose = function() {
	    return ['r.row'];
	  };

	  return ImplicitVar;

	})(RDBOp);

	Db = (function(superClass) {
	  extend(Db, superClass);

	  function Db() {
	    return Db.__super__.constructor.apply(this, arguments);
	  }

	  Db.prototype.tt = protoTermType.DB;

	  Db.prototype.st = 'db';

	  return Db;

	})(RDBOp);

	Table = (function(superClass) {
	  extend(Table, superClass);

	  function Table() {
	    return Table.__super__.constructor.apply(this, arguments);
	  }

	  Table.prototype.tt = protoTermType.TABLE;

	  Table.prototype.st = 'table';

	  Table.prototype.compose = function(args, optargs) {
	    if (this.args[0] instanceof Db) {
	      return [args[0], '.table(', intspallargs(args.slice(1), optargs), ')'];
	    } else {
	      return ['r.table(', intspallargs(args, optargs), ')'];
	    }
	  };

	  return Table;

	})(RDBOp);

	Get = (function(superClass) {
	  extend(Get, superClass);

	  function Get() {
	    return Get.__super__.constructor.apply(this, arguments);
	  }

	  Get.prototype.tt = protoTermType.GET;

	  Get.prototype.mt = 'get';

	  return Get;

	})(RDBOp);

	GetAll = (function(superClass) {
	  extend(GetAll, superClass);

	  function GetAll() {
	    return GetAll.__super__.constructor.apply(this, arguments);
	  }

	  GetAll.prototype.tt = protoTermType.GET_ALL;

	  GetAll.prototype.mt = 'getAll';

	  return GetAll;

	})(RDBOp);

	Eq = (function(superClass) {
	  extend(Eq, superClass);

	  function Eq() {
	    return Eq.__super__.constructor.apply(this, arguments);
	  }

	  Eq.prototype.tt = protoTermType.EQ;

	  Eq.prototype.mt = 'eq';

	  return Eq;

	})(RDBOp);

	Ne = (function(superClass) {
	  extend(Ne, superClass);

	  function Ne() {
	    return Ne.__super__.constructor.apply(this, arguments);
	  }

	  Ne.prototype.tt = protoTermType.NE;

	  Ne.prototype.mt = 'ne';

	  return Ne;

	})(RDBOp);

	Lt = (function(superClass) {
	  extend(Lt, superClass);

	  function Lt() {
	    return Lt.__super__.constructor.apply(this, arguments);
	  }

	  Lt.prototype.tt = protoTermType.LT;

	  Lt.prototype.mt = 'lt';

	  return Lt;

	})(RDBOp);

	Le = (function(superClass) {
	  extend(Le, superClass);

	  function Le() {
	    return Le.__super__.constructor.apply(this, arguments);
	  }

	  Le.prototype.tt = protoTermType.LE;

	  Le.prototype.mt = 'le';

	  return Le;

	})(RDBOp);

	Gt = (function(superClass) {
	  extend(Gt, superClass);

	  function Gt() {
	    return Gt.__super__.constructor.apply(this, arguments);
	  }

	  Gt.prototype.tt = protoTermType.GT;

	  Gt.prototype.mt = 'gt';

	  return Gt;

	})(RDBOp);

	Ge = (function(superClass) {
	  extend(Ge, superClass);

	  function Ge() {
	    return Ge.__super__.constructor.apply(this, arguments);
	  }

	  Ge.prototype.tt = protoTermType.GE;

	  Ge.prototype.mt = 'ge';

	  return Ge;

	})(RDBOp);

	Not = (function(superClass) {
	  extend(Not, superClass);

	  function Not() {
	    return Not.__super__.constructor.apply(this, arguments);
	  }

	  Not.prototype.tt = protoTermType.NOT;

	  Not.prototype.mt = 'not';

	  return Not;

	})(RDBOp);

	Add = (function(superClass) {
	  extend(Add, superClass);

	  function Add() {
	    return Add.__super__.constructor.apply(this, arguments);
	  }

	  Add.prototype.tt = protoTermType.ADD;

	  Add.prototype.mt = 'add';

	  return Add;

	})(RDBOp);

	Sub = (function(superClass) {
	  extend(Sub, superClass);

	  function Sub() {
	    return Sub.__super__.constructor.apply(this, arguments);
	  }

	  Sub.prototype.tt = protoTermType.SUB;

	  Sub.prototype.mt = 'sub';

	  return Sub;

	})(RDBOp);

	Mul = (function(superClass) {
	  extend(Mul, superClass);

	  function Mul() {
	    return Mul.__super__.constructor.apply(this, arguments);
	  }

	  Mul.prototype.tt = protoTermType.MUL;

	  Mul.prototype.mt = 'mul';

	  return Mul;

	})(RDBOp);

	Div = (function(superClass) {
	  extend(Div, superClass);

	  function Div() {
	    return Div.__super__.constructor.apply(this, arguments);
	  }

	  Div.prototype.tt = protoTermType.DIV;

	  Div.prototype.mt = 'div';

	  return Div;

	})(RDBOp);

	Mod = (function(superClass) {
	  extend(Mod, superClass);

	  function Mod() {
	    return Mod.__super__.constructor.apply(this, arguments);
	  }

	  Mod.prototype.tt = protoTermType.MOD;

	  Mod.prototype.mt = 'mod';

	  return Mod;

	})(RDBOp);

	Floor = (function(superClass) {
	  extend(Floor, superClass);

	  function Floor() {
	    return Floor.__super__.constructor.apply(this, arguments);
	  }

	  Floor.prototype.tt = protoTermType.FLOOR;

	  Floor.prototype.mt = 'floor';

	  return Floor;

	})(RDBOp);

	Ceil = (function(superClass) {
	  extend(Ceil, superClass);

	  function Ceil() {
	    return Ceil.__super__.constructor.apply(this, arguments);
	  }

	  Ceil.prototype.tt = protoTermType.CEIL;

	  Ceil.prototype.mt = 'ceil';

	  return Ceil;

	})(RDBOp);

	Round = (function(superClass) {
	  extend(Round, superClass);

	  function Round() {
	    return Round.__super__.constructor.apply(this, arguments);
	  }

	  Round.prototype.tt = protoTermType.ROUND;

	  Round.prototype.mt = 'round';

	  return Round;

	})(RDBOp);

	Append = (function(superClass) {
	  extend(Append, superClass);

	  function Append() {
	    return Append.__super__.constructor.apply(this, arguments);
	  }

	  Append.prototype.tt = protoTermType.APPEND;

	  Append.prototype.mt = 'append';

	  return Append;

	})(RDBOp);

	Prepend = (function(superClass) {
	  extend(Prepend, superClass);

	  function Prepend() {
	    return Prepend.__super__.constructor.apply(this, arguments);
	  }

	  Prepend.prototype.tt = protoTermType.PREPEND;

	  Prepend.prototype.mt = 'prepend';

	  return Prepend;

	})(RDBOp);

	Difference = (function(superClass) {
	  extend(Difference, superClass);

	  function Difference() {
	    return Difference.__super__.constructor.apply(this, arguments);
	  }

	  Difference.prototype.tt = protoTermType.DIFFERENCE;

	  Difference.prototype.mt = 'difference';

	  return Difference;

	})(RDBOp);

	SetInsert = (function(superClass) {
	  extend(SetInsert, superClass);

	  function SetInsert() {
	    return SetInsert.__super__.constructor.apply(this, arguments);
	  }

	  SetInsert.prototype.tt = protoTermType.SET_INSERT;

	  SetInsert.prototype.mt = 'setInsert';

	  return SetInsert;

	})(RDBOp);

	SetUnion = (function(superClass) {
	  extend(SetUnion, superClass);

	  function SetUnion() {
	    return SetUnion.__super__.constructor.apply(this, arguments);
	  }

	  SetUnion.prototype.tt = protoTermType.SET_UNION;

	  SetUnion.prototype.mt = 'setUnion';

	  return SetUnion;

	})(RDBOp);

	SetIntersection = (function(superClass) {
	  extend(SetIntersection, superClass);

	  function SetIntersection() {
	    return SetIntersection.__super__.constructor.apply(this, arguments);
	  }

	  SetIntersection.prototype.tt = protoTermType.SET_INTERSECTION;

	  SetIntersection.prototype.mt = 'setIntersection';

	  return SetIntersection;

	})(RDBOp);

	SetDifference = (function(superClass) {
	  extend(SetDifference, superClass);

	  function SetDifference() {
	    return SetDifference.__super__.constructor.apply(this, arguments);
	  }

	  SetDifference.prototype.tt = protoTermType.SET_DIFFERENCE;

	  SetDifference.prototype.mt = 'setDifference';

	  return SetDifference;

	})(RDBOp);

	Slice = (function(superClass) {
	  extend(Slice, superClass);

	  function Slice() {
	    return Slice.__super__.constructor.apply(this, arguments);
	  }

	  Slice.prototype.tt = protoTermType.SLICE;

	  Slice.prototype.mt = 'slice';

	  return Slice;

	})(RDBOp);

	Skip = (function(superClass) {
	  extend(Skip, superClass);

	  function Skip() {
	    return Skip.__super__.constructor.apply(this, arguments);
	  }

	  Skip.prototype.tt = protoTermType.SKIP;

	  Skip.prototype.mt = 'skip';

	  return Skip;

	})(RDBOp);

	Limit = (function(superClass) {
	  extend(Limit, superClass);

	  function Limit() {
	    return Limit.__super__.constructor.apply(this, arguments);
	  }

	  Limit.prototype.tt = protoTermType.LIMIT;

	  Limit.prototype.mt = 'limit';

	  return Limit;

	})(RDBOp);

	GetField = (function(superClass) {
	  extend(GetField, superClass);

	  function GetField() {
	    return GetField.__super__.constructor.apply(this, arguments);
	  }

	  GetField.prototype.tt = protoTermType.GET_FIELD;

	  GetField.prototype.mt = 'getField';

	  return GetField;

	})(RDBOp);

	Bracket = (function(superClass) {
	  extend(Bracket, superClass);

	  function Bracket() {
	    return Bracket.__super__.constructor.apply(this, arguments);
	  }

	  Bracket.prototype.tt = protoTermType.BRACKET;

	  Bracket.prototype.st = '(...)';

	  Bracket.prototype.compose = function(args) {
	    return [args[0], '(', args[1], ')'];
	  };

	  return Bracket;

	})(RDBOp);

	Contains = (function(superClass) {
	  extend(Contains, superClass);

	  function Contains() {
	    return Contains.__super__.constructor.apply(this, arguments);
	  }

	  Contains.prototype.tt = protoTermType.CONTAINS;

	  Contains.prototype.mt = 'contains';

	  return Contains;

	})(RDBOp);

	InsertAt = (function(superClass) {
	  extend(InsertAt, superClass);

	  function InsertAt() {
	    return InsertAt.__super__.constructor.apply(this, arguments);
	  }

	  InsertAt.prototype.tt = protoTermType.INSERT_AT;

	  InsertAt.prototype.mt = 'insertAt';

	  return InsertAt;

	})(RDBOp);

	SpliceAt = (function(superClass) {
	  extend(SpliceAt, superClass);

	  function SpliceAt() {
	    return SpliceAt.__super__.constructor.apply(this, arguments);
	  }

	  SpliceAt.prototype.tt = protoTermType.SPLICE_AT;

	  SpliceAt.prototype.mt = 'spliceAt';

	  return SpliceAt;

	})(RDBOp);

	DeleteAt = (function(superClass) {
	  extend(DeleteAt, superClass);

	  function DeleteAt() {
	    return DeleteAt.__super__.constructor.apply(this, arguments);
	  }

	  DeleteAt.prototype.tt = protoTermType.DELETE_AT;

	  DeleteAt.prototype.mt = 'deleteAt';

	  return DeleteAt;

	})(RDBOp);

	ChangeAt = (function(superClass) {
	  extend(ChangeAt, superClass);

	  function ChangeAt() {
	    return ChangeAt.__super__.constructor.apply(this, arguments);
	  }

	  ChangeAt.prototype.tt = protoTermType.CHANGE_AT;

	  ChangeAt.prototype.mt = 'changeAt';

	  return ChangeAt;

	})(RDBOp);

	HasFields = (function(superClass) {
	  extend(HasFields, superClass);

	  function HasFields() {
	    return HasFields.__super__.constructor.apply(this, arguments);
	  }

	  HasFields.prototype.tt = protoTermType.HAS_FIELDS;

	  HasFields.prototype.mt = 'hasFields';

	  return HasFields;

	})(RDBOp);

	WithFields = (function(superClass) {
	  extend(WithFields, superClass);

	  function WithFields() {
	    return WithFields.__super__.constructor.apply(this, arguments);
	  }

	  WithFields.prototype.tt = protoTermType.WITH_FIELDS;

	  WithFields.prototype.mt = 'withFields';

	  return WithFields;

	})(RDBOp);

	Keys = (function(superClass) {
	  extend(Keys, superClass);

	  function Keys() {
	    return Keys.__super__.constructor.apply(this, arguments);
	  }

	  Keys.prototype.tt = protoTermType.KEYS;

	  Keys.prototype.mt = 'keys';

	  return Keys;

	})(RDBOp);

	Values = (function(superClass) {
	  extend(Values, superClass);

	  function Values() {
	    return Values.__super__.constructor.apply(this, arguments);
	  }

	  Values.prototype.tt = protoTermType.VALUES;

	  Values.prototype.mt = 'values';

	  return Values;

	})(RDBOp);

	Changes = (function(superClass) {
	  extend(Changes, superClass);

	  function Changes() {
	    return Changes.__super__.constructor.apply(this, arguments);
	  }

	  Changes.prototype.tt = protoTermType.CHANGES;

	  Changes.prototype.mt = 'changes';

	  return Changes;

	})(RDBOp);

	Object_ = (function(superClass) {
	  extend(Object_, superClass);

	  function Object_() {
	    return Object_.__super__.constructor.apply(this, arguments);
	  }

	  Object_.prototype.tt = protoTermType.OBJECT;

	  Object_.prototype.mt = 'object';

	  return Object_;

	})(RDBOp);

	Pluck = (function(superClass) {
	  extend(Pluck, superClass);

	  function Pluck() {
	    return Pluck.__super__.constructor.apply(this, arguments);
	  }

	  Pluck.prototype.tt = protoTermType.PLUCK;

	  Pluck.prototype.mt = 'pluck';

	  return Pluck;

	})(RDBOp);

	OffsetsOf = (function(superClass) {
	  extend(OffsetsOf, superClass);

	  function OffsetsOf() {
	    return OffsetsOf.__super__.constructor.apply(this, arguments);
	  }

	  OffsetsOf.prototype.tt = protoTermType.OFFSETS_OF;

	  OffsetsOf.prototype.mt = 'offsetsOf';

	  return OffsetsOf;

	})(RDBOp);

	Without = (function(superClass) {
	  extend(Without, superClass);

	  function Without() {
	    return Without.__super__.constructor.apply(this, arguments);
	  }

	  Without.prototype.tt = protoTermType.WITHOUT;

	  Without.prototype.mt = 'without';

	  return Without;

	})(RDBOp);

	Merge = (function(superClass) {
	  extend(Merge, superClass);

	  function Merge() {
	    return Merge.__super__.constructor.apply(this, arguments);
	  }

	  Merge.prototype.tt = protoTermType.MERGE;

	  Merge.prototype.mt = 'merge';

	  return Merge;

	})(RDBOp);

	Between = (function(superClass) {
	  extend(Between, superClass);

	  function Between() {
	    return Between.__super__.constructor.apply(this, arguments);
	  }

	  Between.prototype.tt = protoTermType.BETWEEN;

	  Between.prototype.mt = 'between';

	  return Between;

	})(RDBOp);

	Reduce = (function(superClass) {
	  extend(Reduce, superClass);

	  function Reduce() {
	    return Reduce.__super__.constructor.apply(this, arguments);
	  }

	  Reduce.prototype.tt = protoTermType.REDUCE;

	  Reduce.prototype.mt = 'reduce';

	  return Reduce;

	})(RDBOp);

	Map = (function(superClass) {
	  extend(Map, superClass);

	  function Map() {
	    return Map.__super__.constructor.apply(this, arguments);
	  }

	  Map.prototype.tt = protoTermType.MAP;

	  Map.prototype.mt = 'map';

	  return Map;

	})(RDBOp);

	Fold = (function(superClass) {
	  extend(Fold, superClass);

	  function Fold() {
	    return Fold.__super__.constructor.apply(this, arguments);
	  }

	  Fold.prototype.tt = protoTermType.FOLD;

	  Fold.prototype.mt = 'fold';

	  return Fold;

	})(RDBOp);

	Filter = (function(superClass) {
	  extend(Filter, superClass);

	  function Filter() {
	    return Filter.__super__.constructor.apply(this, arguments);
	  }

	  Filter.prototype.tt = protoTermType.FILTER;

	  Filter.prototype.mt = 'filter';

	  return Filter;

	})(RDBOp);

	ConcatMap = (function(superClass) {
	  extend(ConcatMap, superClass);

	  function ConcatMap() {
	    return ConcatMap.__super__.constructor.apply(this, arguments);
	  }

	  ConcatMap.prototype.tt = protoTermType.CONCAT_MAP;

	  ConcatMap.prototype.mt = 'concatMap';

	  return ConcatMap;

	})(RDBOp);

	OrderBy = (function(superClass) {
	  extend(OrderBy, superClass);

	  function OrderBy() {
	    return OrderBy.__super__.constructor.apply(this, arguments);
	  }

	  OrderBy.prototype.tt = protoTermType.ORDER_BY;

	  OrderBy.prototype.mt = 'orderBy';

	  return OrderBy;

	})(RDBOp);

	Distinct = (function(superClass) {
	  extend(Distinct, superClass);

	  function Distinct() {
	    return Distinct.__super__.constructor.apply(this, arguments);
	  }

	  Distinct.prototype.tt = protoTermType.DISTINCT;

	  Distinct.prototype.mt = 'distinct';

	  return Distinct;

	})(RDBOp);

	Count = (function(superClass) {
	  extend(Count, superClass);

	  function Count() {
	    return Count.__super__.constructor.apply(this, arguments);
	  }

	  Count.prototype.tt = protoTermType.COUNT;

	  Count.prototype.mt = 'count';

	  return Count;

	})(RDBOp);

	Union = (function(superClass) {
	  extend(Union, superClass);

	  function Union() {
	    return Union.__super__.constructor.apply(this, arguments);
	  }

	  Union.prototype.tt = protoTermType.UNION;

	  Union.prototype.mt = 'union';

	  return Union;

	})(RDBOp);

	Nth = (function(superClass) {
	  extend(Nth, superClass);

	  function Nth() {
	    return Nth.__super__.constructor.apply(this, arguments);
	  }

	  Nth.prototype.tt = protoTermType.NTH;

	  Nth.prototype.mt = 'nth';

	  return Nth;

	})(RDBOp);

	ToJsonString = (function(superClass) {
	  extend(ToJsonString, superClass);

	  function ToJsonString() {
	    return ToJsonString.__super__.constructor.apply(this, arguments);
	  }

	  ToJsonString.prototype.tt = protoTermType.TO_JSON_STRING;

	  ToJsonString.prototype.mt = 'toJsonString';

	  return ToJsonString;

	})(RDBOp);

	Match = (function(superClass) {
	  extend(Match, superClass);

	  function Match() {
	    return Match.__super__.constructor.apply(this, arguments);
	  }

	  Match.prototype.tt = protoTermType.MATCH;

	  Match.prototype.mt = 'match';

	  return Match;

	})(RDBOp);

	Split = (function(superClass) {
	  extend(Split, superClass);

	  function Split() {
	    return Split.__super__.constructor.apply(this, arguments);
	  }

	  Split.prototype.tt = protoTermType.SPLIT;

	  Split.prototype.mt = 'split';

	  return Split;

	})(RDBOp);

	Upcase = (function(superClass) {
	  extend(Upcase, superClass);

	  function Upcase() {
	    return Upcase.__super__.constructor.apply(this, arguments);
	  }

	  Upcase.prototype.tt = protoTermType.UPCASE;

	  Upcase.prototype.mt = 'upcase';

	  return Upcase;

	})(RDBOp);

	Downcase = (function(superClass) {
	  extend(Downcase, superClass);

	  function Downcase() {
	    return Downcase.__super__.constructor.apply(this, arguments);
	  }

	  Downcase.prototype.tt = protoTermType.DOWNCASE;

	  Downcase.prototype.mt = 'downcase';

	  return Downcase;

	})(RDBOp);

	IsEmpty = (function(superClass) {
	  extend(IsEmpty, superClass);

	  function IsEmpty() {
	    return IsEmpty.__super__.constructor.apply(this, arguments);
	  }

	  IsEmpty.prototype.tt = protoTermType.IS_EMPTY;

	  IsEmpty.prototype.mt = 'isEmpty';

	  return IsEmpty;

	})(RDBOp);

	Group = (function(superClass) {
	  extend(Group, superClass);

	  function Group() {
	    return Group.__super__.constructor.apply(this, arguments);
	  }

	  Group.prototype.tt = protoTermType.GROUP;

	  Group.prototype.mt = 'group';

	  return Group;

	})(RDBOp);

	Sum = (function(superClass) {
	  extend(Sum, superClass);

	  function Sum() {
	    return Sum.__super__.constructor.apply(this, arguments);
	  }

	  Sum.prototype.tt = protoTermType.SUM;

	  Sum.prototype.mt = 'sum';

	  return Sum;

	})(RDBOp);

	Avg = (function(superClass) {
	  extend(Avg, superClass);

	  function Avg() {
	    return Avg.__super__.constructor.apply(this, arguments);
	  }

	  Avg.prototype.tt = protoTermType.AVG;

	  Avg.prototype.mt = 'avg';

	  return Avg;

	})(RDBOp);

	Min = (function(superClass) {
	  extend(Min, superClass);

	  function Min() {
	    return Min.__super__.constructor.apply(this, arguments);
	  }

	  Min.prototype.tt = protoTermType.MIN;

	  Min.prototype.mt = 'min';

	  return Min;

	})(RDBOp);

	Max = (function(superClass) {
	  extend(Max, superClass);

	  function Max() {
	    return Max.__super__.constructor.apply(this, arguments);
	  }

	  Max.prototype.tt = protoTermType.MAX;

	  Max.prototype.mt = 'max';

	  return Max;

	})(RDBOp);

	InnerJoin = (function(superClass) {
	  extend(InnerJoin, superClass);

	  function InnerJoin() {
	    return InnerJoin.__super__.constructor.apply(this, arguments);
	  }

	  InnerJoin.prototype.tt = protoTermType.INNER_JOIN;

	  InnerJoin.prototype.mt = 'innerJoin';

	  return InnerJoin;

	})(RDBOp);

	OuterJoin = (function(superClass) {
	  extend(OuterJoin, superClass);

	  function OuterJoin() {
	    return OuterJoin.__super__.constructor.apply(this, arguments);
	  }

	  OuterJoin.prototype.tt = protoTermType.OUTER_JOIN;

	  OuterJoin.prototype.mt = 'outerJoin';

	  return OuterJoin;

	})(RDBOp);

	EqJoin = (function(superClass) {
	  extend(EqJoin, superClass);

	  function EqJoin() {
	    return EqJoin.__super__.constructor.apply(this, arguments);
	  }

	  EqJoin.prototype.tt = protoTermType.EQ_JOIN;

	  EqJoin.prototype.mt = 'eqJoin';

	  return EqJoin;

	})(RDBOp);

	Zip = (function(superClass) {
	  extend(Zip, superClass);

	  function Zip() {
	    return Zip.__super__.constructor.apply(this, arguments);
	  }

	  Zip.prototype.tt = protoTermType.ZIP;

	  Zip.prototype.mt = 'zip';

	  return Zip;

	})(RDBOp);

	Range = (function(superClass) {
	  extend(Range, superClass);

	  function Range() {
	    return Range.__super__.constructor.apply(this, arguments);
	  }

	  Range.prototype.tt = protoTermType.RANGE;

	  Range.prototype.st = 'range';

	  return Range;

	})(RDBOp);

	CoerceTo = (function(superClass) {
	  extend(CoerceTo, superClass);

	  function CoerceTo() {
	    return CoerceTo.__super__.constructor.apply(this, arguments);
	  }

	  CoerceTo.prototype.tt = protoTermType.COERCE_TO;

	  CoerceTo.prototype.mt = 'coerceTo';

	  return CoerceTo;

	})(RDBOp);

	Ungroup = (function(superClass) {
	  extend(Ungroup, superClass);

	  function Ungroup() {
	    return Ungroup.__super__.constructor.apply(this, arguments);
	  }

	  Ungroup.prototype.tt = protoTermType.UNGROUP;

	  Ungroup.prototype.mt = 'ungroup';

	  return Ungroup;

	})(RDBOp);

	TypeOf = (function(superClass) {
	  extend(TypeOf, superClass);

	  function TypeOf() {
	    return TypeOf.__super__.constructor.apply(this, arguments);
	  }

	  TypeOf.prototype.tt = protoTermType.TYPE_OF;

	  TypeOf.prototype.mt = 'typeOf';

	  return TypeOf;

	})(RDBOp);

	Info = (function(superClass) {
	  extend(Info, superClass);

	  function Info() {
	    return Info.__super__.constructor.apply(this, arguments);
	  }

	  Info.prototype.tt = protoTermType.INFO;

	  Info.prototype.mt = 'info';

	  return Info;

	})(RDBOp);

	Sample = (function(superClass) {
	  extend(Sample, superClass);

	  function Sample() {
	    return Sample.__super__.constructor.apply(this, arguments);
	  }

	  Sample.prototype.tt = protoTermType.SAMPLE;

	  Sample.prototype.mt = 'sample';

	  return Sample;

	})(RDBOp);

	Update = (function(superClass) {
	  extend(Update, superClass);

	  function Update() {
	    return Update.__super__.constructor.apply(this, arguments);
	  }

	  Update.prototype.tt = protoTermType.UPDATE;

	  Update.prototype.mt = 'update';

	  return Update;

	})(RDBOp);

	Delete = (function(superClass) {
	  extend(Delete, superClass);

	  function Delete() {
	    return Delete.__super__.constructor.apply(this, arguments);
	  }

	  Delete.prototype.tt = protoTermType.DELETE;

	  Delete.prototype.mt = 'delete';

	  return Delete;

	})(RDBOp);

	Replace = (function(superClass) {
	  extend(Replace, superClass);

	  function Replace() {
	    return Replace.__super__.constructor.apply(this, arguments);
	  }

	  Replace.prototype.tt = protoTermType.REPLACE;

	  Replace.prototype.mt = 'replace';

	  return Replace;

	})(RDBOp);

	Insert = (function(superClass) {
	  extend(Insert, superClass);

	  function Insert() {
	    return Insert.__super__.constructor.apply(this, arguments);
	  }

	  Insert.prototype.tt = protoTermType.INSERT;

	  Insert.prototype.mt = 'insert';

	  return Insert;

	})(RDBOp);

	DbCreate = (function(superClass) {
	  extend(DbCreate, superClass);

	  function DbCreate() {
	    return DbCreate.__super__.constructor.apply(this, arguments);
	  }

	  DbCreate.prototype.tt = protoTermType.DB_CREATE;

	  DbCreate.prototype.st = 'dbCreate';

	  return DbCreate;

	})(RDBOp);

	DbDrop = (function(superClass) {
	  extend(DbDrop, superClass);

	  function DbDrop() {
	    return DbDrop.__super__.constructor.apply(this, arguments);
	  }

	  DbDrop.prototype.tt = protoTermType.DB_DROP;

	  DbDrop.prototype.st = 'dbDrop';

	  return DbDrop;

	})(RDBOp);

	DbList = (function(superClass) {
	  extend(DbList, superClass);

	  function DbList() {
	    return DbList.__super__.constructor.apply(this, arguments);
	  }

	  DbList.prototype.tt = protoTermType.DB_LIST;

	  DbList.prototype.st = 'dbList';

	  return DbList;

	})(RDBOp);

	TableCreate = (function(superClass) {
	  extend(TableCreate, superClass);

	  function TableCreate() {
	    return TableCreate.__super__.constructor.apply(this, arguments);
	  }

	  TableCreate.prototype.tt = protoTermType.TABLE_CREATE;

	  TableCreate.prototype.mt = 'tableCreate';

	  return TableCreate;

	})(RDBOp);

	TableDrop = (function(superClass) {
	  extend(TableDrop, superClass);

	  function TableDrop() {
	    return TableDrop.__super__.constructor.apply(this, arguments);
	  }

	  TableDrop.prototype.tt = protoTermType.TABLE_DROP;

	  TableDrop.prototype.mt = 'tableDrop';

	  return TableDrop;

	})(RDBOp);

	TableList = (function(superClass) {
	  extend(TableList, superClass);

	  function TableList() {
	    return TableList.__super__.constructor.apply(this, arguments);
	  }

	  TableList.prototype.tt = protoTermType.TABLE_LIST;

	  TableList.prototype.mt = 'tableList';

	  return TableList;

	})(RDBOp);

	IndexCreate = (function(superClass) {
	  extend(IndexCreate, superClass);

	  function IndexCreate() {
	    return IndexCreate.__super__.constructor.apply(this, arguments);
	  }

	  IndexCreate.prototype.tt = protoTermType.INDEX_CREATE;

	  IndexCreate.prototype.mt = 'indexCreate';

	  return IndexCreate;

	})(RDBOp);

	IndexDrop = (function(superClass) {
	  extend(IndexDrop, superClass);

	  function IndexDrop() {
	    return IndexDrop.__super__.constructor.apply(this, arguments);
	  }

	  IndexDrop.prototype.tt = protoTermType.INDEX_DROP;

	  IndexDrop.prototype.mt = 'indexDrop';

	  return IndexDrop;

	})(RDBOp);

	IndexRename = (function(superClass) {
	  extend(IndexRename, superClass);

	  function IndexRename() {
	    return IndexRename.__super__.constructor.apply(this, arguments);
	  }

	  IndexRename.prototype.tt = protoTermType.INDEX_RENAME;

	  IndexRename.prototype.mt = 'indexRename';

	  return IndexRename;

	})(RDBOp);

	IndexList = (function(superClass) {
	  extend(IndexList, superClass);

	  function IndexList() {
	    return IndexList.__super__.constructor.apply(this, arguments);
	  }

	  IndexList.prototype.tt = protoTermType.INDEX_LIST;

	  IndexList.prototype.mt = 'indexList';

	  return IndexList;

	})(RDBOp);

	IndexStatus = (function(superClass) {
	  extend(IndexStatus, superClass);

	  function IndexStatus() {
	    return IndexStatus.__super__.constructor.apply(this, arguments);
	  }

	  IndexStatus.prototype.tt = protoTermType.INDEX_STATUS;

	  IndexStatus.prototype.mt = 'indexStatus';

	  return IndexStatus;

	})(RDBOp);

	IndexWait = (function(superClass) {
	  extend(IndexWait, superClass);

	  function IndexWait() {
	    return IndexWait.__super__.constructor.apply(this, arguments);
	  }

	  IndexWait.prototype.tt = protoTermType.INDEX_WAIT;

	  IndexWait.prototype.mt = 'indexWait';

	  return IndexWait;

	})(RDBOp);

	Config = (function(superClass) {
	  extend(Config, superClass);

	  function Config() {
	    return Config.__super__.constructor.apply(this, arguments);
	  }

	  Config.prototype.tt = protoTermType.CONFIG;

	  Config.prototype.mt = 'config';

	  return Config;

	})(RDBOp);

	Status = (function(superClass) {
	  extend(Status, superClass);

	  function Status() {
	    return Status.__super__.constructor.apply(this, arguments);
	  }

	  Status.prototype.tt = protoTermType.STATUS;

	  Status.prototype.mt = 'status';

	  return Status;

	})(RDBOp);

	Wait = (function(superClass) {
	  extend(Wait, superClass);

	  function Wait() {
	    return Wait.__super__.constructor.apply(this, arguments);
	  }

	  Wait.prototype.tt = protoTermType.WAIT;

	  Wait.prototype.mt = 'wait';

	  return Wait;

	})(RDBOp);

	Reconfigure = (function(superClass) {
	  extend(Reconfigure, superClass);

	  function Reconfigure() {
	    return Reconfigure.__super__.constructor.apply(this, arguments);
	  }

	  Reconfigure.prototype.tt = protoTermType.RECONFIGURE;

	  Reconfigure.prototype.mt = 'reconfigure';

	  return Reconfigure;

	})(RDBOp);

	Rebalance = (function(superClass) {
	  extend(Rebalance, superClass);

	  function Rebalance() {
	    return Rebalance.__super__.constructor.apply(this, arguments);
	  }

	  Rebalance.prototype.tt = protoTermType.REBALANCE;

	  Rebalance.prototype.mt = 'rebalance';

	  return Rebalance;

	})(RDBOp);

	Sync = (function(superClass) {
	  extend(Sync, superClass);

	  function Sync() {
	    return Sync.__super__.constructor.apply(this, arguments);
	  }

	  Sync.prototype.tt = protoTermType.SYNC;

	  Sync.prototype.mt = 'sync';

	  return Sync;

	})(RDBOp);

	Grant = (function(superClass) {
	  extend(Grant, superClass);

	  function Grant() {
	    return Grant.__super__.constructor.apply(this, arguments);
	  }

	  Grant.prototype.tt = protoTermType.GRANT;

	  Grant.prototype.mt = 'grant';

	  return Grant;

	})(RDBOp);

	FunCall = (function(superClass) {
	  extend(FunCall, superClass);

	  function FunCall() {
	    return FunCall.__super__.constructor.apply(this, arguments);
	  }

	  FunCall.prototype.tt = protoTermType.FUNCALL;

	  FunCall.prototype.st = 'do';

	  FunCall.prototype.compose = function(args) {
	    if (args.length > 2) {
	      return ['r.do(', intsp(args.slice(1)), ', ', args[0], ')'];
	    } else {
	      if (shouldWrap(this.args[1])) {
	        args[1] = ['r(', args[1], ')'];
	      }
	      return [args[1], '.do(', args[0], ')'];
	    }
	  };

	  return FunCall;

	})(RDBOp);

	Default = (function(superClass) {
	  extend(Default, superClass);

	  function Default() {
	    return Default.__super__.constructor.apply(this, arguments);
	  }

	  Default.prototype.tt = protoTermType.DEFAULT;

	  Default.prototype.mt = 'default';

	  return Default;

	})(RDBOp);

	Branch = (function(superClass) {
	  extend(Branch, superClass);

	  function Branch() {
	    return Branch.__super__.constructor.apply(this, arguments);
	  }

	  Branch.prototype.tt = protoTermType.BRANCH;

	  Branch.prototype.st = 'branch';

	  return Branch;

	})(RDBOp);

	Or = (function(superClass) {
	  extend(Or, superClass);

	  function Or() {
	    return Or.__super__.constructor.apply(this, arguments);
	  }

	  Or.prototype.tt = protoTermType.OR;

	  Or.prototype.mt = 'or';

	  return Or;

	})(RDBOp);

	And = (function(superClass) {
	  extend(And, superClass);

	  function And() {
	    return And.__super__.constructor.apply(this, arguments);
	  }

	  And.prototype.tt = protoTermType.AND;

	  And.prototype.mt = 'and';

	  return And;

	})(RDBOp);

	ForEach = (function(superClass) {
	  extend(ForEach, superClass);

	  function ForEach() {
	    return ForEach.__super__.constructor.apply(this, arguments);
	  }

	  ForEach.prototype.tt = protoTermType.FOR_EACH;

	  ForEach.prototype.mt = 'forEach';

	  return ForEach;

	})(RDBOp);

	Func = (function(superClass) {
	  extend(Func, superClass);

	  Func.prototype.tt = protoTermType.FUNC;

	  Func.nextVarId = 0;

	  function Func(optargs, func) {
	    var argNums, args, argsArr, body, i;
	    args = [];
	    argNums = [];
	    i = 0;
	    while (i < func.length) {
	      argNums.push(Func.nextVarId);
	      args.push(new Var({}, Func.nextVarId));
	      Func.nextVarId++;
	      i++;
	    }
	    body = func.apply(null, args);
	    if (body === void 0) {
	      throw new err.ReqlDriverCompileError("Anonymous function returned `undefined`. Did you forget a `return`?");
	    }
	    argsArr = (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(MakeArray, [{}].concat(slice.call(argNums)), function(){});
	    return Func.__super__.constructor.call(this, optargs, argsArr, body);
	  }

	  Func.prototype.compose = function(args) {
	    var arg, i, j, len, ref, varStr;
	    if (hasImplicit(args[1]) === true) {
	      return [args[1]];
	    } else {
	      varStr = "";
	      ref = args[0][1];
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        arg = ref[i];
	        if (i % 2 === 0) {
	          varStr += Var.prototype.compose(arg);
	        } else {
	          varStr += arg;
	        }
	      }
	      return ['function(', varStr, ') { return ', args[1], '; }'];
	    }
	  };

	  return Func;

	})(RDBOp);

	Asc = (function(superClass) {
	  extend(Asc, superClass);

	  function Asc() {
	    return Asc.__super__.constructor.apply(this, arguments);
	  }

	  Asc.prototype.tt = protoTermType.ASC;

	  Asc.prototype.st = 'asc';

	  return Asc;

	})(RDBOp);

	Desc = (function(superClass) {
	  extend(Desc, superClass);

	  function Desc() {
	    return Desc.__super__.constructor.apply(this, arguments);
	  }

	  Desc.prototype.tt = protoTermType.DESC;

	  Desc.prototype.st = 'desc';

	  return Desc;

	})(RDBOp);

	Literal = (function(superClass) {
	  extend(Literal, superClass);

	  function Literal() {
	    return Literal.__super__.constructor.apply(this, arguments);
	  }

	  Literal.prototype.tt = protoTermType.LITERAL;

	  Literal.prototype.st = 'literal';

	  return Literal;

	})(RDBOp);

	ISO8601 = (function(superClass) {
	  extend(ISO8601, superClass);

	  function ISO8601() {
	    return ISO8601.__super__.constructor.apply(this, arguments);
	  }

	  ISO8601.prototype.tt = protoTermType.ISO8601;

	  ISO8601.prototype.st = 'ISO8601';

	  return ISO8601;

	})(RDBOp);

	ToISO8601 = (function(superClass) {
	  extend(ToISO8601, superClass);

	  function ToISO8601() {
	    return ToISO8601.__super__.constructor.apply(this, arguments);
	  }

	  ToISO8601.prototype.tt = protoTermType.TO_ISO8601;

	  ToISO8601.prototype.mt = 'toISO8601';

	  return ToISO8601;

	})(RDBOp);

	EpochTime = (function(superClass) {
	  extend(EpochTime, superClass);

	  function EpochTime() {
	    return EpochTime.__super__.constructor.apply(this, arguments);
	  }

	  EpochTime.prototype.tt = protoTermType.EPOCH_TIME;

	  EpochTime.prototype.st = 'epochTime';

	  return EpochTime;

	})(RDBOp);

	ToEpochTime = (function(superClass) {
	  extend(ToEpochTime, superClass);

	  function ToEpochTime() {
	    return ToEpochTime.__super__.constructor.apply(this, arguments);
	  }

	  ToEpochTime.prototype.tt = protoTermType.TO_EPOCH_TIME;

	  ToEpochTime.prototype.mt = 'toEpochTime';

	  return ToEpochTime;

	})(RDBOp);

	Now = (function(superClass) {
	  extend(Now, superClass);

	  function Now() {
	    return Now.__super__.constructor.apply(this, arguments);
	  }

	  Now.prototype.tt = protoTermType.NOW;

	  Now.prototype.st = 'now';

	  return Now;

	})(RDBOp);

	InTimezone = (function(superClass) {
	  extend(InTimezone, superClass);

	  function InTimezone() {
	    return InTimezone.__super__.constructor.apply(this, arguments);
	  }

	  InTimezone.prototype.tt = protoTermType.IN_TIMEZONE;

	  InTimezone.prototype.mt = 'inTimezone';

	  return InTimezone;

	})(RDBOp);

	During = (function(superClass) {
	  extend(During, superClass);

	  function During() {
	    return During.__super__.constructor.apply(this, arguments);
	  }

	  During.prototype.tt = protoTermType.DURING;

	  During.prototype.mt = 'during';

	  return During;

	})(RDBOp);

	RQLDate = (function(superClass) {
	  extend(RQLDate, superClass);

	  function RQLDate() {
	    return RQLDate.__super__.constructor.apply(this, arguments);
	  }

	  RQLDate.prototype.tt = protoTermType.DATE;

	  RQLDate.prototype.mt = 'date';

	  return RQLDate;

	})(RDBOp);

	TimeOfDay = (function(superClass) {
	  extend(TimeOfDay, superClass);

	  function TimeOfDay() {
	    return TimeOfDay.__super__.constructor.apply(this, arguments);
	  }

	  TimeOfDay.prototype.tt = protoTermType.TIME_OF_DAY;

	  TimeOfDay.prototype.mt = 'timeOfDay';

	  return TimeOfDay;

	})(RDBOp);

	Timezone = (function(superClass) {
	  extend(Timezone, superClass);

	  function Timezone() {
	    return Timezone.__super__.constructor.apply(this, arguments);
	  }

	  Timezone.prototype.tt = protoTermType.TIMEZONE;

	  Timezone.prototype.mt = 'timezone';

	  return Timezone;

	})(RDBOp);

	Year = (function(superClass) {
	  extend(Year, superClass);

	  function Year() {
	    return Year.__super__.constructor.apply(this, arguments);
	  }

	  Year.prototype.tt = protoTermType.YEAR;

	  Year.prototype.mt = 'year';

	  return Year;

	})(RDBOp);

	Month = (function(superClass) {
	  extend(Month, superClass);

	  function Month() {
	    return Month.__super__.constructor.apply(this, arguments);
	  }

	  Month.prototype.tt = protoTermType.MONTH;

	  Month.prototype.mt = 'month';

	  return Month;

	})(RDBOp);

	Day = (function(superClass) {
	  extend(Day, superClass);

	  function Day() {
	    return Day.__super__.constructor.apply(this, arguments);
	  }

	  Day.prototype.tt = protoTermType.DAY;

	  Day.prototype.mt = 'day';

	  return Day;

	})(RDBOp);

	DayOfWeek = (function(superClass) {
	  extend(DayOfWeek, superClass);

	  function DayOfWeek() {
	    return DayOfWeek.__super__.constructor.apply(this, arguments);
	  }

	  DayOfWeek.prototype.tt = protoTermType.DAY_OF_WEEK;

	  DayOfWeek.prototype.mt = 'dayOfWeek';

	  return DayOfWeek;

	})(RDBOp);

	DayOfYear = (function(superClass) {
	  extend(DayOfYear, superClass);

	  function DayOfYear() {
	    return DayOfYear.__super__.constructor.apply(this, arguments);
	  }

	  DayOfYear.prototype.tt = protoTermType.DAY_OF_YEAR;

	  DayOfYear.prototype.mt = 'dayOfYear';

	  return DayOfYear;

	})(RDBOp);

	Hours = (function(superClass) {
	  extend(Hours, superClass);

	  function Hours() {
	    return Hours.__super__.constructor.apply(this, arguments);
	  }

	  Hours.prototype.tt = protoTermType.HOURS;

	  Hours.prototype.mt = 'hours';

	  return Hours;

	})(RDBOp);

	Minutes = (function(superClass) {
	  extend(Minutes, superClass);

	  function Minutes() {
	    return Minutes.__super__.constructor.apply(this, arguments);
	  }

	  Minutes.prototype.tt = protoTermType.MINUTES;

	  Minutes.prototype.mt = 'minutes';

	  return Minutes;

	})(RDBOp);

	Seconds = (function(superClass) {
	  extend(Seconds, superClass);

	  function Seconds() {
	    return Seconds.__super__.constructor.apply(this, arguments);
	  }

	  Seconds.prototype.tt = protoTermType.SECONDS;

	  Seconds.prototype.mt = 'seconds';

	  return Seconds;

	})(RDBOp);

	Time = (function(superClass) {
	  extend(Time, superClass);

	  function Time() {
	    return Time.__super__.constructor.apply(this, arguments);
	  }

	  Time.prototype.tt = protoTermType.TIME;

	  Time.prototype.st = 'time';

	  return Time;

	})(RDBOp);

	Geojson = (function(superClass) {
	  extend(Geojson, superClass);

	  function Geojson() {
	    return Geojson.__super__.constructor.apply(this, arguments);
	  }

	  Geojson.prototype.tt = protoTermType.GEOJSON;

	  Geojson.prototype.st = 'geojson';

	  return Geojson;

	})(RDBOp);

	ToGeojson = (function(superClass) {
	  extend(ToGeojson, superClass);

	  function ToGeojson() {
	    return ToGeojson.__super__.constructor.apply(this, arguments);
	  }

	  ToGeojson.prototype.tt = protoTermType.TO_GEOJSON;

	  ToGeojson.prototype.mt = 'toGeojson';

	  return ToGeojson;

	})(RDBOp);

	Point = (function(superClass) {
	  extend(Point, superClass);

	  function Point() {
	    return Point.__super__.constructor.apply(this, arguments);
	  }

	  Point.prototype.tt = protoTermType.POINT;

	  Point.prototype.st = 'point';

	  return Point;

	})(RDBOp);

	Line = (function(superClass) {
	  extend(Line, superClass);

	  function Line() {
	    return Line.__super__.constructor.apply(this, arguments);
	  }

	  Line.prototype.tt = protoTermType.LINE;

	  Line.prototype.st = 'line';

	  return Line;

	})(RDBOp);

	Polygon = (function(superClass) {
	  extend(Polygon, superClass);

	  function Polygon() {
	    return Polygon.__super__.constructor.apply(this, arguments);
	  }

	  Polygon.prototype.tt = protoTermType.POLYGON;

	  Polygon.prototype.st = 'polygon';

	  return Polygon;

	})(RDBOp);

	Distance = (function(superClass) {
	  extend(Distance, superClass);

	  function Distance() {
	    return Distance.__super__.constructor.apply(this, arguments);
	  }

	  Distance.prototype.tt = protoTermType.DISTANCE;

	  Distance.prototype.mt = 'distance';

	  return Distance;

	})(RDBOp);

	Intersects = (function(superClass) {
	  extend(Intersects, superClass);

	  function Intersects() {
	    return Intersects.__super__.constructor.apply(this, arguments);
	  }

	  Intersects.prototype.tt = protoTermType.INTERSECTS;

	  Intersects.prototype.mt = 'intersects';

	  return Intersects;

	})(RDBOp);

	Includes = (function(superClass) {
	  extend(Includes, superClass);

	  function Includes() {
	    return Includes.__super__.constructor.apply(this, arguments);
	  }

	  Includes.prototype.tt = protoTermType.INCLUDES;

	  Includes.prototype.mt = 'includes';

	  return Includes;

	})(RDBOp);

	Circle = (function(superClass) {
	  extend(Circle, superClass);

	  function Circle() {
	    return Circle.__super__.constructor.apply(this, arguments);
	  }

	  Circle.prototype.tt = protoTermType.CIRCLE;

	  Circle.prototype.st = 'circle';

	  return Circle;

	})(RDBOp);

	GetIntersecting = (function(superClass) {
	  extend(GetIntersecting, superClass);

	  function GetIntersecting() {
	    return GetIntersecting.__super__.constructor.apply(this, arguments);
	  }

	  GetIntersecting.prototype.tt = protoTermType.GET_INTERSECTING;

	  GetIntersecting.prototype.mt = 'getIntersecting';

	  return GetIntersecting;

	})(RDBOp);

	GetNearest = (function(superClass) {
	  extend(GetNearest, superClass);

	  function GetNearest() {
	    return GetNearest.__super__.constructor.apply(this, arguments);
	  }

	  GetNearest.prototype.tt = protoTermType.GET_NEAREST;

	  GetNearest.prototype.mt = 'getNearest';

	  return GetNearest;

	})(RDBOp);

	Fill = (function(superClass) {
	  extend(Fill, superClass);

	  function Fill() {
	    return Fill.__super__.constructor.apply(this, arguments);
	  }

	  Fill.prototype.tt = protoTermType.FILL;

	  Fill.prototype.mt = 'fill';

	  return Fill;

	})(RDBOp);

	PolygonSub = (function(superClass) {
	  extend(PolygonSub, superClass);

	  function PolygonSub() {
	    return PolygonSub.__super__.constructor.apply(this, arguments);
	  }

	  PolygonSub.prototype.tt = protoTermType.POLYGON_SUB;

	  PolygonSub.prototype.mt = 'polygonSub';

	  return PolygonSub;

	})(RDBOp);

	UUID = (function(superClass) {
	  extend(UUID, superClass);

	  function UUID() {
	    return UUID.__super__.constructor.apply(this, arguments);
	  }

	  UUID.prototype.tt = protoTermType.UUID;

	  UUID.prototype.st = 'uuid';

	  return UUID;

	})(RDBOp);

	rethinkdb.expr = varar(1, 2, function(val, nestingDepth) {
	  var v;
	  if (nestingDepth == null) {
	    nestingDepth = 20;
	  }
	  if (val === void 0) {
	    throw new err.ReqlDriverCompileError("Cannot wrap undefined with r.expr().");
	  }
	  if (nestingDepth <= 0) {
	    throw new err.ReqlDriverCompileError("Nesting depth limit exceeded.");
	  }
	  if (typeof nestingDepth !== "number" || isNaN(nestingDepth)) {
	    throw new err.ReqlDriverCompileError("Second argument to `r.expr` must be a number or undefined.");
	  } else if (val instanceof TermBase) {
	    return val;
	  } else if (typeof val === 'function') {
	    return new Func({}, val);
	  } else if (val instanceof Date) {
	    return new ISO8601({}, val.toISOString());
	  } else if (val instanceof Buffer) {
	    return new Binary(val);
	  } else if (Array.isArray(val)) {
	    val = (function() {
	      var j, len, results;
	      results = [];
	      for (j = 0, len = val.length; j < len; j++) {
	        v = val[j];
	        results.push(rethinkdb.expr(v, nestingDepth - 1));
	      }
	      return results;
	    })();
	    return (function(func, args, ctor) {
	      ctor.prototype = func.prototype;
	      var child = new ctor, result = func.apply(child, args);
	      return Object(result) === result ? result : child;
	    })(MakeArray, [{}].concat(slice.call(val)), function(){});
	  } else if (typeof val === 'number') {
	    return new DatumTerm(val);
	  } else if (Object.prototype.toString.call(val) === '[object Object]') {
	    return new MakeObject(val, nestingDepth);
	  } else {
	    return new DatumTerm(val);
	  }
	});

	rethinkdb.js = aropt(function(jssrc, opts) {
	  return new JavaScript(opts, jssrc);
	});

	rethinkdb.http = aropt(function(url, opts) {
	  return new Http(opts, url);
	});

	rethinkdb.json = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Json, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.error = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(UserError, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.random = function() {
	  var limits, limitsAndOpts, opts, perhapsOptDict;
	  limitsAndOpts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  opts = {};
	  limits = limitsAndOpts;
	  perhapsOptDict = limitsAndOpts[limitsAndOpts.length - 1];
	  if (perhapsOptDict && ((Object.prototype.toString.call(perhapsOptDict) === '[object Object]') && !(perhapsOptDict instanceof TermBase))) {
	    opts = perhapsOptDict;
	    limits = limitsAndOpts.slice(0, limitsAndOpts.length - 1);
	  }
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Random, [opts].concat(slice.call(limits)), function(){});
	};

	rethinkdb.binary = ar(function(data) {
	  return new Binary(data);
	});

	rethinkdb.row = new ImplicitVar({});

	rethinkdb.table = aropt(function(tblName, opts) {
	  return new Table(opts, tblName);
	});

	rethinkdb.db = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Db, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.dbCreate = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbCreate, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.dbDrop = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbDrop, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.dbList = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(DbList, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.tableCreate = aropt(function(tblName, opts) {
	  return new TableCreate(opts, tblName);
	});

	rethinkdb.tableDrop = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TableDrop, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.tableList = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TableList, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.grant = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Grant, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb["do"] = varar(1, null, function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(FunCall, [{}, funcWrap(args.slice(-1)[0])].concat(slice.call(args.slice(0, -1))), function(){});
	});

	rethinkdb.branch = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Branch, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.map = varar(1, null, function() {
	  var args, funcArg, j;
	  args = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), funcArg = arguments[j++];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Map, [{}].concat(slice.call(args), [funcWrap(funcArg)]), function(){});
	});

	rethinkdb.group = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Group, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.reduce = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Reduce, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.count = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Count, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.sum = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Sum, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.avg = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Avg, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.min = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Min, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.max = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Max, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.distinct = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Distinct, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.contains = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Contains, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.asc = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Asc, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.desc = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Desc, [{}].concat(slice.call(args.map(funcWrap))), function(){});
	};

	rethinkdb.eq = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Eq, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.ne = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ne, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.lt = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Lt, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.le = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Le, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.gt = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Gt, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.ge = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ge, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.or = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Or, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.and = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(And, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.not = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Not, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.add = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Add, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.sub = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Sub, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.div = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Div, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.mul = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Mul, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.mod = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Mod, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.floor = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Floor, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.ceil = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Ceil, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.round = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Round, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.typeOf = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(TypeOf, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.info = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Info, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.literal = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Literal, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.ISO8601 = aropt(function(str, opts) {
	  return new ISO8601(opts, str);
	});

	rethinkdb.epochTime = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(EpochTime, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.now = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Now, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.time = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Time, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.monday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MONDAY;

	  _Class.prototype.st = 'monday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.tuesday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.TUESDAY;

	  _Class.prototype.st = 'tuesday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.wednesday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.WEDNESDAY;

	  _Class.prototype.st = 'wednesday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.thursday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.THURSDAY;

	  _Class.prototype.st = 'thursday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.friday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.FRIDAY;

	  _Class.prototype.st = 'friday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.saturday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SATURDAY;

	  _Class.prototype.st = 'saturday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.sunday = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SUNDAY;

	  _Class.prototype.st = 'sunday';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.january = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JANUARY;

	  _Class.prototype.st = 'january';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.february = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.FEBRUARY;

	  _Class.prototype.st = 'february';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.march = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MARCH;

	  _Class.prototype.st = 'march';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.april = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.APRIL;

	  _Class.prototype.st = 'april';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.may = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MAY;

	  _Class.prototype.st = 'may';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.june = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JUNE;

	  _Class.prototype.st = 'june';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.july = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.JULY;

	  _Class.prototype.st = 'july';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.august = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.AUGUST;

	  _Class.prototype.st = 'august';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.september = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.SEPTEMBER;

	  _Class.prototype.st = 'september';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.october = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.OCTOBER;

	  _Class.prototype.st = 'october';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.november = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.NOVEMBER;

	  _Class.prototype.st = 'november';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.december = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.DECEMBER;

	  _Class.prototype.st = 'december';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.minval = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MINVAL;

	  _Class.prototype.st = 'minval';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.maxval = new ((function(superClass) {
	  extend(_Class, superClass);

	  function _Class() {
	    return _Class.__super__.constructor.apply(this, arguments);
	  }

	  _Class.prototype.tt = protoTermType.MAXVAL;

	  _Class.prototype.st = 'maxval';

	  return _Class;

	})(RDBConstant))();

	rethinkdb.object = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Object_, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.args = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Args, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.geojson = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Geojson, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.point = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Point, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.line = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Line, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.polygon = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Polygon, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.intersects = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Intersects, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.distance = aropt(function(g1, g2, opts) {
	  return new Distance(opts, g1, g2);
	});

	rethinkdb.circle = aropt(function(cen, rad, opts) {
	  return new Circle(opts, cen, rad);
	});

	rethinkdb.uuid = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(UUID, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.range = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Range, [{}].concat(slice.call(args)), function(){});
	};

	rethinkdb.union = function() {
	  var args;
	  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	  return (function(func, args, ctor) {
	    ctor.prototype = func.prototype;
	    var child = new ctor, result = func.apply(child, args);
	    return Object(result) === result ? result : child;
	  })(Union, [{}].concat(slice.call(args)), function(){});
	};

	module.exports = rethinkdb;


/***/ })
/******/ ])
});
;