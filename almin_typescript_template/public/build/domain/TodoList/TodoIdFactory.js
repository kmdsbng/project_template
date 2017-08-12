"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoId_1 = require("./TodoId");
var uuid = require("uuid");
var TodoIdFactory = (function () {
    function TodoIdFactory() {
    }
    TodoIdFactory.prototype.buildId = function () {
        return new TodoId_1.default(uuid.v1());
    };
    return TodoIdFactory;
}());
exports.default = TodoIdFactory;
//# sourceMappingURL=TodoIdFactory.js.map