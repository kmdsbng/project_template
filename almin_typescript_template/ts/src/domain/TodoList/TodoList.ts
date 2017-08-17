"use strict";
import TodoId from './TodoId';
import uuid = require("uuid");
import assert = require("assert");
import TodoItem from "./TodoItem";
import TodoTitle from "./TodoTitle";

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

    addItem(todoItem: TodoItem): void {
        this.todoItems = this.todoItems.concat(todoItem);
    }

    toggleCompleteAll(): void {
        this.getAllTodoItems().forEach(item => {
            const todoId : TodoId = item.todoId;
            this.toggleComplete(todoId);
        });
    }

    toggleComplete(todoId: TodoId): void{
        const todo = this.getItem(todoId);
        if (todo == null)
            return;
        const newTodo = todo.toggleCompleted();
        this.replaceTodo(todo, newTodo);
    }

    updateTitle(todoId: TodoId, title: TodoTitle): void {
        assert(todoId, "should have {todoId}");
        const todo = this.getItem(todoId);
        if (todo == null)
            return;
        //const todoTitle = new TodoTitle(title);
        const newTodo = todo.updateTitle(title);
        this.replaceTodo(todo, newTodo);
    }

    replaceTodo(original: TodoItem, replaced: TodoItem) {
        const index = this.todoItems.indexOf(original);
        assert(index !== -1, "item should contained list");
        this.todoItems = this.todoItems.slice(0, index).concat(replaced, this.todoItems.slice(index + 1));
    }

    removeItem(todoId: TodoId): void {
        const item = this.getItem(todoId);
        if (item == null)
            return;
        const index = this.todoItems.indexOf(item);
        this.todoItems = this.todoItems.slice(0, index).concat(this.todoItems.slice(index + 1));
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
