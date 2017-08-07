"use strict";
import {UseCase} from "almin";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
export class RemoveTodoItemFactory {
    static create() {
        return new RemoveTodoItemUseCase({
            todoListRepository
        });
    }
}

export class RemoveTodoItemUseCase extends UseCase {
    todoListRepository: TodoListRepository;
    
    constructor({todoListRepository}) {
        super();
        this.todoListRepository = todoListRepository;
    }

    execute(itemId : string) : any {
        const todoListRepository = this.todoListRepository;
        const todoList = todoListRepository.lastUsed();
        if (todoList === undefined) {
            return;
        }
        if (!todoList.hasItem(itemId)) {
            return this.throwError(new Error(`Not found item:${itemId}`));
        }
        todoList.removeItem(itemId);
        todoListRepository.save(todoList);
    }
}