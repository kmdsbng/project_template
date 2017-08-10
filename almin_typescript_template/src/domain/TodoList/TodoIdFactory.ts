"use strict";
import TodoId from './TodoId';
import uuid = require("uuid");

export default class TodoIdFactory {
    buildId() {
        return new TodoId(uuid.v1());
    }
}

