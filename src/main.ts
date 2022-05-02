import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import routes from './router'

import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
