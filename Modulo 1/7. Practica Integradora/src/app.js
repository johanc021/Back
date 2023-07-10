import express from "express";
import __dirname from './utils.js'
import viewRouter from './routes/views.router.js'
import productsRouter from './routes/product.router.js'
import cartsRouter from './routes/cart.router.js'
import chatsRouter from './routes/chat.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';
/* import { Server } from 'socket.io' */


const app = express();
const PORT = 8090;

mongoose.set('strictQuery', false)
const connection = mongoose.connect('mongodb+srv://Aruzuhed:Coder123@ecommerce.jgx5dnr.mongodb.net/?retryWrites=true&w=majority');


//handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))


// uso de json con postman
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', viewRouter)


// rutas del router
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/chats', chatsRouter)

const server = app.listen(PORT, () => {
    console.log("Servidor levantado en http://localhost:8090")
})


/* const io = new Server(server)

const messages = [];

io.on('connection', socket => {
    console.log("Hay usuarios conectados");

    socket.on('message', data => {
        messages.push(data)
        io.emit('messageLogs', messages)
        console.log(data)
    })

}) */