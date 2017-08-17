"use strict";
import test from 'ava';
import uuid = require("uuid");
import TodoId from 'domain/TodoList/TodoId';

test("TodoId-test : invalid id : null", (t) => {
  t.throws(() => {new TodoId(null)});
});

test("TodoId-test : invalid id : blank", (t) => {
  t.throws(() => {new TodoId("")});
});


test("TodoId-test : invalid id : too long", function (t) {
    t.throws(() => {new TodoId("*".repeat(60))});
});

test("TodoId-test : construct with uuid", function (t) {
    const id = uuid.v1();
    const todoId = new TodoId(id);
    t.is(todoId.value, id);
});

test("TodoId-test : equals", function (t) {
    const id = uuid.v1();
    const todoId = new TodoId(id);
    const todoId2 = new TodoId(id);
    t.is(todoId.equals(todoId2), true);
});


