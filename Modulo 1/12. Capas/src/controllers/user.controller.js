import userService from '../services/user.service.js'
import { STATUS } from '../utils/constantes.js'

class userController {

    async createUser(req, res) {
        try {
            const data = req.body;
            const result = await userService.createUser(data);
            res.status(201).json({ user: result, status: STATUS.SUCCESS });
        } catch (error) {
            // Aquí capturas el error lanzado desde el servicio
            res.status(400).json({ error: error.message, status: STATUS.FAIL });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({ users, status: STATUS.SUCCESS });
        } catch (error) {
            res.status(500).json({ error: error.message, status: STATUS.FAIL });
        }
    }

    async getUserById(req, res) {
        try {
            const userId = req.params.uid;
            const user = await userService.getUserById(userId);
            res.status(200).json({ user, status: STATUS.SUCCESS });
        } catch (error) {
            res.status(400).json({ error: error.message, status: STATUS.FAIL });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.uid;
            const updatedUserData = req.body;
            const result = await userService.updateUser(userId, updatedUserData);
            res.status(200).json({ result, status: STATUS.SUCCESS });
        } catch (error) {
            res.status(400).json({ error: error.message, status: STATUS.FAIL });
        }
    }

    async deleteUser(req, res) {
        const userId = req.params.uid;
        try {
            const result = await userService.deleteUser(userId);
            res.status(200).json({ result, status: STATUS.SUCCESS });
        } catch (error) {
            res.status(400).json({ error: error.message, status: STATUS.FAIL });
        }
    }
}

export default new userController()