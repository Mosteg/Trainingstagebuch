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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAuth */ \"./src/browser/userAuth.js\");\n\nvar userAuth = new _userAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar initHeader = function initHeader() {\n  var userMenu = document.querySelector('.circle');\n  var userIcon = userMenu.querySelector('#userMenu');\n  var userHover = userMenu.querySelector('.click-area');\n  var userSelections = userMenu.querySelectorAll('.selection');\n  var heading = document.querySelector('header h1.title');\n  userMenu.addEventListener('mouseover', function (e) {\n    userIcon.classList.add('active');\n    userHover.classList.add('active');\n  });\n  userMenu.addEventListener('mouseout', function (e) {\n    userIcon.classList.remove('active');\n    userHover.classList.remove('active');\n  });\n  userSelections[0].addEventListener('click', function (e) {\n    return userAuth.logout();\n  });\n  userSelections[1].addEventListener('click', function (e) {\n    return window.open('einstellungen.html', '_self');\n  });\n  heading.addEventListener('click', function (e) {\n    return window.open('index.html', '_self');\n  });\n};\ninitHeader();\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/header.js?");

/***/ }),

/***/ "./src/browser/loader.js":
/*!*******************************!*\
  !*** ./src/browser/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loader)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Loader = /*#__PURE__*/function () {\n  function Loader() {\n    _classCallCheck(this, Loader);\n  }\n  return _createClass(Loader, [{\n    key: \"loadWorkouts\",\n    value: function loadWorkouts() {\n      var url = '/api/getWorkoutsByUserId';\n      return fetch(url, {\n        method: 'get',\n        credentials: 'include'\n      }).then(function (response) {\n        return response.json();\n      })[\"catch\"](function (err) {\n        return console.error(err);\n      });\n    }\n  }, {\n    key: \"loadExercises\",\n    value: function loadExercises() {\n      var sql = '/api/getExercisesList';\n      return fetch(sql, {\n        method: 'get',\n        credentials: 'include'\n      }).then(function (response) {\n        return response.json();\n      })[\"catch\"](function (err) {\n        return console.error(err);\n      });\n    }\n  }, {\n    key: \"loadChallenge\",\n    value: function loadChallenge() {\n      var timeframe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'thisWeek';\n      var url = \"/api/getChallengeDataByUserId?timeframe=\".concat(timeframe);\n      return fetch(url, {\n        method: 'get',\n        credentials: 'include'\n      }).then(function (response) {\n        return response.json();\n      })[\"catch\"](function (err) {\n        return console.error(err);\n      });\n    }\n  }, {\n    key: \"refreshData\",\n    value: function refreshData() {}\n  }]);\n}();\n\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/loader.js?");

/***/ }),

/***/ "./src/browser/main.js":
/*!*****************************!*\
  !*** ./src/browser/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAuth */ \"./src/browser/userAuth.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ \"./src/browser/loader.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/browser/render.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/browser/header.js\");\n\n\n\n\nvar userAuth = new _userAuth__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar loader = new _loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar render = new _render__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n//workout.js und exercise.js aus public verschieben damit diese auch komprimiert werden!!!\n\nuserAuth.authenticate().then(function () {\n  return loader.loadChallenge('every');\n}).then(function (workouts) {\n  console.log(workouts);\n  render.renderStatistic(workouts);\n  main();\n})[\"catch\"](function (err) {\n  console.log(err);\n  //hier error dem nutzer anzeigen\n});\n\n// loader.loadExercises().then(exercises => console.log(exercises));\n\nvar main = function main() {\n  console.log('main');\n  var addWorkout = document.querySelector('form.add-workout');\n  addWorkout.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var exercises = [];\n    Array.from(e.target.elements).forEach(function (element) {\n      if (element.value !== '' && element.value !== '+') exercises.push([element.id, element.value]);\n    });\n    var url = '/api/createWorkout';\n    fetch(url, {\n      method: 'post',\n      credentials: 'include',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        exercises: exercises\n      })\n    }).then(function (response) {\n      if (!response.ok) {\n        console.error('Server error trying to ');\n        //hier error dem nutzer anzeigen\n      } else {\n        console.log('workout hinzugefügt');\n        addWorkout.reset();\n        loader.refreshData();\n      }\n    });\n  });\n};\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/main.js?");

/***/ }),

