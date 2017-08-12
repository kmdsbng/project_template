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
//const classNames = require("classnames");
var classNames = require("classnames");
var AppLocator_1 = require("../AppLocator");
var UpdateTodoItemTitle_1 = require("../usecase/UpdateTodoItemTitle");
var ToggleTodoItem_1 = require("../usecase/ToggleTodoItem");
var RemoveTodoItem_1 = require("../usecase/RemoveTodoItem");
var TodoTextInputComponent_1 = require("./TodoTextInputComponent");
;
;
var TodoItemComponent = (function (_super) {
    __extends(TodoItemComponent, _super);
    function TodoItemComponent() {
        //static propTypes = {
        //    todo: ReactPropTypes.object.isRequired
        //};
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isEditing: false,
            completed: false
        };
        _this._onToggleComplete = function (event) {
            AppLocator_1.default.context.useCase(ToggleTodoItem_1.ToggleTodoItemFactory.create()).execute(_this.props.todo.todoId.value);
        };
        _this._onDoubleClick = function () {
            _this.setState({ isEditing: true });
        };
        /**
         * Event handler called within TodoTextInput.
         * Defining this here allows TodoTextInput to be used in multiple places
         * in different ways.
         * @param  {string} title
         */
        _this._onSave = function (title) {
            AppLocator_1.default.context.useCase(UpdateTodoItemTitle_1.UpdateTodoItemTitleFactory.create()).execute({
                id: _this.props.todo.todoId.value,
                title: title
            });
            _this.setState({ isEditing: false });
        };
        _this._onDestroyClick = function () {
            AppLocator_1.default.context.useCase(RemoveTodoItem_1.RemoveTodoItemFactory.create()).execute(_this.props.todo.todoId.value);
        };
        return _this;
    }
    TodoItemComponent.prototype.componentWillReceiveProps = function (nextProps, nextState) {
        var todo = nextProps.todo;
        this.setState({
            completed: todo.completed
        });
    };
    /**
     * @return {object}
     */
    TodoItemComponent.prototype.render = function () {
        var todo = this.props.todo;
        var input;
        if (this.state.isEditing) {
            input =
                React.createElement(TodoTextInputComponent_1.default, { className: "edit", onSave: this._onSave, value: todo.title.value });
        }
        // List items should get the class 'editing' when editing
        // and 'completed' when marked as completed.
        // Note that 'completed' is a classification while 'complete' is a state.
        // This differentiation between classification and state becomes important
        // in the naming of view actions toggleComplete() vs. destroyCompleted().
        var listClassName = classNames({
            "completed": todo.completed,
            "editing": this.state.isEditing
        });
        return (React.createElement("li", { className: listClassName, key: todo.todoId.value },
            React.createElement("div", { className: "view" },
                React.createElement("input", { className: "toggle", type: "checkbox", defaultChecked: this.state.completed, onChange: this._onToggleComplete }),
                React.createElement("label", { onDoubleClick: this._onDoubleClick }, todo.title.value),
                React.createElement("button", { className: "destroy", onClick: this._onDestroyClick })),
            input));
    };
    return TodoItemComponent;
}(React.Component));
exports.default = TodoItemComponent;
//# sourceMappingURL=TodoItemComponent.js.map