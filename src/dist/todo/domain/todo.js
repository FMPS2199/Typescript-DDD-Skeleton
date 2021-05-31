"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(todo_id, todo, estado, completado) {
        this.todo_id = todo_id;
        this.todo = todo;
        this.estado = estado;
        this.completado = completado;
    }
    static create(todo_id, todo, estado, completado) {
        const newTodo = new Todo(todo_id, todo, estado, completado);
        return newTodo;
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map