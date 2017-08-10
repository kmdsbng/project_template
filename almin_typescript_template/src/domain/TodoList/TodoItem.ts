"use strict";
const uuid = require("uuid");

interface TodoItemParameter {
    id : string,
    title : string,
    completed? : boolean
}

export default class TodoItem {
    id: string;
    title: string;
    completed: boolean;

    constructor(parameter : TodoItemParameter) {
        this.id = parameter.id || uuid();
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
