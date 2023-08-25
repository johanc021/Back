import { Router } from 'express';
import passport from 'passport';
import viewsController from '../controllers/views.controller.js';

class ViewsRouter {
    constructor() {
        this.router = Router();
        this.router.get('/register', viewsController.getRegister);
        this.router.get('/login', viewsController.getLogin);
        this.router.get('/resetPassword', viewsController.getResetPassword);
        this.router.get('/profile', passport.authenticate('current', { session: false }), viewsController.getProfile);
        this.router.get('/products', viewsController.getProducts);
        this.router.get('/carts', viewsController.getCarts);
        this.router.get('/chat', viewsController.getChat);
        this.router.get('/carts/:cid', viewsController.getCartById);
    }

    getRouter() {
        return this.router;
    }
}

export default new ViewsRouter();
