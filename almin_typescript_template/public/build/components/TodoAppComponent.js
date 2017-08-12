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
var FooterComponent_1 = require("./FooterComponent");
var HeaderComponent_1 = require("./HeaderComponent");
var MainSectionComponent_1 = require("./MainSectionComponent");
;
;
var TodoApp = (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp(props) {
        var _this = _super.call(this, props) || this;
        var appContext = props.appContext;
        _this.state = appContext.getState();
        return _this;
    }
    TodoApp.prototype.componentDidMount = function () {
        var _this = this;
        var appContext = this.props.appContext;
        this.releaseChange = appContext.onChange(function () {
            _this.setState(appContext.getState());
        });
    };
    TodoApp.prototype.componentWillUnmount = function () {
        this.releaseChange();
    };
    TodoApp.prototype.render = function () {
        var todoState = this.state.todoState;
        return (React.createElement("div", null,
            React.createElement(HeaderComponent_1.default, null),
            React.createElement(MainSectionComponent_1.default, { allTodos: todoState.displayItems, areAllComplete: todoState.areAllComplete }),
            React.createElement(FooterComponent_1.default, { allTodos: todoState.items, filterType: todoState.filterType })));
    };
    return TodoApp;
}(React.Component));
exports.default = TodoApp;
//# sourceMappingURL=TodoAppComponent.js.map