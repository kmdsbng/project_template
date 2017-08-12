"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';

interface TodoItemParameter {
    todoId : TodoId,
    title : string,
    completed : boolean
}

export default class TodoItem {
    readonly todoId: TodoId;
    readonly title: string;
    readonly completed: boolean;

    constructor(parameter : TodoItemParameter) {
        this.todoId = parameter.todoId;
        this.title = parameter.title;
        this.completed = parameter.completed;
    }

    toggleCompleted(): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            title: this.title,
            completed: !this.completed
        });
    }

    updateTitle(title: string): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            title: title,
            completed: this.completed
        });
    }
}
