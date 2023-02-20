import { setupSequelize } from "..";
import { ProductModel } from "./product";

describe('ProductModel Unit Test', () => {
    const {sequelize} = setupSequelize({models: [ProductModel]})

    beforeEach(async () => {
        await sequelize.sync()
    });

    afterAll(async () => {
        await sequelize.close()
    });

    it('should get product', async () => {
        
        const products = await ProductModel.findAll()

        let _products: ProductModel[] = []

        products.forEach(product => _products.push(product.dataValues))
        
        console.log(_products);
        
    });
});