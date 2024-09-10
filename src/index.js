import app from './servers/express.js'
import {createServer} from 'http'

const server = createServer(app)
const PORT = process.env.PORT
server.listen(PORT, ()=>console.log(`server running in ${PORT}`))
