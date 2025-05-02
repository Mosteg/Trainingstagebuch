/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser/header.js":
/*!*******************************!*\
  !*** ./src/browser/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAuth */ \"./src/browser/userAuth.js\");\n\nvar userAuth = new _userAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar initHeader = function initHeader() {\n  var userMenu = document.querySelector('.circle');\n  var userIcon = userMenu.querySelector('#userMenu');\n  var userHover = userMenu.querySelector('.click-area');\n  var userSelections = userMenu.querySelectorAll('.selection');\n  var heading = document.querySelector('header h1.title');\n  userMenu.addEventListener('mouseover', function (e) {\n    userIcon.classList.add('active');\n    userHover.classList.add('active');\n  });\n  userMenu.addEventListener('mouseout', function (e) {\n    userIcon.classList.remove('active');\n    userHover.classList.remove('active');\n  });\n  userSelections[0].addEventListener('click', function (e) {\n    return userAuth.logout();\n  });\n  userSelections[1].addEventListener('click', function (e) {\n    return window.open('einstellungen.html', '_self');\n  });\n  heading.addEventListener('click', function (e) {\n    return window.open('/', '_self');\n  });\n};\ninitHeader();\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/header.js?");

/***/ }),

/***/ "./src/browser/main.js":
/*!*****************************!*\
  !*** ./src/browser/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/browser/header.js\");\n/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userAuth */ \"./src/browser/userAuth.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = \"function\" == typeof Symbol ? Symbol : {}, i = o.iterator || \"@@iterator\", a = o.asyncIterator || \"@@asyncIterator\", u = o.toStringTag || \"@@toStringTag\"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, \"\"); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, \"_invoke\", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error(\"Generator is already running\"); if (4 === o) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = 3; var h = s(r, e, n); if (\"normal\" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } \"throw\" === h.type && (o = 4, n.method = \"throw\", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: \"normal\", arg: t.call(r, e) }; } catch (t) { return { type: \"throw\", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { [\"next\", \"throw\", \"return\"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if (\"throw\" !== c.type) { var h = c.arg, f = h.value; return f && \"object\" == _typeof(f) && n.call(f, \"__await\") ? r.resolve(f.__await).then(function (t) { e(\"next\", t, a, u); }, function (t) { e(\"throw\", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e(\"throw\", t, a, u); }); } u(c.arg); } var o; c(this, \"_invoke\", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, \"throw\" === n && r.i[\"return\"] && (e.method = \"return\", e.arg = t, d(r, e), \"throw\" === e.method) || \"return\" !== n && (e.method = \"throw\", e.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), f; var i = s(o, r.i, e.arg); if (\"throw\" === i.type) return e.method = \"throw\", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, \"return\" !== e.method && (e.method = \"next\", e.arg = t), e.delegate = null, f) : a : (e.method = \"throw\", e.arg = new TypeError(\"iterator result is not an object\"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = \"normal\", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if (\"function\" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, \"constructor\", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), r.isGeneratorFunction = function (t) { var r = \"function\" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || \"GeneratorFunction\" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, \"Generator\"), c(v, i, function () { return this; }), c(v, \"toString\", function () { return \"[object Generator]\"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) \"t\" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = \"throw\", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n(\"end\"), !1; if (!c && !h) throw Error(\"try statement without catch or finally\"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = \"next\", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && (\"break\" === t || \"continue\" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = \"next\", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, \"catch\": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if (\"throw\" === n.type) { var o = n.arg; m(e); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, \"next\" === this.method && (this.arg = t), f; } }, r; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n\nvar userAuth = new _userAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ninit().then(function () {\n  return main();\n});\nfunction init() {\n  return _init.apply(this, arguments);\n}\nfunction _init() {\n  _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return userAuth.authenticate();\n        case 2:\n          _context.t0 = document.body.dataset.page;\n          _context.next = _context.t0 === 'Startseite' ? 5 : _context.t0 === 'Challenge' ? 6 : _context.t0 === '404' ? 9 : 10;\n          break;\n        case 5:\n          return _context.abrupt(\"break\", 10);\n        case 6:\n          _context.next = 8;\n          return __webpack_require__.e(/*! import() */ \"src_browser_challenge_challengeMain_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./challenge/challengeMain */ \"./src/browser/challenge/challengeMain.js\"));\n        case 8:\n          return _context.abrupt(\"break\", 10);\n        case 9:\n          return _context.abrupt(\"break\", 10);\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _init.apply(this, arguments);\n}\nfunction main() {}\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/main.js?");

/***/ }),

