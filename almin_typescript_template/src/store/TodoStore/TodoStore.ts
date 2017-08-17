"use strict";
import { Store } from "almin";
import TodoState, { FilterTypes } from "./TodoState";
import { TodoListRepository } from "../../infra/TodoListRepository";

export default class TodoStore extends Store {
    todoListRepository: TodoListRepository;
    
    /**
     * @param {TodoListRepository} todoListRepository
     */
    constructor(parameter: { todoListRepository: TodoListRepository }) {
        super();
        // Initial State
        this.state = new TodoState({
            items: [],
            filterType: FilterTypes.ALL_TODOS
        });
        this.todoListRepository = parameter.todoListRepository;
    }

    // Update state
    receivePayload(payload: any) {
        const todoList = this.todoListRepository.lastUsed();
        if (!todoList) {
            return;
        }
        const newState = this.state.merge(todoList).reduce(payload);
        this.setState(newState);
    }

    // Read state
    getState() {
        return this.state;
    }
}
