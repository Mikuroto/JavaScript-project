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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const hotel = new Hotel();\r\n\r\n    hotel.addRoom(new Room('101', 'single'));\r\n    hotel.addRoom(new Room('102', 'double'));\r\n    hotel.addRoom(new Room('103', 'suite'));\r\n    hotel.addRoom(new Room('201', 'single'));\r\n\r\n    const ui = new UI();\r\n    ui.init(hotel);\r\n});\r\n\n\n//# sourceURL=webpack://javascript-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module) => {

eval("function Hotel() {\r\n    this.rooms = [];\r\n}\r\n\r\nHotel.prototype.addRoom = function(room) {\r\n    this.rooms.push(room);\r\n};\r\n\r\nHotel.prototype.getAvailableRooms = function() {\r\n    return this.rooms.filter(function(room) {\r\n        return room.isAvailable;\r\n    });\r\n};\r\n\r\nmodule.exports = Hotel;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module) => {

eval("function Room(roomNumber, type) {\r\n    this.roomNumber = roomNumber;\r\n    this.type = type;\r\n    this.isAvailable = true;\r\n}\r\n\r\nRoom.prototype.book = function() {\r\n    this.isAvailable = false;\r\n};\r\n\r\nRoom.prototype.cancelBooking = function() {\r\n    this.isAvailable = true;\r\n};\r\n\r\nmodule.exports = Room;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module) => {

eval("function UI() {}\r\n\r\n// Helper function to configure button state\r\nUI.prototype._configureButton = function(button, isAvailable) {\r\n    button.textContent = isAvailable ? 'Book' : 'Cancel';\r\n    button.dataset.action = isAvailable ? 'book' : 'cancel';\r\n    button.classList.toggle('cancel', !isAvailable); // Add 'cancel' class if room is booked, remove if available\r\n};\r\n\r\n// Helper function to update status span\r\nUI.prototype._updateStatusSpan = function(statusSpan, isAvailable) {\r\n    if (statusSpan) {\r\n        statusSpan.textContent = isAvailable ? 'Available' : 'Booked';\r\n        statusSpan.className = isAvailable ? 'status-available' : 'status-booked';\r\n    }\r\n};\r\n\r\nUI.prototype.displayAvailableRooms = function(rooms) {\r\n    const roomsList = document.getElementById('rooms-list');\r\n    roomsList.innerHTML = '';\r\n    rooms.forEach(function(room) {\r\n        const roomElement = document.createElement('li');\r\n        \r\n        const textGroup = document.createElement('div');\r\n\r\n        const roomInfoText = document.createElement('span');\r\n        roomInfoText.textContent = 'Room ' + room.roomNumber + ' (' + room.type + ') - ';\r\n        textGroup.appendChild(roomInfoText);\r\n\r\n        const statusSpan = document.createElement('span');\r\n        this._updateStatusSpan(statusSpan, room.isAvailable); // Use helper\r\n        textGroup.appendChild(statusSpan);\r\n        \r\n        roomElement.appendChild(textGroup);\r\n\r\n        const button = document.createElement('button');\r\n        button.dataset.roomNumber = room.roomNumber; // roomNumber is a string\r\n        this._configureButton(button, room.isAvailable); \r\n\r\n        roomElement.appendChild(button);\r\n        roomsList.appendChild(roomElement);\r\n    }.bind(this)); // Bind 'this' to access helper methods\r\n};\r\n\r\nUI.prototype.updateRoomStatus = function(roomNumber, isAvailable) {\r\n    const roomsList = document.getElementById('rooms-list');\r\n    // roomNumber is expected to be a string here\r\n    const roomElement = Array.from(roomsList.children).find(function(child) {\r\n        return child.querySelector('button').dataset.roomNumber === roomNumber;\r\n    });\r\n\r\n    if (roomElement) {\r\n        const statusSpan = roomElement.querySelector('span[class^=\"status-\"]'); \r\n        this._updateStatusSpan(statusSpan, isAvailable); // Use helper\r\n        \r\n        const button = roomElement.querySelector('button');\r\n        this._configureButton(button, isAvailable);\r\n    }\r\n};\r\n\r\nUI.prototype.init = function(hotel) {\r\n    this.displayAvailableRooms(hotel.rooms); \r\n\r\n    const roomsList = document.getElementById('rooms-list');\r\n    roomsList.addEventListener('click', function(event) {\r\n        if (event.target.tagName === 'BUTTON') {\r\n            const roomNumberStr = event.target.dataset.roomNumber; // This is a string, e.g., \"101\"\r\n            const action = event.target.dataset.action;\r\n            // Find the room using string comparison for roomNumber\r\n            // hotel.rooms contains Room objects where room.roomNumber is a string\r\n            const room = hotel.rooms.find(function(r) { return r.roomNumber === roomNumberStr; });\r\n\r\n            if (room) {\r\n                if (action === 'book' && room.isAvailable) {\r\n                    room.book();\r\n                    this.updateRoomStatus(roomNumberStr, false); // Pass the string room number\r\n                } else if (action === 'cancel' && !room.isAvailable) {\r\n                    room.cancelBooking();\r\n                    this.updateRoomStatus(roomNumberStr, true); // Pass the string room number\r\n                }\r\n            }\r\n        }\r\n    }.bind(this)); // Bind 'this' to access UI instance methods\r\n};\r\n\r\nmodule.exports = UI;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/UI.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;