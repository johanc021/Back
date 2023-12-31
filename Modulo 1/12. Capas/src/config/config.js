import dotenv from 'dotenv'
import params from './params.js'
import __dirname from '../utils.js'

const mode = params.mode  //dev

dotenv.config({
    path: `./.env.${mode}`
})

export default {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
}