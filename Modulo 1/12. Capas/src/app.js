import express from "express";
import __dirname from './utils.js'
import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routers/user.router.js"
import productRouter from "./routers/product.router.js"
import cartRouter from "./routers/cart.router.js"
import chatRouter from "./routers/chat.router.js"
import viewsRouter from "./routers/views.router.js"
import sessionRouter from "./routers/sessions.router.js";
import handlebars from 'express-handlebars'
import mongoose from 'mongoose';
import { Server } from 'socket.io'
import passport from "passport";
import initializedPassport from "./config/passport.middleware.js";
import initPassportGithub from "./config/passportGithub.config.js";
import cookieParser from 'cookie-parser'
import env from './config/config.js'

const app = express();

const connection = mongoose.connect(
    env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

//handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

//sesiones
app.use(session({
    store: MongoStore.create({
        mongoUrl: env.MONGO_URI,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 3600
    }),
    secret: "C0d3r123",
    resave: false,
    saveUninitialized: false

}))

//passport
initializedPassport();
initPassportGithub();
app.use(passport.initialize())
app.use(cookieParser())

// uso de json con postman
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// rutas del router
app.use('/', viewsRouter.getRouter())
app.use('/api/user', userRouter.getRouter())
app.use('/api/product', productRouter.getRouter())
app.use('/api/cart', cartRouter.getRouter())
app.use('/api/chat', chatRouter.getRouter())
app.use('/api/sessions', sessionRouter.getRouter())

/* app.use('/api/sessions', sessionRouter) */

const server = app.listen(env.PORT, () => {
    console.log("Servidor levantado en http://localhost:8080")
})

const socketServer = new Server(server)

socketServer.on("connection", socket => {
    console.log("Nuevo cliente");
})

export default socketServer
