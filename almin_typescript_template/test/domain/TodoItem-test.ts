// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TodoItem from '../../src/domain/TodoList/TodoItem';
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import TodoTitle from "../../src/domain/TodoList/TodoTitle";

describe("TodoItem-test", function () {
    it("could serialize", function () {
        const todoId : TodoId = new TodoIdFactory().buildId();
        const todoTitle = new TodoTitle("test");
        const item = new TodoItem({
            todoId: todoId,
            title: todoTitle,
            completed: false
        });
        
        const stringify = JSON.stringify(item);
        assert(stringify.includes("title"));
    });
});
