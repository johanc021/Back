import { Router } from 'express';
import cartController from '../controllers/cart.controller.js';

class ProductRouter {
    constructor() {
        this.router = Router();
        this.router.get('/', cartController.getAllCarts);
        this.router.get('/:cartId', cartController.getCart);
        this.router.delete('/:cartId/products/:productId', cartController.deleteProductFromCart);
        this.router.post('/', cartController.saveProductToCart);
        this.router.put('/:cartId', cartController.updateCart);
        this.router.put('/:cartId/products/:productId', cartController.updateProductQuantity);
        this.router.delete('/:cartId', cartController.deleteAllProductsFromCart);
    }

    getRouter() {
        return this.router;
    }
}

export default new ProductRouter();
