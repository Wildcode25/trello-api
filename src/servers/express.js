import express from 'express'
import { UserModel } from '../models/user.js'
import { createUserRouter } from '../routes/user.js'
import '../config/dotenv.js'

import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/', createUserRouter(UserModel))
export default app