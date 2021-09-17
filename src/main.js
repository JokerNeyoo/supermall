import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

createApp().config.productionTip = false
const app = createApp(App)
app.use(router)
app.mount('#app')
