"use strict";
import TodoId from '../domain/TodoList/TodoId';
import {UseCase} from "almin";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
export class ToggleTodoItemFactory {
    static create() {
        return new ToggleTodoItemUseCase({
            todoListRepository
        });
    }
}

export class ToggleTodoItemUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    /**
     * @param {TodoListRepository} todoListRepository
     */
    constructor(parameter: {todoListRepository: TodoListRepository}) {
        super();
        this.todoListRepository = parameter.todoListRepository;
    }

    execute(todoIdValue: string) {
        const todoList = this.todoListRepository.lastUsed();
        const todoId = new TodoId(todoIdValue);
        todoList.toggleComplete(todoId);
        this.todoListRepository.save(todoList);
    }
}