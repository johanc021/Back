import express from 'express'
import handlebars from 'express-handlebars'
import productsRoutes from './routes/products.router.js'
import cartRoutes from './routes/cart.router.js'
import wsRoutes from './routes/views.router.js'
import __dirname from './utils.js';
import { Server } from 'socket.io'


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const httpserver = app.listen(8090, () => console.log('Escuchando en el puerto http://localhost:8090/'))

const socketServer = new Server(httpserver)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(`${__dirname}/public`));


app.use('/api/products', productsRoutes)
app.use('/api/add-to-cart', cartRoutes)
app.use('/api/carts', cartRoutes)
app.use('/api/realtimeproducts', wsRoutes)


/* const products = [{ id: 1, nombre: "Producto 1" }, { id: 2, nombre: "Producto 2" }]; */
const products = [];

socketServer.on('connection', socket => {
    console.log('Nuevo Cliente con id # ' + socket.id)


    socket.on('addProduct', (newProduct) => {
        // Agregar el nuevo producto a la lista de productos existente
        products.push(newProduct);
        // Emitir la lista actualizada de productos a todos los clientes conectados
        socket.emit('updateProducts', products);
    });


    socket.on('message', data => {
        console.log(data)
    })
    socket.emit('updateProducts', { products })
})

export { app, socketServer };