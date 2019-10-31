// Express server
const express = require('express')
const app = express()

// For socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = 3000

app.get('/', (req, res) => res.send("Home"))

app.listen(PORT, () => console.log(`Running on Port ${PORT}`))