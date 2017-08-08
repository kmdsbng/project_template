"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';

export default class TodoItem {
    id: TodoId;
    title: string;
    completed: boolean;

    constructor(
        id: TodoId,
        title: string,
        completed?: boolean
    ) {
        this.id = id;
        this.title = title;
        this.completed = completed || false;
    }

    updateItem(updated) {
        return new TodoItem(
            updated.id || this.id,
            updated.title || this.title,
            updated.completed || this.completed);
    }
}
