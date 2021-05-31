import { Todo } from "./todo";

export interface todoRepository{
    Save () : Promise<void>;
    SearchAll() : Promise<Array<Todo>>    
}