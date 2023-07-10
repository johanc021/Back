import mongoose from "mongoose";

const chatsCollection = 'chats'


const chatsSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const chatsModel = mongoose.model(chatsCollection, chatsSchema)