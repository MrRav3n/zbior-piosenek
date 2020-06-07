function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-new/add-new.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-new/add-new.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddNewAddNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"welcomeForm row justify-content-center\">\n  <h1 class=\"text-center col-12\">Dodaj nową playlistę</h1>\n  <div class=\"col-md-6 col-11\">\n    <form [formGroup]=\"addNewPlaylistForm\">\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nazwa playlisty\"\n               formControlName=\"playlistName\">\n      </div>\n      <button class=\"btn btn-primary col-12\" (click)=\"addNewPlaylist()\">Dodaj!</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"welcomeForm row justify-content-center\">\n  <h1 class=\"text-center col-12\">Dodaj piosenkę do playlisty</h1>\n  <div class=\"col-md-6 col-11\">\n    <form [formGroup]=\"addSongToPlaylistForm\">\n      <div class=\"form-group\">\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect2\">Nazwa playlisty</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect2\" formControlName=\"playlistID\">\n            <option *ngFor=\"let playlist of this.main.band.playlist\" [value]=\"playlist._id\">{{playlist.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleFormControlSelect1\">Nazwa piosenki do dodania do playlisty</label>\n          <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"songID\">\n            <option *ngFor=\"let song of this.main.songs\" [value]=\"song._id\">{{song.name}}</option>\n          </select>\n        </div>\n      </div>\n      <button class=\"btn btn-primary col-12\" (click)=\"addNewSongToPlaylist()\">Dodaj!</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"welcomeForm row justify-content-center\">\n  <h1 class=\"text-center col-12\">Dodaj nową piosenkę</h1>\n  <div class=\"col-md-6 col-11\">\n    <form [formGroup]=\"addNewSongForm\">\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\"  aria-describedby=\"emailHelp\" placeholder=\"Nazwa piosenki\"\n               formControlName=\"songName\">\n      </div>\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" rows=\"5\" formControlName=\"textToSend\" placeholder=\"Treść piosenki\"></textarea>\n      </div>\n      <button class=\"btn btn-primary col-12\" (click)=\"addNewSong()\">Dodaj!</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/all-songs/all-songs.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-songs/all-songs.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllSongsAllSongsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Wszystkie piosenki</h1>\n<h3 *ngFor=\"let song of this.main.songs\" class=\"choose\" (click)=\"setCurrentSong(song._id)\">{{song.name}}</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet class=\"w-100 h-100\">\r\n\r\n</router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/band/band.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/band/band.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBandBandComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/band\">Zbiór-piosenek</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse ml-md-auto\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/band\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">Strona główna</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/band/add-new\" [routerLinkActive]=\"['active']\">Dodaj</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/band/all-songs\" [routerLinkActive]=\"['active']\">Wszystkie piosenki</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n<router-outlet>\n\n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-band/main-band.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-band/main-band.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainBandMainBandComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-center mt-2 mb-3 bandName\">{{this.main.band.name}}</h1>\n\n<h1 class=\"text-center\">Twoje playlisty</h1>\n\n<h3 *ngFor=\"let playlist of main.band.playlist\" class=\"choose\" (click)=\"setCurrentPlaylist(playlist._id)\">{{playlist.name}}</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlaylistPlaylistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-center\">{{this.main.currentPlaylist.name}}</h1>\n<h3 *ngFor=\"let song of songs; let i = index\" class=\"choose\" (click)=\"setCurrentSong(song._id, i)\">{{song.name}}</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/single-song/single-song.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-song/single-song.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSingleSongSingleSongComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button *ngIf=\"this.main.currentPlaylist\" (click)=\"backToPlaylist()\" class=\"btn btn-warning\">Wróć do playlisty</button>\n<h1 class=\"text-center mt-3\">{{this.main.currentSong.name}}</h1>\n<h4 class=\"text-left p-2\"\n    style=\" white-space: pre-wrap;\" id=\"text\">{{this.main.currentSong.textToSend}}</h4>\n<button *ngIf=\"this.main.currentPlaylist\" (click)=\"nextSong()\" class=\"btn btn-warning\">Następna piosenka</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"welcomeForm row justify-content-center\">\n    <div class=\"col-md-6 col-11\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nazwa zespołu\"\n                 formControlName=\"bandName\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary col-12\" (click)=\"login()\">Zaloguj się!</button>\n      </form>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-new/add-new.component.scss":
  /*!************************************************!*\
    !*** ./src/app/add-new/add-new.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddNewAddNewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcomeForm {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5ldy9FOlxcemVzcMOzxYJcXHpiaW9yLXBpb3NlbmVrL3NyY1xcYXBwXFxhZGQtbmV3XFxhZGQtbmV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtbmV3L2FkZC1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRkLW5ldy9hZGQtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWVGb3JtIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiIsIi53ZWxjb21lRm9ybSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-new/add-new.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/add-new/add-new.component.ts ***!
    \**********************************************/

  /*! exports provided: AddNewComponent */

  /***/
  function srcAppAddNewAddNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewComponent", function () {
      return AddNewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddNewComponent = /*#__PURE__*/function () {
      function AddNewComponent(main) {
        _classCallCheck(this, AddNewComponent);

        this.main = main;
        this.addNewPlaylistForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          playlistName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.addSongToPlaylistForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          songID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          playlistID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.addNewSongForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          songName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          textToSend: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
      }

      _createClass(AddNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewPlaylist",
        value: function addNewPlaylist() {
          this.addNewPlaylistForm.setControl('bandID', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.main.band._id));
          this.main.addNewPlaylist(this.addNewPlaylistForm.value);
        }
      }, {
        key: "addNewSongToPlaylist",
        value: function addNewSongToPlaylist() {
          this.addSongToPlaylistForm.setControl('bandID', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.main.band._id));
          this.main.addNewSongToPlaylist(this.addSongToPlaylistForm.value);
        }
      }, {
        key: "addNewSong",
        value: function addNewSong() {
          this.addNewSongForm.setControl('bandID', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.main.band._id));
          this.main.addNewSong(this.addNewSongForm.value);
        }
      }]);

      return AddNewComponent;
    }();

    AddNewComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    AddNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-new',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-new.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-new/add-new.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-new.component.scss */
      "./src/app/add-new/add-new.component.scss"))["default"]]
    })], AddNewComponent);
    /***/
  },

  /***/
  "./src/app/all-songs/all-songs.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/all-songs/all-songs.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAllSongsAllSongsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1zb25ncy9hbGwtc29uZ3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/all-songs/all-songs.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/all-songs/all-songs.component.ts ***!
    \**************************************************/

  /*! exports provided: AllSongsComponent */

  /***/
  function srcAppAllSongsAllSongsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllSongsComponent", function () {
      return AllSongsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AllSongsComponent = /*#__PURE__*/function () {
      function AllSongsComponent(main, router) {
        _classCallCheck(this, AllSongsComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(AllSongsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(id) {
          this.main.currentSong = this.main.songs.filter(function (v) {
            return v._id === id;
          })[0];
          this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
          this.router.navigateByUrl('band/current-song');
        }
      }]);

      return AllSongsComponent;
    }();

    AllSongsComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AllSongsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-songs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-songs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/all-songs/all-songs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-songs.component.scss */
      "./src/app/all-songs/all-songs.component.scss"))["default"]]
    })], AllSongsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./all-songs/all-songs.component */
    "./src/app/all-songs/all-songs.component.ts");
    /* harmony import */


    var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./playlist/playlist.component */
    "./src/app/playlist/playlist.component.ts");
    /* harmony import */


    var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-new/add-new.component */
    "./src/app/add-new/add-new.component.ts");
    /* harmony import */


    var _band_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./band/band.component */
    "./src/app/band/band.component.ts");
    /* harmony import */


    var _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-band/main-band.component */
    "./src/app/main-band/main-band.component.ts");
    /* harmony import */


    var _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./single-song/single-song.component */
    "./src/app/single-song/single-song.component.ts");

    var routes = [{
      path: '',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'band',
      component: _band_band_component__WEBPACK_IMPORTED_MODULE_7__["BandComponent"],
      children: [{
        path: 'all-songs',
        component: _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_4__["AllSongsComponent"]
      }, {
        path: '',
        component: _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_8__["MainBandComponent"]
      }, {
        path: 'playlist',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistComponent"]
      }, {
        path: 'add-new',
        component: _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_6__["AddNewComponent"]
      }, {
        path: 'current-playlist',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistComponent"]
      }, {
        path: 'current-song',
        component: _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_9__["SingleSongComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(main, router) {
        _classCallCheck(this, AppComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.main.band) {
            this.router.navigateByUrl('all-songs');
          } else {
            console.log('navigating');
            this.router.navigateByUrl('');
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-songs/all-songs.component */
    "./src/app/all-songs/all-songs.component.ts");
    /* harmony import */


    var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./playlist/playlist.component */
    "./src/app/playlist/playlist.component.ts");
    /* harmony import */


    var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-new/add-new.component */
    "./src/app/add-new/add-new.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _band_band_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./band/band.component */
    "./src/app/band/band.component.ts");
    /* harmony import */


    var _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main-band/main-band.component */
    "./src/app/main-band/main-band.component.ts");
    /* harmony import */


    var _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./single-song/single-song.component */
    "./src/app/single-song/single-song.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_6__["AllSongsComponent"], _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__["AddNewComponent"], _band_band_component__WEBPACK_IMPORTED_MODULE_12__["BandComponent"], _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_13__["MainBandComponent"], _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_14__["SingleSongComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
      providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/band/band.component.scss":
  /*!******************************************!*\
    !*** ./src/app/band/band.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBandBandComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmQvYmFuZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/band/band.component.ts":
  /*!****************************************!*\
    !*** ./src/app/band/band.component.ts ***!
    \****************************************/

  /*! exports provided: BandComponent */

  /***/
  function srcAppBandBandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BandComponent", function () {
      return BandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var BandComponent = /*#__PURE__*/function () {
      function BandComponent(main) {
        _classCallCheck(this, BandComponent);

        this.main = main;
      }

      _createClass(BandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BandComponent;
    }();

    BandComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    BandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-band',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./band.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/band/band.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./band.component.scss */
      "./src/app/band/band.component.scss"))["default"]]
    })], BandComponent);
    /***/
  },

  /***/
  "./src/app/main-band/main-band.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main-band/main-band.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainBandMainBandComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bandName {\n  border-bottom: 2px solid black;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1iYW5kL0U6XFx6ZXNww7PFglxcemJpb3ItcGlvc2VuZWsvc3JjXFxhcHBcXG1haW4tYmFuZFxcbWFpbi1iYW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLWJhbmQvbWFpbi1iYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1iYW5kL21haW4tYmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5kTmFtZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbiIsIi5iYW5kTmFtZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main-band/main-band.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-band/main-band.component.ts ***!
    \**************************************************/

  /*! exports provided: MainBandComponent */

  /***/
  function srcAppMainBandMainBandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainBandComponent", function () {
      return MainBandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainBandComponent = /*#__PURE__*/function () {
      function MainBandComponent(main, router) {
        _classCallCheck(this, MainBandComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(MainBandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCurrentPlaylist",
        value: function setCurrentPlaylist(id) {
          this.main.currentPlaylist = this.main.band.playlist.filter(function (v) {
            return v._id === id;
          })[0];
          this.router.navigateByUrl('band/current-playlist');
        }
      }]);

      return MainBandComponent;
    }();

    MainBandComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MainBandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-band',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-band.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-band/main-band.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-band.component.scss */
      "./src/app/main-band/main-band.component.scss"))["default"]]
    })], MainBandComponent);
    /***/
  },

  /***/
  "./src/app/playlist/playlist.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/playlist/playlist.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlaylistPlaylistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/playlist/playlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/playlist/playlist.component.ts ***!
    \************************************************/

  /*! exports provided: PlaylistComponent */

  /***/
  function srcAppPlaylistPlaylistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function () {
      return PlaylistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PlaylistComponent = /*#__PURE__*/function () {
      function PlaylistComponent(main, router) {
        _classCallCheck(this, PlaylistComponent);

        this.main = main;
        this.router = router;
        this.songs = [];
      }

      _createClass(PlaylistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.songs = this.main.songs.filter(function (item) {
            return _this.main.currentPlaylist.songs.includes(item._id);
          });
        }
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(id, i) {
          this.main.currentSong = this.main.songs.filter(function (v) {
            return v._id === id;
          })[0];
          this.main.currentSong.iterator = i;
          this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
          this.router.navigateByUrl('band/current-song');
        }
      }]);

      return PlaylistComponent;
    }();

    PlaylistComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-playlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./playlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./playlist.component.scss */
      "./src/app/playlist/playlist.component.scss"))["default"]]
    })], PlaylistComponent);
    /***/
  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainService = /*#__PURE__*/function () {
      function MainService(http, router) {
        _classCallCheck(this, MainService);

        this.http = http;
        this.router = router;
        this.api = 'http://localhost:8081/api/';
      }

      _createClass(MainService, [{
        key: "login",
        value: function login(bandName) {
          var _this2 = this;

          this.http.get("".concat(this.api, "band/allBand?bandName=").concat(bandName)).subscribe(function (res) {
            _this2.band = res.band;
            _this2.songs = res.songs;

            _this2.router.navigateByUrl('band');

            console.log(res);
          });
        }
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(songID) {
          this.currentSong = this.songs.filter(function (v) {
            return v._id === songID;
          });
        }
      }, {
        key: "addNewPlaylist",
        value: function addNewPlaylist(playlist) {
          var _this3 = this;

          this.http.post(this.api + 'band/add/playlist', playlist).subscribe(function (res) {
            _this3.band.playlist.push(playlist);
          });
        }
      }, {
        key: "addNewSongToPlaylist",
        value: function addNewSongToPlaylist(songToPlaylist) {
          var _this4 = this;

          this.http.post(this.api + 'band/add/songToPlaylist', songToPlaylist).subscribe(function (res) {
            _this4.band.playlist.push(songToPlaylist);
          });
        }
      }, {
        key: "addNewSong",
        value: function addNewSong(song) {
          var _this5 = this;

          this.http.post(this.api + 'band/add/song', song).subscribe(function (res) {
            _this5.band.playlist.push(song);
          });
        }
      }]);

      return MainService;
    }();

    MainService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MainService);
    /***/
  },

  /***/
  "./src/app/single-song/single-song.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/single-song/single-song.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSingleSongSingleSongComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-warning {\n  border-radius: 0;\n  font-size: 35px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXNvbmcvRTpcXHplc3DDs8WCXFx6Ymlvci1waW9zZW5lay9zcmNcXGFwcFxcc2luZ2xlLXNvbmdcXHNpbmdsZS1zb25nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtc29uZy9zaW5nbGUtc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1zb25nL3NpbmdsZS1zb25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13YXJuaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuYnRuLXdhcm5pbmcge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/single-song/single-song.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/single-song/single-song.component.ts ***!
    \******************************************************/

  /*! exports provided: SingleSongComponent */

  /***/
  function srcAppSingleSongSingleSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleSongComponent", function () {
      return SingleSongComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SingleSongComponent = /*#__PURE__*/function () {
      function SingleSongComponent(main, router) {
        _classCallCheck(this, SingleSongComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(SingleSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToPlaylist",
        value: function backToPlaylist() {
          this.router.navigateByUrl('band/current-playlist');
        }
      }, {
        key: "nextSong",
        value: function nextSong() {
          var id = this.main.currentPlaylist.songs[this.main.currentSong.iterator];
          this.main.currentSong = this.main.songs.filter(function (v) {
            return v._id === id;
          })[0];
        }
      }]);

      return SingleSongComponent;
    }();

    SingleSongComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SingleSongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-song',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-song.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/single-song/single-song.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-song.component.scss */
      "./src/app/single-song/single-song.component.scss"))["default"]]
    })], SingleSongComponent);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.scss":
  /*!************************************************!*\
    !*** ./src/app/welcome/welcome.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcomeForm {\n  padding-top: 100px;\n}\n\n.cover {\n  background: #f12711;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f5af19, #f12711);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9FOlxcemVzcMOzxYJcXHpiaW9yLXBpb3NlbmVrL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQUE7RUFBeUQscUVBQUE7QUNLM0QiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZUZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4uY292ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMTI3MTE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWFmMTksICNmMTI3MTEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWFmMTksICNmMTI3MTEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuIiwiLndlbGNvbWVGb3JtIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uY292ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjEyNzExO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(main) {
        _classCallCheck(this, WelcomeComponent);

        this.main = main;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          bandName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('zespół420', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          if (this.loginForm.valid) {
            this.main.login(this.loginForm.controls.bandName.value);
          }
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ctorParameters = function () {
      return [{
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.scss */
      "./src/app/welcome/welcome.component.scss"))["default"]]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\zespół\zbior-piosenek\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map