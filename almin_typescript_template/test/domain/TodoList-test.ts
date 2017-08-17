import TodoList from '../../src/domain/TodoList/TodoList';
// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TodoItem from '../../src/domain/TodoList/TodoItem';
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import TodoTitle from "../../src/domain/TodoList/TodoTitle";

function createTodoList() {
    const todoList = new TodoList();
    const todoId : TodoId = new TodoId("todoId1");
    const todoTitle = new TodoTitle("todo1");
    const todoItem = new TodoItem({ todoId, title: todoTitle, completed: false });
    todoList.addItem(todoItem);
    
    const todoId2 : TodoId = new TodoId("todoId2");
    const todoTitle2 = new TodoTitle("todo2");
    const todoItem2 = new TodoItem({ todoId: todoId2, title: todoTitle2, completed: false });
    todoList.addItem(todoItem2);

    return todoList;
}

describe("TodoList-test", function () {
    it("can getItem by TodoId", function () {
        const todoList = createTodoList();
        const retrievedTodo1 = todoList.getItem(new TodoId("todoId1"));
        if (retrievedTodo1 == null)
            throw new TypeError("null returned");
        assert(retrievedTodo1.titleValue === "todo1");
        const retrievedTodo2 = todoList.getItem(new TodoId("todoId2"));
        if (retrievedTodo2 == null)
            throw new TypeError("null returned");
        assert(retrievedTodo2.titleValue === "todo2");
    });

    it("can toggle completed of an todo", function () {
        const todoList = createTodoList();

        todoList.toggleComplete(new TodoId("todoId1"));
        const changedTodo = todoList.getItem(new TodoId("todoId1"));
        const notChangedTodo = todoList.getItem(new TodoId("todoId2"));
        if (changedTodo == null)
            throw new TypeError("null returned");
        if (notChangedTodo == null)
            throw new TypeError("null returned");
        assert(changedTodo.completed);
        assert(!notChangedTodo.completed);
    });

    it("removeItem can remove todo", function () {
        const todoList = createTodoList();

        todoList.removeItem(new TodoId("todoId1"));
        const remains = todoList.getAllTodoItems();
        assert(remains.length === 1);
        assert(remains[0].todoId.equals(new TodoId("todoId2")));
    });
});
