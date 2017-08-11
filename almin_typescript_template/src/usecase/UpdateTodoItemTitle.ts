"use strict";
import TodoId from '../domain/TodoList/TodoId';
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
import {UseCase} from "almin";
export class UpdateTodoItemTitleFactory {
    static create() {
        return new UpdateTodoItemTitleUseCase({
            todoListRepository
        });
    }
}

export class UpdateTodoItemTitleUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    /**
     * @param {TodoListRepository} todoListRepository
     */
    constructor({todoListRepository}) {
        super();
        this.todoListRepository = todoListRepository;
    }

    execute({id, title}) {
        const todoList = this.todoListRepository.lastUsed();
        if (!todoList.hasItem(id)) {
            return Promise.reject(new Error(`Not found item:${id}`));
        }
        const todoId : TodoId = new TodoId(id);
        todoList.updateItem({todoId, title});
        this.todoListRepository.save(todoList);
    }
}