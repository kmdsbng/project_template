"use strict";
const assert = require("assert");
/*
 ES6 Map like object.
 This is not iterable.
 */
export default class MapLike {
    _store: object;

    constructor(entries : Array<any> = []) {
        this._store = Object.create(null);
        entries.forEach(entry => {
            assert(Array.isArray(entry), "new MapLike([ [key, value] ])");
            this.set(entry[0], entry[1]);
        });
    }

    /**
     * @returns {Object}
     */
    toJSON() {
        return this._store;
    }

    /**
     * get keys
     * @returns {Array}
     */
    keys() {
        return Object.keys(this._store);
    }

    /**
     * get values
     * @returns {Array}
     */
    values() {
        /* eslint-disable guard-for-in */
        const keys = this.keys();
        const store = this._store;
        const results : any[] = [];
        keys.forEach((key : string) => {
            results.push((store as any)[key]);
        });
        return results;
        /* eslint-enable guard-for-in */
    }

    /**
     * @param {string} key
     * @returns {*}
     */
    get(key : string) {
        return (this._store as any)[key];
    }

    has(key : string) : boolean {
        return this.get(key) != null;
    }

    set(key : string, value : any) {
        (this._store as any)[key] = value;
        return this;
    }

    delete(key : string){
        (this._store as any)[key] = null;
    }

    clear() : MapLike {
        this._store = Object.create(null);
        return this;
    }
}
