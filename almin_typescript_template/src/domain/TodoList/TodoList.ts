"use strict";
const uuid = require("uuid");
const assert = require("assert");
import TodoItem from "./TodoItem";
export default class TodoList {
    id: string;
    _items: TodoItem[];

    constructor() {
        this.id = uuid.v1();
        this._items = [];
    }

    getAllTodoItems(): TodoItem[] {
        return this._items;
    }

    hasItem(id: string): boolean {
        return this._items.some(item => {
            return item.id === id;
        });
    }

    getItem(id: string): TodoItem | null{
        assert(id, "need id");
        const items = this._items.filter(item => {
            return item.id === id;
        });
        if (items.length > 0) {
            return items[0];
        }
        return null;
    }

    updateItem(updated: any): TodoItem {
        assert(updated.id, "should have {id}");
        const item = this.getItem(updated.id);
        const newItem = item.updateItem(updated);
        const index = this._items.indexOf(item);
        assert(index !== -1, "item should contained list");
        this._items = this._items.slice(0, index).concat(newItem, this._items.slice(index + 1));
        return item;
    }

    addItem(todoItem: TodoItem): TodoItem {
        this._items = this._items.concat(todoItem);
        return todoItem;
    }

    toggleCompleteAll(): void {
        this.getAllTodoItems().forEach(item => {
            return this.toggleComplete(item.id);
        });
    }

    toggleComplete(id: string): TodoItem | null {
        const item = this.getItem(id);
        item.completed = !item.completed;
        this.updateItem(item);
        return item;
    }

    removeItem(id: string): TodoItem | null {
        const item = this.getItem(id);
        const index = this._items.indexOf(item);
        this._items = this._items.slice(0, index).concat(this._items.slice(index + 1));
        return item;
    }

    removeAllCompletedItems() {
        const allTodoItems = this.getAllTodoItems();
        const filteredItems = allTodoItems.filter(item => item.completed);
        filteredItems.forEach(item => {
            return this.removeItem(item.id);
        });
    }
}
