import { chatsModel } from "../models/chats.js";

export default class Chats {

    constructor(path) {
        this.path = path;
    }

    getAll = async () => {
        let messages = await chatsModel.find().lean()
        return messages
    }

    saveMessages = async (user, message) => {
        if (!user || !message) return ({ status: "error", error: "Faltan datos" })
        let result = await chatsModel.create({ user, message })
        return result
    }
}