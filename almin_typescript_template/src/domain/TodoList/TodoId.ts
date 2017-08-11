"use strict";

export default class TodoId {
    readonly value: string;

    constructor(value: string) {
        this.checkValid(value);
        this.value = value;
        Object.freeze(this);
    }

    equals(other: TodoId) {
        return this.value === other.value;
    }

    checkValid(value: string) {
        if (!value) {
            throw new TypeError("Invalid id : null");
        }
        if (value.length == 0) {
            throw new TypeError("Invalid id : blank string");
        }
        if (value.length > 50) {
            throw new TypeError("Invalid id : too long");
        }
    }
}

