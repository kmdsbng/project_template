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
var TodoState_1 = require("./TodoState");
var TodoStore = (function (_super) {
    __extends(TodoStore, _super);
    /**
     * @param {TodoListRepository} todoListRepository
     */
    function TodoStore(parameter) {
        var _this = _super.call(this) || this;
        // Initial State
        _this.state = new TodoState_1.default({
            items: [],
            filterType: TodoState_1.FilterTypes.ALL_TODOS
        });
        _this.todoListRepository = parameter.todoListRepository;
        return _this;
    }
    // Update state
    TodoStore.prototype.receivePayload = function (payload) {
        var todoList = this.todoListRepository.lastUsed();
        if (!todoList) {
            return;
        }
        var newState = this.state.merge(todoList).reduce(payload);
        this.setState(newState);
    };
    // Read state
    TodoStore.prototype.getState = function () {
        return this.state;
    };
    return TodoStore;
}(almin_1.Store));
exports.default = TodoStore;
//# sourceMappingURL=TodoStore.js.map