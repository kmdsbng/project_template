// LICENSE : MIT
"use strict";

import {Context}  from "almin";
import TodoState from "./store/TodoStore/TodoState";

declare type StateMap<T> = {
    [P in keyof T]: T[P];
};

export class AppContextLocator {
    _context : Context<StateMap<{ "todoState": TodoState; }>> | null;

    constructor() {
        this._context = null;
    }

    /**
     * @returns {Context}
     */
    get context(): Context<StateMap<{ "todoState": TodoState; }>> {
        if (this._context == null) {
            throw new TypeError("Error: context is null");
        }
        return this._context;
    }

    /**
     * @param {Context} newContext
     */
    set context(newContext) {
        this._context = newContext;
    }
}

export default new AppContextLocator();
