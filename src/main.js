import { createApp } from 'vue'
import './style.css'
import axios from 'axios';
import router from './router/router';
import App from './App.vue'


const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.get['Accepts'] = 'application/json'

app.use(router).mount('#app')
