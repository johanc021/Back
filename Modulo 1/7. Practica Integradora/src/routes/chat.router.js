import Router from 'express'
import Chats from '../dao/dbManagers/chats.js';


const chatsManager = new Chats('./Chats');


const router = Router();

router.get('/', async (req, res) => {
    let chats = await chatsManager.getAll();
    if (!chats) return res.status(404).json({ status: "No se encontraron Chats" })
    res.send({ status: "success", payload: chats })
})


router.post('/', async (req, res) => {
    let { email, message } = req.body

    let result = await chatsManager.saveMessage({
        email,
        message
    })

    res.send({ status: "success", payload: result })
})

export default router