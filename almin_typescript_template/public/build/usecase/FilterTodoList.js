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
var FilterTodoListFactory = (function () {
    function FilterTodoListFactory() {
    }
    FilterTodoListFactory.create = function () {
        return new FilterTodoListUseCase();
    };
    return FilterTodoListFactory;
}());
exports.FilterTodoListFactory = FilterTodoListFactory;
var FilterTodoListUseCase = (function (_super) {
    __extends(FilterTodoListUseCase, _super);
    function FilterTodoListUseCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterTodoListUseCase.prototype.execute = function (filterType) {
        this.dispatch({
            type: FilterTodoListUseCase.name,
            filterType: filterType
        });
    };
    return FilterTodoListUseCase;
}(almin_1.UseCase));
exports.FilterTodoListUseCase = FilterTodoListUseCase;
//# sourceMappingURL=FilterTodoList.js.map