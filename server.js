// Express server
import express from 'express'
const app = express()

// For socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = 3000
server.listen(PORT, () => console.log(`Running on Port ${PORT}`))

// Allows for serving static files
app.use(express.static(__dirname + '/'));

// Routes + Actions
app.get('/home', (req, res) => res.sendFile(__dirname + '/index.html'))

// On socket.io connection
io.on('connection', socket => {
    console.log("Now connnected.");
    // socket.on('socket_event', callback)
    
    socket.on('test_event', payload => {
        console.log(payload)
    })
    
    socket.on('disconnect', () => console.log("Disconnected."))
})
