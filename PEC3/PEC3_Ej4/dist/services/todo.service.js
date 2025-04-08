"use strict";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const uuid_1 = require("uuid");
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
            id: (0, uuid_1.v4)(),
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
exports.TodoService = TodoService;
