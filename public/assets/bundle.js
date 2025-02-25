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

/***/ "./src/browser/main.js":
/*!*****************************!*\
  !*** ./src/browser/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userAuth___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAuth  */ \"./src/browser/userAuth .js\");\n\nvar userAuth = new _userAuth___WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nuserAuth.login();\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/main.js?");

/***/ }),

/***/ "./src/browser/userAuth .js":
/*!**********************************!*\
  !*** ./src/browser/userAuth .js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserAuth)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _readOnlyError(r) { throw new TypeError('\"' + r + '\" is read-only'); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _UserAuth_brand = /*#__PURE__*/new WeakSet();\nvar UserAuth = /*#__PURE__*/function () {\n  function UserAuth() {\n    _classCallCheck(this, UserAuth);\n    _classPrivateMethodInitSpec(this, _UserAuth_brand);\n    this.user;\n  }\n  return _createClass(UserAuth, [{\n    key: \"login\",\n    value: function login() {\n      var _this = this;\n      var login = document.querySelector('section.login');\n      var form = document.querySelector('form.login');\n      var createAccount = document.querySelector('#linkLogin');\n      login.style.visibility = 'visible';\n      form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var name = e.target[0].value;\n        var password = e.target[1].value;\n        var url;\n        if (_assertClassBrand(_UserAuth_brand, _this, _isEmail).call(_this, name)) url = '/api/getUserByEmail';else url = '/api/getUserByUsername';\n        fetch(url, {\n          method: 'post',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            name: name,\n            password: password\n          })\n        }).then(function (response) {\n          if (!response.ok) {\n            return response.json().then(function (err) {\n              _assertClassBrand(_UserAuth_brand, _this, _showError).call(_this, err.error, 'login');\n            });\n          }\n          return response.json();\n        }).then(function (user) {\n          _this.user = user;\n          console.log(_this.user);\n          login.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      });\n      createAccount.addEventListener('click', function (e) {\n        login.style.visibility = 'hidden';\n        _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n        _this.register();\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register() {\n      var _this2 = this;\n      var register = document.querySelector('section.register');\n      var form = document.querySelector('form.register');\n      var login = document.querySelector('#linkRegister');\n      register.style.visibility = 'visible';\n      form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        if (!(e.target[4].value === e.target[5].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Passwörter stimmen nicht überein', 'register');\n        if (!_assertClassBrand(_UserAuth_brand, _this2, _isEmail).call(_this2, e.target[3].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Email ist nicht gültig', 'register');\n        var user = {\n          first_name: e.target[0].value,\n          last_name: e.target[1].value,\n          user_name: e.target[2].value,\n          email: e.target[3].value,\n          password: e.target[4].value\n        };\n        fetch('/api/createAccount', {\n          method: 'post',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(user)\n        }).then(function (response) {\n          if (!response.ok) {\n            return response.json().then(function (err) {\n              _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, err.error, 'register');\n            });\n          }\n          return response.json();\n        }).then(function (user) {\n          _this2.user = user;\n          console.log(_this2.user);\n          register.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      });\n      login.addEventListener('click', function (e) {\n        register.style.visibility = 'hidden';\n        _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n        _this2.login();\n      });\n    }\n  }]);\n}();\nfunction _showError(errMessage, location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.add('errorUserAuthShow');\n  error.textContent = errMessage;\n  throw new Error(errMessage);\n}\nfunction _hideError(location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.remove('errorUserAuthShow');\n  error.textContent = null;\n}\nfunction _isEmail(input) {\n  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(input);\n}\n\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/userAuth_.js?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/browser/main.js");
/******/ 	
/******/ })()
;