"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = require("typescript.events");
var REPOSITORY_CHANGE = "REPOSITORY_CHANGE";
var TodoList_1 = require("../domain/TodoList/TodoList");
var MemoryDB_1 = require("./adpter/MemoryDB");
// Collection repository
var TodoListRepository = (function (_super) {
    __extends(TodoListRepository, _super);
    function TodoListRepository(database) {
        if (database === void 0) { database = new MemoryDB_1.default(); }
        var _this = _super.call(this) || this;
        /**
         * @type {MemoryDB}
         */
        _this._database = database;
        return _this;
    }
    /**
     * @param id
     * @private
     */
    TodoListRepository.prototype._get = function (id) {
        // Domain.<id>
        return this._database.get(TodoList_1.default.name + "." + id);
    };
    //find(todoList: TodoList) {
    //    return this._get(todoList.id);
    //}
    /**
     * @returns {TodoList|undefined}
     */
    TodoListRepository.prototype.lastUsed = function () {
        var todoList = this._database.get(TodoList_1.default.name + ".lastUsed");
        return todoList;
        //if (todoList) {
        //    return this._get(todoList.id);
        //}
    };
    /**
     * @param {TodoList} todoList
     */
    TodoListRepository.prototype.save = function (todoList) {
        this._database.set(TodoList_1.default.name + ".lastUsed", todoList);
        //this._database.set(`${TodoList.name}.${todoList.id}`, todoList);
        this.emit(REPOSITORY_CHANGE, todoList);
    };
    //remove(todoList : TodoList) {
    //    //this._database.delete(`${TodoList.name}.${todoList.id}`);
    //    this.emit(REPOSITORY_CHANGE);
    //}
    TodoListRepository.prototype.onChange = function (handler) {
        this.on(REPOSITORY_CHANGE, handler);
    };
    return TodoListRepository;
}(typescript_events_1.Event));
exports.TodoListRepository = TodoListRepository;
// singleton
exports.default = new TodoListRepository();
//# sourceMappingURL=TodoListRepository.js.map