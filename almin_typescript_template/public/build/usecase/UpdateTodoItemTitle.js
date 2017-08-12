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
var TodoListRepository_1 = require("../infra/TodoListRepository");
var almin_1 = require("almin");
var TodoTitle_1 = require("../domain/TodoList/TodoTitle");
var UpdateTodoItemTitleFactory = (function () {
    function UpdateTodoItemTitleFactory() {
    }
    UpdateTodoItemTitleFactory.create = function () {
        return new UpdateTodoItemTitleUseCase({
            todoListRepository: TodoListRepository_1.default
        });
    };
    return UpdateTodoItemTitleFactory;
}());
exports.UpdateTodoItemTitleFactory = UpdateTodoItemTitleFactory;
var UpdateTodoItemTitleUseCase = (function (_super) {
    __extends(UpdateTodoItemTitleUseCase, _super);
    function UpdateTodoItemTitleUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    UpdateTodoItemTitleUseCase.prototype.execute = function (parameter) {
        var todoList = this.todoListRepository.lastUsed();
        if (todoList == null)
            return;
        if (!todoList.hasItem(parameter.id)) {
            return Promise.reject(new Error("Not found item:" + parameter.id));
        }
        var todoId = new TodoId_1.default(parameter.id);
        //todoList.updateItem({todoId, title});
        var todoTitle = new TodoTitle_1.default(parameter.title);
        todoList.updateTitle(todoId, todoTitle);
        this.todoListRepository.save(todoList);
    };
    return UpdateTodoItemTitleUseCase;
}(almin_1.UseCase));
exports.UpdateTodoItemTitleUseCase = UpdateTodoItemTitleUseCase;
//# sourceMappingURL=UpdateTodoItemTitle.js.map