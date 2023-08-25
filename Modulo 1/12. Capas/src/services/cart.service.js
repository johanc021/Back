import Carts from '../dao/dbManagers/carts.js'

const cartsManager = new Carts();

class CartService {
    async getAllCarts() {
        try {
            const carts = await cartsManager.getAll();
            return carts;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getCart(cartId) {
        try {
            const cart = await cartsManager.getCart(cartId);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteProductFromCart(cartId, productId) {
        try {
            const updatedCart = await cartsManager.deleteProductByIdFromCart(cartId, productId);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async saveProductToCart(idProduct, idCart, quantity) {
        try {
            const cart = await cartsManager.saveCart(idProduct, idCart, quantity);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateCart(cartId, products) {
        try {
            const updatedCart = await cartsManager.updateCartById(cartId, products);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateProductQuantity(cartId, productId, quantity) {
        try {
            const updatedCart = await cartsManager.updateProductQuantity(cartId, productId, quantity);
            return updatedCart;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteAllProductsFromCart(cartId) {
        try {
            const cart = await cartsManager.deleteAllProductsFromCart(cartId);
            return cart;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new CartService();
