import app from './servers/express.js'
import {createServer} from 'http'

const server = createServer(app)

server.listen(3000, ()=>console.log(`server running in ${3000}`))
