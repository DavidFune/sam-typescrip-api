"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSequelize = void 0;
const pg = __importStar(require("pg"));
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelizeOptions = {
    dialect: 'postgres',
    host: '192.168.2.6',
    port: 5441,
    dialectModule: pg,
    logging: true,
    username: 'postgres',
    password: 'postgres'
};
function setupSequelize(options = {}) {
    let _sequelize;
    _sequelize = new sequelize_typescript_1.Sequelize({
        ...sequelizeOptions,
        ...options
    });
    return {
        get sequelize() {
            return _sequelize;
        },
    };
}
exports.setupSequelize = setupSequelize;
//# sourceMappingURL=index.js.map