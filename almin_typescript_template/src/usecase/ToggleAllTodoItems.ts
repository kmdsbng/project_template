"use strict";
import {UseCase} from "almin";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
export class ToggleAllTodoItemFactory {
    static create() {
        return new ToggleAllTodoItemUseCase({
            todoListRepository
        });
    }
}

export class ToggleAllTodoItemUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    /**
     * @param {TodoListRepository} todoListRepository
     */
    constructor(parameter: {todoListRepository: TodoListRepository}) {
        super();
        this.todoListRepository = parameter.todoListRepository;
    }

    execute() {
        const todoList = this.todoListRepository.lastUsed();
        todoList.toggleCompleteAll();
        this.todoListRepository.save(todoList);
    }
}