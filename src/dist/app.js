"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const index_1 = require("./db/index");
const product_1 = __importDefault(require("./db/models/product"));
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
const getProducts = async (event) => {
    let response;
    const { sequelize } = await (0, index_1.setupSequelize)({ models: [product_1.default] });
    await sequelize.sync();
    const products = await product_1.default.findAll();
    let _products = [];
    await sequelize.close();
    products.forEach(product => _products.push(product.dataValues));
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                "products": _products,
            }),
        };
    }
    catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }
    return response;
};
exports.getProducts = getProducts;
//# sourceMappingURL=app.js.map