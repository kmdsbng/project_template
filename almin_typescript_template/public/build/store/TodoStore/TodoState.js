"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilterTodoList_1 = require("../../usecase/FilterTodoList");
exports.FilterTypes = {
    ALL_TODOS: "ALL_TODOS",
    ACTIVE_TODOS: "ACTIVE_TODOS",
    COMPLETED_TODOS: "COMPLETED_TODOS"
};
var TodoState = (function () {
    function TodoState(parameter) {
        this.items = parameter.items;
        this.filterType = parameter.filterType;
    }
    Object.defineProperty(TodoState.prototype, "areAllComplete", {
        /**
         * if all items is completed, return true
         * @returns {boolean}
         */
        get: function () {
            return this.items.every(function (item) {
                return item.completed;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoState.prototype, "displayItems", {
        /**
         * return items in current filterType
         * @returns {Array.<TodoItem>}
         */
        get: function () {
            var _this = this;
            return this.items.filter(function (item) {
                switch (_this.filterType) {
                    case exports.FilterTypes.ACTIVE_TODOS:
                        return !item.completed;
                    case exports.FilterTypes.COMPLETED_TODOS:
                        return item.completed;
                    default:
                        return true;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TodoState.prototype.merge = function (todoList) {
        var items = todoList.getAllTodoItems();
        return new TodoState(Object.assign({}, this, {
            items: items
        }));
    };
    TodoState.prototype.reduce = function (payload) {
        switch (payload.type) {
            case FilterTodoList_1.FilterTodoListUseCase.name:
                return new TodoState(Object.assign({}, this, {
                    filterType: payload.filterType
                }));
            default:
                return this;
        }
    };
    return TodoState;
}());
exports.default = TodoState;
//# sourceMappingURL=TodoState.js.map