import * as pg from 'pg';
import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const sequelizeOptions: SequelizeOptions = {
    dialect: process.env.DIALECT as any,
    host: process.env.HOST,
    port: process.env.PORT as any,
    dialectModule: pg,
    logging: process.env.LOGGING as any,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}



export function setupSequelize(options: SequelizeOptions = {}) {
    let _sequelize: Sequelize

    _sequelize = new Sequelize({
        ...sequelizeOptions,
        ...options
    })

    return {
        get sequelize() {
            return _sequelize
        },
    };
}