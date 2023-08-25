import { Router } from 'express';
import chatController from '../controllers/chat.controller.js';

class ChatRouter {
    constructor() {
        this.router = Router();
        this.router.get('/', chatController.getAllMessages);
        this.router.post('/', chatController.saveMessage);
    }

    getRouter() {
        return this.router;
    }
}

export default new ChatRouter();