/***/ "./src/browser/userAuth.js":
/*!*********************************!*\
  !*** ./src/browser/userAuth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserAuth)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _readOnlyError(r) { throw new TypeError('\"' + r + '\" is read-only'); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _UserAuth_brand = /*#__PURE__*/new WeakSet();\nvar UserAuth = /*#__PURE__*/function () {\n  function UserAuth() {\n    _classCallCheck(this, UserAuth);\n    _classPrivateMethodInitSpec(this, _UserAuth_brand);\n  }\n  return _createClass(UserAuth, [{\n    key: \"login\",\n    value: function login() {\n      var _this = this;\n      var login = document.querySelector('section.login');\n      var form = document.querySelector('form.login');\n      var createAccount = document.querySelector('#linkLogin');\n      login.style.visibility = 'visible';\n      return new Promise(function (resolve) {\n        form.addEventListener('submit', function (e) {\n          e.preventDefault();\n          var name = e.target[0].value;\n          var password = e.target[1].value;\n          var url = '/api/login';\n          fetch(url, {\n            method: 'post',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              name: name,\n              password: password\n            })\n          }).then(function (response) {\n            if (!response.ok) {\n              return response.json().then(function (err) {\n                _assertClassBrand(_UserAuth_brand, _this, _showError).call(_this, err.error, 'login');\n              });\n            }\n            return response.json();\n          }).then(function (response) {\n            console.log(response.message);\n            login.style.visibility = 'hidden';\n            _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n            resolve();\n          })[\"catch\"](function (err) {\n            return console.error(err);\n          });\n        });\n        createAccount.addEventListener('click', function (e) {\n          login.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n          _this.register().then(function () {\n            return resolve();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register() {\n      var _this2 = this;\n      var register = document.querySelector('section.register');\n      var form = document.querySelector('form.register');\n      var login = document.querySelector('#linkRegister');\n      register.style.visibility = 'visible';\n      return new Promise(function (resolve) {\n        form.addEventListener('submit', function (e) {\n          e.preventDefault();\n          if (!(e.target[4].value === e.target[5].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Passwörter stimmen nicht überein', 'register');\n          if (!_assertClassBrand(_UserAuth_brand, _this2, _isEmail).call(_this2, e.target[3].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Email ist nicht gültig', 'register');\n\n          //devault profile picture erstellen \n          var colors = ['red', 'blue', 'green', 'purple', 'orange', 'brown', 'gray', 'teal', 'navy', 'maroon', 'olive', 'darkgreen', 'darkblue', 'darkred', 'chocolate'];\n          var randomIndex = Math.floor(Math.random() * colors.length);\n          var color = colors[randomIndex];\n          var profilePictureText = e.target[2].value.slice(0, 2);\n          var profilePicture = \"<div style=\\\"background-color:\".concat(color, \";\\\" class=\\\"defaultProfilePicture\\\">\").concat(profilePictureText, \"</div>\");\n          var user = {\n            first_name: e.target[0].value,\n            last_name: e.target[1].value,\n            user_name: e.target[2].value,\n            email: e.target[3].value,\n            password: e.target[4].value,\n            profile_picture: profilePicture\n          };\n          fetch('/api/createAccount', {\n            method: 'post',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n          }).then(function (response) {\n            if (!response.ok) {\n              return response.json().then(function (err) {\n                _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, err.error, 'register');\n              });\n            }\n            return response.json();\n          }).then(function (response) {\n            console.log(response.message);\n            register.style.visibility = 'hidden';\n            _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n            resolve();\n          })[\"catch\"](function (err) {\n            return console.error(err);\n          });\n        });\n        return login.addEventListener('click', function (e) {\n          register.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n          return _this2.login().then(function () {\n            return resolve();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      return new Promise(function (resolve) {\n        fetch('/api/logout', {\n          method: 'post',\n          credentials: 'include'\n        }).then(function (response) {\n          if (!response.ok) {\n            console.log('Logout fehlgeschlagen');\n          }\n          return response.json();\n        }).then(function (data) {\n          console.log(data.message);\n          location.reload();\n          resolve();\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      });\n    }\n  }, {\n    key: \"authenticate\",\n    value: function authenticate() {\n      var _this3 = this;\n      return new Promise(function (resolve) {\n        fetch('/api/checkAuthStatus', {\n          method: 'post',\n          credentials: 'include'\n        }).then(function (response) {\n          if (!response.ok) {\n            response.json().then(function (err) {\n              return console.log(err.error);\n            });\n            return _this3.login();\n          } else {\n            response.json().then(function (data) {\n              return console.log(data.message);\n            });\n            resolve();\n          }\n        })[\"catch\"](function (err) {\n          console.log(err);\n          return _this3.login();\n        }).then(function () {\n          return resolve();\n        });\n      });\n    }\n  }]);\n}();\nfunction _showError(errMessage, location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.add('errorUserAuthShow');\n  error.textContent = errMessage;\n  throw new Error(errMessage);\n}\nfunction _hideError(location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.remove('errorUserAuthShow');\n  error.textContent = null;\n}\nfunction _isEmail(input) {\n  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(input);\n}\n\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/userAuth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Trainingstagebuch:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkTrainingstagebuch"] = self["webpackChunkTrainingstagebuch"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/browser/main.js");
/******/ 	
/******/ })()
;