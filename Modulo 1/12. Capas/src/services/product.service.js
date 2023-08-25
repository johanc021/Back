import Product from '../dao/dbManagers/products.js'

const productManager = new Product('./filesJSON/products.json')

class ProductService {
    async getAllProducts(page, limit) {
        try {
            const products = await productManager.getAll(page, limit);
            return products;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getProductById(productId) {
        try {
            const product = await productManager.getProductById(productId);
            return product;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createProduct(product) {
        try {
            const createdProduct = await productManager.saveProduct(product);
            return createdProduct;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateProduct(productId, updatedProduct) {
        try {
            const updated = await productManager.editProduct(productId, updatedProduct);
            return updated;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteProduct(productId) {
        try {
            const deleted = await productManager.deleteProduct(productId);
            return deleted;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new ProductService();
