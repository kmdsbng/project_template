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
//const PropTypes = require("prop-types");
//const ReactPropTypes = PropTypes;
var AppLocator_1 = require("../AppLocator");
var ToggleAllTodoItems_1 = require("../usecase/ToggleAllTodoItems");
var TodoItemComponent_1 = require("./TodoItemComponent");
;
;
var MainSectionComponent = (function (_super) {
    __extends(MainSectionComponent, _super);
    function MainSectionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event handler to mark all TODOs as complete
         */
        _this._onToggleCompleteAll = function () {
            AppLocator_1.default.context.useCase(ToggleAllTodoItems_1.ToggleAllTodoItemFactory.create()).execute();
        };
        return _this;
    }
    MainSectionComponent.prototype.render = function () {
        // This section should be hidden by default
        // and shown when there are todos.
        if (this.props.allTodos.length < 1) {
            return null;
        }
        var allTodos = this.props.allTodos;
        var todos = allTodos.map(function (todo) {
            return React.createElement(TodoItemComponent_1.default, { key: todo.todoId.value, todo: todo });
        });
        return (React.createElement("section", { id: "main" },
            React.createElement("input", { id: "toggle-all", type: "checkbox", onChange: this._onToggleCompleteAll, checked: this.props.areAllComplete }),
            React.createElement("label", { htmlFor: "toggle-all" }, "Mark all as complete"),
            React.createElement("ul", { id: "todo-list" }, todos)));
    };
    return MainSectionComponent;
}(React.Component));
exports.default = MainSectionComponent;
//# sourceMappingURL=MainSectionComponent.js.map