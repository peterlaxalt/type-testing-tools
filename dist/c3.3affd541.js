// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"42BCA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "64a4f6943affd541";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iMFUT":[function(require,module,exports) {
class c3 {
    constructor(){
        this.dom = {
            wrapper: {
                key: "[data-hm-dot-grid]",
                current: null
            },
            cursor: {
                key: "hm-cx",
                current: null
            }
        };
        this.mode = {
            monochrome: false,
            invert: false,
            autoplay: true
        };
        this.controls = {
            grid: {
                rows: 48,
                cols: 48,
                width: window.innerWidth,
                height: window.innerWidth
            },
            cells: {
                activeClass: "--a",
                radius: 2,
                gradient: {
                    type: "conic",
                    active: true
                },
                rotation: {
                    animate: true,
                    amount: 0,
                    speed: 20
                },
                blur: 0,
                gap: 0,
                contrast: 1
            }
        };
        // this.activeCoords = [{ x: 0, y: 0 }];
        this.activeCoords = [
            {
                x: 4,
                y: 20,
                id: "x4-y20"
            },
            {
                x: 4,
                y: 21,
                id: "x4-y21"
            },
            {
                x: 4,
                y: 22,
                id: "x4-y22"
            },
            {
                x: 4,
                y: 23,
                id: "x4-y23"
            },
            {
                x: 4,
                y: 24,
                id: "x4-y24"
            },
            {
                x: 4,
                y: 25,
                id: "x4-y25"
            },
            {
                x: 4,
                y: 26,
                id: "x4-y26"
            },
            {
                x: 4,
                y: 27,
                id: "x4-y27"
            },
            {
                x: 4,
                y: 28,
                id: "x4-y28"
            },
            {
                x: 5,
                y: 24,
                id: "x5-y24"
            },
            {
                x: 6,
                y: 24,
                id: "x6-y24"
            },
            {
                x: 7,
                y: 28,
                id: "x7-y28"
            },
            {
                x: 7,
                y: 27,
                id: "x7-y27"
            },
            {
                x: 7,
                y: 26,
                id: "x7-y26"
            },
            {
                x: 7,
                y: 25,
                id: "x7-y25"
            },
            {
                x: 7,
                y: 24,
                id: "x7-y24"
            },
            {
                x: 7,
                y: 23,
                id: "x7-y23"
            },
            {
                x: 7,
                y: 22,
                id: "x7-y22"
            },
            {
                x: 7,
                y: 21,
                id: "x7-y21"
            },
            {
                x: 7,
                y: 20,
                id: "x7-y20"
            },
            {
                x: 9,
                y: 21,
                id: "x9-y21"
            },
            {
                x: 9,
                y: 22,
                id: "x9-y22"
            },
            {
                x: 9,
                y: 23,
                id: "x9-y23"
            },
            {
                x: 9,
                y: 24,
                id: "x9-y24"
            },
            {
                x: 9,
                y: 25,
                id: "x9-y25"
            },
            {
                x: 9,
                y: 26,
                id: "x9-y26"
            },
            {
                x: 9,
                y: 27,
                id: "x9-y27"
            },
            {
                x: 10,
                y: 28,
                id: "x10-y28"
            },
            {
                x: 11,
                y: 28,
                id: "x11-y28"
            },
            {
                x: 12,
                y: 28,
                id: "x12-y28"
            },
            {
                x: 10,
                y: 24,
                id: "x10-y24"
            },
            {
                x: 11,
                y: 24,
                id: "x11-y24"
            },
            {
                x: 12,
                y: 24,
                id: "x12-y24"
            },
            {
                x: 10,
                y: 20,
                id: "x10-y20"
            },
            {
                x: 11,
                y: 20,
                id: "x11-y20"
            },
            {
                x: 12,
                y: 20,
                id: "x12-y20"
            },
            {
                x: 14,
                y: 28,
                id: "x14-y28"
            },
            {
                x: 14,
                y: 27,
                id: "x14-y27"
            },
            {
                x: 14,
                y: 26,
                id: "x14-y26"
            },
            {
                x: 14,
                y: 25,
                id: "x14-y25"
            },
            {
                x: 14,
                y: 24,
                id: "x14-y24"
            },
            {
                x: 14,
                y: 23,
                id: "x14-y23"
            },
            {
                x: 14,
                y: 22,
                id: "x14-y22"
            },
            {
                x: 14,
                y: 21,
                id: "x14-y21"
            },
            {
                x: 15,
                y: 20,
                id: "x15-y20"
            },
            {
                x: 16,
                y: 20,
                id: "x16-y20"
            },
            {
                x: 17,
                y: 21,
                id: "x17-y21"
            },
            {
                x: 17,
                y: 22,
                id: "x17-y22"
            },
            {
                x: 17,
                y: 23,
                id: "x17-y23"
            },
            {
                x: 17,
                y: 24,
                id: "x17-y24"
            },
            {
                x: 17,
                y: 25,
                id: "x17-y25"
            },
            {
                x: 17,
                y: 26,
                id: "x17-y26"
            },
            {
                x: 17,
                y: 27,
                id: "x17-y27"
            },
            {
                x: 17,
                y: 28,
                id: "x17-y28"
            },
            {
                x: 15,
                y: 24,
                id: "x15-y24"
            },
            {
                x: 16,
                y: 24,
                id: "x16-y24"
            },
            {
                x: 19,
                y: 28,
                id: "x19-y28"
            },
            {
                x: 19,
                y: 27,
                id: "x19-y27"
            },
            {
                x: 19,
                y: 26,
                id: "x19-y26"
            },
            {
                x: 19,
                y: 25,
                id: "x19-y25"
            },
            {
                x: 19,
                y: 24,
                id: "x19-y24"
            },
            {
                x: 19,
                y: 23,
                id: "x19-y23"
            },
            {
                x: 19,
                y: 22,
                id: "x19-y22"
            },
            {
                x: 19,
                y: 21,
                id: "x19-y21"
            },
            {
                x: 19,
                y: 20,
                id: "x19-y20"
            },
            {
                x: 20,
                y: 20,
                id: "x20-y20"
            },
            {
                x: 21,
                y: 20,
                id: "x21-y20"
            },
            {
                x: 22,
                y: 21,
                id: "x22-y21"
            },
            {
                x: 22,
                y: 22,
                id: "x22-y22"
            },
            {
                x: 22,
                y: 23,
                id: "x22-y23"
            },
            {
                x: 22,
                y: 24,
                id: "x22-y24"
            },
            {
                x: 22,
                y: 25,
                id: "x22-y25"
            },
            {
                x: 22,
                y: 26,
                id: "x22-y26"
            },
            {
                x: 22,
                y: 27,
                id: "x22-y27"
            },
            {
                x: 21,
                y: 28,
                id: "x21-y28"
            },
            {
                x: 20,
                y: 28,
                id: "x20-y28"
            },
            {
                x: 24,
                y: 28,
                id: "x24-y28"
            },
            {
                x: 24,
                y: 27,
                id: "x24-y27"
            },
            {
                x: 24,
                y: 26,
                id: "x24-y26"
            },
            {
                x: 24,
                y: 25,
                id: "x24-y25"
            },
            {
                x: 24,
                y: 24,
                id: "x24-y24"
            },
            {
                x: 24,
                y: 23,
                id: "x24-y23"
            },
            {
                x: 24,
                y: 22,
                id: "x24-y22"
            },
            {
                x: 24,
                y: 21,
                id: "x24-y21"
            },
            {
                x: 25,
                y: 20,
                id: "x25-y20"
            },
            {
                x: 26,
                y: 20,
                id: "x26-y20"
            },
            {
                x: 27,
                y: 21,
                id: "x27-y21"
            },
            {
                x: 27,
                y: 22,
                id: "x27-y22"
            },
            {
                x: 27,
                y: 23,
                id: "x27-y23"
            },
            {
                x: 27,
                y: 24,
                id: "x27-y24"
            },
            {
                x: 27,
                y: 25,
                id: "x27-y25"
            },
            {
                x: 27,
                y: 26,
                id: "x27-y26"
            },
            {
                x: 27,
                y: 27,
                id: "x27-y27"
            },
            {
                x: 27,
                y: 28,
                id: "x27-y28"
            },
            {
                x: 28,
                y: 20,
                id: "x28-y20"
            },
            {
                x: 29,
                y: 20,
                id: "x29-y20"
            },
            {
                x: 30,
                y: 21,
                id: "x30-y21"
            },
            {
                x: 30,
                y: 22,
                id: "x30-y22"
            },
            {
                x: 30,
                y: 23,
                id: "x30-y23"
            },
            {
                x: 30,
                y: 24,
                id: "x30-y24"
            },
            {
                x: 30,
                y: 27,
                id: "x30-y27"
            },
            {
                x: 30,
                y: 28,
                id: "x30-y28"
            },
            {
                x: 30,
                y: 26,
                id: "x30-y26"
            },
            {
                x: 30,
                y: 25,
                id: "x30-y25"
            },
            {
                x: 32,
                y: 28,
                id: "x32-y28"
            },
            {
                x: 32,
                y: 27,
                id: "x32-y27"
            },
            {
                x: 32,
                y: 26,
                id: "x32-y26"
            },
            {
                x: 32,
                y: 25,
                id: "x32-y25"
            },
            {
                x: 32,
                y: 24,
                id: "x32-y24"
            },
            {
                x: 32,
                y: 23,
                id: "x32-y23"
            },
            {
                x: 32,
                y: 22,
                id: "x32-y22"
            },
            {
                x: 32,
                y: 21,
                id: "x32-y21"
            },
            {
                x: 33,
                y: 20,
                id: "x33-y20"
            },
            {
                x: 34,
                y: 20,
                id: "x34-y20"
            },
            {
                x: 35,
                y: 21,
                id: "x35-y21"
            },
            {
                x: 35,
                y: 22,
                id: "x35-y22"
            },
            {
                x: 35,
                y: 23,
                id: "x35-y23"
            },
            {
                x: 35,
                y: 24,
                id: "x35-y24"
            },
            {
                x: 35,
                y: 25,
                id: "x35-y25"
            },
            {
                x: 35,
                y: 26,
                id: "x35-y26"
            },
            {
                x: 35,
                y: 27,
                id: "x35-y27"
            },
            {
                x: 35,
                y: 28,
                id: "x35-y28"
            },
            {
                x: 33,
                y: 24,
                id: "x33-y24"
            },
            {
                x: 34,
                y: 24,
                id: "x34-y24"
            },
            {
                x: 37,
                y: 20,
                id: "x37-y20"
            },
            {
                x: 38,
                y: 20,
                id: "x38-y20"
            },
            {
                x: 39,
                y: 20,
                id: "x39-y20"
            },
            {
                x: 40,
                y: 21,
                id: "x40-y21"
            },
            {
                x: 40,
                y: 22,
                id: "x40-y22"
            },
            {
                x: 40,
                y: 23,
                id: "x40-y23"
            },
            {
                x: 39,
                y: 24,
                id: "x39-y24"
            },
            {
                x: 38,
                y: 24,
                id: "x38-y24"
            },
            {
                x: 37,
                y: 25,
                id: "x37-y25"
            },
            {
                x: 37,
                y: 26,
                id: "x37-y26"
            },
            {
                x: 37,
                y: 27,
                id: "x37-y27"
            },
            {
                x: 38,
                y: 28,
                id: "x38-y28"
            },
            {
                x: 39,
                y: 28,
                id: "x39-y28"
            },
            {
                x: 40,
                y: 28,
                id: "x40-y28"
            },
            {
                x: 42,
                y: 27,
                id: "x42-y27"
            },
            {
                x: 42,
                y: 26,
                id: "x42-y26"
            },
            {
                x: 42,
                y: 25,
                id: "x42-y25"
            },
            {
                x: 42,
                y: 24,
                id: "x42-y24"
            },
            {
                x: 42,
                y: 23,
                id: "x42-y23"
            },
            {
                x: 42,
                y: 22,
                id: "x42-y22"
            },
            {
                x: 42,
                y: 21,
                id: "x42-y21"
            },
            {
                x: 43,
                y: 20,
                id: "x43-y20"
            },
            {
                x: 44,
                y: 20,
                id: "x44-y20"
            },
            {
                x: 45,
                y: 20,
                id: "x45-y20"
            },
            {
                x: 43,
                y: 24,
                id: "x43-y24"
            },
            {
                x: 44,
                y: 24,
                id: "x44-y24"
            },
            {
                x: 45,
                y: 24,
                id: "x45-y24"
            },
            {
                x: 43,
                y: 28,
                id: "x43-y28"
            },
            {
                x: 44,
                y: 28,
                id: "x44-y28"
            },
            {
                x: 45,
                y: 28,
                id: "x45-y28"
            }, 
        ];
        this.DEBUG_VERBOSE = true;
        this.init();
    }
    getGridStylesFromControls() {
        this.log("getGridStylesFromControls(): generating styles");
        let controls = this.controls;
        let gridRows = controls.grid.rows;
        let gridCols = controls.grid.cols;
        let gridWidth = controls.grid.width;
        let gridHeight = controls.grid.height;
        let gridGap = controls.cells.gap;
        let gridRadius = controls.cells.radius;
        let gridCellRotation = controls.cells.rotation.amount;
        let gridCellRotationSpeed = controls.cells.rotation.speed;
        let styles = [
            `--rows: ${gridRows}`,
            `--cols: ${gridCols}`,
            `--g: ${gridGap}px`,
            `--r: ${gridRadius}px`,
            `--deg: ${gridCellRotation}deg`,
            `--rS: ${gridCellRotationSpeed}s`,
            `--w: ${gridWidth}px`,
            `--h: ${gridHeight}px`, 
        ];
        return styles.join(";");
    }
    getCoordsFromClick(el) {
        this.log(`getCoordsFromClick(el): fired`, el);
        this.log(`getCoordsFromClick(el): col`, el.getAttribute("hm-col"));
        this.log(`getCoordsFromClick(el): row`, el.getAttribute("hm-row"));
        return {
            x: parseInt(el.getAttribute("hm-col")),
            y: parseInt(el.getAttribute("hm-row")),
            id: el.getAttribute("hm-id")
        };
    }
    createCoordId(x, y) {
        return `x${x}-y${y}`;
    }
    storeCoords(coords, remove = false) {
        this.log(`storeCoords(coords): fired`, coords);
        this.log(`storeCoords(): current coords stored`, this.activeCoords);
        if (!remove) {
            this.activeCoords.push(coords);
            this.log(`storeCoords(coords): activeCoords Updated [added]`, this.activeCoords);
        } else {
            function checkCoordRemoveOrNot(store) {
                return store.id !== coords.id;
            }
            let filteredCoords = this.activeCoords.filter((storedCoords)=>checkCoordRemoveOrNot(storedCoords)
            );
            this.activeCoords = filteredCoords;
            this.log(`storeCoords(coords): activeCoords Updated [removed]`, filteredCoords);
        }
    }
    handleCellClick(e) {
        this.log(`handleCellClick(e): fired`, e);
        let coords = this.getCoordsFromClick(e.target);
        if (e.target.classList.contains(this.controls.cells.activeClass)) {
            e.target.classList.remove(this.controls.cells.activeClass);
            this.storeCoords(coords, true);
        } else {
            e.target.classList.add(this.controls.cells.activeClass);
            this.storeCoords(coords);
        }
    }
    createGridCell(x, y, active) {
        // this.log(`createGridCell(x: ${x}, y: ${y}, active: ${active}): creating grid cell`);
        let cell = document.createElement("button");
        let styles = [
            `--cX: ${x}`,
            `--cY: ${y}`
        ];
        cell.setAttribute("hm-col", x);
        cell.setAttribute("hm-row", y);
        cell.setAttribute("hm-id", this.createCoordId(x, y));
        if (active) cell.classList.add(this.controls.cells.activeClass);
        cell.addEventListener("click", this.handleCellClick.bind(this));
        cell.setAttribute("style", styles.join(";"));
        return cell;
    }
    updateGridClasses() {
        let controls = this.controls;
        let grid = this.dom.wrapper.current;
        let gridCellRotation = controls.cells.rotation.animate;
        let gridCellGradient = controls.cells.gradient.type;
        if (gridCellRotation) grid.classList.add("--rotate");
        if (gridCellGradient) grid.classList.add(`--gr-${gridCellGradient}`);
    }
    createInitialActiveCells() {
        this.log("setupGrid(): setting up initial active cells");
        if (this.activeCoords) this.activeCoords.forEach((cell)=>{
            let cellNode = document.querySelector(`[hm-id="${cell.id}"]`);
            cellNode.classList.add('--a');
        });
    }
    setupGrid() {
        this.log("setupGrid(): setting up grid");
        let grid = this.dom.wrapper.current;
        let controls = this.controls;
        let rows = controls.grid.rows;
        let cols = controls.grid.cols;
        let rowsArray = [
            ...Array(rows + 1).keys()
        ].slice(1);
        let colsArray = [
            ...Array(cols + 1).keys()
        ].slice(1);
        let _self = this;
        let styles = this.getGridStylesFromControls();
        grid.setAttribute("style", styles);
        let cells = [];
        rowsArray.map((row, rIdx)=>{
            colsArray.map((col, cIdx)=>{
                cells.push(_self.createGridCell(cIdx + 1, rIdx + 1, false));
            });
        });
        cells.forEach((cell)=>{
            grid.appendChild(cell);
        });
        this.createInitialActiveCells();
        this.updateGridClasses();
    }
    createGrid() {
        this.log("createGrid(): creating grid");
        let dotGrid = document.querySelector(this.dom.wrapper.key);
        if (dotGrid) {
            this.dom.wrapper.current = dotGrid;
            this.setupGrid();
        }
    }
    createDOM() {
        this.log("createDOM(): creating dom");
        this.createGrid();
    }
    log(msg, extras = " ", isError = false) {
        if (!this.DEBUG_VERBOSE) return;
        if (!isError) console.log("c3 ~ " + msg, extras);
        else console.error("c3 ~ " + msg, extras);
    }
    init() {
        this.log("init(): initialized");
        this.createDOM();
    }
}
let init = new c3();

},{}]},["42BCA","iMFUT"], "iMFUT", "parcelRequire9208")

//# sourceMappingURL=c3.3affd541.js.map
