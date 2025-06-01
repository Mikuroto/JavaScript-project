/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background-color: #f0f2f5;\n  color: #333;\n}\n\nh1 {\n  color: #333;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n#rooms-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.room-card {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  width: 280px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 250px;\n}\n.room-card.premium {\n  background-color: #e6f7ff;\n  border-color: #91d5ff;\n}\n.room-card .room-info {\n  flex-grow: 1;\n}\n.room-card .room-info span {\n  display: block;\n  margin-bottom: 8px;\n}\n.room-card .room-info .room-type {\n  font-weight: bold;\n}\n.room-card .room-info .premium-service {\n  color: #0056b3;\n  font-style: italic;\n}\n.room-card .status-available {\n  color: #28a745;\n  font-weight: bold;\n}\n.room-card .status-booked {\n  color: #ff8b94;\n  font-weight: bold;\n}\n.room-card .masked-card-info {\n  font-size: 0.9em;\n  color: #555;\n  margin-top: 5px;\n}\n.room-card button {\n  padding: 10px 15px;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: background-color 0.2s ease-in-out;\n}\n.room-card button.book-button {\n  background-color: #007bff;\n}\n.room-card button.cancel-button {\n  background-color: #dc3545;\n}\n.room-card button.reviews-button {\n  background-color: #6c757d;\n}\n.room-card button:hover {\n  opacity: 0.9;\n}\n\n#auth-container input {\n  margin-right: 10px;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n#auth-container button {\n  padding: 8px 15px;\n  margin-left: 5px;\n}\n#auth-container #authStatus.logged-in {\n  color: green;\n  font-weight: bold;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-project/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\nconst Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\r\nconst PremiumRoom = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\");\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\r\nconst UserManager = __webpack_require__(/*! ./modules/UserManager */ \"./src/modules/UserManager.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const hotel = new Hotel();\r\n    const ui = new UI();\r\n    const userManager = new UserManager();\r\n\r\n    const updateAuthUI = () => {\r\n        const authStatus = document.getElementById('authStatus');\r\n        const logoutButton = document.getElementById('logoutButton');\r\n        const loginButton = document.getElementById('loginButton');\r\n        const registerButton = document.getElementById('registerButton');\r\n        const usernameInput = document.getElementById('username');\r\n        const passwordInput = document.getElementById('password');\r\n\r\n        if (userManager.currentUser) {\r\n            authStatus.textContent = `Logged in as: ${userManager.currentUser.username}`;\r\n            authStatus.style.color = 'green';\r\n            logoutButton.style.display = 'inline';\r\n            loginButton.style.display = 'none';\r\n            registerButton.style.display = 'none';\r\n            usernameInput.style.display = 'none';\r\n            passwordInput.style.display = 'none';\r\n        } else {\r\n            authStatus.textContent = 'Not logged in.';\r\n            authStatus.style.color = 'black';\r\n            logoutButton.style.display = 'none';\r\n            loginButton.style.display = 'inline';\r\n            registerButton.style.display = 'inline';\r\n            usernameInput.style.display = 'inline';\r\n            passwordInput.style.display = 'inline';\r\n            usernameInput.value = '';\r\n            passwordInput.value = '';\r\n        }\r\n    };\r\n\r\n    const loadRooms = () => {\r\n        const storedRooms = JSON.parse(localStorage.getItem('hotelRooms'));\r\n        if (storedRooms && storedRooms.length > 0) {\r\n            storedRooms.forEach(roomData => {\r\n                let room;\r\n                if (roomData.premiumService) {\r\n                    room = new PremiumRoom(roomData.roomNumber, roomData.type, roomData.premiumService);\r\n                } else {\r\n                    room = new Room(roomData.roomNumber, roomData.type);\r\n                }\r\n                room.isAvailable = roomData.isAvailable;\r\n                if (roomData.creditCardNumber) {\r\n                    room.setCreditCardNumber(roomData.creditCardNumber);\r\n                }\r\n                room.bookedBy = roomData.bookedBy || null;\r\n                hotel.addRoom(room);\r\n            });\r\n        } else {\r\n            hotel.addRoom(new Room('101', 'single'));\r\n            hotel.addRoom(new Room('102', 'double'));\r\n            hotel.addRoom(new PremiumRoom('103', 'suite'));\r\n            hotel.addRoom(new Room('201', 'single'));\r\n            saveRooms();\r\n        }\r\n    };\r\n\r\n    const saveRooms = () => {\r\n        localStorage.setItem('hotelRooms', JSON.stringify(hotel.rooms.map(room => room.toJSON())));\r\n    };\r\n\r\n    const handleRegister = () => {\r\n        const username = document.getElementById('username').value;\r\n        const password = document.getElementById('password').value;\r\n        try {\r\n            userManager.register(username, password);\r\n            updateAuthUI();\r\n            ui.renderRooms(hotel.rooms, userManager.currentUser);\r\n        } catch (error) {\r\n            alert(error.message);\r\n        }\r\n    };\r\n\r\n    const handleLogin = () => {\r\n        const username = document.getElementById('username').value;\r\n        const password = document.getElementById('password').value;\r\n        try {\r\n            userManager.login(username, password);\r\n            updateAuthUI();\r\n            ui.renderRooms(hotel.rooms, userManager.currentUser);\r\n        } catch (error) {\r\n            alert(error.message);\r\n        }\r\n    };\r\n\r\n    const handleLogout = () => {\r\n        userManager.logout();\r\n        updateAuthUI();\r\n        ui.renderRooms(hotel.rooms, userManager.currentUser);\r\n    };\r\n\r\n    document.getElementById('registerButton').addEventListener('click', handleRegister);\r\n    document.getElementById('loginButton').addEventListener('click', handleLogin);\r\n    document.getElementById('logoutButton').addEventListener('click', handleLogout);\r\n\r\n    loadRooms();\r\n    updateAuthUI(); \r\n    ui.init(hotel, saveRooms, userManager);\r\n});\r\n\n\n//# sourceURL=webpack://javascript-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module) => {

