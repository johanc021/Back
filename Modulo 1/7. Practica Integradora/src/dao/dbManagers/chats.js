import { chatsModel } from "../models/chats.js";

export default class Chats {

    constructor(path) {
        this.path = path;
    }

    getAll = async () => {
        let messages = await chatsModel.find().lean()
        return messages
    }

    saveMessage = async message => {
        let messages = await chatsModel.create(message)
        return messages
    }

}