
const socketController = (socket) => {

    console.log('Cliente Conectado', socket.id)

    socket.on('enviar-mensaje', (payload) => {               
        socket.broadcast.emit('enviar-mensaje-servidor', payload)
    })
}


module.exports = {
    socketController
}