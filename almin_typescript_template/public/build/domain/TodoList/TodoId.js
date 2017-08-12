"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoId = (function () {
    function TodoId(value) {
        this.value = value;
        Object.freeze(this);
        this.checkValid();
    }
    TodoId.prototype.equals = function (other) {
        return this.value == other.value;
    };
    TodoId.prototype.checkValid = function () {
        if (this.value == null) {
            throw new TypeError("Invalid id : null");
        }
        if (this.value.length == 0) {
            throw new TypeError("Invalid id : blank string");
        }
        if (this.value.length > 50) {
            throw new TypeError("Invalid id : too long");
        }
    };
    return TodoId;
}());
exports.default = TodoId;
//# sourceMappingURL=TodoId.js.map