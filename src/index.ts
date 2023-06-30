import { io } from './server'

io.on('connection', (socket) => {
    console.log(`客户端[${socket.id}]加入`)

    socket.on('disconnect', (reason) => {
        console.log(`客户端[${socket.id}]离开，原因：${reason}`)
    })
})
