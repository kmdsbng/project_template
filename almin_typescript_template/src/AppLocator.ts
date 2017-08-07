// LICENSE : MIT
"use strict";

import {Context}  from "almin";

declare type StateMap<T> = {
    [P in keyof T]: T[P];
};

export class AppContextLocator {
    _context : Context<StateMap<{ "todoState": any; }>>;

    constructor() {
        /**
         * @type {Context}
         * @private
         */
        this._context = null;
    }

    /**
     * @returns {Context}
     */
    get context() {
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
