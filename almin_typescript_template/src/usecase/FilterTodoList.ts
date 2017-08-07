"use strict";
import {UseCase, DispatchedPayload} from "almin";

export class FilterTodoListFactory {
    static create() : FilterTodoListUseCase {
        return new FilterTodoListUseCase();
    }
}

export class FilterTodoListUseCase extends UseCase {
    execute(filterType) : void {
        this.dispatch(<DispatchedPayload>{
            type: FilterTodoListUseCase.name,
            filterType
        });
    }
}