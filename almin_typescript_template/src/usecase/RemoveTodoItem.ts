"use strict";
import TodoId from '../domain/TodoList/TodoId';
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
    
    constructor(parameter: {todoListRepository: TodoListRepository}) {
        super();
        this.todoListRepository = parameter.todoListRepository;
    }

    execute(itemId : string) : void {
        const todoListRepository = this.todoListRepository;
        const todoList = todoListRepository.lastUsed();
        const todoId = new TodoId(itemId);
        if (todoList === undefined) {
            return;
        }
        if (!todoList.hasItem(itemId)) {
            return this.throwError(new Error(`Not found item:${itemId}`));
        }
        todoList.removeItem(todoId);
        todoListRepository.save(todoList);
    }
}