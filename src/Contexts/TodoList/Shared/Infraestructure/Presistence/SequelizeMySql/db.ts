import dotenv from 'dotenv';
dotenv.config();
import {Sequelize} from 'sequelize';

const server = process.env.MYSQL_SERVER || "";
const user = process.env.MYSQL_USER || "";
const password = process.env.MYSQL_PASSWORD || "";
const database = process.env.MYSQL_DATABASE || "";

const db = new Sequelize(database, user, password, {
    host: server,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

export default db;