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
const express_1 = __importDefault(require("express"));
const AllTodosSearcher_1 = require("../../contexts/todo_list/todo/application/SearchAll/AllTodosSearcher");
const mysql_sequelize_respository_1 = require("../../contexts/todo_list/todo/infraestructure/persistence/mysql_sequelize_respository");
const app = express_1.default();
app.set('port', 8000);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoSearcer = new AllTodosSearcher_1.AllTodosSearcher(new mysql_sequelize_respository_1.MysqlSequelizeRepository());
    res.json(yield todoSearcer.SerachAll());
}));
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto', app.get('port'));
});
//# sourceMappingURL=app.js.map