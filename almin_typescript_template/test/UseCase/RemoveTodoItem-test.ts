// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import MemoryDB from "../../src/infra/adpter/MemoryDB";
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import TodoId from '../../src/domain/TodoList/TodoId';
import TodoItem from "../../src/domain/TodoList/TodoItem";
import TodoList from "../../src/domain/TodoList/TodoList";
import {TodoListRepository} from "../../src/infra/TodoListRepository";
import {RemoveTodoItemUseCase} from "../../src/usecase/RemoveTodoItem";
describe("RemoveTodoItemUseCase", function () {
    it("should add TodoItem with title", function (done) {
        const mockTodoList = new TodoList();
        const todoId = new TodoIdFactory().buildId();
        const todoItem = new TodoItem({ todoId: todoId, title: "before", completed: false });
        mockTodoList.addItem(todoItem);
        // prepare
        const todoListRepository = new TodoListRepository(new MemoryDB());
        todoListRepository.save(mockTodoList);
        const useCase = new RemoveTodoItemUseCase({
            todoListRepository
        });
        // Then
        todoListRepository.onChange(() => {
            // re-get todoList
            const storedTodoList = todoListRepository.lastUsed();
            if (storedTodoList == null)
                throw new TypeError("null returned");
            const todoId : TodoId = todoItem.todoId;
            assert(!storedTodoList.hasItem(todoId.value));
            done();
        });
        console.log(0);
        // When
        useCase.execute(todoId.value);
    });
});
