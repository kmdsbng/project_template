// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TodoItem from '../../src/domain/TodoList/TodoItem';
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';

describe("TodoItem-test", function () {
    it("could serialize", function () {
        const todoId : TodoId = new TodoIdFactory().buildId();
        const item = new TodoItem({
            todoId: todoId,
            title: "test",
            completed: false
        });
        const stringify = JSON.stringify(item);
        assert(stringify.includes("title"));
    });
});
