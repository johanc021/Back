import productService from '../services/product.service.js';

class ProductController {
    async getAllProducts(req, res) {
        try {
            const { page, limit } = req.query;
            const products = await productService.getAllProducts(page, limit);
            res.status(200).json({ products });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const { productId } = req.params;
            const product = await productService.getProductById(productId);
            res.status(200).json({ product });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createProduct(req, res) {
        try {
            const product = req.body;
            const createdProduct = await productService.createProduct(product);
            res.status(201).json({ createdProduct });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { productId } = req.params;
            const updatedProduct = req.body;
            const updated = await productService.updateProduct(productId, updatedProduct);
            res.status(200).json({ updated });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { productId } = req.params;
            const deleted = await productService.deleteProduct(productId);
            res.status(200).json({ deleted });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ProductController();
