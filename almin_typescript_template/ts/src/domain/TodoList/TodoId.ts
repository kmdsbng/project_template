"use strict";

export default class TodoId {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
        Object.freeze(this);
        this.checkValid();
    }

    equals(other: TodoId) {
        return this.value == other.value;
    }

    checkValid() {
        if (this.value == null) {
            throw new TypeError("Invalid id : null");
        }
        if (this.value.length == 0) {
            throw new TypeError("Invalid id : blank string");
        }
        if (this.value.length > 50) {
            throw new TypeError("Invalid id : too long");
        }
    }
}

