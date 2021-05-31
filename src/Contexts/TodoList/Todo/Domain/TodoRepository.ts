import { Todo } from "./Todo";

export interface todoRepository{
    Save () : Promise<void>;
    SearchAll() : Promise<Array<Todo>>    
}