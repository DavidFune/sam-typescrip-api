import * as pg from 'pg';
import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const sequelizeOptions: SequelizeOptions = {
    dialect: 'postgres',
    host: '192.168.2.6',
    port: 5441,
    dialectModule: pg,
    logging: true,
    username: 'postgres',
    password: 'postgres'
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