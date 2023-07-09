import express from "express";
import __dirname from './utils.js'
import viewRouter from './routes/views.router.js'
import productsRouter from './routes/product.router.js'
import cartsRouter from './routes/cart.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';


const app = express();
const PORT = 8090;

mongoose.set('strictQuery', false)
const connection = mongoose.connect('mongodb+srv://Aruzuhed:Coder123@ecommerce.jgx5dnr.mongodb.net/?retryWrites=true&w=majority');


//handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


// uso de json con postman
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', viewRouter)


// rutas del router
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

/* app.use('/api/courses', coursesRouter)
app.use('/api/users', usersRouter) */



const server = app.listen(PORT, () => {
    console.log("Servidor levantado en http://localhost:8090")
})
