import * as React from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import MainSection from "./MainSectionComponent";
import {Context}  from "almin";

declare type StateMap<T> = {
    [P in keyof T]: T[P];
};

export interface TodoAppProps {
  appContext: Context<StateMap<{ "todoState": any; }>>;
  filterType?: string;
};

export interface TodoAppState {
    todoState: any;
};

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
    releaseChange: any;

    constructor(props) {
        super(props);
        const appContext = props.appContext;
        this.state = appContext.getState();
    }

    componentDidMount() {
        const appContext = this.props.appContext;
        this.releaseChange = appContext.onChange(() => {
            this.setState(appContext.getState());
        });
    }

    componentWillUnmount() {
        this.releaseChange();
    }

    render() {
        const todoState = this.state.todoState;
        return (
            <div>
                <Header />
                <MainSection
                    allTodos={todoState.displayItems}
                    areAllComplete={todoState.areAllComplete}
                />
                <Footer allTodos={todoState.items}
                        filterType={todoState.filterType}/>
            </div>
        );
    }
}

export default TodoApp;
