"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';

interface TodoItemParameter {
    todoId : TodoId,
    title : string,
    completed? : boolean
}

export default class TodoItem {
    private id: string;
    todoId: TodoId;
    title: string;
    completed: boolean;

    constructor(parameter : TodoItemParameter) {
        //this.id = parameter.id || uuid();
        //this.todoId = new TodoId(this.id);
        this.todoId = parameter.todoId;
        this.title = parameter.title;
        this.completed = parameter.completed;
    }

    idValue() {
        return this.todoId.value;
    }

    updateItem(updated) {
        //return new TodoItem((<any>Object).assign({}, this, updated));
        return new TodoItem({
            todoId: updated.todoId || this.todoId,
            title: updated.title || this.title,
            completed: updated.completed || this.completed
        });
    }
}
