import bcrypt from 'bcrypt'
import Users from '../dao/dbManagers/users.js'

const userManager = new Users('./filesJSON/users.json')

class UserService {

    async getAllUsers() {
        try {
            const users = await userManager.getAll();
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createUser(user) {
        try {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
            const response = await userManager.saveUser(user);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateUser(userId, updatedUserData) {
        try {
            const result = await userManager.updateUser(userId, updatedUserData);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteUser(userId) {
        try {
            const result = await userManager.removeUser(userId);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getUserById(userId) {
        try {
            const user = await userManager.getById({ _id: userId });
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default new UserService()