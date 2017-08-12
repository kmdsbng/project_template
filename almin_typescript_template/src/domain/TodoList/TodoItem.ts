"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';
import TodoTitle from "./TodoTitle";

interface TodoItemParameter {
    todoId : TodoId,
    titleValue : string,
    completed : boolean
}

export default class TodoItem {
    readonly todoId: TodoId;
    readonly title: TodoTitle;
    readonly completed: boolean;

    constructor(parameter : TodoItemParameter) {
        this.todoId = parameter.todoId;
        this.title = new TodoTitle(parameter.titleValue);
        this.completed = parameter.completed;
    }

    get titleValue(): string {
        return this.title.value;
    }

    toggleCompleted(): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            titleValue: this.titleValue,
            completed: !this.completed
        });
    }

    updateTitle(title: string): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            titleValue: title,
            completed: this.completed
        });
    }
}
