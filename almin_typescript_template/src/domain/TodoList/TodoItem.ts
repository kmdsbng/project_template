"use strict";
import uuid = require("uuid");
import TodoId from './TodoId';
import TodoTitle from "./TodoTitle";

export interface TodoItemParameter {
    todoId : TodoId,
    title: TodoTitle,
    titleValue: string,
    completed : boolean
}

export default class TodoItem {
    readonly todoId: TodoId;
    readonly title: TodoTitle;
    readonly completed: boolean;

    constructor(parameter : TodoItemParameter) {
        this.todoId = parameter.todoId;
        this.title = parameter.title;
        this.completed = parameter.completed;
    }

    get titleValue(): string {
        return this.title.value;
    }

    toggleCompleted(): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            title: this.title,
            completed: !this.completed
        });
    }

    updateTitle(title: TodoTitle): TodoItem {
        return new TodoItem({
            todoId: this.todoId,
            title: title,
            completed: this.completed
        });
    }
}