/***/ "./src/browser/render.js":
/*!*******************************!*\
  !*** ./src/browser/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Render)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _Render_brand = /*#__PURE__*/new WeakSet();\nvar Render = /*#__PURE__*/function () {\n  function Render() {\n    _classCallCheck(this, Render);\n    _classPrivateMethodInitSpec(this, _Render_brand);\n  }\n  return _createClass(Render, [{\n    key: \"renderStatistic\",\n    value: function renderStatistic(workouts) {\n      var userStats = document.querySelector('section.userStats');\n      console.log(userStats);\n      var anzTeilnehmer = workouts.length - 1;\n      var exerciseOverview = \"<div class=\\\"user \\\">\\n                <div class=\\\"profile\\\"></div>\\n                <div class=\\\"stats\\\">\\n                    <div class=\\\"image-container\\\"><img src=\\\"/data/Icon-pushup.jpg\\\" alt=\\\"\\\"></div>\\n                    <div class=\\\"image-container\\\"><img src=\\\"/data/Icon-upllup.jpg\\\" alt=\\\"\\\"></div>\\n                    <div class=\\\"image-container\\\"><img src=\\\"/data/Icon-situp.jpg\\\" alt=\\\"\\\"></div>\\n                </div>\\n            </div>\";\n      userStats.innerHTML += exerciseOverview;\n      for (var i = 1; i <= anzTeilnehmer; i++) {\n        var data = {\n          user_id: workouts[i].id,\n          exercise1: workouts[i].exercise1,\n          exercise2: workouts[i].exercise2,\n          exercise3: workouts[i].exercise3\n        };\n        var userStat = _assertClassBrand(_Render_brand, this, _createUserFild).call(this, data);\n        userStats.innerHTML += userStat;\n      }\n      var addExercise = \"<div class=\\\"add-workout\\\">\\n                <form class=\\\"add-workout\\\">\\n                    <div class=\\\"add\\\"><label for=\\\"22\\\">Push-Ups:</label><input type=\\\"number\\\" placeholder=\\\"Push-Ups\\\" id=\\\"22\\\" name=\\\"Push-Ups\\\"></div>\\n                    <div class=\\\"add\\\"><label for=\\\"23\\\">Pull-Ups:</label><input type=\\\"number\\\" placeholder=\\\"Pull-Ups\\\" id=\\\"23\\\" name=\\\"Pull-Ups\\\"></div>\\n                    <div class=\\\"add\\\"><label for=\\\"27\\\">Sit-Ups:</label><input type=\\\"number\\\" placeholder=\\\"Sit-Ups\\\" id=\\\"27\\\" name=\\\"Sit-Ups\\\"></div>\\n                    <input type=\\\"submit\\\" value=\\\"+\\\">\\n                </form>\\n            </div>\";\n      userStats.innerHTML += addExercise;\n\n      //gewinner ermitlung\n      var points;\n      for (var _i = 0; _i < 3; _i++) {\n        var max = workouts[1];\n        console.log(max);\n        for (var _i2 = 2; _i2 <= anzTeilnehmer; _i2++) {}\n      }\n    }\n  }]);\n}();\nfunction _createUserFild(data) {\n  var userFild = \"<div class=\\\"user\\\" id=\\\"user_id:\".concat(data.user_id, \"\\\">\\n            <div class=\\\"profile\\\">\\n                <div class=\\\"image-container winning\\\">\\n                    <img src=\\\"data/WIN_20250118_11_30_15_Pro.jpg\\\" alt=\\\"\\\">\\n                </div>\\n                <p>\").concat(data.user_id, \"</p>\\n            </div>\\n            <div class=\\\"stats\\\">\\n                <p>\").concat(data.exercise1, \"</p>\\n                <p>\").concat(data.exercise2, \"</p>\\n                <p>\").concat(data.exercise3, \"</p>\\n            </div>\\n        </div>\");\n  return userFild;\n}\n\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/render.js?");

/***/ }),

/***/ "./src/browser/userAuth.js":
/*!*********************************!*\
  !*** ./src/browser/userAuth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserAuth)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _readOnlyError(r) { throw new TypeError('\"' + r + '\" is read-only'); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _UserAuth_brand = /*#__PURE__*/new WeakSet();\nvar UserAuth = /*#__PURE__*/function () {\n  function UserAuth() {\n    _classCallCheck(this, UserAuth);\n    _classPrivateMethodInitSpec(this, _UserAuth_brand);\n  }\n  return _createClass(UserAuth, [{\n    key: \"login\",\n    value: function login() {\n      var _this = this;\n      var login = document.querySelector('section.login');\n      var form = document.querySelector('form.login');\n      var createAccount = document.querySelector('#linkLogin');\n      login.style.visibility = 'visible';\n      return new Promise(function (resolve) {\n        form.addEventListener('submit', function (e) {\n          e.preventDefault();\n          var name = e.target[0].value;\n          var password = e.target[1].value;\n          var url = '/api/login';\n          fetch(url, {\n            method: 'post',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n              name: name,\n              password: password\n            })\n          }).then(function (response) {\n            if (!response.ok) {\n              return response.json().then(function (err) {\n                _assertClassBrand(_UserAuth_brand, _this, _showError).call(_this, err.error, 'login');\n              });\n            }\n            return response.json();\n          }).then(function (response) {\n            console.log(response.message);\n            login.style.visibility = 'hidden';\n            _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n            resolve();\n          })[\"catch\"](function (err) {\n            return console.error(err);\n          });\n        });\n        createAccount.addEventListener('click', function (e) {\n          login.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this, _hideError).call(_this, 'login');\n          _this.register().then(function () {\n            return resolve();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register() {\n      var _this2 = this;\n      var register = document.querySelector('section.register');\n      var form = document.querySelector('form.register');\n      var login = document.querySelector('#linkRegister');\n      register.style.visibility = 'visible';\n      return new Promise(function (resolve) {\n        form.addEventListener('submit', function (e) {\n          e.preventDefault();\n          if (!(e.target[4].value === e.target[5].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Passwörter stimmen nicht überein', 'register');\n          if (!_assertClassBrand(_UserAuth_brand, _this2, _isEmail).call(_this2, e.target[3].value)) return _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, 'Email ist nicht gültig', 'register');\n          var user = {\n            first_name: e.target[0].value,\n            last_name: e.target[1].value,\n            user_name: e.target[2].value,\n            email: e.target[3].value,\n            password: e.target[4].value\n          };\n          fetch('/api/createAccount', {\n            method: 'post',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n          }).then(function (response) {\n            if (!response.ok) {\n              return response.json().then(function (err) {\n                _assertClassBrand(_UserAuth_brand, _this2, _showError).call(_this2, err.error, 'register');\n              });\n            }\n            return response.json();\n          }).then(function (response) {\n            console.log(response.message);\n            register.style.visibility = 'hidden';\n            _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n            resolve();\n          })[\"catch\"](function (err) {\n            return console.error(err);\n          });\n        });\n        return login.addEventListener('click', function (e) {\n          register.style.visibility = 'hidden';\n          _assertClassBrand(_UserAuth_brand, _this2, _hideError).call(_this2, 'register');\n          return _this2.login().then(function () {\n            return resolve();\n          });\n        });\n      });\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      return new Promise(function (resolve) {\n        fetch('/api/logout', {\n          method: 'post',\n          credentials: 'include'\n        }).then(function (response) {\n          if (!response.ok) {\n            console.log('Logout fehlgeschlagen');\n          }\n          return response.json();\n        }).then(function (data) {\n          console.log(data.message);\n          location.reload();\n          resolve();\n        })[\"catch\"](function (err) {\n          return console.log(err);\n        });\n      });\n    }\n  }, {\n    key: \"authenticate\",\n    value: function authenticate() {\n      var _this3 = this;\n      return new Promise(function (resolve) {\n        fetch('/api/checkAuthStatus', {\n          method: 'post',\n          credentials: 'include'\n        }).then(function (response) {\n          if (!response.ok) {\n            response.json().then(function (err) {\n              return console.log(err.error);\n            });\n            return _this3.login();\n          } else {\n            response.json().then(function (data) {\n              return console.log(data.message);\n            });\n            resolve();\n          }\n        })[\"catch\"](function (err) {\n          console.log(err);\n          return _this3.login();\n        }).then(function () {\n          return resolve();\n        });\n      });\n    }\n  }]);\n}();\nfunction _showError(errMessage, location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.add('errorUserAuthShow');\n  error.textContent = errMessage;\n  throw new Error(errMessage);\n}\nfunction _hideError(location) {\n  var error;\n  if (location === 'login') error = document.querySelector('#errorLogin');else if (location === 'register') error = document.querySelector('#errorRegister');\n  error.classList.remove('errorUserAuthShow');\n  error.textContent = null;\n}\nfunction _isEmail(input) {\n  var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(input);\n}\n\n\n//# sourceURL=webpack://Trainingstagebuch/./src/browser/userAuth.js?");

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