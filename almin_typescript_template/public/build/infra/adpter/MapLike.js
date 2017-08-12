"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
/*
 ES6 Map like object.
 This is not iterable.
 */
var MapLike = (function () {
    function MapLike(entries) {
        if (entries === void 0) { entries = []; }
        var _this = this;
        this._store = Object.create(null);
        entries.forEach(function (entry) {
            assert(Array.isArray(entry), "new MapLike([ [key, value] ])");
            _this.set(entry[0], entry[1]);
        });
    }
    /**
     * @returns {Object}
     */
    MapLike.prototype.toJSON = function () {
        return this._store;
    };
    /**
     * get keys
     * @returns {Array}
     */
    MapLike.prototype.keys = function () {
        return Object.keys(this._store);
    };
    /**
     * get values
     * @returns {Array}
     */
    MapLike.prototype.values = function () {
        /* eslint-disable guard-for-in */
        var keys = this.keys();
        var store = this._store;
        var results = [];
        keys.forEach(function (key) {
            results.push(store[key]);
        });
        return results;
        /* eslint-enable guard-for-in */
    };
    /**
     * @param {string} key
     * @returns {*}
     */
    MapLike.prototype.get = function (key) {
        return this._store[key];
    };
    MapLike.prototype.has = function (key) {
        return this.get(key) != null;
    };
    MapLike.prototype.set = function (key, value) {
        this._store[key] = value;
        return this;
    };
    MapLike.prototype.delete = function (key) {
        this._store[key] = null;
    };
    MapLike.prototype.clear = function () {
        this._store = Object.create(null);
        return this;
    };
    return MapLike;
}());
exports.default = MapLike;
//# sourceMappingURL=MapLike.js.map