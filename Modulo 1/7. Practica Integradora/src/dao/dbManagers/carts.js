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


    deleteProductByIdFromCart = async (idProduct) => {
        const carts = await cartModel.find().lean();

        for (const cart of carts) {
            const products = cart.products;

            const productIndex = products.findIndex(product => product._id == idProduct);

            if (productIndex !== -1) {

                // Crear una copia de los productos
                const updatedProducts = [...products];

                // Eliminar el producto del array y almacenarlo
                const deletedProduct = updatedProducts.splice(productIndex, 1)[0];

                await cartModel.findByIdAndUpdate(cart._id, { products: updatedProducts });

                return deletedProduct;
            }
        }

        console.log('No existe el ID del producto en ningún carrito.');
        return null;
    };

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


}