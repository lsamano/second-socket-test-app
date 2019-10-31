const socket = io()

const form = document.getElementById('text-form')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log("hit")
    
    socket.emit("test_event", "Yo")
})