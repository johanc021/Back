import { Router } from 'express';
import productController from '../controllers/product.controller.js';

class ProductRouter {
    constructor() {
        this.router = Router();
        this.router.get('/', productController.getAllProducts);
        this.router.get('/:productId', productController.getProductById);
        this.router.post('/', productController.createProduct);
        this.router.put('/:productId', productController.updateProduct);
        this.router.delete('/:productId', productController.deleteProduct);
    }

    getRouter() {
        return this.router;
    }
}

export default new ProductRouter();
