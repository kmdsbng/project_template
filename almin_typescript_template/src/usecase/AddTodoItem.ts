"use strict";
import TodoIdFactory from '../domain/TodoList/TodoIdFactory';
import {UseCase} from "almin";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";
import TodoItem from "../domain/TodoList/TodoItem";
import TodoTitle from "../domain/TodoList/TodoTitle";

export class AddTodoItemFactory {
    static create() : AddTodoItemUseCase {
        return new AddTodoItemUseCase({
            todoListRepository
        });
    }
}

interface AddTodoItemUseCaseParameter {
    todoListRepository: TodoListRepository
}

export class AddTodoItemUseCase extends UseCase {
    todoListRepository: TodoListRepository;

    constructor(parameter: AddTodoItemUseCaseParameter) {
        super();
        this.todoListRepository = parameter.todoListRepository;
    }

    execute(title : string) {
        const todoListRepository = this.todoListRepository;
        const todoList = todoListRepository.lastUsed();
        if (todoList === undefined)
            return;
        const todoId = new TodoIdFactory().buildId();
        const todoTitle = new TodoTitle(title);
        const todoItem = new TodoItem({title: todoTitle, todoId: todoId, completed: false});
        todoList.addItem(todoItem);
        todoListRepository.save(todoList);
    }
}