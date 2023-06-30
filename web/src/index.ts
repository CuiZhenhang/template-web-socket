import { io } from 'socket.io-client'
import { createApp } from 'petite-vue'

const appData = {
    count: 3000,
    increase() {
        this.count += Math.ceil(200 * Math.random())
    }
}
const app = createApp(appData)

document.addEventListener('DOMContentLoaded', () => {
    app.mount('#app')
})

const socket = io()

socket.on('connect', () => {
    console.log('连接成功')
})
