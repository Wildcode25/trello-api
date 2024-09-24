import app from './src/servers/express.js'
import {createServer} from 'http'

const server = createServer(app)
const PORT = process.env.PORT || 8080
server.listen(PORT, ()=>console.log(`server running in ${PORT}`))
