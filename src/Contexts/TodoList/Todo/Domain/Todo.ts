export class Todo{
    private todo_id : number;
    private todo : string;
    private estado : boolean;
    private completado : boolean;

    constructor(todo_id:number, todo:string, estado:boolean, completado:boolean){
        this.todo_id = todo_id;
        this.todo = todo;
        this.estado = estado;
        this.completado = completado;
    }

    public static create(todo_id:number, todo:string, estado:boolean, completado:boolean) : Todo {
        const newTodo = new Todo(todo_id, todo, estado, completado);

        return newTodo;
    }
}