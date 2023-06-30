import express from 'express'
import fs from 'fs'
import { socketServer } from '../App.js';

const router = express.Router();

router.get('/', (req, res) => {
    /* const data = fs.readFileSync('./products.json', 'utf-8');
    const products = JSON.parse(data); */

    // Emitir los productos al cliente a través de Socket.IO
    /* socketServer.emit('updateProducts', products); */

    res.render('realTimeProducts', {});
});



export default router;