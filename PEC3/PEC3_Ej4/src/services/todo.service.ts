/**
 * @class Service
 *
 * Manages the data of the application.
 */

import { Todo } from "../models/todo.model";
import { v4 as uuidv4 } from 'uuid';

export class TodoService {
  todos: Todo[] = [];
  onTodoListChanged: (todos: Todo[]) => void;

  constructor() {
    this.onTodoListChanged = () => {};
  }

  bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    const newTodo: Todo = {
      id: uuidv4(),
      text: text,
      completed: false
    }
    this.todos.push(newTodo);
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

  deleteTodo(_id: string) {
    this.todos = this.todos.filter(({ id }) => id !== _id);
    this._commit(this.todos);
  }

  toggleTodo(_id: string) {
    this.todos = this.todos.map(todo => {
      if (todo.id === _id) {
        return { ...todo, completed: !todo.completed };
      }
      else return todo
    });
  }
}
