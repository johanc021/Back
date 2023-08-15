import userModel from '../models/users.js';
import { saveJSON, editJSON, removeFromJSON } from '../fileManagers/users.js';

export default class Users {
    constructor(path) {
        this.path = path
    }
    getAll = async () => {
        let users = await userModel.find().populate('cart');
        return users.map(user => user.toObject())
    }

    saveUser = async (user) => {
        let result = await userModel.create(user);
        saveJSON(result)
        return result;
    }

    getById = async (param) => {
        let result = await userModel.findOne(param).populate('cart').lean()
        return result
    }

    getByEmail = async (email) => {
        try {
            const result = await userModel.findOne({ email }).lean();
            return result;
        } catch (error) {
            throw new Error('Error al buscar usuario por correo electrónico');
        }
    }

    updateUser = async (id, user) => {
        delete user._id
        let result = await userModel.updateOne({ _id: id }, { $set: user })
        editJSON(id, user);
        return result
    }

    removeUser = async (userId) => {
        try {
            const result = await userModel.findByIdAndRemove(userId);
            if (!result) {
                throw new Error('El usuario no existe');
            }
            removeFromJSON(userId);
            return userId;
        } catch (error) {
            throw new Error('Error al eliminar el usuario');
        }
    }
}