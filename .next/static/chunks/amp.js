_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.addMessageListener)(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwibmFtZXMiOlsid2luZG93IiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwiZG9jdW1lbnQiLCJhc3NldFByZWZpeCIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsImhvdFVwZGF0ZVBhdGgiLCJtb2R1bGUiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsImZldGNoIiwicmVzIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZSIsInBhZ2VVcGRhdGVkIiwiQXJyYXkiLCJPYmplY3QiLCJtb2QiLCJjb25zb2xlIiwiZXZlbnQiLCJtZXNzYWdlIiwidHJ5QXBwbHlVcGRhdGVzIiwiZXZlbnRDYWxsYmFja3MiLCJsYXN0QWN0aXZpdHkiLCJsaXN0ZW5lcnMiLCJvcHRpb25zIiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0Iiwic291cmNlIiwiaSIsImNiIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJjbG9zZSIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsIkV2ZW50U291cmNlV3JhcHBlciIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJvY3RldHNDb3VudCIsImNvZGVQb2ludCIsImJpdHNOZWVkZWQiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0cyIsIm9jdGV0IiwidmFsaWQiLCJTdHJpbmciLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsInN0cmVhbSIsImsiLCJ0aGF0IiwieGhyIiwic3RhdGUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25TdGFydCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJjb250ZW50VHlwZSIsIm9uUHJvZ3Jlc3MiLCJyZXNwb25zZVRleHQiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwiWEhSV3JhcHBlciIsIm5hbWUiLCJjIiwibWFwIiwiYXJyYXkiLCJhbGwiLCJsaW5lIiwicGFydHMiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiSGVhZGVyc1BvbHlmaWxsIiwiWEhSVHJhbnNwb3J0Iiwib2Zmc2V0IiwiY2h1bmsiLCJvblByb2dyZXNzQ2FsbGJhY2siLCJoZWFkZXJzIiwib25TdGFydENhbGxiYWNrIiwib25GaW5pc2hDYWxsYmFjayIsIkhlYWRlcnNXcmFwcGVyIiwiY29udHJvbGxlciIsInNpZ25hbCIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWNoZSIsInJlYWRlciIsInJlc3BvbnNlIiwicmVhZE5leHRDaHVuayIsInJlc3VsdCIsInJlc29sdmUiLCJyZWplY3QiLCJQcm9taXNlIiwiRXZlbnRUYXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwibGVuZ3RoIiwibGlzdGVuZXIiLCJ0aHJvd0Vycm9yIiwidHlwZSIsImZvdW5kIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwiZmlyZSIsImYiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsImxhc3RFdmVudElkIiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsImVzIiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIngiLCJjYWxsYmFjayIsImV2dFNvdXJjZSIsInBhdGhuYW1lIiwicGF0aG5hbWVGbiIsImNsb3NlUGluZyIsInBhdGgiLCJwYXlsb2FkIiwibG9jYXRpb24iLCJwYWdlUmVzIl0sIm1hcHBp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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcclxuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICBcImRlZmF1bHRcIjogb2JqXHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XHJcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBhZGRNZXNzYWdlTGlzdGVuZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaFxuICAgICAgdHJ5QXBwbHlVcGRhdGVzKClcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgfVxufSlcblxuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBwYWdlKVxuZGlzcGxheUNvbnRlbnQoKVxuIiwiY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICB2YXIgc291cmNlXG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIHZhciBsaXN0ZW5lcnMgPSBbXVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwXG4gIH1cblxuICBpbml0KClcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aClcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lXG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKVxuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudClcbiAgICB9XG5cbiAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgaWYgKCFjYi51bmZpbHRlcmVkICYmIGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgPT09IC0xKSByZXR1cm5cbiAgICAgIGNiKGV2ZW50KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgc291cmNlLmNsb3NlKClcbiAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvc2U6ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICBzb3VyY2UuY2xvc2UoKVxuICAgIH0sXG4gICAgYWRkTWVzc2FnZUxpc3RlbmVyOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKGZuKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYikge1xuICBldmVudENhbGxiYWNrcy5wdXNoKGNiKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgcmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudFxudmFyIFJlc3BvbnNlID0gd2luZG93LlJlc3BvbnNlXG52YXIgVGV4dERlY29kZXIgPSB3aW5kb3cuVGV4dERlY29kZXJcbnZhciBUZXh0RW5jb2RlciA9IHdpbmRvdy5UZXh0RW5jb2RlclxudmFyIEFib3J0Q29udHJvbGxlciA9IHdpbmRvdy5BYm9ydENvbnRyb2xsZXJcblxuaWYgKEFib3J0Q29udHJvbGxlciA9PSB1bmRlZmluZWQpIHtcbiAgQWJvcnRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2lnbmFsID0gbnVsbFxuICAgIHRoaXMuYWJvcnQgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gIHRoaXMuYml0c05lZWRlZCA9IDBcbiAgdGhpcy5jb2RlUG9pbnQgPSAwXG59XG5cblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChvY3RldHMpIHtcbiAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMDgwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDA3ZmZcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoY29kZVBvaW50ID49IDB4MDgwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhkN2ZmKSB8fFxuICAgICAgICAoY29kZVBvaW50ID49IDB4ZTAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhmZmZmKVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMTAwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MTBmZmZmXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMikge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDJcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAzKSB7XG4gICAgICByZXR1cm4gM1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIHZhciBSRVBMQUNFUiA9IDB4ZmZmZFxuICB2YXIgc3RyaW5nID0gJydcbiAgdmFyIGJpdHNOZWVkZWQgPSB0aGlzLmJpdHNOZWVkZWRcbiAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2N0ZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldXG4gICAgaWYgKGJpdHNOZWVkZWQgIT09IDApIHtcbiAgICAgIGlmIChcbiAgICAgICAgb2N0ZXQgPCAxMjggfHxcbiAgICAgICAgb2N0ZXQgPiAxOTEgfHxcbiAgICAgICAgIXZhbGlkKFxuICAgICAgICAgIChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MyksXG4gICAgICAgICAgYml0c05lZWRlZCAtIDYsXG4gICAgICAgICAgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKG9jdGV0ID49IDAgJiYgb2N0ZXQgPD0gMTI3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDE5MiAmJiBvY3RldCA8PSAyMjMpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAxXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMzFcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjI0ICYmIG9jdGV0IDw9IDIzOSkge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDJcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAxNVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyNDAgJiYgb2N0ZXQgPD0gMjQ3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogM1xuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGJpdHNOZWVkZWQgIT09IDAgJiZcbiAgICAgICAgIXZhbGlkKGNvZGVQb2ludCwgYml0c05lZWRlZCwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSlcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBiaXRzTmVlZGVkIC09IDZcbiAgICAgIGNvZGVQb2ludCA9IChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MylcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgPj4gMTApKVxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgICAweGRjMDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpICYgMHgzZmYpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZFxuICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludFxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSwge1xuICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICB9KSA9PT0gJ3Rlc3QnXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBJRSwgRWRnZVxuaWYgKFxuICBUZXh0RGVjb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgVGV4dEVuY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gICFzdXBwb3J0c1N0cmVhbU9wdGlvbigpXG4pIHtcbiAgVGV4dERlY29kZXIgPSBUZXh0RGVjb2RlclBvbHlmaWxsXG59XG5cbnZhciBrID0gZnVuY3Rpb24gKCkge31cblxuZnVuY3Rpb24gWEhSV3JhcHBlcih4aHIpIHtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICB0aGlzLnJlc3BvbnNlVHlwZSA9ICcnXG4gIHRoaXMucmVhZHlTdGF0ZSA9IDBcbiAgdGhpcy5zdGF0dXMgPSAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9ICcnXG4gIHRoaXMucmVzcG9uc2VUZXh0ID0gJydcbiAgdGhpcy5vbnByb2dyZXNzID0ga1xuICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgdGhpcy5fY29udGVudFR5cGUgPSAnJ1xuICB0aGlzLl94aHIgPSB4aHJcbiAgdGhpcy5fc2VuZFRpbWVvdXQgPSAwXG4gIHRoaXMuX2Fib3J0ID0ga1xufVxuXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gIHRoaXMuX2Fib3J0KHRydWUpXG5cbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgdmFyIHN0YXRlID0gMVxuICB2YXIgdGltZW91dCA9IDBcblxuICB0aGlzLl9hYm9ydCA9IGZ1bmN0aW9uIChzaWxlbnQpIHtcbiAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dClcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgeGhyLm9ubG9hZCA9IGtcbiAgICAgIHhoci5vbmVycm9yID0ga1xuICAgICAgeGhyLm9uYWJvcnQgPSBrXG4gICAgICB4aHIub25wcm9ncmVzcyA9IGtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gICAgICAvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0gMFxuICB9XG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlID09PSAxKSB7XG4gICAgICAvLyBzdGF0ZSA9IDI7XG4gICAgICB2YXIgc3RhdHVzID0gMFxuICAgICAgdmFyIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICBpZiAoISgnY29udGVudFR5cGUnIGluIHhocikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbiAgICAgICAgICBzdGF0dXMgPSAwXG4gICAgICAgICAgc3RhdHVzVGV4dCA9ICcnXG4gICAgICAgICAgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgICAgICAvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgc3RhdHVzVGV4dCA9ICdPSydcbiAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGVcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcbiAgICAgICAgc3RhdGUgPSAyXG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXNcbiAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dFxuICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlXG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgb25TdGFydCgpXG4gICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDNcbiAgICAgIHZhciByZXNwb25zZVRleHQgPSAnJ1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gM1xuICAgICAgdGhhdC5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHRcbiAgICAgIHRoYXQub25wcm9ncmVzcygpXG4gICAgfVxuICB9XG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4gICAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbiAgICBvblByb2dyZXNzKClcbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgfVxuICB9XG4gIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE9wZXJhIDEyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgb25GaW5pc2goKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICBvblByb2dyZXNzKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgb25TdGFydCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCA1MDApXG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICBvblByb2dyZXNzKClcbiAgICB9XG4gIH1cblxuICAvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxuICB4aHIub25sb2FkID0gb25GaW5pc2hcbiAgeGhyLm9uZXJyb3IgPSBvbkZpbmlzaFxuICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gIHhoci5vbmFib3J0ID0gb25GaW5pc2hcblxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgaWYgKFxuICAgICEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzXG4gIH1cblxuICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gIC8vIE9wZXJhIDwgMTJcbiAgLy8gRmlyZWZveCA8IDMuNVxuICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgLy8gc2VlIGFsc28gIzY0XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2VcblxuICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnXG4gIH1cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG5cbiAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAvLyAjOTFcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDApXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hYm9ydChmYWxzZSlcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgIDogJydcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICBpZiAoXG4gICAgISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICAgIHRoYXQuc2VuZCgpXG4gICAgfSwgNClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgdHJ5IHtcbiAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgeGhyLnNlbmQodW5kZWZpbmVkKVxuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGxpbmUgPSBhcnJheVtpXVxuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJylcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KClcbiAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpXG4gICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlXG4gIH1cbiAgdGhpcy5fbWFwID0gbWFwXG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldXG59XG5cbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHt9XG5cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB4aHIub3BlbignR0VUJywgdXJsKVxuICB2YXIgb2Zmc2V0ID0gMFxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aFxuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgfVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH1cbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpIHtcbiAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSlcbn1cblxuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7fVxuXG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBzaWduYWw6IHNpZ25hbCxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLFxuICAgICAgICBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZWFkZXIuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVhZGVyXG4gICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwgeyBzdHJlYW06IHRydWUgfSlcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZVxuICB9LCAwKVxufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICB0eXBlTGlzdGVuZXJzID0gW11cbiAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzXG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICBmb3VuZCA9IHRydWVcbiAgICB9XG4gIH1cbiAgaWYgKCFmb3VuZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YVxuICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZFxufVxuXG5NZXNzYWdlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG59XG5cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxudmFyIFdBSVRJTkcgPSAtMVxudmFyIENPTk5FQ1RJTkcgPSAwXG52YXIgT1BFTiA9IDFcbnZhciBDTE9TRUQgPSAyXG5cbnZhciBBRlRFUl9DUiA9IC0xXG52YXIgRklFTERfU1RBUlQgPSAwXG52YXIgRklFTEQgPSAxXG52YXIgVkFMVUVfU1RBUlQgPSAyXG52YXIgVkFMVUUgPSAzXG5cbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2lcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwXG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwXG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcbiAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZlxuICB9XG4gIHJldHVybiBjbGFtcER1cmF0aW9uKG4pXG59XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTilcbn1cblxudmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGYuY2FsbCh0aGF0LCBldmVudClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvd0Vycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKVxuXG4gIHRoaXMub25vcGVuID0gdW5kZWZpbmVkXG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkXG4gIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZFxuXG4gIHRoaXMudXJsID0gdW5kZWZpbmVkXG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZFxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG4gIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkXG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9XG4gIGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gIHVybCA9IFN0cmluZyh1cmwpXG4gIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKVxuXG4gIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMClcblxuICB2YXIgbGFzdEV2ZW50SWQgPSAnJ1xuICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWRcbiAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLlRyYW5zcG9ydFxuICAgICAgOiBYTUxIdHRwUmVxdWVzdFxuICB2YXIgeGhyID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKVxuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpXG4gIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICB2YXIgdGltZW91dCA9IDBcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgdmFyIGRhdGFCdWZmZXIgPSAnJ1xuICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJ1xuICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJydcblxuICB2YXIgdGV4dEJ1ZmZlciA9ICcnXG4gIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gIHZhciBmaWVsZFN0YXJ0ID0gMFxuICB2YXIgdmFsdWVTdGFydCA9IDBcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0dXMgPT09IDIwMCAmJlxuICAgICAgICBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTlxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJydcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgK1xuICAgICAgICAgICAgc3RhdHVzICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBzdGF0dXNUZXh0ICtcbiAgICAgICAgICAgICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgK1xuICAgICAgICAgICAgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgK1xuICAgICAgICAgICAgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgICAgICBjbG9zZSgpXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgdmFyIG4gPSAtMVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgbiA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSlcbiAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKVxuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKVxuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKFxuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgK1xuICAgICAgICAgICAgICAgICAgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbidcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KVxuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvblxuICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgfSwgcmV0cnkpXG4gICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpXG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICB9XG4gIH1cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFN0YXRlID0gQ0xPU0VEXG4gICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgdGltZW91dCA9IDBcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRFxuICB9XG5cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gMFxuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gYWN0aXZpdHkgd2l0aGluICcgK1xuICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ICtcbiAgICAgICAgICAgICAgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuXG4gICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElOR1xuICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZFxuICAgIHRleHRCdWZmZXIgPSAnJ1xuICAgIGZpZWxkU3RhcnQgPSAwXG4gICAgdmFsdWVTdGFydCA9IDBcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG5cbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmxcbiAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICByZXF1ZXN0VVJMICs9XG4gICAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArXG4gICAgICAgICAgJ2xhc3RFdmVudElkPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge31cbiAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nXG4gICAgaWYgKGhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyc1tuYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbG9zZSgpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGVzLnVybCA9IHVybFxuICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgZXMuX2Nsb3NlID0gY2xvc2VcblxuICBvblRpbWVvdXQoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jbG9zZSgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VQb2x5ZmlsbFxuIiwiLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gIDsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0KShmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDtcbiAgICAgIGktLTtcblxuICAgICkge1xuICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pXG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuXG5sZXQgZXZ0U291cmNlXG5leHBvcnQgbGV0IGN1cnJlbnRQYWdlXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBpbmcoKSB7XG4gIGlmIChldnRTb3VyY2UpIGV2dFNvdXJjZS5jbG9zZSgpXG4gIGV2dFNvdXJjZSA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCwgcGF0aG5hbWVGbiwgcmV0cnkpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKClcblxuICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuICBpZiAocGF0aG5hbWUgPT09IGN1cnJlbnRQYWdlICYmICFyZXRyeSkgcmV0dXJuXG4gIGN1cnJlbnRQYWdlID0gcGF0aG5hbWVcbiAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG4gIGNsb3NlUGluZygpXG5cbiAgZXZ0U291cmNlID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXI/cGFnZT0ke2N1cnJlbnRQYWdlfWAsXG4gICAgdGltZW91dDogNTAwMCxcbiAgfSlcblxuICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kYXRhLmluZGV4T2YoJ3snKSA9PT0gLTEpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCkge1xuICAgICAgICAvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHJlbG9hZGluZy5cbiAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKChwYWdlUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHBhZ2VSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJywgZXJyKVxuICAgIH1cbiAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDg4MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg4ODApO1xuLyoqKioqKi8gfSkoKVxuOyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xyXG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcclxuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cclxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xyXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XHJcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcclxuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xyXG5cclxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmpba2V5XTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXHJcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcclxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcclxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXHJcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcclxuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXHJcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cclxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXHJcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcclxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxyXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgKTtcclxuXHJcbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcclxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxyXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcclxuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gY3RvclxyXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XHJcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxyXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cclxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcclxuICAgICAgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcclxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcclxuICAgIHJldHVybiBnZW5GdW47XHJcbiAgfTtcclxuXHJcbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXHJcbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcclxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXHJcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cclxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcclxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcclxuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXHJcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcclxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxyXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xyXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxyXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxyXG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcclxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXHJcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cclxuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xyXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcclxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xyXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxyXG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cclxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxyXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXHJcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxyXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcclxuICB9XHJcblxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XHJcblxyXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcclxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcclxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cclxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XHJcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xyXG5cclxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXHJcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxyXG4gICAgICBQcm9taXNlSW1wbFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXHJcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXHJcbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICB0aHJvdyBhcmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcclxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xyXG5cclxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XHJcbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXHJcbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcclxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXHJcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXHJcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxyXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxyXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxyXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcclxuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XHJcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XHJcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxyXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxyXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cclxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcclxuXHJcbiAgICBpZiAoISBpbmZvKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmZvLmRvbmUpIHtcclxuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcclxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XHJcblxyXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcclxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxyXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxyXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcclxuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcclxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxyXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cclxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxyXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xyXG5cclxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcclxuXHJcbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcclxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxyXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXHJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG5cclxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcclxuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XHJcblxyXG4gICAgaWYgKDEgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKDIgaW4gbG9jcykge1xyXG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcclxuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcclxuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xyXG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xyXG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XHJcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xyXG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXHJcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXHJcbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xyXG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBrZXlzLnJldmVyc2UoKTtcclxuXHJcbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxyXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cclxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcclxuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcclxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcclxuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXHJcbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcbiAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcclxuICAgIGlmIChpdGVyYWJsZSkge1xyXG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XHJcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xyXG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XHJcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xyXG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXHJcbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XHJcbiAgfVxyXG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xyXG5cclxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xyXG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XHJcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICB0aGlzLnByZXYgPSAwO1xyXG4gICAgICB0aGlzLm5leHQgPSAwO1xyXG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xyXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xyXG5cclxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxyXG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxyXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xyXG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XHJcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcclxuICAgICAgICB0aHJvdyBleGNlcHRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XHJcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XHJcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcclxuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XHJcblxyXG4gICAgICAgIGlmIChjYXVnaHQpIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXHJcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcclxuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXHJcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cclxuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcclxuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xyXG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xyXG5cclxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxyXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcclxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXHJcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXHJcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxyXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xyXG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XHJcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcclxuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxyXG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcclxuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcclxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xyXG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0aHJvd247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cclxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XHJcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXHJcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcclxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcclxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXHJcbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcclxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcclxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcclxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxyXG4gIHJldHVybiBleHBvcnRzO1xyXG5cclxufShcclxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xyXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XHJcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxyXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXHJcbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cclxuKSk7XHJcblxyXG50cnkge1xyXG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XHJcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XHJcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcclxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcclxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcclxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcclxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcclxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxyXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXHJcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXHJcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXHJcbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9