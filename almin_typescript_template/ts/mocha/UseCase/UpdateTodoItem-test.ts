// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import MemoryDB from "../../src/infra/adpter/MemoryDB";
import TodoList from "../../src/domain/TodoList/TodoList";
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoTitle from "../../src/domain/TodoList/TodoTitle";
import TodoItem from "../../src/domain/TodoList/TodoItem";
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import {TodoListRepository} from "../../src/infra/TodoListRepository";
import {UpdateTodoItemTitleUseCase} from "../../src/usecase/UpdateTodoItemTitle";

describe("UpdateTodoItem", function () {
    it("should update TodoItem with title", function (done) {
        const mockTodoList = new TodoList();
        const todoId = new TodoIdFactory().buildId();
        const todoTitle = new TodoTitle("before");
        const existTodoItem = new TodoItem({ todoId: todoId, title: todoTitle, completed: false });
        mockTodoList.addItem(existTodoItem);
        // prepare
        const todoListRepository = new TodoListRepository(new MemoryDB());
        todoListRepository.save(mockTodoList);
        // initialize
        const useCase = new UpdateTodoItemTitleUseCase({
            todoListRepository
        });
        const titleOfUPDATING = "UPDATING TODO";
        // Then
        todoListRepository.onChange(() => {
            // re-get todoList
            const storedTodoList = todoListRepository.lastUsed();
            if (storedTodoList == null)
                throw new TypeError("null returned");
            const todoIdForCompare : TodoId = existTodoItem.todoId;
            const todoItem = storedTodoList.getItem(todoIdForCompare);
            assert(todoItem);
            if (todoItem == null)
                throw new TypeError("null returned");
            assert.equal(todoItem.titleValue, titleOfUPDATING);
            done();
        });
        // When
        const todoIdForCompare : TodoId = existTodoItem.todoId;
        useCase.execute({id: todoIdForCompare.value, title: titleOfUPDATING});
    });
});
