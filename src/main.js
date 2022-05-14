import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";
import io from 'socket.io-client'

const socket = {
    install: (app) => {
        app.config.globalProperties.$socket = io("//localhost:3000")
        app.config.globalProperties.$axios = axios
    }
}
import  '@/assets/style.scss'

const app = createApp(App)

// app.mount("#app")
app.use(store)
    .use(router)
    .use(socket)
    .mount('#app')
