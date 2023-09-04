import { Router } from "express"
import userRouter from "./users.router/user.router.js"
import productRouter from "./products.router/product.router.js";
import cartRouter from "./carts.router/cart.router.js";
import chatRouter from "./chats.router/chat.router.js"
import sessionRouter from "./sessions.router.js/sessions.router.js"


const router = Router();

const userRoutes = new userRouter();
const productRoutes = new productRouter();
const cartRoutes = new cartRouter();
const chatRoutes = new chatRouter();
const sessionRoutes = new sessionRouter();


router.use('/user', userRoutes.getRouter())
router.use('/product', productRoutes.getRouter())
router.use('/cart', cartRoutes.getRouter())
router.use('/chat', chatRoutes.getRouter())
router.use('/sessions', sessionRoutes.getRouter())



export default router