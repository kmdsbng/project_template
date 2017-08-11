import * as React from "react";
import AppLocator from "../AppLocator";
import {AddTodoItemFactory} from "../usecase/AddTodoItem";
import TodoTextInput from "./TodoTextInputComponent";

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoTextInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    onSave={this._onSave}
                    value={null}
                    className={null}
                />
            </header>
        );
    }

    _onSave = (text: string) => {
        if (text.trim()) {
            AppLocator.context.useCase(AddTodoItemFactory.create()).execute(text);
        }
    };
}

export default Header;
