import TodoConfiguration from "../../../Shared/Infraestructure/Presistence/SequelizeMySql/SequelizeConfigurations/TodoConfigurations";
import { Todo } from "../../Domain/Todo";
import { todoRepository } from "../../Domain/TodoRepository";

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