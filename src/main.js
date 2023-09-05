import { createApp } from 'vue'
import './style.css'
import router from './router/router.js';
import App from './App.vue'

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.get['Accepts'] = 'application/json'

createApp(App).mount('#app')
