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
var React = require("react");
var classNames = require("classnames");
var AppLocator_1 = require("../AppLocator");
var RemoveAllCompletedItems_1 = require("../usecase/RemoveAllCompletedItems");
var FilterTodoList_1 = require("../usecase/FilterTodoList");
var TodoState_1 = require("../store/TodoStore/TodoState");
;
;
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClearCompletedClick = function () {
            var usecase = AppLocator_1.default.context.useCase(RemoveAllCompletedItems_1.RemoveTodoItemFactory.create());
            usecase.execute();
        };
        return _this;
    }
    Footer.prototype.render = function () {
        var allTodos = this.props.allTodos;
        var filterType = this.props.filterType;
        var total = allTodos.length;
        if (total === 0) {
            return null;
        }
        var completed = allTodos.reduce(function (total, item) {
            return total + (item.completed ? 1 : 0);
        }, 0);
        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? " item " : " items ";
        itemsLeftPhrase += "left";
        // Undefined and thus not rendered if no completed items are left.
        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                React.createElement("button", { id: "clear-completed", onClick: this._onClearCompletedClick },
                    "Clear completed (",
                    completed,
                    ")");
        }
        var filterByType = function (type) {
            return function (event) {
                event.preventDefault();
                AppLocator_1.default.context.useCase(FilterTodoList_1.FilterTodoListFactory.create()).execute(type);
            };
        };
        return (React.createElement("footer", { id: "footer" },
            React.createElement("span", { id: "todo-count" },
                React.createElement("strong", null, itemsLeft),
                itemsLeftPhrase),
            React.createElement("ul", { id: "filters" },
                React.createElement("li", null,
                    React.createElement("a", { href: "#/", onClick: filterByType(TodoState_1.FilterTypes.ALL_TODOS), className: classNames({ selected: filterType === TodoState_1.FilterTypes.ALL_TODOS }) }, "All")),
                " ",
                React.createElement("li", null,
                    React.createElement("a", { href: "#/active", onClick: filterByType(TodoState_1.FilterTypes.ACTIVE_TODOS), className: classNames({ selected: filterType === TodoState_1.FilterTypes.ACTIVE_TODOS }) }, "Active")),
                " ",
                React.createElement("li", null,
                    React.createElement("a", { href: "#/completed", onClick: filterByType(TodoState_1.FilterTypes.COMPLETED_TODOS), className: classNames({ selected: filterType === TodoState_1.FilterTypes.COMPLETED_TODOS }) }, "Completed"))),
            clearCompletedButton));
    };
    return Footer;
}(React.Component));
exports.default = Footer;
//# sourceMappingURL=FooterComponent.js.map