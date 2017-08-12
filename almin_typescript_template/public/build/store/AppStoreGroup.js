"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var almin_1 = require("almin");
var TodoStore_1 = require("./TodoStore/TodoStore");
var TodoListRepository_1 = require("../infra/TodoListRepository");
var AppStoreGroup = (function () {
    function AppStoreGroup() {
    }
    AppStoreGroup.create = function () {
        return new almin_1.StoreGroup({
            "todoState": new TodoStore_1.default({ todoListRepository: TodoListRepository_1.default })
        });
    };
    return AppStoreGroup;
}());
exports.default = AppStoreGroup;
//# sourceMappingURL=AppStoreGroup.js.map