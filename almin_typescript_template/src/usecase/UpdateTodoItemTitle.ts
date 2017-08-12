"use strict";
import TodoId from '../domain/TodoList/TodoId';
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
import {UseCase} from "almin";
import TodoTitle from "../domain/TodoList/TodoTitle";

export class UpdateTodoItemTitleFactory {
    static create() {
        return new UpdateTodoItemTitleUseCase({
            todoListRepository
        });
    }
}

export class UpdateTodoItemTitleUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    constructor(parameter: {todoListRepository: TodoListRepository}) {
        super();
        this.todoListRepository = parameter.todoListRepository;
    }

    execute(parameter: {id: string, title: string}) {
        const todoList = this.todoListRepository.lastUsed();
        if (todoList == null)
            return;
        if (!todoList.hasItem(parameter.id)) {
            return Promise.reject(new Error(`Not found item:${parameter.id}`));
        }
        const todoId : TodoId = new TodoId(parameter.id);
        //todoList.updateItem({todoId, title});
        const todoTitle = new TodoTitle(parameter.title);
        todoList.updateTitle(todoId, todoTitle);
        this.todoListRepository.save(todoList);
    }
}