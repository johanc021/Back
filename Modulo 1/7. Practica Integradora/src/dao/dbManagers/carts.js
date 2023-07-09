import { cartModel } from "../models/carts.js";
import { productModel } from "../models/products.js";
import { saveJSON } from "../fileManagers/carts.js";

export default class Carts {
    constructor(path) {
        this.path = path;
    }


    getAll = async () => {
        let carts = await cartModel.find().lean()
        /* console.log(products) */
        return carts
    }

    saveCart = async (idProduct, idCart) => {
        let existProduct = await productModel.findById(idProduct).lean();
        let cart;

        if (!existProduct) {
            throw new Error('El producto no existe');
        }

        if (!idCart) {
            cart = await cartModel.create({ products: [existProduct] });
        } else {
            cart = await cartModel.findById(idCart);

            if (!cart) {
                throw new Error('El carrito no existe');
            }

            cart.products.push(existProduct);
            await cart.save();
        }

        // Función para guardar en JSON
        saveJSON(cart);

        return cart;
    }



    /* saveCart = async (idProduct, idCart) => {

        let existProduct = await productModel.findById(idProduct).lean();

        let cart = {
            products: [existProduct]
        }

        let result = await cartModel.create(cart)

        //funcion para guardar en JSON
        saveJSON(result)

        return result
    } */
}