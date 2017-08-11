import * as React from "react";
//const PropTypes = require("prop-types");
//const ReactPropTypes = PropTypes;
import AppLocator from "../AppLocator";
import {ToggleAllTodoItemFactory} from "../usecase/ToggleAllTodoItems";
import TodoItem from "./TodoItem.react";

export interface MainSectionProps {
  allTodos: any;
  areAllComplete: any;
};

export interface MainSectionState {
    todoState: any;
};

class MainSection extends React.Component<MainSectionProps, MainSectionState> {
    //static propTypes = {
    //    allTodos: ReactPropTypes.array.isRequired,
    //    areAllComplete: ReactPropTypes.bool.isRequired
    //};

    render() {
        // This section should be hidden by default
        // and shown when there are todos.
        if (this.props.allTodos.length < 1) {
            return null;
        }

        const allTodos = this.props.allTodos;
        const todos = allTodos.map(todo => {
            return <TodoItem key={todo.todoId.value} todo={todo}/>;
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

export default MainSection;
