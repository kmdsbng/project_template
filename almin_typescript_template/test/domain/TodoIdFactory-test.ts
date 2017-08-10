"use strict";
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import assert = require('power-assert');
import uuid = require('uuid');
import chai = require('chai');

describe("TodoIdFactory-test", function () {
    it("generate valid id", function () {
        const factory = new TodoIdFactory();
        const todoId = factory.buildId();
        assert(todoId.value.length > 0);
    });
});
