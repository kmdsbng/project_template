// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoItem from '../../src/domain/TodoList/TodoItem';

describe("TodoItem-test", function () {
    it("could serialize", function () {
        const item = new TodoItem(
            new TodoId('dummyuid'),
            "test",
            false
        );
        const stringify = JSON.stringify(item);
        assert(stringify.includes("title"));
    });
});
