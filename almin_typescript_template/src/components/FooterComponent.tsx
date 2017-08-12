import * as React from "react";
import * as classNames from 'classnames';
import AppLocator from "../AppLocator";
import {RemoveTodoItemFactory} from "../usecase/RemoveAllCompletedItems";
import {FilterTodoListFactory} from "../usecase/FilterTodoList";
import {FilterTypes} from "../store/TodoStore/TodoState";
import TodoItem from "../domain/TodoList/TodoItem";

export interface FooterProps {
  allTodos: Array<TodoItem>;
  filterType: string;
};

export interface FooterState {
};

class Footer extends React.Component<FooterProps, FooterState> {
    render() {
        const allTodos = this.props.allTodos;
        const filterType = this.props.filterType;
        const total = allTodos.length;
        if (total === 0) {
            return null;
        }

        const completed = allTodos.reduce((total, item) => {
            return total + (item.completed ? 1 : 0);
        }, 0);

        const itemsLeft = total - completed;
        let itemsLeftPhrase = itemsLeft === 1 ? " item " : " items ";
        itemsLeftPhrase += "left";

        // Undefined and thus not rendered if no completed items are left.
        let clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick}>
                    Clear completed ({completed})
                </button>;
        }

        const filterByType = (type : string) => {
            return (event : React.FormEvent<HTMLElement>) => {
                event.preventDefault();
                AppLocator.context.useCase(FilterTodoListFactory.create()).execute(type);
            };
        };
        return (
            <footer id="footer">
                <span id="todo-count">
                  <strong>
                    {itemsLeft}
                  </strong>
                    {itemsLeftPhrase}
                </span>
                <ul id="filters">
                    <li>
                        <a
                            href="#/"
                            onClick={filterByType(FilterTypes.ALL_TODOS)}
                            className={classNames({selected: filterType === FilterTypes.ALL_TODOS})}>
                            All
                        </a>
                    </li>
                    {" "}
                    <li>
                        <a
                            href="#/active"
                            onClick={filterByType(FilterTypes.ACTIVE_TODOS)}
                            className={classNames({selected: filterType === FilterTypes.ACTIVE_TODOS})}>
                            Active
                        </a>
                    </li>
                    {" "}
                    <li>
                        <a
                            href="#/completed"
                            onClick={filterByType(FilterTypes.COMPLETED_TODOS)}
                            className={classNames({selected: filterType === FilterTypes.COMPLETED_TODOS})}>
                            Completed
                        </a>
                    </li>
                </ul>
                {clearCompletedButton}
            </footer>
        );
    }

    _onClearCompletedClick = () => {
        const usecase = AppLocator.context.useCase(RemoveTodoItemFactory.create());
        usecase.execute();
    };
}

export default Footer;
