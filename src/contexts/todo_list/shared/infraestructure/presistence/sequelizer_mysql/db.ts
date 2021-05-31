import {Sequelize} from 'sequelize';

const db = new Sequelize('node_todo_list','root', '*Saass_2021@mySQL*', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

export default db;