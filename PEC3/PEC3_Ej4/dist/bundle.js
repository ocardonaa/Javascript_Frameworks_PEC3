/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ }),

/***/ "./src/controllers/todo.controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/todo.controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoController: () => (/* binding */ TodoController)
/* harmony export */ });
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
    constructor(service, view) {
        this.onTodoListChanged = (todos) => {
            this.view.displayTodos(todos);
        };
        this.handleAddTodo = (todoText) => {
            this.service.addTodo(todoText);
        };
        this.handleEditTodo = (id, todoText) => {
            this.service.editTodo(id, todoText);
        };
        this.handleDeleteTodo = (id) => {
            this.service.deleteTodo(id);
        };
        this.handleToggleTodo = (id) => {
            this.service.toggleTodo(id);
        };
        this.service = service;
        this.view = view;
        // Explicit this binding
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        // Display initial todos
        this.onTodoListChanged(this.service.todos);
    }
}


/***/ }),

/***/ "./src/services/todo.service.ts":
/*!**************************************!*\
  !*** ./src/services/todo.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoService: () => (/* binding */ TodoService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/**
 * @class Service
 *
 * Manages the data of the application.
 */

class TodoService {
    constructor() {
        this.todos = [];
        this.onTodoListChanged = () => { };
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(text) {
        const newTodo = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
            text: text,
            completed: false
        };
        this.todos.push(newTodo);
        this._commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return Object.assign(Object.assign({}, todo), { text: updatedText });
            }
            else
                return todo;
        });
        this._commit(this.todos);
    }
    deleteTodo(_id) {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }
    toggleTodo(_id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === _id) {
                return Object.assign(Object.assign({}, todo), { completed: !todo.completed });
            }
            else
                return todo;
        });
    }
}


/***/ }),

/***/ "./src/views/todo.views.ts":
/*!*********************************!*\
  !*** ./src/views/todo.views.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoView: () => (/* binding */ TodoView)
/* harmony export */ });
/**
 * @class View
 *
 * Visual representation of the model.
 */
class TodoView {
    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = this.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this._temporaryTodoText = "";
        this._initLocalListeners();
    }
    get _todoText() {
        return this.input.value;
    }
    _resetInput() {
        this.input.value = "";
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        }
        else {
            // Create nodes
            todos.forEach(todo => {
                const li = this.createElement("li");
                li.id = todo.id;
                const checkbox = this.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.completed;
                const span = this.createElement("span");
                span.contentEditable = true;
                span.classList.add("editable");
                if (todo.completed) {
                    const strike = this.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text;
                }
                const deleteButton = this.createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);
                // Append nodes
                this.todoList.append(li);
            });
        }
        // Debugging
        console.log(todos);
    }
    _initLocalListeners() {
        this.todoList.addEventListener("input", event => {
            const target = event.target;
            if (target.toString() === "editable") {
                this._temporaryTodoText = target.innerText;
            }
        });
    }
    bindAddTodo(handler) {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }
    bindDeleteTodo(handler) {
        this.todoList.addEventListener("click", event => {
            const target = event.target;
            const parent = target.parentElement;
            if (parent !== null && parent.toString() === "delete") {
                const id = parent.id;
                handler(id);
            }
        });
    }
    bindEditTodo(handler) {
        this.todoList.addEventListener("focusout", event => {
            if (this._temporaryTodoText) {
                const target = event.target;
                const parent = target.parentElement;
                if (parent) {
                    const id = parent.id;
                    handler(id, this._temporaryTodoText);
                    this._temporaryTodoText = "";
                }
            }
        });
    }
    bindToggleTodo(handler) {
        this.todoList.addEventListener("change", event => {
            const target = event.target;
            if (target.type === "checkbox") {
                const parent = target.parentElement;
                if (parent) {
                    const id = parent.id;
                    handler(id, this._temporaryTodoText);
                }
            }
        });
    }
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todo.controller */ "./src/controllers/todo.controller.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/todo.service */ "./src/services/todo.service.ts");
/* harmony import */ var _views_todo_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/todo.views */ "./src/views/todo.views.ts");



