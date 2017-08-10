"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';

interface TodoItemParameter {
    id : string,
    title : string,
    completed? : boolean
}

export default class TodoItem {
    private id: string;
    todoId: TodoId;
    title: string;
    completed: boolean;

    constructor(parameter : TodoItemParameter) {
        this.id = parameter.id || uuid();
        this.todoId = new TodoId(this.id);
        this.title = parameter.title;
        this.completed = parameter.completed;
    }

    idValue() {
        return this.id;
    }

    updateItem(updated) {
        return new TodoItem((<any>Object).assign({}, this, updated));
    }
}
