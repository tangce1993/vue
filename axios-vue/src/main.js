import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './service/http'

const app = createApp(App)
app.use(store).use(router).mount('#app')
// 把Http挂载到Vue实例上
app.config.globalProperties.$http = http
