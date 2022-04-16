import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import io from 'socket.io-client'
const socket = {
    install: (app) =>  {
        app.config.globalProperties.$socket = io("http://localhost:3000")
    }
}
import  '@/assets/style.scss'

const app = createApp(App)

// app.mount("#app")
app.use(store)
    .use(router)
    .use(socket)
    .mount('#app')
