"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = (function () {
    function TodoItem(parameter) {
        this.todoId = parameter.todoId;
        this.title = parameter.title;
        this.completed = parameter.completed;
    }
    Object.defineProperty(TodoItem.prototype, "titleValue", {
        get: function () {
            return this.title.value;
        },
        enumerable: true,
        configurable: true
    });
    TodoItem.prototype.toggleCompleted = function () {
        return new TodoItem({
            todoId: this.todoId,
            title: this.title,
            completed: !this.completed
        });
    };
    TodoItem.prototype.updateTitle = function (title) {
        return new TodoItem({
            todoId: this.todoId,
            title: title,
            completed: this.completed
        });
    };
    return TodoItem;
}());
exports.default = TodoItem;
//# sourceMappingURL=TodoItem.js.map