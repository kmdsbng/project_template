"use strict";
import {UseCase} from "almin";
import TodoList from "../domain/TodoList/TodoList";
import todoListRepository, {TodoListRepository} from "../infra/TodoListRepository";

export class CreateDomainUseCaseFactory {
    static create() : CreateDomainUseCase {
        return new CreateDomainUseCase({todoListRepository});
    }
}

interface CreateDomainUseCaseParameter {
    todoListRepository: TodoListRepository
}

export class CreateDomainUseCase extends UseCase {
    todoListRepository: TodoListRepository;
    
    constructor({todoListRepository : TodoListRepository}) {
        super();
        this.todoListRepository = todoListRepository;
    }

    execute() : void {
        const todoList = new TodoList();
        this.todoListRepository.save(todoList);
    }
}