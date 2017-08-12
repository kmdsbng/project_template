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
var TodoList_1 = require("../domain/TodoList/TodoList");
var TodoListRepository_1 = require("../infra/TodoListRepository");
var CreateDomainUseCaseFactory = (function () {
    function CreateDomainUseCaseFactory() {
    }
    CreateDomainUseCaseFactory.create = function () {
        return new CreateDomainUseCase({ todoListRepository: TodoListRepository_1.default });
    };
    return CreateDomainUseCaseFactory;
}());
exports.CreateDomainUseCaseFactory = CreateDomainUseCaseFactory;
var CreateDomainUseCase = (function (_super) {
    __extends(CreateDomainUseCase, _super);
    function CreateDomainUseCase(parameter) {
        var _this = _super.call(this) || this;
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    CreateDomainUseCase.prototype.execute = function () {
        var todoList = new TodoList_1.default();
        this.todoListRepository.save(todoList);
    };
    return CreateDomainUseCase;
}(almin_1.UseCase));
exports.CreateDomainUseCase = CreateDomainUseCase;
//# sourceMappingURL=CreateDomainUseCase.js.map