"use strict";
import {UseCase} from "almin";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
import TodoItem from "../domain/TodoList/TodoItem";
import TodoIdFactory from '../domain/TodoList/TodoIdFactory';
export class AddTodoItemFactory {
    static create() : AddTodoItemUseCase {
        return new AddTodoItemUseCase({
            todoListRepository
        });
    }
}

export class AddTodoItemUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    constructor({todoListRepository: TodoListRepository}) {
        super();
        this.todoListRepository = todoListRepository;
    }

    execute(title) {
        const todoListRepository = this.todoListRepository;
        const todoList = todoListRepository.lastUsed();
        if (todoList === undefined)
            return;
        const todoId = new TodoIdFactory().buildId();
        const todoItem = new TodoItem(todoId, title, false);
        todoList.addItem(todoItem);
        todoListRepository.save(todoList);
    }
}
