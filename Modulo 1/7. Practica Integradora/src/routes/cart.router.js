import Router from 'express';
import Carts from '../dao/dbManagers/carts.js'

const cartManager = new Carts('./carts.json');

const router = Router();


router.get('/', async (req, res) => {
    let carts = await cartManager.getAll();
    if (!carts) return res.status(404).json({ status: "Carritos no encontrados" })
    res.send({ status: "success", payload: carts })
})

router.post('/', async (req, res) => {
    let { idProduct, idCart } = req.body

    let result = await cartManager.saveCart(idProduct, idCart)

    res.send({ status: "success", payload: result })
})

router.delete('/:idProduct', async (req, res) => {
    let { idProduct } = req.params

    await cartManager.deleteProductByIdFromCart(idProduct)

    res.send({ message: "Producto eliminado del carrito" })
})




export default router;

