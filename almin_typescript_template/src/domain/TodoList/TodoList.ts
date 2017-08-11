"use strict";
import TodoId from './TodoId';
const uuid = require("uuid");
const assert = require("assert");
import TodoItem from "./TodoItem";
export default class TodoList {
    todoItems: TodoItem[];

    constructor() {
        this.todoItems = [];
    }

    getAllTodoItems(): TodoItem[] {
        return this.todoItems;
    }

    hasItem(id: string): boolean {
        return this.todoItems.some(item => {
            const todoId : TodoId = item.todoId;
            return todoId.value === id;
        });
    }

    getItem(id: string): TodoItem | null{
        assert(id, "need id");
        const items = this.todoItems.filter(item => {
            const todoId : TodoId = item.todoId;
            return todoId.value === id;
        });
        if (items.length > 0) {
            return items[0];
        }
        return null;
    }

    updateItem(updated: any): TodoItem {
        assert(updated.todoId, "should have {todoId}");
        const item = this.getItem(updated.todoId.value);
        const newItem = item.updateItem(updated);
        const index = this.todoItems.indexOf(item);
        assert(index !== -1, "item should contained list");
        this.todoItems = this.todoItems.slice(0, index).concat(newItem, this.todoItems.slice(index + 1));
        return item;
    }

    addItem(todoItem: TodoItem): TodoItem {
        this.todoItems = this.todoItems.concat(todoItem);
        return todoItem;
    }

    toggleCompleteAll(): void {
        this.getAllTodoItems().forEach(item => {
            const todoId : TodoId = item.todoId;
            return this.toggleComplete(todoId.value);
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
        const index = this.todoItems.indexOf(item);
        this.todoItems = this.todoItems.slice(0, index).concat(this.todoItems.slice(index + 1));
        return item;
    }

    removeAllCompletedItems() {
        const allTodoItems = this.getAllTodoItems();
        const filteredItems = allTodoItems.filter(item => item.completed);
        filteredItems.forEach(item => {
            const todoId : TodoId = item.todoId;
            return this.removeItem(todoId.value);
        });
    }
}
