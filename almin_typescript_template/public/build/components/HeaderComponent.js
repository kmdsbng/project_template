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
var AppLocator_1 = require("../AppLocator");
var AddTodoItem_1 = require("../usecase/AddTodoItem");
var TodoTextInputComponent_1 = require("./TodoTextInputComponent");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onSave = function (text) {
            if (text.trim()) {
                AppLocator_1.default.context.useCase(AddTodoItem_1.AddTodoItemFactory.create()).execute(text);
            }
        };
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("header", { id: "header" },
            React.createElement("h1", null, "todos"),
            React.createElement(TodoTextInputComponent_1.default, { id: "new-todo", placeholder: "What needs to be done?", onSave: this._onSave, value: "", className: "" })));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=HeaderComponent.js.map