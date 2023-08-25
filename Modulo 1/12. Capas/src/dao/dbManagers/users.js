import userModel from '../models/users.js';
import { saveJSON, editJSON, removeFromJSON } from '../fileManagers/users.js';

export default class Users {
    constructor(path) {
        this.path = path;
    }
    //populate con carts
    /* getAll = async () => {
        try {
            let users = await userModel.find().populate('cart');
            return users.map(user => user.toObject());
        } catch (error) {
            throw new Error('Error al obtener la lista de usuarios');
        }
    } */

    getAll = async () => {
        try {
            let users = await userModel.find();
            return users
        } catch (error) {
            throw new Error('Error al obtener la lista de usuarios');
        }
    }

    saveUser = async (user) => {
        // Verificar si el email ya existe en la base de datos
        const existingUser = await userModel.findOne({ email: user.email });

        if (existingUser) {
            throw new Error('El email ya existe en la base de datos');
        }

        // Si el email no existe, guardar el usuario en la base de datos
        let result = await userModel.create(user);
        return result;
    }
    //populate con cart
    /* getById = async (param) => {
        try {
            let result = await userModel.findOne(param).populate('cart').lean();
            return result;
        } catch (error) {
            throw new Error('Error al obtener el usuario por ID');
        }
    } */

    getById = async (param) => {
        try {
            let result = await userModel.findOne(param);
            return result;
        } catch (error) {
            throw new Error('Error al obtener el usuario por ID');
        }
    }

    updateUser = async (id, user) => {
        try {
            delete user._id;
            let result = await userModel.updateOne({ _id: id }, { $set: user });
            /*  editJSON(id, user); */
            return result;
        } catch (error) {
            throw new Error('Error al actualizar el usuario');
        }
    }

    removeUser = async (userId) => {
        try {
            const result = await userModel.findByIdAndRemove(userId);
            if (!result) {
                throw new Error('El usuario no existe');
            }
            /*  removeFromJSON(userId); */
            return userId;
        } catch (error) {
            throw new Error('Error al eliminar el usuario');
        }
    }
}
