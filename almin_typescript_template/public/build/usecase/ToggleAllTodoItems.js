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
var almin_1 = require("almin");
var TodoListRepository_1 = require("../infra/TodoListRepository");
var ToggleAllTodoItemFactory = (function () {
    function ToggleAllTodoItemFactory() {
    }
    ToggleAllTodoItemFactory.create = function () {
        return new ToggleAllTodoItemUseCase({
            todoListRepository: TodoListRepository_1.default
        });
    };
    return ToggleAllTodoItemFactory;
}());
exports.ToggleAllTodoItemFactory = ToggleAllTodoItemFactory;
var ToggleAllTodoItemUseCase = (function (_super) {
    __extends(ToggleAllTodoItemUseCase, _super);
    /**
     * @param {TodoListRepository} todoListRepository
     */
    function ToggleAllTodoItemUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    ToggleAllTodoItemUseCase.prototype.execute = function () {
        var todoList = this.todoListRepository.lastUsed();
        if (todoList == null)
            return;
        todoList.toggleCompleteAll();
        this.todoListRepository.save(todoList);
    };
    return ToggleAllTodoItemUseCase;
}(almin_1.UseCase));
exports.ToggleAllTodoItemUseCase = ToggleAllTodoItemUseCase;
//# sourceMappingURL=ToggleAllTodoItems.js.map