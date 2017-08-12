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
var ENTER_KEY_CODE = 13;
;
;
var TodoTextInput = (function (_super) {
    __extends(TodoTextInput, _super);
    function TodoTextInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: _this.props.value || ""
        };
        /**
         * Invokes the callback passed in as onSave, allowing this component to be
         * used in different ways.
         */
        _this._save = function () {
            _this.props.onSave(_this.state.value);
            _this.setState({
                value: ""
            });
        };
        /**
         * @param {object} event
         */
        _this._onChange = function (/*object*/ event) {
            _this.setState({
                value: event.currentTarget.value
            });
        };
        /**
         * @param  {object} event
         */
        _this._onKeyDown = function (event) {
            if (event.keyCode === ENTER_KEY_CODE) {
                _this._save();
            }
        };
        return _this;
    }
    /**
     * @return {object}
     */
    TodoTextInput.prototype.render = function () {
        return (React.createElement("input", { className: this.props.className, id: this.props.id, placeholder: this.props.placeholder, onBlur: this._save, onChange: this._onChange, onKeyDown: this._onKeyDown, value: this.state.value, autoFocus: true }));
    };
    return TodoTextInput;
}(React.Component));
exports.default = TodoTextInput;
//# sourceMappingURL=TodoTextInputComponent.js.map