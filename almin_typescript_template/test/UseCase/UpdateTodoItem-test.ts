// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import MemoryDB from "../../src/infra/adpter/MemoryDB";
import TodoList from "../../src/domain/TodoList/TodoList";
import TodoItem from "../../src/domain/TodoList/TodoItem";
import TodoIdFactory from '../../src/domain/TodoList/TodoIdFactory';
import {TodoListRepository} from "../../src/infra/TodoListRepository";
import {UpdateTodoItemTitleUseCase} from "../../src/usecase/UpdateTodoItemTitle";
describe("UpdateTodoItem", function () {
    it("should update TodoItem with title", function (done) {
        const mockTodoList = new TodoList();
        const todoId = new TodoIdFactory().buildId();
        const existTodoItem = new TodoItem({ todoId: todoId, title: "before", completed: false });
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
            const storedTodoList = todoListRepository.find(mockTodoList);
            const todoItem = storedTodoList.getItem(existTodoItem.idValue());
            assert(todoItem);
            assert.equal(todoItem.title, titleOfUPDATING);
            done();
        });
        // When
        useCase.execute({id: existTodoItem.idValue(), title: titleOfUPDATING});
    });
});
