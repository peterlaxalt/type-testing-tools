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
})({"bYZ8l":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6f004ba4ff2ea63a";
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

},{}],"1UmjI":[function(require,module,exports) {
var randomColor = require("randomcolor");
class c1 {
    constructor(){
        this.dom = {
            brandmark: {
                key: "[data-hm-bm]",
                current: null
            },
            grid: {
                key: "[data-hm-g]",
                current: null
            },
            wrapper: {
                key: "[data-hm-w]",
                current: null
            },
            toggles: {
                key: "[data-hm-mode-toggle]",
                elements: []
            }
        };
        this.mode = {
            monochrome: false,
            invert: false,
            autoplay: true
        };
        this.cells = [
            {
                col: 0,
                row: 0,
                asset: "/assets/arrow.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 1,
                row: 0,
                asset: "/assets/h.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 2,
                row: 0,
                asset: "/assets/e.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 0,
                row: 1,
                asset: "/assets/a.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 1,
                row: 1,
                asset: "/assets/d.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 2,
                row: 1,
                asset: "/assets/m.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 0,
                row: 2,
                asset: "/assets/a.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 1,
                row: 2,
                asset: "/assets/z.svg",
                deg: 0,
                bg: "transparent"
            },
            {
                col: 2,
                row: 2,
                asset: "/assets/e.svg",
                deg: 0,
                bg: "transparent"
            }, 
        ];
        this.DEBUG_VERBOSE = true;
        this.init();
    }
    generateStyles(cell) {
        let styles = [
            `--c: ${cell.col};`,
            `--r: ${cell.row};`,
            `--a: url('${cell.asset}');`,
            `--d: ${cell.deg}deg;`,
            `--b: ${cell.bg};`, 
        ];
        return styles.join(" ");
    }
    updateCell(e) {
        this.log("createCells(): updating cell", e);
        let currentCell = e.target;
        let newStyles = {
            col: this.cells[currentCell.dataset.idx].col,
            row: this.cells[currentCell.dataset.idx].row,
            asset: "/assets/arrow.svg",
            deg: 90 * Math.floor(Math.random() * 10),
            bg: randomColor()
        };
        this.dom.wrapper.current.setAttribute("style", `background-color: ${randomColor()}`);
        currentCell.setAttribute("style", this.generateStyles(newStyles));
    }
    createCells() {
        this.log("createCells(): adding cells", this.dom.grid);
        this.cells.forEach((cell, idx)=>{
            let cellElement = document.createElement("div");
            cellElement.classList.add("c");
            cellElement.setAttribute("style", this.generateStyles(cell));
            cellElement.setAttribute("data-idx", idx);
            cellElement.addEventListener("mouseover", this.updateCell.bind(this));
            cellElement.addEventListener("click", this.updateCell.bind(this));
            this.dom.grid.current.appendChild(cellElement);
        });
    }
    addBrandmark() {
        this.log("addBrandmark(): adding brandmark", this.dom.brandmark);
        let img = document.createElement("img");
        img.setAttribute("src", "/assets/logomark.svg");
        this.dom.brandmark.current.appendChild(img);
    }
    updateMonochrome(is) {
        let modifier = "--mc";
        if (is == true) document.body.classList.add(modifier);
        else document.body.classList.remove(modifier);
    }
    updateInvert(is) {
        let modifier = "--inv";
        if (is == true) document.body.classList.add(modifier);
        else document.body.classList.remove(modifier);
    }
    updateTimer(is) {
        let modifier = "--ap";
        if (is == true) {
            document.body.classList.add(modifier);
            this.startTimer();
        } else document.body.classList.remove(modifier);
    }
    checkModes() {
        if (this.mode.monochrome) this.updateMonochrome(true);
        else this.updateMonochrome(false);
        if (this.mode.invert) this.updateInvert(true);
        else this.updateInvert(false);
        if (this.mode.autoplay) this.updateTimer(true);
        else this.updateTimer(false);
    }
    handleModeToggle(e) {
        this.log("handleModeToggle(): fired", e);
        e.preventDefault();
        let modeKey = e.target.dataset.hmModeToggle;
        if (this.mode[modeKey]) {
            this.log(`handleModeToggle(): this.mode[${modeKey}] toggle from`, this.mode[modeKey]);
            this.mode[modeKey] = false;
            this.checkModes();
            this.log(`handleModeToggle(): this.mode[${modeKey}] toggle to`, this.mode[modeKey]);
        } else {
            this.log(`handleModeToggle(): this.mode[${modeKey}] toggle from`, this.mode[modeKey]);
            this.mode[modeKey] = true;
            this.checkModes();
            this.log(`handleModeToggle(): this.mode[${modeKey}] toggle to`, this.mode[modeKey]);
        }
    }
    createDOM() {
        this.log("createDOM(): creating dom");
        const brandmark = document.querySelector(this.dom.brandmark.key);
        const grid = document.querySelector(this.dom.grid.key);
        const wrapper = document.querySelector(this.dom.wrapper.key);
        const toggles = document.querySelectorAll(this.dom.toggles.key);
        if (brandmark) {
            this.log("createDOM(): added brandmark", brandmark);
            this.dom.brandmark.current = brandmark;
            this.addBrandmark();
        }
        if (grid) {
            this.log("createDOM(): added grid", grid);
            this.dom.grid.current = grid;
            this.createCells();
            grid.addEventListener("mouseenter", this.handleGridEnter.bind(this));
            grid.addEventListener("mouseleave", this.handleGridExit.bind(this));
        }
        if (wrapper) {
            this.log("createDOM(): added wrapper", wrapper);
            this.dom.wrapper.current = wrapper;
        }
        if (toggles) toggles.forEach((toggle)=>{
            toggle.addEventListener("click", this.handleModeToggle.bind(this));
        });
        this.checkModes();
    }
    handleGridEnter() {
        this.gridHovered = true;
    }
    handleGridExit() {
        this.gridHovered = false;
        if (this.mode.autoplay) this.startTimer();
    }
    updateRandomCell() {
        if (this.mode.autoplay && !this.gridHovered) {
            const randomQuery = `[data-idx="${Math.floor(Math.random() * 9)}"]`;
            let randomCell = document.querySelector(randomQuery);
            this.log(`updateRandomCell(): selected cell ${randomQuery}`, randomCell);
            this.updateCell({
                target: randomCell
            });
            this.startTimer();
        }
    }
    startTimer() {
        this.log("startTimer(): fired");
        if (this.mode.autoplay && !this.gridHovered) {
            this.log("startTimer(): timer started");
            setTimeout(this.updateRandomCell.bind(this), 3000);
        }
    }
    log(msg, extras = " ", isError = false) {
        if (!this.DEBUG_VERBOSE) return;
        if (!isError) console.log(msg, extras);
        else console.error(msg, extras);
    }
    init() {
        this.log("init(): initialized");
        this.createDOM();
    }
}
let init = new c1();

},{"randomcolor":"4v9QF"}],"4v9QF":[function(require,module,exports) {
(function(root, factory) {
    var randomColor = factory();
    // Support NodeJS & Component, which allow module.exports to be a function
    if (module && module.exports) exports = module.exports = randomColor;
    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;
})(this, function() {
    // Seed to get repeatable colors
    var seed = null;
    // Shared color dictionary
    var colorDictionary = {};
    // Populate the color dictionary
    loadColorBounds();
    // check if a range is taken
    var colorRanges = [];
    var randomColor = function(options) {
        options = options || {};
        // Check if there is a seed and ensure it's an
        // integer. Otherwise, reset the seed value.
        if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) seed = options.seed;
        else if (typeof options.seed === 'string') seed = stringToInteger(options.seed);
        else if (options.seed !== undefined && options.seed !== null) throw new TypeError('The seed value must be an integer or string');
        else seed = null;
        var H, S, B;
        // Check if we need to generate multiple colors
        if (options.count !== null && options.count !== undefined) {
            var totalColors = options.count, colors = [];
            // Value false at index i means the range i is not taken yet.
            for(var i = 0; i < options.count; i++)colorRanges.push(false);
            options.count = null;
            while(totalColors > colors.length){
                var color = randomColor(options);
                if (seed !== null) options.seed = seed;
                colors.push(color);
            }
            options.count = totalColors;
            return colors;
        }
        // First we pick a hue (H)
        H = pickHue(options);
        // Then use H to determine saturation (S)
        S = pickSaturation(H, options);
        // Then use S and H to determine brightness (B).
        B = pickBrightness(H, S, options);
        // Then we return the HSB color in the desired format
        return setFormat([
            H,
            S,
            B
        ], options);
    };
    function pickHue(options) {
        if (colorRanges.length > 0) {
            var hueRange = getRealHueRange(options.hue);
            var hue = randomWithin(hueRange);
            //Each of colorRanges.length ranges has a length equal approximatelly one step
            var step = (hueRange[1] - hueRange[0]) / colorRanges.length;
            var j = parseInt((hue - hueRange[0]) / step);
            //Check if the range j is taken
            if (colorRanges[j] === true) j = (j + 2) % colorRanges.length;
            else colorRanges[j] = true;
            var min = (hueRange[0] + j * step) % 359, max = (hueRange[0] + (j + 1) * step) % 359;
            hueRange = [
                min,
                max
            ];
            hue = randomWithin(hueRange);
            if (hue < 0) hue = 360 + hue;
            return hue;
        } else {
            var hueRange = getHueRange(options.hue);
            hue = randomWithin(hueRange);
            // Instead of storing red as two seperate ranges,
            // we group them, using negative numbers
            if (hue < 0) hue = 360 + hue;
            return hue;
        }
    }
    function pickSaturation(hue, options) {
        if (options.hue === 'monochrome') return 0;
        if (options.luminosity === 'random') return randomWithin([
            0,
            100
        ]);
        var saturationRange = getSaturationRange(hue);
        var sMin = saturationRange[0], sMax = saturationRange[1];
        switch(options.luminosity){
            case 'bright':
                sMin = 55;
                break;
            case 'dark':
                sMin = sMax - 10;
                break;
            case 'light':
                sMax = 55;
                break;
        }
        return randomWithin([
            sMin,
            sMax
        ]);
    }
    function pickBrightness(H, S, options) {
        var bMin = getMinimumBrightness(H, S), bMax = 100;
        switch(options.luminosity){
            case 'dark':
                bMax = bMin + 20;
                break;
            case 'light':
                bMin = (bMax + bMin) / 2;
                break;
            case 'random':
                bMin = 0;
                bMax = 100;
                break;
        }
        return randomWithin([
            bMin,
            bMax
        ]);
    }
    function setFormat(hsv, options) {
        switch(options.format){
            case 'hsvArray':
                return hsv;
            case 'hslArray':
                return HSVtoHSL(hsv);
            case 'hsl':
                var hsl = HSVtoHSL(hsv);
                return 'hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';
            case 'hsla':
                var hslColor = HSVtoHSL(hsv);
                var alpha = options.alpha || Math.random();
                return 'hsla(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + hslColor[2] + '%, ' + alpha + ')';
            case 'rgbArray':
                return HSVtoRGB(hsv);
            case 'rgb':
                var rgb = HSVtoRGB(hsv);
                return 'rgb(' + rgb.join(', ') + ')';
            case 'rgba':
                var rgbColor = HSVtoRGB(hsv);
                var alpha = options.alpha || Math.random();
                return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';
            default:
                return HSVtoHex(hsv);
        }
    }
    function getMinimumBrightness(H, S) {
        var lowerBounds = getColorInfo(H).lowerBounds;
        for(var i = 0; i < lowerBounds.length - 1; i++){
            var s1 = lowerBounds[i][0], v1 = lowerBounds[i][1];
            var s2 = lowerBounds[i + 1][0], v2 = lowerBounds[i + 1][1];
            if (S >= s1 && S <= s2) {
                var m = (v2 - v1) / (s2 - s1), b = v1 - m * s1;
                return m * S + b;
            }
        }
        return 0;
    }
    function getHueRange(colorInput) {
        if (typeof parseInt(colorInput) === 'number') {
            var number = parseInt(colorInput);
            if (number < 360 && number > 0) return [
                number,
                number
            ];
        }
        if (typeof colorInput === 'string') {
            if (colorDictionary[colorInput]) {
                var color = colorDictionary[colorInput];
                if (color.hueRange) return color.hueRange;
            } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                var hue = HexToHSB(colorInput)[0];
                return [
                    hue,
                    hue
                ];
            }
        }
        return [
            0,
            360
        ];
    }
    function getSaturationRange(hue) {
        return getColorInfo(hue).saturationRange;
    }
    function getColorInfo(hue) {
        // Maps red colors to make picking hue easier
        if (hue >= 334 && hue <= 360) hue -= 360;
        for(var colorName in colorDictionary){
            var color = colorDictionary[colorName];
            if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) return colorDictionary[colorName];
        }
        return 'Color not found';
    }
    function randomWithin(range) {
        if (seed === null) {
            //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
            var golden_ratio = 0.618033988749895;
            var r = Math.random();
            r += golden_ratio;
            r %= 1;
            return Math.floor(range[0] + r * (range[1] + 1 - range[0]));
        } else {
            //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
            var max = range[1] || 1;
            var min = range[0] || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280;
            return Math.floor(min + rnd * (max - min));
        }
    }
    function HSVtoHex(hsv) {
        var rgb = HSVtoRGB(hsv);
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        }
        var hex1 = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
        return hex1;
    }
    function defineColor(name, hueRange, lowerBounds) {
        var sMin = lowerBounds[0][0], sMax = lowerBounds[lowerBounds.length - 1][0], bMin = lowerBounds[lowerBounds.length - 1][1], bMax = lowerBounds[0][1];
        colorDictionary[name] = {
            hueRange: hueRange,
            lowerBounds: lowerBounds,
            saturationRange: [
                sMin,
                sMax
            ],
            brightnessRange: [
                bMin,
                bMax
            ]
        };
    }
    function loadColorBounds() {
        defineColor('monochrome', null, [
            [
                0,
                0
            ],
            [
                100,
                0
            ]
        ]);
        defineColor('red', [
            -26,
            18
        ], [
            [
                20,
                100
            ],
            [
                30,
                92
            ],
            [
                40,
                89
            ],
            [
                50,
                85
            ],
            [
                60,
                78
            ],
            [
                70,
                70
            ],
            [
                80,
                60
            ],
            [
                90,
                55
            ],
            [
                100,
                50
            ]
        ]);
        defineColor('orange', [
            18,
            46
        ], [
            [
                20,
                100
            ],
            [
                30,
                93
            ],
            [
                40,
                88
            ],
            [
                50,
                86
            ],
            [
                60,
                85
            ],
            [
                70,
                70
            ],
            [
                100,
                70
            ]
        ]);
        defineColor('yellow', [
            46,
            62
        ], [
            [
                25,
                100
            ],
            [
                40,
                94
            ],
            [
                50,
                89
            ],
            [
                60,
                86
            ],
            [
                70,
                84
            ],
            [
                80,
                82
            ],
            [
                90,
                80
            ],
            [
                100,
                75
            ]
        ]);
        defineColor('green', [
            62,
            178
        ], [
            [
                30,
                100
            ],
            [
                40,
                90
            ],
            [
                50,
                85
            ],
            [
                60,
                81
            ],
            [
                70,
                74
            ],
            [
                80,
                64
            ],
            [
                90,
                50
            ],
            [
                100,
                40
            ]
        ]);
        defineColor('blue', [
            178,
            257
        ], [
            [
                20,
                100
            ],
            [
                30,
                86
            ],
            [
                40,
                80
            ],
            [
                50,
                74
            ],
            [
                60,
                60
            ],
            [
                70,
                52
            ],
            [
                80,
                44
            ],
            [
                90,
                39
            ],
            [
                100,
                35
            ]
        ]);
        defineColor('purple', [
            257,
            282
        ], [
            [
                20,
                100
            ],
            [
                30,
                87
            ],
            [
                40,
                79
            ],
            [
                50,
                70
            ],
            [
                60,
                65
            ],
            [
                70,
                59
            ],
            [
                80,
                52
            ],
            [
                90,
                45
            ],
            [
                100,
                42
            ]
        ]);
        defineColor('pink', [
            282,
            334
        ], [
            [
                20,
                100
            ],
            [
                30,
                90
            ],
            [
                40,
                86
            ],
            [
                60,
                84
            ],
            [
                80,
                80
            ],
            [
                90,
                75
            ],
            [
                100,
                73
            ]
        ]);
    }
    function HSVtoRGB(hsv) {
        // this doesn't work for the values of 0 and 360
        // here's the hacky fix
        var h = hsv[0];
        if (h === 0) h = 1;
        if (h === 360) h = 359;
        // Rebase the h,s,v values
        h = h / 360;
        var s = hsv[1] / 100, v = hsv[2] / 100;
        var h_i = Math.floor(h * 6), f = h * 6 - h_i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), r = 256, g = 256, b = 256;
        switch(h_i){
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        var result = [
            Math.floor(r * 255),
            Math.floor(g * 255),
            Math.floor(b * 255)
        ];
        return result;
    }
    function HexToHSB(hex) {
        hex = hex.replace(/^#/, '');
        hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;
        var red = parseInt(hex.substr(0, 2), 16) / 255, green = parseInt(hex.substr(2, 2), 16) / 255, blue = parseInt(hex.substr(4, 2), 16) / 255;
        var cMax = Math.max(red, green, blue), delta = cMax - Math.min(red, green, blue), saturation = cMax ? delta / cMax : 0;
        switch(cMax){
            case red:
                return [
                    60 * ((green - blue) / delta % 6) || 0,
                    saturation,
                    cMax
                ];
            case green:
                return [
                    60 * ((blue - red) / delta + 2) || 0,
                    saturation,
                    cMax
                ];
            case blue:
                return [
                    60 * ((red - green) / delta + 4) || 0,
                    saturation,
                    cMax
                ];
        }
    }
    function HSVtoHSL(hsv) {
        var h = hsv[0], s = hsv[1] / 100, v = hsv[2] / 100, k = (2 - s) * v;
        return [
            h,
            Math.round(s * v / (k < 1 ? k : 2 - k) * 10000) / 100,
            k / 2 * 100
        ];
    }
    function stringToInteger(string) {
        var total = 0;
        for(var i = 0; i !== string.length; i++){
            if (total >= Number.MAX_SAFE_INTEGER) break;
            total += string.charCodeAt(i);
        }
        return total;
    }
    // get The range of given hue when options.count!=0
    function getRealHueRange(colorHue) {
        if (!isNaN(colorHue)) {
            var number = parseInt(colorHue);
            if (number < 360 && number > 0) return getColorInfo(colorHue).hueRange;
        } else if (typeof colorHue === 'string') {
            if (colorDictionary[colorHue]) {
                var color = colorDictionary[colorHue];
                if (color.hueRange) return color.hueRange;
            } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                var hue = HexToHSB(colorHue)[0];
                return getColorInfo(hue).hueRange;
            }
        }
        return [
            0,
            360
        ];
    }
    return randomColor;
});

},{}]},["bYZ8l","1UmjI"], "1UmjI", "parcelRequire9208")

//# sourceMappingURL=index.ff2ea63a.js.map
