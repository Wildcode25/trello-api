import express from 'express'
import { UserModel } from '../models/user.js'
import { createUserRouter } from '../routes/user.js'
import '../config/dotenv.js'

import cookieParser from 'cookie-parser'
import { verifyToken } from '../middlewares/verifyToken.js'
import { createWorkspaceRouter } from '../routes/workspace.js'
import { WorkspaceModel } from '../models/workspace.js'
import { verifyAuthorization } from '../middlewares/verifyAuthorization.js'
import { createBoardRouter } from '../routes/board.js'
import { BoardModel } from '../models/board.js'
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/', verifyToken)
app.use('/', createUserRouter(UserModel))
app.use('/workspace',verifyAuthorization, createWorkspaceRouter(WorkspaceModel))
app.use('/board',verifyAuthorization, createBoardRouter(BoardModel))

export default app