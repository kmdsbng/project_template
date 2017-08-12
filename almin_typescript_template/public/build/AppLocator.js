// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppContextLocator = (function () {
    function AppContextLocator() {
        this._context = null;
    }
    Object.defineProperty(AppContextLocator.prototype, "context", {
        /**
         * @returns {Context}
         */
        get: function () {
            if (this._context == null) {
                throw new TypeError("Error: context is null");
            }
            return this._context;
        },
        /**
         * @param {Context} newContext
         */
        set: function (newContext) {
            this._context = newContext;
        },
        enumerable: true,
        configurable: true
    });
    return AppContextLocator;
}());
exports.AppContextLocator = AppContextLocator;
exports.default = new AppContextLocator();
//# sourceMappingURL=AppLocator.js.map