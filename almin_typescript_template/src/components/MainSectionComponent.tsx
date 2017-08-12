import * as React from 'react';
import TodoItem from '../domain/TodoList/TodoItem';
import TodoState from '../store/TodoStore/TodoState';
//const PropTypes = require("prop-types");
//const ReactPropTypes = PropTypes;
import AppLocator from "../AppLocator";
import {ToggleAllTodoItemFactory} from "../usecase/ToggleAllTodoItems";
import TodoItemComponent from "./TodoItemComponent";

export interface MainSectionProps {
  allTodos: TodoItem[];
  areAllComplete: boolean;
};

export interface MainSectionState {
    todoState: TodoState;
};

class MainSectionComponent extends React.Component<MainSectionProps, MainSectionState> {

    render() {
        // This section should be hidden by default
        // and shown when there are todos.
        if (this.props.allTodos.length < 1) {
            return null;
        }

        const allTodos = this.props.allTodos;
        const todos = allTodos.map(todo => {
            console.log(`render todo ${todo.todoId.value}`);
            return <TodoItemComponent key={todo.todoId.value} todo={todo}/>;
        });
        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll}
                    checked={this.props.areAllComplete}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{todos}</ul>
            </section>
        );
    }

    /**
     * Event handler to mark all TODOs as complete
     */
    _onToggleCompleteAll = () => {
        AppLocator.context.useCase(ToggleAllTodoItemFactory.create()).execute();
    };
}

export default MainSectionComponent;
