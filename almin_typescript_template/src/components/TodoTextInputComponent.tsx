import * as React from "react";
const ENTER_KEY_CODE = 13;

declare type StateMap<T> = {
    [P in keyof T]: T[P];
};

export interface TodoTextInputProps {
  className: string,
  id?: string;
  placeholder?: string;
  onSave: (text: any) => void;
  value: string
};

export interface TodoTextInputState {
};

export default class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {
    constructor(props) {
      super(props);
    }

    state = {
        value: this.props.value || ""
    };

    /**
     * @return {object}
     */
    render() /*object*/ {
        return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
        );
    }

    /**
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways.
     */
    _save = () => {
        this.props.onSave(this.state.value);
        this.setState({
            value: ""
        });
    };

    /**
     * @param {object} event
     */
    _onChange = (/*object*/ event) => {
        this.setState({
            value: event.target.value
        });
    };

    /**
     * @param  {object} event
     */
    _onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    };
}

