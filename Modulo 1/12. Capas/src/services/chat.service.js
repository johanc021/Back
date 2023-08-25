import Chats from '../dao/dbManagers/chats.js'

const chatsManager = new Chats();

class ChatService {
    async getAllMessages() {
        try {
            const messages = await chatsManager.getAll();
            return messages;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async saveMessage(user, message) {
        try {
            const result = await chatsManager.saveMessages(user, message);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new ChatService();
