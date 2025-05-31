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

eval("const Hotel = __webpack_require__(/*! ./modules/Hotel */ \"./src/modules/Hotel.js\");\r\nconst Room = __webpack_require__(/*! ./modules/Room */ \"./src/modules/Room.js\");\r\nconst PremiumRoom = __webpack_require__(/*! ./modules/PremiumRoom */ \"./src/modules/PremiumRoom.js\");\r\nconst UI = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const hotel = new Hotel();\r\n    const ui = new UI();\r\n\r\n    const loadRooms = () => {\r\n        const storedRooms = JSON.parse(localStorage.getItem('hotelRooms'));\r\n        if (storedRooms && storedRooms.length > 0) {\r\n            storedRooms.forEach(roomData => {\r\n                let room;\r\n                if (roomData.premiumService) {\r\n                    // Ensure 'Free Spa' is used if premiumService was 'Free Breakfast' or similar old value\r\n                    const service = roomData.premiumService === 'Free Breakfast' ? 'Free Spa' : roomData.premiumService;\r\n                    room = new PremiumRoom(roomData.roomNumber, roomData.type, service);\r\n                } else {\r\n                    room = new Room(roomData.roomNumber, roomData.type);\r\n                }\r\n                room.isAvailable = roomData.isAvailable;\r\n                hotel.addRoom(room);\r\n            });\r\n        } else {\r\n            // Add default rooms if nothing in localStorage\r\n            hotel.addRoom(new Room('101', 'single'));\r\n            hotel.addRoom(new Room('102', 'double'));\r\n            hotel.addRoom(new PremiumRoom('103', 'suite', 'Free Spa')); // Updated default service\r\n            hotel.addRoom(new Room('201', 'single'));\r\n            saveRooms(); // Save default rooms to localStorage\r\n        }\r\n    };\r\n\r\n    const saveRooms = () => {\r\n        localStorage.setItem('hotelRooms', JSON.stringify(hotel.rooms));\r\n    };\r\n\r\n    loadRooms();\r\n    ui.init(hotel, saveRooms); // Pass saveRooms to UI to call after booking/canceling\r\n});\r\n\n\n//# sourceURL=webpack://javascript-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/Hotel.js":
/*!******************************!*\
  !*** ./src/modules/Hotel.js ***!
  \******************************/
/***/ ((module) => {

eval("class Hotel {\r\n    constructor() {\r\n        this.rooms = [];\r\n    }\r\n\r\n    addRoom(room) {\r\n        this.rooms.push(room);\r\n    }\r\n\r\n    getAvailableRooms() {\r\n        return this.rooms.filter(room => room.isAvailable);\r\n    }\r\n}\r\n\r\nmodule.exports = Hotel;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Hotel.js?");

/***/ }),

/***/ "./src/modules/PremiumRoom.js":
/*!************************************!*\
  !*** ./src/modules/PremiumRoom.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./Room */ \"./src/modules/Room.js\");\r\n\r\nclass PremiumRoom extends Room {\r\n    constructor(roomNumber, type, premiumService = \"Free Spa\") {\r\n        super(roomNumber, type);\r\n        this.premiumService = premiumService;\r\n    }\r\n}\r\n\r\nmodule.exports = PremiumRoom;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/PremiumRoom.js?");

/***/ }),

