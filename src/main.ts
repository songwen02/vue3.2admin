import { createApp } from 'vue'
import './style.css'
import 'uno.css'

import App from './App.vue' 
/* 路由 */
import routes from './router/index'


import {createPinia} from 'pinia'

const app =  createApp(App)
app.use(routes)
app.use(createPinia());
app.mount('#app');
