import Express from 'express';
import { AllTodosSearcher } from '../../contexts/todo_list/todo/application/SearchAll/AllTodosSearcher';
import { MysqlSequelizeRepository } from '../../contexts/todo_list/todo/infraestructure/persistence/mysql_sequelize_respository';
const app = Express();

app.set('port', 8000);

app.get('/', async (req, res) => {
    const todoSearcer = new AllTodosSearcher(new MysqlSequelizeRepository());
    res.json(await todoSearcer.SerachAll());
});

app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto', app.get('port'));
});