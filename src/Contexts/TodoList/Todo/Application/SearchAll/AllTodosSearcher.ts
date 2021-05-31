import { Todo } from "../../Domain/Todo";
import { todoRepository } from "../../Domain/TodoRepository";

export class AllTodosSearcher{

    private _context:todoRepository;

    constructor(context : todoRepository){
        this._context = context;
    }

    public async SerachAll(): Promise<Todo[]> {
        const todos = await this._context.SearchAll();
        return todos;
    }
}