/**
 * @class Model
 *
 * Manages the data of the application.
 */

import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string;
  text: string;
  completed: boolean;

  constructor(text: string, completed: boolean = false) {
    this.id = uuidv4();
    this.text = text;
    this.completed = completed;
  }
}
