import express from 'express'
import path from 'path'
import net from 'net'
import { createServer } from 'http'
import { Server } from 'socket.io'

export const app = express()
export const httpServer = createServer(app)
export const io = new Server(httpServer)

app.use('/', express.static(path.resolve(__dirname, '../public')))

void (async () => {
    function testPort(port: number): Promise<boolean> {
        return new Promise((resolve) => {
            const server = net.createServer().listen(port)
            server
                .on('listening', () => {
                    server.close()
                    resolve(true)
                })
                .on('error', () => {
                    resolve(false)
                })
        })
    }
    let finalPort = 0
    for (const port of [80, 8080, 8880, 8888]) {
        if (await testPort(port)) {
            httpServer.listen(port)
            finalPort = port
            break
        }
    }
    if (finalPort <= 0) {
        httpServer.listen(0)
        finalPort = (httpServer.address() as net.AddressInfo).port
    }
    console.log(`[${new Date().toLocaleString()}] Server port ${finalPort}`)
})()
