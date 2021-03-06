import * as React from 'react';
import TodoItem from '../domain/TodoList/TodoItem';
//const PropTypes = require("prop-types");
//const ReactPropTypes = PropTypes;
//const classNames = require("classnames");

import * as classNames from 'classnames';
import AppLocator from "../AppLocator";
import {UpdateTodoItemTitleFactory} from "../usecase/UpdateTodoItemTitle";
import {ToggleTodoItemFactory} from "../usecase/ToggleTodoItem";
import {RemoveTodoItemFactory} from "../usecase/RemoveTodoItem";
import TodoTextInput from "./TodoTextInputComponent";


export interface TodoItemProps {
  todo: TodoItem;
};

export interface TodoItemState {
};

class TodoItemComponent extends React.Component<TodoItemProps, TodoItemState> {
    //static propTypes = {
    //    todo: ReactPropTypes.object.isRequired
    //};

    state = {
        isEditing: false,
        completed: false
    };

    componentWillReceiveProps(nextProps: TodoItemProps, nextState: TodoItemState) {
        const todo = nextProps.todo;
        this.setState({
            completed: todo.completed
        });
    }

    /**
     * @return {object}
     */
    render() {
        const todo = this.props.todo;
        let input;
        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={this._onSave}
                    value={todo.title.value}
                />;
        }

        // List items should get the class 'editing' when editing
        // and 'completed' when marked as completed.
        // Note that 'completed' is a classification while 'complete' is a state.
        // This differentiation between classification and state becomes important
        // in the naming of view actions toggleComplete() vs. destroyCompleted().
        const listClassName = classNames({
            "completed": todo.completed,
            "editing": this.state.isEditing
        });
        return (
            <li className={listClassName}
                key={todo.todoId.value}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        defaultChecked={this.state.completed}
                        onChange={this._onToggleComplete}
                    />
                    <label onDoubleClick={this._onDoubleClick}>
                        {todo.title.value}
                    </label>
                    <button className="destroy" onClick={this._onDestroyClick}/>
                </div>
                {input}
            </li>
        );
    }

    _onToggleComplete = (event: React.FormEvent<HTMLElement>) => {
        AppLocator.context.useCase(ToggleTodoItemFactory.create()).execute(this.props.todo.todoId.value);
    };

    _onDoubleClick = () => {
        this.setState({isEditing: true});
    };

    /**
     * Event handler called within TodoTextInput.
     * Defining this here allows TodoTextInput to be used in multiple places
     * in different ways.
     * @param  {string} title
     */
    _onSave = (title : string) => {
        AppLocator.context.useCase(UpdateTodoItemTitleFactory.create()).execute({
            id: this.props.todo.todoId.value,
            title
        });
        this.setState({isEditing: false});
    };

    _onDestroyClick = () => {
        AppLocator.context.useCase(RemoveTodoItemFactory.create()).execute(this.props.todo.todoId.value);
    };
}

export default TodoItemComponent;
