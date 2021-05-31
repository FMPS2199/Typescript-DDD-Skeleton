import TodoConfiguration from "../../../shared/infraestructure/presistence/sequelizer_mysql/sequelize_configuration/todo_configuration";
import { Todo } from "../../domain/todo";
import { todoRepository } from "../../domain/todo_repository";

export class MysqlSequelizeRepository implements todoRepository {
    async Save(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async SearchAll(): Promise<Todo[]> {
        const todos = await TodoConfiguration.findAll();
        const listaTodos : Array<Todo> = [];
        todos.forEach((todo:any) => {
            listaTodos.push(new Todo(todo.id_todo, todo.todo, todo.estado, todo.completado));
        });
        return listaTodos;
    }
}