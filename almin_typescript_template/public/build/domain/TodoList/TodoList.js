"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoId_1 = require("./TodoId");
var TodoList = (function () {
    function TodoList() {
        this.todoItems = [];
    }
    TodoList.prototype.getAllTodoItems = function () {
        return this.todoItems;
    };
    TodoList.prototype.hasItem = function (id) {
        return this.todoItems.some(function (item) {
            var todoId = item.todoId;
            var otherTodoId = new TodoId_1.default(id);
            return todoId.equals(otherTodoId);
        });
    };
    TodoList.prototype.getItem = function (todoId) {
        //assert(todoId, "need id");
        var items = this.todoItems.filter(function (item) {
            var todoIdOfItem = item.todoId;
            return todoIdOfItem.equals(todoId);
        });
        if (items.length > 0) {
            return items[0];
        }
        return null;
    };
    TodoList.prototype.addItem = function (todoItem) {
        this.todoItems = this.todoItems.concat(todoItem);
    };
    TodoList.prototype.toggleCompleteAll = function () {
        var _this = this;
        this.getAllTodoItems().forEach(function (item) {
            var todoId = item.todoId;
            _this.toggleComplete(todoId);
        });
    };
    TodoList.prototype.toggleComplete = function (todoId) {
        var todo = this.getItem(todoId);
        if (todo == null)
            return;
        var newTodo = todo.toggleCompleted();
        this.replaceTodo(todo, newTodo);
    };
    TodoList.prototype.updateTitle = function (todoId, title) {
        //assert(todoId, "should have {todoId}");
        var todo = this.getItem(todoId);
        if (todo == null)
            return;
        //const todoTitle = new TodoTitle(title);
        var newTodo = todo.updateTitle(title);
        this.replaceTodo(todo, newTodo);
    };
    TodoList.prototype.replaceTodo = function (original, replaced) {
        var index = this.todoItems.indexOf(original);
        //assert(index !== -1, "item should contained list");
        this.todoItems = this.todoItems.slice(0, index).concat(replaced, this.todoItems.slice(index + 1));
    };
    TodoList.prototype.removeItem = function (todoId) {
        var item = this.getItem(todoId);
        if (item == null)
            return;
        var index = this.todoItems.indexOf(item);
        this.todoItems = this.todoItems.slice(0, index).concat(this.todoItems.slice(index + 1));
    };
    TodoList.prototype.removeAllCompletedItems = function () {
        var _this = this;
        var allTodoItems = this.getAllTodoItems();
        var filteredItems = allTodoItems.filter(function (item) { return item.completed; });
        filteredItems.forEach(function (item) {
            var todoId = item.todoId;
            _this.removeItem(todoId);
        });
    };
    return TodoList;
}());
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map