console.log('app.js');
const app = new _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_0__.TodoController(new _services_todo_service__WEBPACK_IMPORTED_MODULE_1__.TodoService(), new _views_todo_views__WEBPACK_IMPORTED_MODULE_2__.TodoView());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpRUFBZSxFQUFFLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRDlCLGlFQUFlLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyw4RUFBOEUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFLO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnFDO0FBQ3JDO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0RBQVE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDUTtBQUNOO0FBQ3NCO0FBQ2pEO0FBQ0EsUUFBUSxrREFBTTtBQUNkLGVBQWUsa0RBQU07QUFDckI7QUFDQTtBQUNBLHNEQUFzRCxtREFBRztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sR0FBRyxhQUFhO0FBQzNFO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFlO0FBQzFCO0FBQ0EsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJhO0FBQy9CO0FBQ0EsdUNBQXVDLGlEQUFLO0FBQzVDO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQztBQUM3QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXLG1CQUFtQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxXQUFXLDRCQUE0QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7OztVQ25JQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOK0Q7QUFDVDtBQUNSO0FBQzlDO0FBQ0EsZ0JBQWdCLHdFQUFjLEtBQUssK0RBQVcsUUFBUSx1REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy90b2RvLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3RvZG8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdG9kby52aWV3cy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gcm5nKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8qKlxuICogQGNsYXNzIENvbnRyb2xsZXJcbiAqXG4gKiBMaW5rcyB0aGUgdXNlciBpbnB1dCBhbmQgdGhlIHZpZXcgb3V0cHV0LlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHZpZXdcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlLCB2aWV3KSB7XG4gICAgICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZWQgPSAodG9kb3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5kaXNwbGF5VG9kb3ModG9kb3MpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUFkZFRvZG8gPSAodG9kb1RleHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5hZGRUb2RvKHRvZG9UZXh0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVFZGl0VG9kbyA9IChpZCwgdG9kb1RleHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5lZGl0VG9kbyhpZCwgdG9kb1RleHQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5kZWxldGVUb2RvKGlkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb2dnbGVUb2RvID0gKGlkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UudG9nZ2xlVG9kbyhpZCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIC8vIEV4cGxpY2l0IHRoaXMgYmluZGluZ1xuICAgICAgICB0aGlzLnNlcnZpY2UuYmluZFRvZG9MaXN0Q2hhbmdlZCh0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kbyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kRWRpdFRvZG8odGhpcy5oYW5kbGVFZGl0VG9kbyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kRGVsZXRlVG9kbyh0aGlzLmhhbmRsZURlbGV0ZVRvZG8pO1xuICAgICAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZVRvZG8odGhpcy5oYW5kbGVUb2dnbGVUb2RvKTtcbiAgICAgICAgLy8gRGlzcGxheSBpbml0aWFsIHRvZG9zXG4gICAgICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZWQodGhpcy5zZXJ2aWNlLnRvZG9zKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBjbGFzcyBTZXJ2aWNlXG4gKlxuICogTWFuYWdlcyB0aGUgZGF0YSBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuZXhwb3J0IGNsYXNzIFRvZG9TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgICAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkID0gKCkgPT4geyB9O1xuICAgIH1cbiAgICBiaW5kVG9kb0xpc3RDaGFuZ2VkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZWQgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgX2NvbW1pdCh0b2Rvcykge1xuICAgICAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkKHRvZG9zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cbiAgICBhZGRUb2RvKHRleHQpIHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICAgICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpO1xuICAgIH1cbiAgICBlZGl0VG9kbyhpZCwgdXBkYXRlZFRleHQpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9kbyksIHsgdGV4dDogdXBkYXRlZFRleHQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb21taXQodGhpcy50b2Rvcyk7XG4gICAgfVxuICAgIGRlbGV0ZVRvZG8oX2lkKSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigoeyBpZCB9KSA9PiBpZCAhPT0gX2lkKTtcbiAgICAgICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpO1xuICAgIH1cbiAgICB0b2dnbGVUb2RvKF9pZCkge1xuICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5tYXAodG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5pZCA9PT0gX2lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9kbyksIHsgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzIFZpZXdcbiAqXG4gKiBWaXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgVG9kb1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuZ2V0RWxlbWVudChcIiNyb290XCIpO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgdG9kb1wiO1xuICAgICAgICB0aGlzLmlucHV0Lm5hbWUgPSBcInRvZG9cIjtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmlucHV0LCB0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kb3NcIjtcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IHRoaXMuY3JlYXRlRWxlbWVudChcInVsXCIsIFwidG9kby1saXN0XCIpO1xuICAgICAgICB0aGlzLmFwcC5hcHBlbmQodGhpcy50aXRsZSwgdGhpcy5mb3JtLCB0aGlzLnRvZG9MaXN0KTtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLl9pbml0TG9jYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgZ2V0IF90b2RvVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIF9yZXNldElucHV0KCkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBpZiAoY2xhc3NOYW1lKVxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBnZXRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGRpc3BsYXlUb2Rvcyh0b2Rvcykge1xuICAgICAgICAvLyBEZWxldGUgYWxsIG5vZGVzXG4gICAgICAgIHdoaWxlICh0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucmVtb3ZlQ2hpbGQodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaG93IGRlZmF1bHQgbWVzc2FnZVxuICAgICAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgdG8gZG8hIEFkZCBhIHRhc2s/XCI7XG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmFwcGVuZChwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBub2Rlc1xuICAgICAgICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIGxpLmlkID0gdG9kby5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHRoaXMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHNwYW4uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaWtlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwic1wiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyaWtlLnRleHRDb250ZW50ID0gdG9kby50ZXh0O1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmFwcGVuZChzdHJpa2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRvZG8udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGNoZWNrYm94LCBzcGFuLCBkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBub2Rlc1xuICAgICAgICAgICAgICAgIHRoaXMudG9kb0xpc3QuYXBwZW5kKGxpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlYnVnZ2luZ1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gICAgfVxuICAgIF9pbml0TG9jYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0YXJnZXQudG9TdHJpbmcoKSA9PT0gXCJlZGl0YWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSB0YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYmluZEFkZFRvZG8oaGFuZGxlcikge1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RvZG9UZXh0KSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzLl90b2RvVGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRJbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYmluZERlbGV0ZVRvZG8oaGFuZGxlcikge1xuICAgICAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50LnRvU3RyaW5nKCkgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhcmVudC5pZDtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJpbmRFZGl0VG9kbyhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90ZW1wb3JhcnlUb2RvVGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGlkLCB0aGlzLl90ZW1wb3JhcnlUb2RvVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RlbXBvcmFyeVRvZG9UZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBiaW5kVG9nZ2xlVG9kbyhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoaWQsIHRoaXMuX3RlbXBvcmFyeVRvZG9UZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy90b2RvLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdG9kby5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUb2RvVmlldyB9IGZyb20gXCIuL3ZpZXdzL3RvZG8udmlld3NcIjtcbmNvbnNvbGUubG9nKCdhcHAuanMnKTtcbmNvbnN0IGFwcCA9IG5ldyBUb2RvQ29udHJvbGxlcihuZXcgVG9kb1NlcnZpY2UoKSwgbmV3IFRvZG9WaWV3KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9