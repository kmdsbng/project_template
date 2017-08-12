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
var TodoIdFactory_1 = require("../domain/TodoList/TodoIdFactory");
var almin_1 = require("almin");
var TodoListRepository_1 = require("../infra/TodoListRepository");
var TodoItem_1 = require("../domain/TodoList/TodoItem");
var TodoTitle_1 = require("../domain/TodoList/TodoTitle");
var AddTodoItemFactory = (function () {
    function AddTodoItemFactory() {
    }
    AddTodoItemFactory.create = function () {
        return new AddTodoItemUseCase({
            todoListRepository: TodoListRepository_1.default
        });
    };
    return AddTodoItemFactory;
}());
exports.AddTodoItemFactory = AddTodoItemFactory;
var AddTodoItemUseCase = (function (_super) {
    __extends(AddTodoItemUseCase, _super);
    function AddTodoItemUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    AddTodoItemUseCase.prototype.execute = function (title) {
        var todoListRepository = this.todoListRepository;
        var todoList = todoListRepository.lastUsed();
        if (todoList === undefined)
            return;
        var todoId = new TodoIdFactory_1.default().buildId();
        var todoTitle = new TodoTitle_1.default(title);
        var todoItem = new TodoItem_1.default({ title: todoTitle, todoId: todoId, completed: false });
        todoList.addItem(todoItem);
        todoListRepository.save(todoList);
    };
    return AddTodoItemUseCase;
}(almin_1.UseCase));
exports.AddTodoItemUseCase = AddTodoItemUseCase;
//# sourceMappingURL=AddTodoItem.js.map