/***/ "./src/modules/Room.js":
/*!*****************************!*\
  !*** ./src/modules/Room.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Room {\r\n    constructor(roomNumber, type) {\r\n        this.roomNumber = roomNumber;\r\n        this.type = type;\r\n        this.isAvailable = true;\r\n    }\r\n\r\n    book() {\r\n        this.isAvailable = false;\r\n    }\r\n\r\n    cancelBooking() {\r\n        this.isAvailable = true;\r\n    }\r\n}\r\n\r\nmodule.exports = Room;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/Room.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((module) => {

eval("class UI {\r\n    constructor() {\r\n        this.saveRoomsCallback = null;\r\n    }\r\n\r\n    _configureButton(button, isAvailable) {\r\n        button.textContent = isAvailable ? 'Book' : 'Cancel';\r\n        button.dataset.action = isAvailable ? 'book' : 'cancel';\r\n        button.classList.toggle('cancel', !isAvailable);\r\n    }\r\n\r\n    _updateStatusSpan(statusSpan, isAvailable) {\r\n        if (statusSpan) {\r\n            statusSpan.textContent = isAvailable ? 'Available' : 'Booked';\r\n            statusSpan.className = isAvailable ? 'status-available' : 'status-booked';\r\n        }\r\n    }\r\n\r\n    displayAvailableRooms(rooms) {\r\n        const roomsContainer = document.getElementById('rooms-container');\r\n        roomsContainer.innerHTML = '';\r\n        rooms.forEach(room => {\r\n            const roomCard = document.createElement('div');\r\n            roomCard.classList.add('room-card');\r\n            if (room.premiumService) {\r\n                roomCard.classList.add('premium');\r\n            }\r\n\r\n            const roomInfoDiv = document.createElement('div');\r\n            roomInfoDiv.classList.add('room-info');\r\n\r\n            const typeSpan = document.createElement('span');\r\n            typeSpan.classList.add('room-type');\r\n            if (room.premiumService) {\r\n                typeSpan.textContent = 'Room ' + room.roomNumber + ' (Deluxe ' + room.type + ')';\r\n            } else {\r\n                typeSpan.textContent = 'Room ' + room.roomNumber + ' (' + room.type + ')';\r\n            }\r\n            roomInfoDiv.appendChild(typeSpan);\r\n\r\n            if (room.premiumService) {\r\n                const premiumSpan = document.createElement('span');\r\n                premiumSpan.classList.add('premium-service');\r\n                premiumSpan.textContent = room.premiumService;\r\n                roomInfoDiv.appendChild(premiumSpan);\r\n            }\r\n\r\n            const statusSpan = document.createElement('span');\r\n            this._updateStatusSpan(statusSpan, room.isAvailable);\r\n            roomInfoDiv.appendChild(statusSpan);\r\n            \r\n            roomCard.appendChild(roomInfoDiv);\r\n\r\n            const button = document.createElement('button');\r\n            button.dataset.roomNumber = room.roomNumber;\r\n            this._configureButton(button, room.isAvailable); \r\n\r\n            roomCard.appendChild(button);\r\n            roomsContainer.appendChild(roomCard);\r\n        });\r\n    }\r\n\r\n    updateRoomStatus(roomNumber, isAvailable) {\r\n        const roomsContainer = document.getElementById('rooms-container');\r\n        const roomCard = Array.from(roomsContainer.children).find(card => {\r\n            return card.querySelector('button').dataset.roomNumber === roomNumber;\r\n        });\r\n\r\n        if (roomCard) {\r\n            const statusSpan = roomCard.querySelector('.room-info span[class^=\"status-\"]'); \r\n            this._updateStatusSpan(statusSpan, isAvailable);\r\n            \r\n            const button = roomCard.querySelector('button');\r\n            this._configureButton(button, isAvailable);\r\n        }\r\n    }\r\n\r\n    init(hotel, saveRoomsCallback) {\r\n        this.saveRoomsCallback = saveRoomsCallback; \r\n        this.displayAvailableRooms(hotel.rooms);\r\n\r\n        const roomsContainer = document.getElementById('rooms-container');\r\n        roomsContainer.addEventListener('click', event => {\r\n            if (event.target.tagName === 'BUTTON') {\r\n                const roomNumberStr = event.target.dataset.roomNumber;\r\n                const action = event.target.dataset.action;\r\n                const room = hotel.rooms.find(r => r.roomNumber === roomNumberStr);\r\n\r\n                if (room) {\r\n                    if (action === 'book' && room.isAvailable) {\r\n                        room.book();\r\n                        this.updateRoomStatus(roomNumberStr, false);\r\n                    } else if (action === 'cancel' && !room.isAvailable) {\r\n                        room.cancelBooking();\r\n                        this.updateRoomStatus(roomNumberStr, true);\r\n                    }\r\n                    if (this.saveRoomsCallback) {\r\n                        this.saveRoomsCallback(); \r\n                    }\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nmodule.exports = UI;\r\n\n\n//# sourceURL=webpack://javascript-project/./src/modules/UI.js?");

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