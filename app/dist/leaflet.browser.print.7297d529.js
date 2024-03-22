// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"mapsComponent/leaflet.browser.print.js":[function(require,module,exports) {
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * 
 *  leaflet.browser.print - v2.0.2 (https://github.com/Igor-Vladyka/leaflet.browser.print) 
 *  A leaflet plugin which allows users to print the map directly from the browser
 *  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2022  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
 * 
 */
/******/
(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 0);
  /******/
}
/************************************************************************/
/******/)({
  /***/"./src/leaflet.browser.print.control.js": (
  /*!**********************************************!*\
    !*** ./src/leaflet.browser.print.control.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintControlJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\nL.Control.BrowserPrint = L.Control.extend({\r\n\toptions: {\r\n\t\ttitle: 'Print map',\r\n\t\tposition: 'topleft',\r\n\t\tprintModes: [\"Portrait\", \"Landscape\", \"Auto\", \"Custom\"],\r\n\t},\r\n\tbrowserPrint: undefined,\r\n\tinitialize: function(options,browserPrint){\r\n\t\tL.setOptions(this,options);\r\n\t\tif(browserPrint) {\r\n\t\t\tthis.browserPrint = browserPrint;\r\n\t\t\tL.setOptions(this.browserPrint, options);\r\n\t\t}\r\n\t},\r\n\tonAdd: function (map) {\r\n\t\tif(!this.browserPrint){\r\n\t\t\tthis.browserPrint = new L.BrowserPrint(map,this.options);\r\n\t\t}\r\n\r\n\t\tvar container = L.DomUtil.create('div', 'leaflet-control-browser-print leaflet-bar leaflet-control');\r\n\t\tL.DomEvent.disableClickPropagation(container);\r\n\r\n\r\n\t\tif (this.options.printModes.length > 1) {\r\n\t\t\tL.DomEvent.on(container, 'mouseover', this._displayPageSizeButtons, this);\r\n\t\t\tL.DomEvent.on(container, 'mouseout', this._hidePageSizeButtons, this);\r\n\t\t} else {\r\n\t\t\tcontainer.style.cursor = \"pointer\";\r\n\t\t}\r\n\r\n\t\tif (this.options.position.indexOf(\"left\") > 0) {\r\n\t\t\tthis._createIcon(container);\r\n\t\t\tthis._createMenu(container);\r\n\t\t} else {\r\n\t\t\tthis._createMenu(container);\r\n\t\t\tthis._createIcon(container);\r\n\t\t}\r\n\r\n\t\tmap.printControl = this; // Make control available from the map object itself;\r\n\t\treturn container;\r\n\t},\r\n\t\r\n\tcancel: function () {\r\n\t\tthis.browserPrint.cancel();\r\n\t},\r\n\r\n\t_createIcon: function (container) {\r\n\t\tthis.__link__ = L.DomUtil.create('a', '', container);\r\n\t\tthis.__link__.className = \"leaflet-browser-print\";\r\n\t\tif (this.options.title) {\r\n\t\t\tthis.__link__.title = this.options.title;\r\n\t\t}\r\n\t\treturn this.__link__;\r\n\t},\r\n\r\n\t_createMenu: function (container) {\r\n\t\tvar domPrintModes = [];\r\n\r\n\t\tfor (var i = 0; i < this.options.printModes.length; i++) {\r\n\t\t\tvar mode = this.options.printModes[i];\r\n\r\n\t\t\t/*\r\n\t\t\t\tMode:\r\n\t\t\t\t\tMode: Portrait/Landscape/Auto/Custom\r\n\t\t\t\t\tTitle: 'Portrait'/'Landscape'/'Auto'/'Custom'\r\n\t\t\t\t\tPageSize: 'A3'/'A4'\r\n\t\t\t\t\tAction: '_printPortrait'/...\r\n\t\t\t\t\tInvalidateBounds: true/false\r\n\t\t\t*/\r\n\t\t\tif (mode.length) {\r\n\t\t\t\tvar key = mode[0].toUpperCase() + mode.substring(1).toLowerCase();\r\n\r\n\t\t\t\tmode = L.BrowserPrint.Mode[mode]('A4',this._getDefaultTitle(key));\r\n\r\n\t\t\t} else if (mode instanceof L.BrowserPrint.Mode) {\r\n\t\t\t\t// Looks like everythin is fine.\r\n\t\t\t} else {\r\n\t\t\t\tthrow \"Invalid Print Mode. Can't construct logic to print current map.\"\r\n\t\t\t}\r\n\r\n\t\t\tvar clickContainer = container;\r\n\t\t\tif (this.options.printModes.length === 1) {\r\n\t\t\t\tmode.Element = container;\r\n\t\t\t} else {\r\n\t\t\t\tclickContainer = L.DomUtil.create('ul', 'browser-print-holder', container);\r\n\t\t\t\tmode.Element = L.DomUtil.create('li', 'browser-print-mode', clickContainer);\r\n\t\t\t\tmode.Element.innerHTML = mode.options.title;\r\n\t\t\t}\r\n\r\n\t\t\tL.DomEvent.on(clickContainer, 'click', mode.options.action(this.browserPrint, mode), this.browserPrint);\r\n\r\n\t\t\tdomPrintModes.push(mode);\r\n\t\t}\r\n\r\n\t\tthis.options.printModes = domPrintModes;\r\n\t},\r\n\r\n\t_getDefaultTitle: function(key) {\r\n\t\treturn this.options.printModesNames && this.options.printModesNames[key] || key;\r\n\t},\r\n\r\n    _displayPageSizeButtons: function() {\r\n\t\tif (this.options.position.indexOf(\"left\") > 0) {\r\n\t        this.__link__.style.borderTopRightRadius = \"0px\";\r\n\t    \tthis.__link__.style.borderBottomRightRadius = \"0px\";\r\n\t\t} else {\r\n\t\t\tthis.__link__.style.borderTopLeftRadius = \"0px\";\r\n\t    \tthis.__link__.style.borderBottomLeftRadius = \"0px\";\r\n\t\t}\r\n\r\n\t\tthis.options.printModes.forEach(function(mode){\r\n\t\t\tmode.Element.style.display = \"inline-block\";\r\n\t\t});\r\n    },\r\n\r\n    _hidePageSizeButtons: function () {\r\n\t\tif (this.options.position.indexOf(\"left\") > 0) {\r\n\t    \tthis.__link__.style.borderTopRightRadius = \"\";\r\n\t    \tthis.__link__.style.borderBottomRightRadius = \"\";\r\n\t\t} else {\r\n\t    \tthis.__link__.style.borderTopLeftRadius = \"\";\r\n\t    \tthis.__link__.style.borderBottomLeftRadius = \"\";\r\n\t\t}\r\n\r\n\t\tthis.options.printModes.forEach(function(mode){\r\n\t\t\tmode.Element.style.display = \"\";\r\n\t\t});\r\n    },\r\n});\r\n\r\n\r\nL.control.browserPrint = function(options, browserPrint) {\r\n\tif (!options || !options.printModes) {\r\n\t\toptions = options || {};\r\n\t\toptions.printModes = [\r\n\t\t\tL.BrowserPrint.Mode.Portrait(),\r\n\t\t\tL.BrowserPrint.Mode.Landscape(),\r\n\t\t\tL.BrowserPrint.Mode.Auto(),\r\n\t\t\tL.BrowserPrint.Mode.Custom()\r\n\t\t]\r\n\t}\r\n\r\n\tif (options && options.printModes && (!options.printModes.filter || !options.printModes.length)) {\r\n\t\tthrow \"Please specify valid print modes for Print action. Example: printModes: [L.BrowserPrint.Mode.Portrait(), L.control.BrowserPrint.Mode.Auto('Automatic'), 'Custom']\";\r\n\t}\r\n\r\n\treturn new L.Control.BrowserPrint(options,browserPrint);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.control.js?");

    /***/
  }),
  /***/"./src/leaflet.browser.print.helpers.js": (
  /*!**********************************************!*\
    !*** ./src/leaflet.browser.print.helpers.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintHelpersJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\nL.BrowserPrint.Helper = {\r\n\tgetPageMargin: function (mode,type) {\r\n\t\tvar margin = mode.options.margin;\r\n\t\tvar size = this.getPaperSize(mode);\r\n\t\tvar marginInMm = ((size.Width + size.Height) / 39.9);\r\n\t\tif (!type && type !== 0) {\r\n\t\t\ttype = \"\";\r\n\t\t}\r\n\r\n\t\tif (margin >= 0) {\r\n\t\t\tmargin = {\r\n\t\t\t\ttop: margin,\r\n\t\t\t\tright: margin,\r\n\t\t\t\tbottom: margin,\r\n\t\t\t\tleft: margin\r\n\t\t\t}\r\n\t\t} else if (!margin) {\r\n\t\t\tmargin = {};\r\n\t\t}\r\n\r\n\t\tvar faktor = 1;\r\n\t\tif (type === \"in\") {\r\n\t\t\tfaktor = 25.4;\r\n\t\t}\r\n\r\n\t\tvar topMargin = margin.top >= 0 ? margin.top : marginInMm;\r\n\t\tvar rightMargin = margin.right >= 0 ? margin.right : marginInMm;\r\n\t\tvar bottomMargin = margin.bottom >= 0 ? margin.bottom : marginInMm;\r\n\t\tvar leftMargin = margin.left >= 0 ? margin.left : marginInMm;\r\n\r\n\r\n\t\tvar top = (topMargin / faktor).toFixed(2) + type;\r\n\t\tvar right = (rightMargin / faktor).toFixed(2) + type;\r\n\t\tvar bottom = (bottomMargin / faktor).toFixed(2) + type;\r\n\t\tvar left = (leftMargin / faktor).toFixed(2) + type;\r\n\r\n\t\treturn {\r\n\t\t\ttop,\r\n\t\t\tright,\r\n\t\t\tbottom,\r\n\t\t\tleft\r\n\t\t};\r\n\t},\r\n\tgetPaperSize: function (mode) {\r\n\t\tif (mode.options.pageSeries) {\r\n\t\t\tvar series = L.BrowserPrint.Size[mode.options.pageSeries];\r\n\t\t\tvar w = series.Width;\r\n\t\t\tvar h = series.Height;\r\n\t\t\tvar switchSides = false;\r\n\t\t\tif (mode.options.pageSeriesSize && mode.options.pageSeriesSize !== '0') {\r\n\t\t\t\tmode.options.pageSeriesSize = +mode.options.pageSeriesSize;\r\n\t\t\t\tswitchSides = mode.options.pageSeriesSize % 2 === 1;\r\n\t\t\t\tif (switchSides) {\r\n\t\t\t\t\tw = w / (mode.options.pageSeriesSize - 1 || 1);\r\n\t\t\t\t\th = h / (mode.options.pageSeriesSize + 1);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tw = w / mode.options.pageSeriesSize;\r\n\t\t\t\t\th = h / mode.options.pageSeriesSize;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\treturn {\r\n\t\t\t\tWidth: switchSides ? h : w,\r\n\t\t\t\tHeight: switchSides ? w : h\r\n\t\t\t};\r\n\t\t} else {\r\n\t\t\tvar size = L.BrowserPrint.Size[mode.options.pageSeriesSize];\r\n\t\t\treturn {\r\n\t\t\t\tWidth: size.Width,\r\n\t\t\t\tHeight: size.Height\r\n\t\t\t};\r\n\t\t}\r\n\t},\r\n\tgetSize: function (mode, orientaion = 'Portrait') {\r\n\t\tvar size = this.getPaperSize(mode);\r\n\t\tvar pageMargin = this.getPageMargin(mode, 0);\r\n\r\n\t\tvar topbottom = orientaion === 'Portrait' ? parseFloat(pageMargin.top) + parseFloat(pageMargin.bottom) : parseFloat(pageMargin.left) + parseFloat(pageMargin.right);\r\n\t\tvar leftright = orientaion === 'Portrait' ? parseFloat(pageMargin.left) + parseFloat(pageMargin.right) : parseFloat(pageMargin.top) + parseFloat(pageMargin.bottom);\r\n\r\n\t\tvar height = Math.floor(size.Height - topbottom);\r\n\t\tvar width = Math.floor(size.Width - leftright);\r\n\r\n\t\tsize.Width = width * (window.devicePixelRatio || 1) + 'mm';\r\n\t\tsize.Height = height * (window.devicePixelRatio || 1) + 'mm';\r\n\r\n\t\treturn size;\r\n\t}\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.helpers.js?");

    /***/
  }),
  /***/"./src/leaflet.browser.print.js": (
  /*!**************************************!*\
    !*** ./src/leaflet.browser.print.js ***!
    \**************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\nL.BrowserPrint = L.Class.extend({\r\n\toptions: {\r\n\t\tdocumentTitle: '',\r\n\t\tprintLayer: null,\r\n\t\tclosePopupsOnPrint: true,\r\n\t\tcontentSelector: \"[leaflet-browser-print-content]\",\r\n\t\tpagesSelector: \"[leaflet-browser-print-pages]\",\r\n\t\tmanualMode: false,\r\n\t\tcustomPrintStyle: { color: \"gray\", dashArray: '5, 10', pane: \"customPrintPane\" },\r\n\t\tcancelWithEsc: true,\r\n\t\tprintFunction: window.print,\r\n\t\tdebug: false\r\n\t},\r\n\tinitialize: function(map, options){\r\n\t\tthis._map = map;\r\n\t\tL.setOptions(this,options);\r\n\r\n\t\tif (this.options.customPrintStyle.pane && !map.getPane(this.options.customPrintStyle.pane)) {\r\n\t\t\tmap.createPane(this.options.customPrintStyle.pane).style.zIndex = 9999;\r\n\t\t}\r\n\r\n\t\tif(!document.getElementById('browser-print-css')) {\r\n\t\t\tthis._appendControlStyles(document.head);\r\n\t\t}\r\n\t},\r\n\tcancel: function(){\r\n\t\tthis._printCancel();\r\n\t},\r\n\tprint: function(pageMode) {\r\n\t\tpageMode.options.action(this, pageMode)(pageMode);\r\n\t},\r\n\r\n\t_getMode: function(expectedOrientation, mode) {\r\n\t\treturn new L.BrowserPrint.Mode(expectedOrientation, mode.options);\r\n\t},\r\n\r\n\t_printLandscape: function (mode) {\r\n\t\tthis._addPrintClassToContainer(this._map, \"leaflet-browser-print--landscape\");\r\n\t\tthis._print(mode);\r\n\t},\r\n\r\n\t_printPortrait: function (mode) {\r\n\t\tthis._addPrintClassToContainer(this._map, \"leaflet-browser-print--portrait\");\r\n\t\tthis._print(mode);\r\n\t},\r\n\r\n\t_printAuto: function (mode) {\r\n\t\tthis._addPrintClassToContainer(this._map, \"leaflet-browser-print--auto\");\r\n\r\n\t\tvar autoBounds = this._getBoundsForAllVisualLayers();\r\n\t\tvar orientation;\r\n\t\tif(mode.options.orientation === \"Portrait\" || mode.options.orientation === \"Landscape\" ){\r\n\t\t\torientation = mode.options.orientation;\r\n\t\t}else {\r\n\t\t\torientation = this._getPageSizeFromBounds(autoBounds);\r\n\t\t}\r\n\t\tthis._print(this._getMode(orientation, mode), autoBounds);\r\n\t},\r\n\r\n\t_printCustom: function (mode, options) {\r\n\t\tthis._addPrintClassToContainer(this._map, \"leaflet-browser-print--custom\");\r\n\t\tthis.options.custom = { mode: mode, options: options};\r\n\t\tthis._map.on('mousedown', this._startAutoPolygon, this);\r\n\t},\r\n\r\n\t_addPrintClassToContainer: function (map, printClassName) {\r\n\t\tvar container = map.getContainer();\r\n\r\n\t\tif (container.className.indexOf(printClassName) === -1) {\r\n\t\t\tcontainer.className += \" \" + printClassName;\r\n\t\t}\r\n\t},\r\n\r\n\t_removePrintClassFromContainer: function (map, printClassName) {\r\n\t\tvar container = map.getContainer();\r\n\r\n\t\tif (container.className && container.className.indexOf(printClassName) > -1) {\r\n\t\t\tcontainer.className = container.className.replace(\" \" + printClassName, \"\");\r\n\t\t}\r\n\t},\r\n\r\n\t_startAutoPolygon: function (e) {\r\n\t\tL.DomEvent.stop(e);\r\n\r\n\t\tthis._map.dragging.disable();\r\n\r\n\t\tthis.options.custom.start = e.latlng;\r\n\r\n\t\tthis._map.getPane(this.options.customPrintStyle.pane).style.display = \"initial\";\r\n\r\n\t\tthis._map.off('mousedown', this._startAutoPolygon, this);\r\n\t\tthis._map.on('mousemove', this._moveAutoPolygon, this);\r\n\t\tthis._map.on('mouseup', this._endAutoPolygon, this);\r\n\t},\r\n\r\n\t_moveAutoPolygon: function (e) {\r\n\t\tif (this.options.custom) {\r\n\t\t\tL.DomEvent.stop(e);\r\n\t\t\tif (this.options.custom.rectangle) {\r\n\t\t\t\tthis.options.custom.rectangle.setBounds(L.latLngBounds(this.options.custom.start, e.latlng));\r\n\t\t\t} else {\r\n\t\t\t\tthis.options.custom.rectangle = L.rectangle([this.options.custom.start, e.latlng], this.options.customPrintStyle);\r\n\t\t\t}\r\n\t\t\tthis.options.custom.rectangle.addTo(this._map);\r\n\t\t}\r\n\t},\r\n\r\n\t_endAutoPolygon: function (e) {\r\n\t\tL.DomEvent.stop(e);\r\n\t\tthis._removeAutoPolygon();\r\n\r\n\t\tif (this.options.custom && this.options.custom.rectangle) {\r\n\t\t\tvar autoBounds = this.options.custom.rectangle.getBounds();\r\n\r\n\t\t\tthis._map.removeLayer(this.options.custom.rectangle);\r\n\r\n\t\t\tvar orientation;\r\n\t\t\tif(this.options.custom.mode.options.orientation === \"Portrait\" || this.options.custom.mode.options.orientation === \"Landscape\" ){\r\n\t\t\t\torientation = this.options.custom.mode.options.orientation;\r\n\t\t\t}else {\r\n\t\t\t\torientation = this._getPageSizeFromBounds(autoBounds);\r\n\t\t\t}\r\n\t\t\tthis._print(this._getMode(orientation, this.options.custom.mode), autoBounds);\r\n\r\n\t\t\tdelete this.options.custom;\r\n\t\t} else {\r\n\t\t\tthis._clearPrint();\r\n\t\t}\r\n\t},\r\n\t_removeAutoPolygon: function(){\r\n\r\n\t\tthis._map.off('mousedown', this._startAutoPolygon, this);\r\n\t\tthis._map.off('mousemove', this._moveAutoPolygon, this);\r\n\t\tthis._map.off('mouseup', this._endAutoPolygon, this);\r\n\r\n\t\tthis._map.dragging.enable();\r\n\r\n\t\t// we hide the pane because it destorys sometimes interactions with layers if printing is finished\r\n\t\tthis._map.getPane(this.options.customPrintStyle.pane).style.display = \"none\";\r\n\t},\r\n\r\n\t_getPageSizeFromBounds: function(bounds) {\r\n\t\tvar height = Math.abs(bounds.getNorth() - bounds.getSouth());\r\n\t\tvar width = Math.abs(bounds.getEast() - bounds.getWest());\r\n\t\tif (height > width) {\r\n\t\t\treturn \"Portrait\";\r\n\t\t} else {\r\n\t\t\treturn \"Landscape\";\r\n\t\t}\r\n\t},\r\n\r\n\t_setupPrintPagesWidth: function(pagesContainer, size, pageOrientation) {\r\n\t\tpagesContainer.style.width = pageOrientation === \"Landscape\" ? size.Height : size.Width;\r\n\t},\r\n\r\n\t_setupPrintMapHeight: function(mapContainer, size, pageOrientation, options) {\r\n\t\tvar header = options.header && options.header.enabled && options.header.size && !options.header.overTheMap ? options.header.size+\" - 1mm\" : \"0mm\";\r\n\t\tvar footer = options.footer && options.footer.enabled && options.footer.size && !options.footer.overTheMap ? options.footer.size+\" - 1mm\" : \"0mm\";\r\n\r\n\t\tmapContainer.style.height =  \"calc(\"+(pageOrientation === \"Landscape\" ? size.Width : size.Height) + \" - \"+header+\" - \" +footer+ \")\";\r\n\t},\r\n\r\n\t_printCancel: function() {\r\n\t\tclearInterval(self.printInterval);\r\n\t\tL.DomEvent.off(document,'keyup',this._keyUpCancel,this);\r\n\t\tvar activeMode = this.activeMode;\r\n\t\tdelete this.options.custom;\r\n\t\tthis._removeAutoPolygon();\r\n\t\tthis.activeMode = null;\r\n\t\tdelete this.cancelNextPrinting;\r\n\t\tthis._map.fire(L.BrowserPrint.Event.PrintCancel, { mode: activeMode });\r\n\t\tthis._printEnd();\r\n\t},\r\n\r\n\t_keyUpCancel: function(e){\r\n\t\tif(e.which === 27){ //ESC\r\n\t\t\tthis.cancel();\r\n\t\t}\r\n\t},\r\n\r\n\t_printMode: function(mode){\r\n\t\tif(this._map.isPrinting){\r\n\t\t\tconsole.error(\"printing is already active\");\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tthis._map.isPrinting = true;\r\n\t\tthis.cancelNextPrinting = false;\r\n\t\tthis.activeMode = mode;\r\n\t\tthis['_print' + mode.mode](mode);\r\n\t},\r\n\r\n\t_print: function (printMode, autoBounds) {\r\n\t\tthis._map.fire(L.BrowserPrint.Event.PrintInit, { mode: printMode });\r\n\t\tif(this.options.cancelWithEsc) {\r\n\t\t\tL.DomEvent.on(document, 'keyup', this._keyUpCancel, this);\r\n\t\t}\r\n\t\tL.BrowserPrint.Utils.initialize();\r\n\r\n\t\tvar self = this;\r\n\t\tvar mapContainer = this._map.getContainer();\r\n\t\tvar options = printMode.options;\r\n\t\tvar pageOrientation = options.orientation;\r\n\r\n\t\tvar origins = {\r\n\t\t\tbounds: autoBounds || this._map.getBounds(),\r\n\t\t\twidth: mapContainer.style.width,\r\n\t\t\theight: mapContainer.style.height,\r\n\t\t\tdocumentTitle: document.title,\r\n\t\t\tprintLayer: L.BrowserPrint.Utils.cloneLayer(this.options.printLayer),\r\n\t\t\tpanes: []\r\n\t\t};\r\n\r\n\t\tvar mapPanes = this._map.getPanes();\r\n\t\tfor (var pane in mapPanes) {\r\n\t\t\torigins.panes.push({name: pane, container: undefined});\r\n\t\t}\r\n\r\n\t\torigins.printObjects = this._getPrintObjects(origins.printLayer);\r\n\r\n\t\tthis._map.fire(L.BrowserPrint.Event.PrePrint, { printLayer: origins.printLayer, printObjects: origins.printObjects, pageOrientation, printMode: options.mode, pageBounds: origins.bounds});\r\n\r\n\t\tif (this.cancelNextPrinting) {\r\n\t\t\tthis._printCancel();\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tvar overlay = this._addPrintMapOverlay(printMode, pageOrientation, origins);\r\n\r\n\t\tif (this.options.documentTitle) {\r\n\t\t\tdocument.title = this.options.documentTitle;\r\n\t\t}\r\n\r\n\t\tthis._map.fire(L.BrowserPrint.Event.PrintStart, { printLayer: origins.printLayer, printMap: overlay.map, printObjects: overlay.objects });\r\n\r\n\t\tif (options.invalidateBounds) {\r\n\t\t\toverlay.map.fitBounds(origins.bounds, overlay.map.options);\r\n\t\t\toverlay.map.invalidateSize({reset: true, animate: false, pan: false});\r\n\t\t} else {\r\n\t\t\toverlay.map.setView(this._map.getCenter(), this._map.getZoom());\r\n\t\t}\r\n\r\n\t\tif(options.zoom){\r\n\t\t\toverlay.map.setZoom(options.zoom);\r\n\t\t}else if(!options.enableZoom){\r\n\t\t\toverlay.map.setZoom(this._map.getZoom());\r\n\t\t}\r\n\r\n\t\tif(!this.options.debug) {\r\n\t\t\tthis.printInterval = setInterval(function () {\r\n\t\t\t\tif (self.cancelNextPrinting || !self._map.isPrinting) {\r\n\t\t\t\t\tclearInterval(self.printInterval);\r\n\t\t\t\t} else if (self._map.isPrinting && !self._isTilesLoading(overlay.map)) {\r\n\t\t\t\t\tclearInterval(self.printInterval);\r\n\t\t\t\t\tif (self.options.manualMode) {\r\n\t\t\t\t\t\tself._setupManualPrintButton(overlay.map, origins, overlay.objects);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tself._completePrinting(overlay.map, origins, overlay.objects);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}, 50);\r\n\t\t}\r\n\t},\r\n\r\n\t_completePrinting: function (overlayMap, origins, printObjects) {\r\n\t\tvar self = this;\r\n\t\tsetTimeout(function(){\r\n\t\t\tif(!self._map.isPrinting){\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tself._map.fire(L.BrowserPrint.Event.Print, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r\n\t\t\tvar printFunction = self.options.printFunction || window.print;\r\n\t\t\tvar printPromise = printFunction();\r\n\t\t\tif (printPromise) {\r\n\t\t\t\tPromise.all([printPromise]).then(function(){\r\n\t\t\t\t\tself._printEnd(overlayMap, origins);\r\n\t\t\t\t\tself._map.fire(L.BrowserPrint.Event.PrintEnd, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r\n\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\tself._printEnd(overlayMap, origins);\r\n\t\t\t\tself._map.fire(L.BrowserPrint.Event.PrintEnd, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r\n\t\t\t}\r\n\t\t}, 1000);\r\n\t},\r\n\r\n\t_getBoundsForAllVisualLayers: function () {\r\n\t\tvar fitBounds = null;\r\n\r\n\t\t// Getting all layers without URL -> not tiles.\r\n\t\tfor (var layerId in this._map._layers){\r\n\t\t\tvar layer = this._map._layers[layerId];\r\n\t\t\tif (!layer._url && !layer._mutant) {\r\n\t\t\t\tif (fitBounds) {\r\n\t\t\t\t\tif (layer.getBounds) {\r\n\t\t\t\t\t\tfitBounds.extend(layer.getBounds());\r\n\t\t\t\t\t} else if(layer.getLatLng){\r\n\t\t\t\t\t\tfitBounds.extend(layer.getLatLng());\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\tif (layer.getBounds) {\r\n\t\t\t\t\t\tfitBounds = layer.getBounds();\r\n\t\t\t\t\t} else if(layer.getLatLng){\r\n\t\t\t\t\t\tfitBounds = L.latLngBounds(layer.getLatLng(), layer.getLatLng());\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (!fitBounds || !fitBounds._southWest) {\r\n\t\t\tfitBounds = this._map.getBounds();\r\n\t\t}\r\n\r\n\t\treturn fitBounds;\r\n\t},\r\n\r\n\t_clearPrint: function () {\r\n\t\tthis._removePrintClassFromContainer(this._map, \"leaflet-browser-print--landscape\");\r\n\t\tthis._removePrintClassFromContainer(this._map, \"leaflet-browser-print--portrait\");\r\n\t\tthis._removePrintClassFromContainer(this._map, \"leaflet-browser-print--auto\");\r\n\t\tthis._removePrintClassFromContainer(this._map, \"leaflet-browser-print--custom\");\r\n\t},\r\n\r\n\t_printEnd: function (overlayMap, origins) {\r\n\t\tthis._clearPrint();\r\n\r\n\t\tif (overlayMap) {\r\n\t\t\toverlayMap.remove();\r\n\t\t\toverlayMap = null;\r\n\t\t}\r\n\r\n\t\tif (this.__overlay__) {\r\n\t\t\tdocument.body.removeChild(this.__overlay__);\r\n\t\t\tthis.__overlay__ = null;\r\n\t\t}\r\n\r\n\t\tdocument.body.className = document.body.className.replace(\" leaflet--printing\", \"\");\r\n\t\tif (this.options.documentTitle) {\r\n\t\t\tdocument.title = origins.documentTitle;\r\n\t\t}\r\n\r\n\t\tthis._map.invalidateSize({reset: true, animate: false, pan: false});\r\n\t\tthis._map.isPrinting = false;\r\n\t},\r\n\r\n\t_getPrintObjects: function(printLayer) {\r\n\t\tvar printObjects = {};\r\n\t\tfor (var id in this._map._layers){\r\n\t\t\tvar layer = this._map._layers[id];\r\n\t\t\tif (!printLayer || !layer._url || layer instanceof L.TileLayer.WMS) {\r\n\t\t\t\tvar type = L.BrowserPrint.Utils.getType(layer);\r\n\t\t\t\tif (type) {\r\n\t\t\t\t\tif (!printObjects[type]) {\r\n\t\t\t\t\t\tprintObjects[type] = [];\r\n\t\t\t\t\t}\r\n\t\t\t\t\tprintObjects[type].push(layer);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn printObjects;\r\n\t},\r\n\r\n\t_addPrintCss: function (pageSize, pageMargin, pageOrientation) {\r\n\r\n\t\tvar printStyleSheet = document.createElement('style');\r\n\t\tprintStyleSheet.className = \"leaflet-browser-print-css\";\r\n\t\tprintStyleSheet.setAttribute('type', 'text/css');\r\n\t\tprintStyleSheet.innerHTML = ' @media print { .leaflet-popup-content-wrapper, .leaflet-popup-tip { box-shadow: none; }';\r\n\t\tprintStyleSheet.innerHTML += ' .leaflet-browser-print--manualMode-button { display: none; }';\r\n\t\tprintStyleSheet.innerHTML += ' * { -webkit-print-color-adjust: exact!important; printer-colors: exact!important; color-adjust: exact!important; }';\r\n\r\n\t\tif (pageMargin) {\r\n\t\t\tvar margin = pageMargin.top+\" \"+pageMargin.right+\" \"+pageMargin.bottom+\" \"+pageMargin.left;\r\n\t\t\tprintStyleSheet.innerHTML += ' @page { margin: ' + margin + '; }';\r\n\t\t}\r\n\t\tprintStyleSheet.innerHTML += ' @page :first { page-break-after: always; }';\r\n\r\n\t\tswitch (pageOrientation) {\r\n\t\t\tcase \"Landscape\":\r\n\t\t\t\tprintStyleSheet.innerText += \" @page { size : \" + pageSize + \" landscape; }\";\r\n\t\t\t\tbreak;\r\n\t\t\tdefault:\r\n\t\t\tcase \"Portrait\":\r\n\t\t\t\tprintStyleSheet.innerText += \" @page { size : \" + pageSize + \" portrait; }\";\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\r\n\t\treturn printStyleSheet;\r\n\t},\r\n\r\n\t_addPrintMapOverlay: function (printMode, pageOrientation, origins) {\r\n\t\tthis.__overlay__ = document.createElement(\"div\");\r\n\t\tthis.__overlay__.className = this._map.getContainer().className + \" leaflet-print-overlay\";\r\n\t\tdocument.body.appendChild(this.__overlay__);\r\n\r\n\t\tif(this.options.debug){\r\n\t\t\tvar cancelBtn = L.DomUtil.create(\"button\",\"\",this.__overlay__);\r\n\t\t\tcancelBtn.innerHTML = \"Cancel\";\r\n\t\t\tL.DomEvent.on(cancelBtn,\"click\",()=>{this.cancel()});\r\n\t\t}\r\n\r\n\t\tvar options = printMode.options;\r\n\r\n\t\tvar pageSize = options.pageSize;\r\n\t\tvar pageMargin = L.BrowserPrint.Helper.getPageMargin(printMode,\"mm\");\r\n\t\tvar printSize = L.BrowserPrint.Helper.getSize(printMode,pageOrientation);\r\n\t\tvar rotate = options.rotate;\r\n\t\tvar scale = options.scale;\r\n\r\n\t\tthis.__overlay__.appendChild(this._addPrintCss(pageSize, pageMargin, pageOrientation));\r\n\r\n\t\tif(options.header && options.header.enabled) {\r\n\t\t\tvar headerContainer = document.createElement(\"div\");\r\n\t\t\theaderContainer.id = \"print-header\";\r\n\t\t\tif(options.header.overTheMap){\r\n\t\t\t\theaderContainer.className = \"over-the-map\";\r\n\t\t\t}\r\n\t\t\theaderContainer.style.height = options.header.size;\r\n\t\t\theaderContainer.style.lineHeight = options.header.size;\r\n\t\t\tvar header = document.createElement(\"span\");\r\n\t\t\theader.innerHTML = options.header.text;\r\n\t\t\theaderContainer.appendChild(header);\r\n\t\t\tthis._setupPrintPagesWidth(headerContainer, printSize, pageOrientation);\r\n\t\t\tthis.__overlay__.appendChild(headerContainer);\r\n\t\t}\r\n\r\n\t\tvar gridContainer = document.createElement(\"div\");\r\n\t\tgridContainer.className = \"grid-print-container\";\r\n\t\tgridContainer.style.width = \"100%\";\r\n\t\tgridContainer.style.display = \"grid\";\r\n\t\tthis._setupPrintMapHeight(gridContainer, printSize, pageOrientation, options);\r\n\r\n\t\tif (this.options.contentSelector) {\r\n\t\t\tvar content = document.querySelectorAll(this.options.contentSelector);\r\n\t\t\tif (content && content.length) {\r\n\t\t\t\tfor (var i = 0; i < content.length; i++) {\r\n\t\t\t\t\tvar printContentItem = content[i].cloneNode(true);\r\n\t\t\t\t\tgridContainer.appendChild(printContentItem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tvar isMultipage = this.options.pagesSelector && document.querySelectorAll(this.options.pagesSelector).length;\r\n\t\tif (isMultipage) {\r\n\t\t\tvar pagesContainer = document.createElement(\"div\");\r\n\t\t\tpagesContainer.className = \"pages-print-container\";\r\n\t\t\tpagesContainer.style.margin = \"0!important\";\r\n\t\t\tthis._setupPrintPagesWidth(pagesContainer, printSize, pageOrientation);\r\n\r\n\t\t\tthis.__overlay__.appendChild(pagesContainer);\r\n\t\t\tpagesContainer.appendChild(gridContainer);\r\n\r\n\t\t\tvar pages = document.querySelectorAll(this.options.pagesSelector);\r\n\t\t\tif (pages && pages.length) {\r\n\t\t\t\tfor (var i = 0; i < pages.length; i++) {\r\n\t\t\t\t\tvar printPageItem = pages[i].cloneNode(true);\r\n\t\t\t\t\tpagesContainer.appendChild(printPageItem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tthis._setupPrintPagesWidth(gridContainer, printSize, pageOrientation);\r\n\t\t\tthis.__overlay__.appendChild(gridContainer);\r\n\t\t}\r\n\r\n\t\tvar overlayMapDom = document.createElement(\"div\");\r\n\t\toverlayMapDom.id = this._map.getContainer().id + \"-print\";\r\n\t\toverlayMapDom.className = \"grid-map-print\";\r\n\t\toverlayMapDom.style.width = \"100%\";\r\n\t\toverlayMapDom.style.height = \"100%\";\r\n\r\n\t\tif(scale && scale !== 1){\r\n\t\t\toverlayMapDom.style.transform += \" scale(\"+scale+\")\";\r\n\t\t}\r\n\t\tif(rotate){\r\n\t\t\toverlayMapDom.style.transform += \" rotate(\"+(90*rotate)+\"deg)\";\r\n\t\t}\r\n\r\n\t\tgridContainer.appendChild(overlayMapDom);\r\n\r\n\t\tif(options.footer && options.footer.enabled) {\r\n\t\t\tvar footerContainer = document.createElement(\"div\");\r\n\t\t\tfooterContainer.id = \"print-footer\";\r\n\t\t\tif(options.footer.overTheMap){\r\n\t\t\t\tfooterContainer.className = \"over-the-map\";\r\n\t\t\t\tfooterContainer.style.bottom = \"0\";\r\n\t\t\t}\r\n\t\t\tfooterContainer.style.height = options.footer.size;\r\n\t\t\tfooterContainer.style.lineHeight = options.footer.size;\r\n\t\t\tvar footer = document.createElement(\"span\");\r\n\t\t\tfooter.innerHTML = options.footer.text;\r\n\t\t\tfooterContainer.appendChild(footer);\r\n\t\t\tthis._setupPrintPagesWidth(footerContainer, printSize, pageOrientation);\r\n\t\t\tthis.__overlay__.appendChild(footerContainer);\r\n\t\t}\r\n\r\n\t\tdocument.body.className += \" leaflet--printing\";\r\n\r\n\t\treturn this._setupPrintMap(overlayMapDom.id, this._combineBasicOptions(origins.printLayer), origins.printLayer, origins.printObjects, origins.panes);\r\n\t},\r\n\r\n\t_combineBasicOptions: function (printLayer) {\r\n\t\tvar options = L.BrowserPrint.Utils.cloneBasicOptionsWithoutLayers(this._map.options);\r\n\r\n\t\tif (printLayer) {\r\n\t\t\toptions.maxZoom = printLayer.options.maxZoom;\r\n\t\t} else {\r\n\t\t\toptions.maxZoom = this._map.getMaxZoom();\r\n\t\t}\r\n\r\n\t\toptions.zoomControl = false;\r\n\t\toptions.dragging = false;\r\n\t\toptions.zoomAnimation = false;\r\n\t\toptions.fadeAnimation = false;\r\n\t\toptions.markerZoomAnimation = false;\r\n\t\toptions.keyboard = false;\r\n\t\toptions.scrollWheelZoom = false;\r\n\t\toptions.tap = false;\r\n\t\toptions.touchZoom = false;\r\n\r\n\t\treturn options;\r\n\t},\r\n\r\n\t_setupPrintMap: function (id, options, printLayer, printObjects, panes) {\r\n\t\tvar overlayMap = L.map(id, options);\r\n\r\n\t\tif (printLayer) {\r\n\t\t\tprintLayer.addTo(overlayMap);\r\n\t\t}\r\n\r\n\t\tpanes.forEach(function(p) { overlayMap.createPane(p.name, p.container); });\r\n\t\tvar clones = {};\r\n\t\tvar popupsToOpen = [];\r\n\t\tfor (var type in printObjects){\r\n\t\t\tvar closePopupsOnPrint = this.options.closePopupsOnPrint;\r\n\t\t\tprintObjects[type] = printObjects[type].map(function(pLayer){\r\n\t\t\t\tvar clone = L.BrowserPrint.Utils.cloneLayer(pLayer);\r\n\r\n\t\t\t\tif (clone) {\r\n\t\t\t\t\t/* Workaround for apropriate handling of popups. */\r\n\t\t\t\t\tif (pLayer instanceof L.Popup){\r\n\t\t\t\t\t\tif(!pLayer.isOpen) {\r\n\t\t\t\t\t\t\tpLayer.isOpen = function () { return this._isOpen; };\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (pLayer.isOpen() && !closePopupsOnPrint) {\r\n\t\t\t\t\t\t\tpopupsToOpen.push({source: pLayer._source, popup: clone});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tclone.addTo(overlayMap);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tclones[pLayer._leaflet_id] = clone;\r\n\r\n\t\t\t\t\tif (pLayer instanceof L.Layer) {\r\n\t\t\t\t\t\tvar tooltip = pLayer.getTooltip();\r\n\t\t\t\t\t\tif (tooltip) {\r\n\t\t\t\t\t\t\tclone.bindTooltip(tooltip.getContent(), tooltip.options);\r\n\t\t\t\t\t\t\tif (pLayer.isTooltipOpen()) {\r\n\t\t\t\t\t\t\t\tclone.openTooltip(tooltip.getLatLng());\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn clone;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tfor (var p = 0; p < popupsToOpen.length; p++) {\r\n\t\t\tvar popupModel = popupsToOpen[p];\r\n\t\t\tif (popupModel.source) {\r\n\t\t\t\tvar element = clones[popupModel.source._leaflet_id];\r\n\t\t\t\tif (element && element.bindPopup && element.openPopup) {\r\n\t\t\t\t\tclones[popupModel.source._leaflet_id].bindPopup(popupModel.popup).openPopup(popupModel.popup.getLatLng());\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn {map: overlayMap, objects: printObjects};\r\n\t},\r\n\r\n\t// Get all layers that is tile layers and is still loading;\r\n\t_isTilesLoading: function(overlayMap){\r\n\t\tvar isLoading = false;\r\n\t\tvar mapMajorVersion = parseFloat(L.version);\r\n\t\tif (mapMajorVersion > 1) {\r\n\t\t\tisLoading = this._getLoadingLayers(overlayMap);\r\n\t\t} else {\r\n\t\t\tisLoading = overlayMap._tilesToLoad || overlayMap._tileLayersToLoad;\r\n\t\t}\r\n\r\n\t\treturn isLoading;\r\n\t},\r\n\r\n\t_getLoadingLayers: function(map) {\r\n\t\tfor (var l in map._layers) {\r\n\t\t\tvar layer = map._layers[l];\r\n\t\t\tif ((layer._url || layer._mutant) && layer._loading) {\r\n\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn false;\r\n\t},\r\n\r\n\t_appendControlStyles:  function (container) {\r\n\t\tvar printControlStyleSheet = document.createElement('style');\r\n\t\tprintControlStyleSheet.setAttribute('type', 'text/css');\r\n\t\tprintControlStyleSheet.id = \"browser-print-css\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .leaflet-control-browser-print { display: flex; } .leaflet-control-browser-print a { background: #fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gcCCi8Vjp+aNAAAAGhJREFUOMvFksENgDAMA68RC7BBN+Cf/ZU33QAmYAT6BolAGxB+RrrIsg1BpfNBVXcPMLMDI/ytpKozMHWwK7BJJ7yYWQbGdBea9wTIkRDzKy0MT7r2NiJACRgotCzxykFI34QY2Ea7KmtxGJ+uX4wfAAAAAElFTkSuQmCC') no-repeat 5px; background-size: 16px 16px; display: block; border-radius: 2px; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .leaflet-control-browser-print a.leaflet-browser-print { background-position: center; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .browser-print-holder { background-color: #919187; margin: 0px; padding: 0px; list-style: none; white-space: nowrap; align-items: center; display: flex; } .browser-print-holder-left li:last-child { border-top-right-radius: 2px; border-bottom-right-radius: 2px; } .browser-print-holder-right li:first-child { border-top-left-radius: 2px; border-bottom-left-radius: 2px; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .browser-print-mode { display: none; color: #FFF; text-decoration: none; padding: 0 10px; text-align: center; } .browser-print-holder:hover { background-color: #757570; cursor: pointer; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .leaflet-browser-print--custom, .leaflet-browser-print--custom path { cursor: crosshair!important; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .leaflet-print-overlay { width: 100%; height:auto; min-height: 100%; position: absolute; top: 0; background-color: white!important; left: 0; z-index: 1001; display: block!important; } \";\r\n\t\tprintControlStyleSheet.innerHTML += \" .leaflet--printing { height:auto; min-height: 100%; margin: 0px!important; padding: 0px!important; } body.leaflet--printing > * { display: none; box-sizing: border-box; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .grid-print-container { grid-template: 1fr / 1fr; box-sizing: border-box; overflow: hidden; } .grid-map-print { grid-row: 1; grid-column: 1; } body.leaflet--printing .grid-print-container [leaflet-browser-print-content]:not(style) { display: unset!important; }\";\r\n\t\tprintControlStyleSheet.innerHTML += \" .pages-print-container { box-sizing: border-box; }\";\r\n\t\tprintControlStyleSheet.innerHTML += ' #print-header, #print-footer { text-align: center; font-size: 20px; }';\r\n\t\tprintControlStyleSheet.innerHTML += ' .over-the-map { position: absolute; left: 0; z-index: 10000; }';\r\n\r\n\t\tcontainer.appendChild(printControlStyleSheet);\r\n\t},\r\n\t_setupManualPrintButton: function(map, origins, objects) {\r\n\t\tvar manualPrintButton = document.createElement('button');\r\n\t\tmanualPrintButton.className = \"leaflet-browser-print--manualMode-button\";\r\n\t\tmanualPrintButton.innerHTML = \"Print\";\r\n\t\tmanualPrintButton.style.position = \"absolute\";\r\n\t\tmanualPrintButton.style.top = \"20px\";\r\n\t\tmanualPrintButton.style.right = \"20px\";\r\n\t\tthis.__overlay__.appendChild(manualPrintButton);\r\n\r\n\t\tvar self = this;\r\n\t\tL.DomEvent.on(manualPrintButton, 'click', function () {\r\n\t\t\tself.browserPrint._completePrinting(map, origins, objects);\r\n\t\t});\r\n\t},\r\n});\r\n\r\n\r\nL.browserPrint = function(map,options){\r\n\treturn new L.BrowserPrint(map,options);\r\n};\r\n\r\n\r\nL.BrowserPrint.Event =  {\r\n\tPrintInit: 'browser-print-init',\r\n\tPrePrint: 'browser-pre-print',\r\n\tPrintStart: 'browser-print-start',\r\n\tPrint: 'browser-print',\r\n\tPrintEnd: 'browser-print-end',\r\n\tPrintCancel: 'browser-print-cancel'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.js?");

    /***/
  }),
  /***/"./src/leaflet.browser.print.modes.js": (
  /*!********************************************!*\
    !*** ./src/leaflet.browser.print.modes.js ***!
    \********************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintModesJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\nL.BrowserPrint.Mode = L.Class.extend({\r\n\toptions: {\r\n\t\ttitle: '',\r\n\t\tinvalidateBounds: false,\r\n\t\tmargin: {},\r\n\t\tenableZoom: true,\r\n\t\tzoom: 0,\r\n\t\trotate: 0,\r\n\t\tscale: 1,\r\n\t\torientation: '',\r\n\t\tpageSize: 'A4',\r\n\t\tpageSeries: '',\r\n\t\tpageSeriesSize: '',\r\n\t\taction: null,\r\n\t\theader: {\r\n\t\t\tenabled: false,\r\n\t\t\ttext: \"\",\r\n\t\t\tsize: \"10mm\",\r\n\t\t\toverTheMap: false,\r\n\t\t},\r\n\t\tfooter: {\r\n\t\t\tenabled: false,\r\n\t\t\ttext: \"\",\r\n\t\t\tsize: \"10mm\",\r\n\t\t\toverTheMap: false,\r\n\t\t},\r\n\t},\r\n\tinitialize: function (mode, options = {}) {\r\n\t\tif (!mode) {\r\n\t\t\tthrow 'Print mode have to be set. Default modes: \"Portrait\", \"Landscape\", \"Auto\" or \"Custom\". The shortcut functions \"L.BrowserPrint.Mode.Portrait\" are preferred.';\r\n\t\t}\r\n\r\n\t\tthis.mode = mode;\r\n\t\tthis.setOptions(options);\r\n\t},\r\n    setOptions: function(options){\r\n        L.setOptions(this, options);\r\n\r\n        if(!this.options.title){\r\n            this.options.title = this.mode;\r\n        }\r\n\r\n        if(this.mode === \"Portrait\" || this.mode === \"Landscape\"){\r\n            this.options.orientation = this.mode;\r\n        }\r\n\r\n        this.options.pageSize = (this.options.pageSize || 'A4').toUpperCase();\r\n        this.options.pageSeries = [\"A\", \"B\", \"C\", \"D\"].indexOf(this.options.pageSize[0]) !== -1 ? this.options.pageSize[0] : \"\";\r\n        this.options.pageSeriesSize = this.options.pageSize.substring(this.options.pageSeries.length);\r\n        this.options.action = this.options.action || function (context, element) {\r\n            return function () {\r\n                context._printMode(element)\r\n            };\r\n        };\r\n    }\r\n});\r\n\r\nL.browserPrint.mode = function(mode, options){\r\n\treturn new L.BrowserPrint.Mode(mode,options);\r\n};\r\n\r\nL.BrowserPrint.Mode.Name = {\r\n\tLandscape: \"Landscape\",\r\n\tPortrait: \"Portrait\",\r\n\tAuto: \"Auto\",\r\n\tCustom: \"Custom\",\r\n};\r\n\r\n\r\nL.BrowserPrint.Mode.Portrait = function(pageSize, options = {}) {\r\n\toptions.pageSize = pageSize;\r\n\toptions.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : false;\r\n\treturn new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Portrait, options);\r\n};\r\nL.BrowserPrint.Mode.Landscape = function(pageSize, options = {}) {\r\n\toptions.pageSize = pageSize;\r\n\toptions.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : false;\r\n\treturn new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Landscape, options);\r\n};\r\nL.BrowserPrint.Mode.Auto = function(pageSize, options = {}) {\r\n\toptions.pageSize = pageSize;\r\n\toptions.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : true;\r\n\treturn new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Auto, options);\r\n};\r\nL.BrowserPrint.Mode.Custom = function(pageSize, options = {}) {\r\n\toptions.pageSize = pageSize;\r\n\toptions.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : true;\r\n\treturn new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Custom, options);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.modes.js?");

    /***/
  }),
  /***/"./src/leaflet.browser.print.sizes.js": (
  /*!********************************************!*\
    !*** ./src/leaflet.browser.print.sizes.js ***!
    \********************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintSizesJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\n/* Portrait mode sizes in mm for 0 lvl*/\r\nL.BrowserPrint.Size =  {\r\n\tA: {\r\n\t\tWidth: 840,\r\n\t\tHeight: 1188\r\n\t},\r\n\tB: {\r\n\t\tWidth: 1000,\r\n\t\tHeight: 1414\r\n\t},\r\n\tC: {\r\n\t\tWidth: 916,\r\n\t\tHeight: 1296\r\n\t},\r\n\tD: {\r\n\t\tWidth: 770,\r\n\t\tHeight: 1090\r\n\t},\r\n\tLETTER: {\r\n\t\tWidth: 216,\r\n\t\tHeight: 279\r\n\t},\r\n\tHALFLETTER: {\r\n\t\tWidth: 140,\r\n\t\tHeight: 216\r\n\t},\r\n\tLEGAL: {\r\n\t\tWidth: 216,\r\n\t\tHeight: 356\r\n\t},\r\n\tJUNIORLEGAL: {\r\n\t\tWidth: 127,\r\n\t\tHeight: 203\r\n\t},\r\n\tTABLOID: {\r\n\t\tWidth: 279,\r\n\t\tHeight: 432\r\n\t},\r\n\tLEDGER: {\r\n\t\tWidth: 432,\r\n\t\tHeight: 279\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.sizes.js?");

    /***/
  }),
  /***/"./src/leaflet.browser.print.utils.js": (
  /*!********************************************!*\
    !*** ./src/leaflet.browser.print.utils.js ***!
    \********************************************/
  /*! no static exports found */
  /***/
  function srcLeafletBrowserPrintUtilsJs(module, exports) {
    eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r\n**/\r\n\r\nL.BrowserPrint.Utils = {\r\n\r\n\t_ignoreArray: [],\r\n\r\n\t_cloneFactoryArray: [],\r\n\t_cloneRendererArray: [],\r\n\t_knownRenderers: {},\r\n\r\n\tcloneOptions: function(options) {\r\n\t\tvar utils = this;\r\n\t    var retOptions = {};\r\n\t    for (var name in options) {\r\n\t        var item = options[name];\r\n\t\t\tif (item && item.clone) {\r\n\t\t\t\tretOptions[name] = item.clone();\r\n\t\t\t} else if (item && item.onAdd) {\r\n\t\t\t\tretOptions[name] = utils.cloneLayer(item);\r\n\t\t\t} else {\r\n\t\t\t\tretOptions[name] = item;\r\n\t\t\t}\r\n\t    }\r\n\t    return retOptions;\r\n\t},\r\n\r\n\tcloneBasicOptionsWithoutLayers: function(options) {\r\n\t    var retOptions = {};\r\n\t\tvar optionNames = Object.getOwnPropertyNames(options);\r\n\t\tif (optionNames.length) {\r\n\t\t\tfor (var i = 0; i < optionNames.length; i++) {\r\n\t\t\t\tvar optName = optionNames[i];\r\n\t\t\t\tif (optName && optName != \"layers\") {\r\n\t\t\t        retOptions[optName] = options[optName];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t    return this.cloneOptions(retOptions);\r\n\t\t}\r\n\r\n\t\treturn retOptions;\r\n\t},\r\n\r\n\tcloneInnerLayers: function (layer) {\r\n\t\tvar utils = this;\r\n\t\tvar layers = [];\r\n\r\n\t\tlayer.eachLayer(function (inner) {\r\n\t\t\tvar l = utils.cloneLayer(inner);\r\n\r\n\t\t\tif (l) {\r\n\t\t\t\tlayers.push(l);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\treturn layers;\r\n\t},\r\n\r\n\tinitialize: function () {\r\n\r\n\t\tthis._knownRenderers = {};\r\n\r\n\t\t// Renderers\r\n\t\tthis.registerRenderer(L.SVG, 'L.SVG');\r\n\t\tthis.registerRenderer(L.Canvas, 'L.Canvas');\r\n\r\n\t\tthis.registerLayer(L.TileLayer.WMS, 'L.TileLayer.WMS', function(layer, utils) { \treturn L.tileLayer.wms(layer._url, utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.TileLayer, 'L.TileLayer', function(layer, utils) { \t\t\treturn L.tileLayer(layer._url, utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.GridLayer, 'L.GridLayer', function(layer, utils) { \t\t\treturn L.gridLayer(utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.ImageOverlay, 'L.ImageOverlay', function(layer, utils) { \t\treturn L.imageOverlay(layer._url, layer._bounds, utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.Marker, 'L.Marker', function(layer, utils) { \t\t\t\t\treturn L.marker(layer.getLatLng(), utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.Popup, 'L.Popup', function(layer, utils) { \t\t\t\t\treturn L.popup(utils.cloneOptions(layer.options)).setLatLng(layer.getLatLng()).setContent(layer.getContent()); });\r\n\t\tthis.registerLayer(L.Circle, 'L.Circle', function(layer, utils) { \t\t\t\t\treturn L.circle(layer.getLatLng(), layer.getRadius(), utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.CircleMarker, 'L.CircleMarker', function(layer, utils) { \t\treturn L.circleMarker(layer.getLatLng(), utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.Rectangle, 'L.Rectangle', function(layer, utils) { \t\t\treturn L.rectangle(layer.getBounds(), utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.Polygon, 'L.Polygon', function(layer, utils) { \t\t\t\treturn L.polygon(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r\n\r\n\t\t// MultiPolyline is removed in leaflet 1.0.0\r\n\t\tthis.registerLayer(L.MultiPolyline, 'L.MultiPolyline', function(layer, utils) { \treturn L.polyline(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r\n\t\t// MultiPolygon is removed in leaflet 1.0.0\r\n\t\tthis.registerLayer(L.MultiPolygon, 'L.MultiPolygon', function(layer, utils) { \t\treturn L.multiPolygon(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r\n\r\n\t\tthis.registerLayer(L.Polyline, 'L.Polyline', function(layer, utils) { \t\t\t\treturn L.polyline(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r\n\t\tthis.registerLayer(L.GeoJSON, 'L.GeoJSON', function(layer, utils) { \t\t\t\treturn L.geoJson(layer.toGeoJSON(), utils.cloneOptions(layer.options)); });\r\n\r\n\t\tthis.registerIgnoreLayer(L.FeatureGroup, 'L.FeatureGroup');\r\n\t\tthis.registerIgnoreLayer(L.LayerGroup, 'L.LayerGroup');\r\n\r\n\t\t// There is no point to clone tooltips here;  L.tooltip(options);\r\n\t\tthis.registerLayer(L.Tooltip, 'L.Tooltip', function(){\treturn null; });\r\n\t},\r\n\r\n\t_register: function(array, type, identifier, builderFunction) {\r\n\t\tif (type &&\r\n\t\t\t!array.filter(function(l){ return l.identifier === identifier; }).length) {\r\n\r\n\t\t\tarray.push({\r\n\t\t\t\ttype: type,\r\n\t\t\t\tidentifier: identifier,\r\n\t\t\t\tbuilder: builderFunction || function (layer) { return new type(layer.options); }\r\n\t\t\t});\r\n\t\t}\r\n\t},\r\n\r\n\tregisterLayer: function(type, identifier, builderFunction) {\r\n\t\tthis._register(this._cloneFactoryArray, type, identifier, builderFunction);\r\n\t},\r\n\r\n\tregisterRenderer: function(type, identifier, builderFunction) {\r\n\t\tthis._register(this._cloneRendererArray, type, identifier, builderFunction);\r\n\t},\r\n\r\n\tregisterIgnoreLayer: function(type, identifier) {\r\n\t\tthis._register(this._ignoreArray, type, identifier);\r\n\t},\r\n\r\n\tcloneLayer: function(layer) {\r\n\t\tif (!layer) return null;\r\n\r\n\t\t// First we check if this layer is actual renderer\r\n\t\tvar renderer = this.__getRenderer(layer);\r\n\t\tif (renderer) {\r\n\t\t\treturn renderer;\r\n\t\t}\r\n\r\n\t\tvar factoryObject;\r\n\t\tif (layer._group) { // Exceptional check for L.MarkerClusterGroup\r\n\t\t\tfactoryObject = this.__getFactoryObject(layer._group, true);\r\n\t\t} else {\r\n\t\t\tfactoryObject = this.__getFactoryObject(layer);\r\n\t\t}\r\n\r\n\t\t// We clone and recreate layer if it's simple overlay\r\n\t\tif (factoryObject) {\r\n\t\t\tfactoryObject = factoryObject.builder(layer, this);\r\n\t\t}\r\n\r\n\t\treturn factoryObject;\r\n\t},\r\n\r\n\tgetType: function(layer) {\r\n\t\tif (!layer) return null;\r\n\r\n\t\tvar factoryObject = this.__getFactoryObject(layer);\r\n\t\tif (factoryObject) {\r\n\t\t\tfactoryObject = factoryObject.identifier;\r\n\t\t}\r\n\r\n\t\treturn factoryObject;\r\n\t},\r\n\r\n\t__getRenderer: function(oldRenderer) {\r\n\t\tvar renderer = this._knownRenderers[oldRenderer._leaflet_id];\r\n\t\tif (!renderer) {\r\n\t\t\tfor (var i = 0; i < this._cloneRendererArray.length; i++) {\r\n\t\t\t\tvar factoryObject = this._cloneRendererArray[i];\r\n\t\t\t\tif (oldRenderer instanceof factoryObject.type) {\r\n\t\t\t\t\tthis._knownRenderers[oldRenderer._leaflet_id] = factoryObject.builder(oldRenderer.options);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\trenderer = this._knownRenderers[oldRenderer._leaflet_id];\r\n\t\t}\r\n\r\n\t\treturn renderer;\r\n\t},\r\n\r\n\t__getFactoryObject: function (layer, skipIgnore) {\r\n\t\tif (!skipIgnore) {\r\n\t\t\tfor (var i = 0; i < this._ignoreArray.length; i++) {\r\n\t\t\t\tvar ignoreObject = this._ignoreArray[i];\r\n\t\t\t\tif (ignoreObject.type && layer instanceof ignoreObject.type) {\r\n\t\t\t\t\treturn null;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfor (var i = 0; i < this._cloneFactoryArray.length; i++) {\r\n\t\t\tvar factoryObject = this._cloneFactoryArray[i];\r\n\t\t\tif (factoryObject.type && layer instanceof factoryObject.type) {\r\n\t\t\t\treturn factoryObject;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tfor (var i = 0; i < this._cloneRendererArray.length; i++) {\r\n\t\t\tvar factoryObject = this._cloneRendererArray[i];\r\n\t\t\tif (factoryObject.type && layer instanceof factoryObject.type) {\r\n\t\t\t\treturn null;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tthis.__unknownLayer__();\r\n\r\n\t\treturn null;\r\n\t},\r\n\r\n\t__unknownLayer__: function(){\r\n\t   console.warn('Unknown layer, cannot clone this layer. Leaflet version: ' + L.version);\r\n\t   console.info('For additional information please refer to documentation on: https://github.com/Igor-Vladyka/leaflet.browser.print.');\r\n\t   console.info('-------------------------------------------------------------------------------------------------------------------');\r\n   }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.browser.print.utils.js?");

    /***/
  }),
  /***/0: (
  /*!*****************************************************************************************************************************************************************************************************************************************!*\
    !*** multi ./src/leaflet.browser.print.js ./src/leaflet.browser.print.control.js ./src/leaflet.browser.print.utils.js ./src/leaflet.browser.print.sizes.js ./src/leaflet.browser.print.modes.js ./src/leaflet.browser.print.helpers.js ***!
    \*****************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! ./src/leaflet.browser.print.js */\"./src/leaflet.browser.print.js\");\n__webpack_require__(/*! ./src/leaflet.browser.print.control.js */\"./src/leaflet.browser.print.control.js\");\n__webpack_require__(/*! ./src/leaflet.browser.print.utils.js */\"./src/leaflet.browser.print.utils.js\");\n__webpack_require__(/*! ./src/leaflet.browser.print.sizes.js */\"./src/leaflet.browser.print.sizes.js\");\n__webpack_require__(/*! ./src/leaflet.browser.print.modes.js */\"./src/leaflet.browser.print.modes.js\");\nmodule.exports = __webpack_require__(/*! ./src/leaflet.browser.print.helpers.js */\"./src/leaflet.browser.print.helpers.js\");\n\n\n//# sourceURL=webpack:///multi_./src/leaflet.browser.print.js_./src/leaflet.browser.print.control.js_./src/leaflet.browser.print.utils.js_./src/leaflet.browser.print.sizes.js_./src/leaflet.browser.print.modes.js_./src/leaflet.browser.print.helpers.js?");

    /***/
  })

  /******/
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35643" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","mapsComponent/leaflet.browser.print.js"], null)
//# sourceMappingURL=/leaflet.browser.print.7297d529.js.map