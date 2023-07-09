import Router from 'express';
import Products from '../dao/dbManagers/products.js'


const productManager = new Products('./products.json');

const router = Router();


router.get('/', async (req, res) => {
    let products = await productManager.getAll();
    if (!products) return res.status(404).json({ status: "Usuarios no encontrados" })
    res.send({ status: "success", payload: products })
})

router.post('/', async (req, res) => {
    let { title, description, code, price, status, stock, category, thumbnail } = req.body

    let result = await productManager.saveProduct({
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnail
    })

    res.send({ status: "success", payload: result })
})




export default router;

