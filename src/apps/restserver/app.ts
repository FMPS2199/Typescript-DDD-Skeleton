import Express from 'express';
import { AllTodosSearcher } from '../../Contexts/TodoList/Todo/Application/SearchAll/AllTodosSearcher';
import { MysqlSequelizeRepository } from '../../Contexts/TodoList/Todo/Infraestructure/Persistence/MySqlSequelizeRepository';
const app = Express();

app.set('port', 8000);

app.get('/', async (req, res) => {
    const todoSearcer = new AllTodosSearcher(new MysqlSequelizeRepository());
    res.json(await todoSearcer.SerachAll());
});

app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto', app.get('port'));
});