eval("class Hotel {\r\n    constructor() {\r\n        this.rooms = [];\r\n    }\r\n\r\n    addRoom(room) {\r\n        this.rooms.push(room);\r\n    }\r\n}\r\n\r\nmodule.exports = Hotel;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/HotelAPI.js":
/*!*********************************!*\
  !*** ./src/modules/HotelAPI.js ***!
  \*********************************/
/***/ ((module) => {

eval("class HotelAPI {\r\n    static async fetchReviews() {\r\n        try {\r\n            const res = await fetch(\"https://jsonplaceholder.typicode.com/comments?postId=1\");\r\n            if (!res.ok) {\r\n                throw new Error(`HTTP error! status: ${res.status}`);\r\n            }\r\n            return await res.json();\r\n        } catch (error) {\r\n            console.error(\"Could not fetch reviews:\", error);\r\n            return [];\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = HotelAPI;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/HotelAPI.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\r\n\r\nclass PremiumRoom extends Room {\r\n    constructor(roomNumber, type, premiumService = \"Free Spa\") {\r\n        super(roomNumber, type);\r\n        this.premiumService = premiumService;\r\n    }\r\n\r\n    toJSON() {\r\n        return {\r\n            ...super.toJSON(),\r\n            premiumService: this.premiumService\r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports = PremiumRoom;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Room {\r\n    #creditCardNumber;\r\n\r\n    constructor(roomNumber, type) {\r\n        this.roomNumber = roomNumber;\r\n        this.type = type;\r\n        this.isAvailable = true;\r\n        this.#creditCardNumber = null;\r\n        this.bookedBy = null; // Add bookedBy property\r\n    }\r\n\r\n    book(username) { // Modify book to accept username\r\n        this.isAvailable = false;\r\n        this.bookedBy = username; // Set bookedBy\r\n    }\r\n\r\n    cancelBooking() {\r\n        this.isAvailable = true;\r\n        this.#creditCardNumber = null;\r\n        this.bookedBy = null; // Clear bookedBy\r\n    }\r\n\r\n    setCreditCardNumber(number) {\r\n        if (typeof number === 'string' && number.length === 16 && /^\\d+$/.test(number)) {\r\n            this.#creditCardNumber = number;\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    getMaskedCardNumber() {\r\n        if (this.#creditCardNumber) {\r\n            return `**** **** **** ${this.#creditCardNumber.slice(-4)}`;\r\n        }\r\n        return null;\r\n    }\r\n\r\n    toJSON() {\r\n        return {\r\n            roomNumber: this.roomNumber,\r\n            type: this.type,\r\n            isAvailable: this.isAvailable,\r\n            creditCardNumber: this.#creditCardNumber,\r\n            bookedBy: this.bookedBy // Include bookedBy in toJSON\r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports = Room;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("class UI {\r\n    constructor() {\r\n        this.saveRoomsCallback = null;\r\n        this.userManager = null;\r\n    }\r\n\r\n    _configureButton(button, isAvailable) {\r\n        button.textContent = isAvailable ? 'Book' : 'Cancel';\r\n        button.dataset.action = isAvailable ? 'book' : 'cancel';\r\n        button.classList.toggle('cancel', !isAvailable);\r\n        button.classList.remove('book-button', 'cancel-button');\r\n        button.classList.add(isAvailable ? 'book-button' : 'cancel-button');\r\n    }\r\n\r\n    _updateStatusSpan(statusSpan, isAvailable, bookedBy = null) {\r\n        if (statusSpan) {\r\n            statusSpan.className = isAvailable ? 'status-available' : 'status-booked';\r\n            statusSpan.textContent = isAvailable ? 'Available' : (bookedBy ? `Booked by ${bookedBy}` : 'Booked');\r\n        }\r\n    }\r\n\r\n    _createRoomCardElement(room) {\r\n        const roomCard = document.createElement('div');\r\n        roomCard.classList.add('room-card');\r\n        if (room.premiumService) {\r\n            roomCard.classList.add('premium');\r\n        }\r\n        if (!room.isAvailable) {\r\n            roomCard.classList.add('booked');\r\n        }\r\n\r\n        const roomInfoDiv = document.createElement('div');\r\n        roomInfoDiv.classList.add('room-info');\r\n\r\n        const typeSpan = document.createElement('span');\r\n        typeSpan.classList.add('room-type');\r\n        let roomDisplayName = `Room ${room.roomNumber} (${room.type})`;\r\n        if (room.premiumService) {\r\n            roomDisplayName = `Room ${room.roomNumber} (Deluxe ${room.type})`;\r\n        }\r\n        typeSpan.textContent = roomDisplayName;\r\n        roomInfoDiv.appendChild(typeSpan);\r\n\r\n        if (room.premiumService) {\r\n            const premiumSpan = document.createElement('span');\r\n            premiumSpan.classList.add('premium-service');\r\n            premiumSpan.textContent = room.premiumService;\r\n            roomInfoDiv.appendChild(premiumSpan);\r\n        }\r\n\r\n        const statusSpan = document.createElement('span');\r\n        this._updateStatusSpan(statusSpan, room.isAvailable, room.bookedBy);\r\n        roomInfoDiv.appendChild(statusSpan);\r\n\r\n        if (!room.isAvailable && room.getMaskedCardNumber()) {\r\n            const cardInfoSpan = document.createElement('span');\r\n            cardInfoSpan.classList.add('masked-card-info');\r\n            cardInfoSpan.textContent = 'Card: ' + room.getMaskedCardNumber();\r\n            roomInfoDiv.appendChild(cardInfoSpan);\r\n        }\r\n        \r\n        roomCard.appendChild(roomInfoDiv);\r\n\r\n        const bookingButton = document.createElement('button');\r\n        bookingButton.dataset.roomNumber = room.roomNumber;\r\n        this._configureButton(bookingButton, room.isAvailable); \r\n        roomCard.appendChild(bookingButton);\r\n\r\n        const reviewsButton = document.createElement('button');\r\n        reviewsButton.textContent = 'Load Reviews';\r\n        reviewsButton.dataset.roomNumber = room.roomNumber;\r\n        reviewsButton.classList.add('reviews-button');\r\n        roomCard.appendChild(reviewsButton);\r\n\r\n        const reviewsSection = document.createElement('div');\r\n        reviewsSection.classList.add('reviews-section');\r\n        reviewsSection.style.display = 'none';\r\n        roomCard.appendChild(reviewsSection);\r\n\r\n        return roomCard;\r\n    }\r\n\r\n    renderRooms(rooms, currentUser) { \r\n        const roomsContainer = document.getElementById('rooms-container');\r\n        roomsContainer.innerHTML = '';\r\n        rooms.forEach(room => {\r\n            const roomCardElement = this._createRoomCardElement(room);\r\n            roomsContainer.appendChild(roomCardElement);\r\n        });\r\n    }\r\n\r\n    updateRoomStatus(roomNumber, isAvailable, maskedCardNumber = null, bookedBy = null) {\r\n        const roomCard = document.querySelector(`.room-card button[data-room-number=\"${roomNumber}\"]`)?.closest('.room-card');\r\n\r\n        if (roomCard) {\r\n            roomCard.classList.toggle('booked', !isAvailable);\r\n            const statusSpan = roomCard.querySelector('.room-info span[class^=\"status-\"]'); \r\n            this._updateStatusSpan(statusSpan, isAvailable, bookedBy);\r\n            \r\n            const bookingButton = roomCard.querySelector('button[data-action]');\r\n            this._configureButton(bookingButton, isAvailable);\r\n\r\n            let cardInfoSpan = roomCard.querySelector('.masked-card-info');\r\n            if (isAvailable || !maskedCardNumber) {\r\n                if (cardInfoSpan) {\r\n                    cardInfoSpan.remove();\r\n                }\r\n            } else {\r\n                if (!cardInfoSpan) {\r\n                    cardInfoSpan = document.createElement('span');\r\n                    cardInfoSpan.classList.add('masked-card-info');\r\n                    const roomInfoDiv = roomCard.querySelector('.room-info');\r\n                    if (roomInfoDiv) {\r\n                         roomInfoDiv.appendChild(cardInfoSpan);\r\n                    }\r\n                }\r\n                cardInfoSpan.textContent = 'Card: ' + maskedCardNumber;\r\n            }\r\n        }\r\n    }\r\n\r\n    async _handleLoadReviews(roomNumber, reviewsButton) {\r\n        const roomCard = reviewsButton.closest('.room-card');\r\n        const reviewsSection = roomCard.querySelector('.reviews-section');\r\n\r\n        if (reviewsSection.style.display === 'block' && reviewsSection.innerHTML !== '') {\r\n            reviewsSection.style.display = 'none';\r\n            reviewsSection.innerHTML = '';\r\n            reviewsButton.textContent = 'Load Reviews';\r\n            return;\r\n        }\r\n\r\n        reviewsButton.textContent = 'Loading...';\r\n        reviewsButton.disabled = true;\r\n\r\n        try {\r\n            const HotelAPI = __webpack_require__(/*! ./HotelAPI */ \"./src/modules/HotelAPI.js\"); \r\n            const reviews = await HotelAPI.fetchReviews(); \r\n            reviewsSection.innerHTML = '';\r\n\r\n            if (reviews && reviews.length > 0) {\r\n                const randomReviews = reviews.sort(() => 0.5 - Math.random()).slice(0, 3);\r\n                randomReviews.forEach(review => {\r\n                    const reviewElement = document.createElement('p');\r\n                    reviewElement.textContent = review.name; \r\n                    reviewsSection.appendChild(reviewElement);\r\n                });\r\n            } else {\r\n                reviewsSection.textContent = 'No reviews available or failed to load.';\r\n            }\r\n        } catch (error) {\r\n            console.error(\"Error displaying reviews:\", error);\r\n            reviewsSection.textContent = 'Failed to load reviews.';\r\n        }\r\n        reviewsSection.style.display = 'block';\r\n        reviewsButton.textContent = 'Hide Reviews';\r\n        reviewsButton.disabled = false;\r\n    }\r\n\r\n    init(hotel, saveRoomsCallback, userManager) {\r\n        this.saveRoomsCallback = saveRoomsCallback; \r\n        this.userManager = userManager;\r\n        this.renderRooms(hotel.rooms, this.userManager.currentUser);\r\n\r\n        const roomsContainer = document.getElementById('rooms-container');\r\n        roomsContainer.addEventListener('click', async event => {\r\n            const target = event.target;\r\n            if (target.tagName === 'BUTTON') {\r\n                const roomNumberStr = target.dataset.roomNumber;\r\n                const action = target.dataset.action;\r\n                const room = hotel.rooms.find(r => r.roomNumber === roomNumberStr);\r\n\r\n                if (target.classList.contains('reviews-button')) {\r\n                    await this._handleLoadReviews(roomNumberStr, target);\r\n                    return;\r\n                }\r\n\r\n                if (room) {\r\n                    if (action === 'book' && room.isAvailable) {\r\n                        if (!this.userManager.currentUser) {\r\n                            alert('Please log in or register to book a room.');\r\n                            return;\r\n                        }\r\n                        const cardNumber = prompt('Please enter your 16-digit credit card number:');\r\n                        if (cardNumber && room.setCreditCardNumber(cardNumber)) {\r\n                            room.book(this.userManager.currentUser.username);\r\n                            this.updateRoomStatus(roomNumberStr, false, room.getMaskedCardNumber(), room.bookedBy);\r\n                            alert(`Room booked by ${room.bookedBy}! Card: ${room.getMaskedCardNumber()}`);\r\n                        } else {\r\n                            alert('Invalid credit card number. Booking failed.');\r\n                            return;\r\n                        }\r\n                    } else if (action === 'cancel' && !room.isAvailable) {\r\n                        if (!this.userManager.currentUser || room.bookedBy !== this.userManager.currentUser.username) {\r\n                            alert('You can only cancel your own bookings.');\r\n                            return;\r\n                        }\r\n                        room.cancelBooking();\r\n                        this.updateRoomStatus(roomNumberStr, true, null, null);\r\n                        alert('Booking cancelled for room ' + roomNumberStr);\r\n                    }\r\n                    if (this.saveRoomsCallback) {\r\n                        this.saveRoomsCallback(); \r\n                    }\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = UI;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((module) => {

eval("class User {\r\n    #password;\r\n\r\n    constructor(username, password) {\r\n        this.username = username;\r\n        this.setPassword(password);\r\n    }\r\n\r\n    setPassword(password) {\r\n        if (password.length < 6) {\r\n            throw new Error('Password must be at least 6 characters long.');\r\n        }\r\n        this.#password = password;\r\n    }\r\n\r\n    validatePassword(password) {\r\n        return this.#password === password;\r\n    }\r\n\r\n    toJSON() {\r\n        return {\r\n            username: this.username,\r\n            password: this.#password \r\n        };\r\n    }\r\n}\r\n\r\nmodule.exports = User;\n\n//# sourceURL=webpack://javascript-project/./src/modules/User.js?");

/***/ }),

/***/ "./src/modules/UserManager.js":
/*!************************************!*\
  !*** ./src/modules/UserManager.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const User = __webpack_require__(/*! ./User */ \"./src/modules/User.js\");\r\n\r\nclass UserManager {\r\n    constructor() {\r\n        this.users = this.loadUsers();\r\n        this.currentUser = null;\r\n    }\r\n\r\n    register(username, password) {\r\n        if (this.users.find(user => user.username === username)) {\r\n            throw new Error('User already exists.');\r\n        }\r\n        const user = new User(username, password);\r\n        this.users.push(user);\r\n        this.saveUsers();\r\n        this.currentUser = user; // Set currentUser directly\r\n        return user;\r\n    }\r\n\r\n    login(username, password) {\r\n        const user = this.users.find(user => user.username === username);\r\n        if (user && user.validatePassword(password)) {\r\n            this.currentUser = user;\r\n            return user;\r\n        }\r\n        throw new Error('Invalid username or password.');\r\n    }\r\n\r\n    logout() {\r\n        this.currentUser = null;\r\n    }\r\n\r\n    saveUsers() {\r\n        localStorage.setItem('users', JSON.stringify(this.users.map(user => user.toJSON())));\r\n    }\r\n\r\n    loadUsers() {\r\n        const usersData = localStorage.getItem('users');\r\n        if (usersData) {\r\n            return JSON.parse(usersData).map(userData => {\r\n                const user = new User(userData.username, '123456'); \r\n                user.setPassword(userData.password); \r\n                return user;\r\n            });\r\n        }\r\n        return [];\r\n    }\r\n}\r\n\r\nmodule.exports = UserManager;\n\n//# sourceURL=webpack://javascript-project/./src/modules/UserManager.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-project/./src/style.scss?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;