"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TodoId_1 = require("../domain/TodoList/TodoId");
var almin_1 = require("almin");
var TodoListRepository_1 = require("../infra/TodoListRepository");
var ToggleTodoItemFactory = (function () {
    function ToggleTodoItemFactory() {
    }
    ToggleTodoItemFactory.create = function () {
        return new ToggleTodoItemUseCase({
            todoListRepository: TodoListRepository_1.default
        });
    };
    return ToggleTodoItemFactory;
}());
exports.ToggleTodoItemFactory = ToggleTodoItemFactory;
var ToggleTodoItemUseCase = (function (_super) {
    __extends(ToggleTodoItemUseCase, _super);
    /**
     * @param {TodoListRepository} todoListRepository
     */
    function ToggleTodoItemUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    ToggleTodoItemUseCase.prototype.execute = function (todoIdValue) {
        var todoList = this.todoListRepository.lastUsed();
        var todoId = new TodoId_1.default(todoIdValue);
        if (todoList == null)
            return;
        todoList.toggleComplete(todoId);
        this.todoListRepository.save(todoList);
    };
    return ToggleTodoItemUseCase;
}(almin_1.UseCase));
exports.ToggleTodoItemUseCase = ToggleTodoItemUseCase;
//# sourceMappingURL=ToggleTodoItem.js.map