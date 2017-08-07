"use strict";
const uuid = require("uuid");
export default class TodoItem {
    completed: boolean;
    title: string;
    id: string;

    constructor({
        id,
        title,
        completed,
    }) {
        this.id = id || uuid();
        this.title = title;
        this.completed = completed;
    }

    updateItem(updated) {
        return new TodoItem((<any>Object).assign({}, this, updated));
    }
}
