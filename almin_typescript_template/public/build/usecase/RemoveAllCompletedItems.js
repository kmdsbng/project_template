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
var RemoveTodoItemFactory = (function () {
    function RemoveTodoItemFactory() {
    }
    RemoveTodoItemFactory.create = function () {
        return new RemoveTodoItemUseCase({
            todoListRepository: TodoListRepository_1.default
        });
    };
    return RemoveTodoItemFactory;
}());
exports.RemoveTodoItemFactory = RemoveTodoItemFactory;
var RemoveTodoItemUseCase = (function (_super) {
    __extends(RemoveTodoItemUseCase, _super);
    /**
     * @param {TodoListRepository} todoListRepository
     */
    function RemoveTodoItemUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    RemoveTodoItemUseCase.prototype.execute = function () {
        var todoList = this.todoListRepository.lastUsed();
        if (todoList == null)
            return;
        todoList.removeAllCompletedItems();
        this.todoListRepository.save(todoList);
    };
    return RemoveTodoItemUseCase;
}(almin_1.UseCase));
exports.RemoveTodoItemUseCase = RemoveTodoItemUseCase;
//# sourceMappingURL=RemoveAllCompletedItems.js.map