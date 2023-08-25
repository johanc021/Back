import express from 'express'
import socketServer from '../app.js';
import __dirname from '../utils.js';
import chatService from '../services/chat.service.js';

const app = express()

app.use(express.json());
app.use(express.static(__dirname + "/public"))

class ChatController {
    async getAllMessages(req, res) {
        try {
            const messages = await chatService.getAllMessages();
            res.status(200).json({ payload: messages });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async saveMessage(req, res) {
        try {
            const { user, message } = req.body;
            const result = await chatService.saveMessage(user, message);
            socketServer.emit("newMessage", result)
            res.status(201).json({ result, payload: result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ChatController();
