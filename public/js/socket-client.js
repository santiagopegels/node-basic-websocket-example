const socket = io()

const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

socket.on('connect', () => {
    console.log('Conectado')

    lblOffline.style.display = "none"
    lblOnline.style.display = ""
})

socket.on('disconnect', () => {
    console.log('Desconectado')
    lblOnline.style.display = "none"
    lblOffline.style.display = ""
})

socket.on('enviar-mensaje-servidor', (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value
    
    socket.emit('enviar-mensaje', mensaje)

})