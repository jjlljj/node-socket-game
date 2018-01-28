const express = require( 'express' )
const http = require( 'http' )
const path = require( 'path' )
const socketIO = require( 'socket.io' )

const app = express()
const server = http.Server(app)
const io = socketIO(server)


app.set('port', 5000)
app.use('/static', express.static(__dirname + '/static'))

// Routing
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'))
})

// Start server
server.listen(5000, () => {
  console.log('starting server on port 5000')
})

io.on('connection', (socket) => {

})

setInterval( ()=> {
  // delete this later plss
  io.sockets.emit('message', 'hi!')
}, 1000)