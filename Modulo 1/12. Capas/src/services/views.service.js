import Products from '../dao/dbManagers/products.js';
import Carts from '../dao/dbManagers/carts.js';
import Chats from '../dao/dbManagers/chats.js';

class ViewsService {
    constructor() {
        this.productManager = new Products();
        this.cartManager = new Carts();
        this.chatManager = new Chats();
    }

    async getAllProducts(page) {
        try {
            const result = await this.productManager.getAll(page, 5);
            console.log(result)
            return result;
        } catch (error) {
            throw new Error('Error al obtener los productos.');
        }
    }

    async getAllCarts() {
        try {
            const carts = await this.cartManager.getAll();
            return carts;
        } catch (error) {
            throw new Error('Error al obtener los carritos.');
        }
    }

    async getAllMessages() {
        try {
            const messages = await this.chatManager.getAll();
            return messages;
        } catch (error) {
            throw new Error('Error al obtener los mensajes de chat.');
        }
    }

    async getCartById(cartId) {
        try {
            const cart = await this.cartManager.getCart(cartId);
            return cart;
        } catch (error) {
            throw new Error('Carrito no encontrado.');
        }
    }
}

export default new ViewsService();
