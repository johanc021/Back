const socket = io();
const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");

socket.on('updateProducts', (products) => {
    console.log("Estoy actualizando los productos");
    console.log(products);
    // Generar el HTML de los productos
    const productsHTML = products.map(product => `<li>${product.title}</li>`).join("");

    // Asignar el HTML generado al elemento "productList"
    productList.innerHTML = productsHTML;
});

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const code = document.getElementById("code").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    // Crear un objeto con los datos del producto
    const newProduct = {
        title,
        description,
        code,
        price,
        stock
    };

    // Enviar el nuevo producto al servidor a través de sockets
    socket.emit('addProduct', newProduct);

    // Limpiar el formulario
    productForm.reset();
});
