import fs from 'fs';

export const saveJSON = (result) => {
    // Verificar si el archivo JSON existe
    if (fs.existsSync('products.json')) {
        // Leer el archivo JSON existente
        const productsData = fs.readFileSync('products.json', 'utf8');
        const products = JSON.parse(productsData);

        // Agregar el nuevo producto a la lista de productos
        products.push(result);

        // Escribir la lista de productos actualizada en el archivo JSON
        fs.writeFileSync('products.json', JSON.stringify(products), 'utf8');
    } else {
        // Crear un nuevo archivo JSON con el objeto directamente
        fs.writeFileSync('products.json', JSON.stringify([result]), 'utf8');
    }
}