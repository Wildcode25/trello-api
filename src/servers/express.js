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
import { createListRouter } from '../routes/list.js'
import { createCardRouter } from '../routes/card.js'
import { CardModel } from '../models/card.js'
import { ListModel } from '../models/list.js'
import { errorHandler } from '../middlewares/errorHandler.js'
import path from 'node:path'
const app = express()
const baseRoute = path.join(process.cwd(), 'dist')
app.use(express.json())
app.use(cookieParser())
app.use(express.static('dist')) 
app.use('/', (req, res)=>{
    res.sendFile(baseRoute,'index.html')
})
app.use('/api', verifyToken)
app.use('/api', createUserRouter(UserModel))
app.use('/api', verifyAuthorization)
app.use('/api/workspace', createWorkspaceRouter(WorkspaceModel))
app.use('/api/board', createBoardRouter(BoardModel))
app.use('/api/list', createListRouter(ListModel))
app.use('/api/card', createCardRouter(CardModel))
app.use('/', errorHandler)


export default app