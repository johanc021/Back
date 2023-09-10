import { Router } from 'express';
import productController from '../../controllers/product.controller.js';
import isAdmin from '../../config/middlewareAuth/authRole/isAdmin.js';
import { authenticate } from '../../config/middlewareAuth/authAuthenticate/authenticate.js';

class ProductRouter {
    constructor() {
        this.router = Router();
        this.router.get('/', productController.getAllProducts);
        this.router.get('/:productId', productController.getProductById);
        this.router.post('/', authenticate, isAdmin, productController.createProduct);
        this.router.put('/:productId', authenticate, isAdmin, productController.updateProduct);
        this.router.delete('/:productId', authenticate, isAdmin, productController.deleteProduct);
    }

    getRouter() {
        return this.router;
    }
}

export default ProductRouter;
