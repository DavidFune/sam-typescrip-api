import { Sequelize, SequelizeOptions } from "sequelize-typescript";

const sequelizeOptions: SequelizeOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5441,
    logging: true,
    username: 'postgres',
    password: 'postgres'
}



export function setupSequelize(options: SequelizeOptions = {}) {
    let _sequelize: Sequelize

    _sequelize = new Sequelize({
        ...sequelizeOptions,
        ...options,
        pool:{
            max: 2,
            min: 0,
            idle: 0,
            acquire: 3002,
            evict: 1
        }
    })

    return {
        get sequelize() {
            return _sequelize
        },
    };
}