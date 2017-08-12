"use strict";
import assert = require("power-assert");
import uuid = require("uuid");
import chai = require('chai');

import TodoId from '../../src/domain/TodoList/TodoId';

describe("TodoId-test", function () {
    it("invalid id : blank", function () {
        chai.expect(() => {new TodoId("")}).to.throw(TypeError)
    });

    it("invalid id : too long", function () {
        chai.expect(() => {new TodoId("*".repeat(60))}).to.throw(TypeError)
    });

    it("construct with uuid", function () {
        const id = uuid.v1();
        const todoId = new TodoId(id);
        assert(todoId.value === id);
    });   
});
