"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const TodoConfiguration = db_1.default.define('todo', {
    todo_id: {
        type: sequelize_1.DataTypes.BIGINT
    },
    todo: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    completado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = TodoConfiguration;
//# sourceMappingURL=todo_configuration.js.map