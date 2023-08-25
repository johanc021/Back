import viewsService from '../services/views.service.js';

class ViewsController {
    async getRegister(req, res) {
        res.render('register');
    }

    async getLogin(req, res) {
        res.render('login');
    }

    async getResetPassword(req, res) {
        res.render('resetPassword');
    }

    async getProfile(req, res) {
        res.render('profile', { user: req.user });
    }

    async getProducts(req, res) {
        const { page = 1 } = req.query;

        try {
            const result = await viewsService.getAllProducts(page);
            const { docs, hasPrevPage, hasNextPage, prevPage, nextPage } = result;

            res.render('products', {
                products: docs,
                hasPrevPage,
                hasNextPage,
                prevPage,
                nextPage
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCarts(req, res) {
        try {
            const carts = await viewsService.getAllCarts();
            res.render('carts', { carts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getChat(req, res) {
        try {
            const messages = await viewsService.getAllMessages();
            res.render('chat', { messages });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCartById(req, res) {
        const cartId = req.params.cid;

        try {
            const cart = await viewsService.getCartById(cartId);
            res.render('cart', { cart });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default new ViewsController();
