"use strict";
import {Event} from "typescript.events";
const REPOSITORY_CHANGE = "REPOSITORY_CHANGE";
import TodoList from "../domain/TodoList/TodoList";
import MemoryDB from "./adpter/MemoryDB";
// Collection repository

export class TodoListRepository extends Event {
    _database: MemoryDB;
    
    constructor(database = new MemoryDB()) {
        super();
        /**
         * @type {MemoryDB}
         */
        this._database = database;
    }

    /**
     * @param id
     * @private
     */
    _get(id: string) {
        // Domain.<id>
        return this._database.get(`${TodoList.name}.${id}`);
    }

    //find(todoList: TodoList) {
    //    return this._get(todoList.id);
    //}

    /**
     * @returns {TodoList|undefined}
     */
    lastUsed() : TodoList | undefined {
        const todoList = this._database.get(`${TodoList.name}.lastUsed`);
        return todoList;
        //if (todoList) {
        //    return this._get(todoList.id);
        //}
    }

    /**
     * @param {TodoList} todoList
     */
    save(todoList : TodoList) {
        this._database.set(`${TodoList.name}.lastUsed`, todoList);
        //this._database.set(`${TodoList.name}.${todoList.id}`, todoList);
        this.emit(REPOSITORY_CHANGE, todoList);
    }

    //remove(todoList : TodoList) {
    //    //this._database.delete(`${TodoList.name}.${todoList.id}`);
    //    this.emit(REPOSITORY_CHANGE);
    //}

    onChange(handler: () => any) {
        this.on(REPOSITORY_CHANGE, handler);
    }
}
// singleton
export default new TodoListRepository();
