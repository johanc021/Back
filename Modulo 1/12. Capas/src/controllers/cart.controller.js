import cartService from '../services/cart.service.js';

class CartController {
    async getAllCarts(req, res) {
        try {
            const carts = await cartService.getAllCarts();
            res.status(200).json({ carts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCart(req, res) {
        try {
            const { cartId } = req.params;
            const cart = await cartService.getCart(cartId);
            res.status(200).json({ cart });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteProductFromCart(req, res) {
        try {
            const { cartId, productId } = req.params;
            const updatedCart = await cartService.deleteProductFromCart(cartId, productId);
            res.status(200).json({ cart: updatedCart });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async saveProductToCart(req, res) {
        try {
            const { idProduct, idCart, quantity } = req.body;
            const cart = await cartService.saveProductToCart(idProduct, idCart, quantity);
            res.status(201).json({ cart });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateCart(req, res) {
        try {
            const { cartId } = req.params;
            const { products } = req.body;
            const updatedCart = await cartService.updateCart(cartId, products);
            res.status(200).json({ cart: updatedCart });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateProductQuantity(req, res) {
        try {
            const { cartId, productId } = req.params;
            const { quantity } = req.body;
            const updatedCart = await cartService.updateProductQuantity(cartId, productId, quantity);
            res.status(200).json({ cart: updatedCart });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteAllProductsFromCart(req, res) {
        try {
            const { cartId } = req.params;
            const cart = await cartService.deleteAllProductsFromCart(cartId);
            res.status(200).json({ cart });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new CartController();
