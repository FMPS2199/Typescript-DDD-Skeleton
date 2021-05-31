import { DataTypes } from 'sequelize';
import db from '../db';

const TodoConfiguration = db.define('todo', {
        todo_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        todo: {
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN
        },
        completado: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: 'todos'
    }
  );

export default TodoConfiguration;