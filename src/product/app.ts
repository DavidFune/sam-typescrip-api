import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { setupSequelize } from './db';
import { ProductModel } from './db/models/product';
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const getProducts = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    
    const { sequelize } = await setupSequelize({models: [ProductModel]})
    
    await sequelize.sync()

    const products = await ProductModel.findAll()

    let _products: ProductModel[] = []

    await sequelize.close()
    
    products.forEach(product => _products.push(product.dataValues))
    
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                "products": _products,
            }),
        };
    } catch (err: unknown) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }

    return response;
}