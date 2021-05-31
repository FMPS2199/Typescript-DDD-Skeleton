"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlSequelizeRepository = void 0;
const todo_configuration_1 = __importDefault(require("../../../shared/infraestructure/presistence/sequelizer_mysql/sequelize_configuration/todo_configuration"));
const todo_1 = require("../../domain/todo");
class MysqlSequelizeRepository {
    Save() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    SearchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield todo_configuration_1.default.findAll();
            const listaTodos = [];
            todos.forEach((todo) => {
                listaTodos.push(new todo_1.Todo(todo.id_todo, todo.todo, todo.estado, todo.completado));
            });
            return listaTodos;
        });
    }
}
exports.MysqlSequelizeRepository = MysqlSequelizeRepository;
//# sourceMappingURL=mysql_sequelize_respository.js.map