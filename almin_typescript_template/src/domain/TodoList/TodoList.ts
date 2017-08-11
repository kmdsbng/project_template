"use strict";
import TodoId from './TodoId';
import uuid = require("uuid");
import assert = require("assert");
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
            const todoId = item.todoId;
            const otherTodoId = new TodoId(id);
            return todoId.equals(otherTodoId);
        });
    }

    getItemOld(id: string): TodoItem | null{
        assert(id, "need id");
        const otherTodoId = new TodoId(id);
        return this.getItem(otherTodoId);
    }

    getItem(todoId: TodoId): TodoItem | null{
        assert(todoId, "need id");
        const items = this.todoItems.filter(item => {
            const todoIdOfItem = item.todoId;
            return todoIdOfItem.equals(todoId);
        });
        if (items.length > 0) {
            return items[0];
        }
        return null;
    }

    addItem(todoItem: TodoItem): TodoItem {
        this.todoItems = this.todoItems.concat(todoItem);
        return todoItem;
    }

    toggleCompleteAll(): void {
        this.getAllTodoItems().forEach(item => {
            const todoId : TodoId = item.todoId;
            return this.toggleComplete(todoId);
        });
    }

    toggleComplete(todoId: TodoId): TodoItem | null {
        const todo = this.getItem(todoId);
        const newTodo = todo.toggleCompleted();
        this.replaceTodo(todo, newTodo);
        return newTodo;
    }

    updateTitle(todoId: TodoId, title: string): TodoItem {
        assert(todoId, "should have {todoId}");
        const todo = this.getItem(todoId);
        const newTodo = todo.updateTitle(title);
        this.replaceTodo(todo, newTodo);
        return newTodo;
    }

    replaceTodo(original: TodoItem, replaced: TodoItem) {
        const index = this.todoItems.indexOf(original);
        assert(index !== -1, "item should contained list");
        this.todoItems = this.todoItems.slice(0, index).concat(replaced, this.todoItems.slice(index + 1));
    }

    removeItem(todoId: TodoId): TodoItem | null {
        const item = this.getItem(todoId);
        const index = this.todoItems.indexOf(item);
        this.todoItems = this.todoItems.slice(0, index).concat(this.todoItems.slice(index + 1));
        return item;
    }

    removeAllCompletedItems() {
        const allTodoItems = this.getAllTodoItems();
        const filteredItems = allTodoItems.filter(item => item.completed);
        filteredItems.forEach(item => {
            const todoId : TodoId = item.todoId;
            this.removeItem(todoId);
        });
    }
}
