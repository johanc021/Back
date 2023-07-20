import { Router } from 'express';

import Products from '../dao/dbManagers/products.js'
import Carts from '../dao/dbManagers/carts.js'
import Chats from '../dao/dbManagers/chats.js'

const productManager = new Products();
const cartManager = new Carts();
const chatManager = new Chats()

const router = Router();

router.get('/products', async (req, res) => {
    let products = await productManager.getAll();
    console.log(products)
    res.render('products', { products })
})

router.get('/carts', async (req, res) => {
    let carts = await cartManager.getAll();
    console.log(carts)
    res.render('carts', { carts })
})

router.get("/chat", async (req, res) => {
    let messages = await chatManager.getAll()
    res.render("chat", { messages })
})

export default router;