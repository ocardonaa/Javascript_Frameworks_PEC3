/**
 * @class Service
 *
 * Manages the data of the application.
 */

import { Todo } from "../models/todo.model";

class TodoService {
  private todos: Todo[] = [];
  private onTodoListChanged: (todos: Todo[]) => void | null;

  constructor() {
    const localStorageTodos = localStorage.getItem("todos");
    if (localStorageTodos !== null) {
      this.todos = (JSON.parse(localStorageTodos) || []).map(
        todo => new Todo(todo)
      );
    }

  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo(text));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      }
      else return todo
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
        return { ...todo, completed: !todo.completed };
      }
      else return todo
    });

    this._commit(this.todos);
  }
}
